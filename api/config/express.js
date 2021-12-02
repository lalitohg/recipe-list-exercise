const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const { graphqlHTTP } = require("express-graphql");

const graphqlEndpointSetup = (app, schema) => {
    const { GRAPHQL_ENDPOINT, NODE_ENV } = process.env;
    app.use(
        GRAPHQL_ENDPOINT,
        graphqlHTTP({
            schema,
            graphiql: NODE_ENV === 'dev'
        })
    );
}

const applySecurityMiddleware = (app) => {
    const { NODE_ENV } = process.env;
    const isProd = NODE_ENV === 'production';
    isProd && app.use(helmet()); // this would disabled graphiql service interaction in development
    // TODO - implement session hardening
}

module.exports = (schema) => {
    return new Promise((resolve, reject) => {
        try {
            const { API_PORT } = process.env;
            let app = express();

            app.use(cors());            
            applySecurityMiddleware(app);
            graphqlEndpointSetup(app, schema);
            
            app.listen(API_PORT)
            .on('listening', () => {
                console.log(`Listening on port ${API_PORT}`);
                resolve(true)})
            .on('error', reject)
        } catch (error) {
            reject(error)
        }
    })
}
