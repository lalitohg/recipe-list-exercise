const path = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('../types');
const resolvers = require('../resolvers');

module.exports = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const schema = makeExecutableSchema({ typeDefs, resolvers });
            console.log('Graphql config applied');
            return resolve(schema);
            
        } catch (error) {
            reject(error);
        }
    })
}
