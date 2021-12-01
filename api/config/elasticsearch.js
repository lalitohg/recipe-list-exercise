const { Client } = require('@elastic/elasticsearch');
const esClient = require('../db/clients/elasticsearch');

// TODO - Implement authentication logic for conf

module.exports = () => {
    return new Promise((resolve, reject) => {
        try {
            const { ELASTIC_URL, ELASTIC_PORT } = process.env;
            let clientConf = {
                node: `${ELASTIC_URL}:${ELASTIC_PORT}`
            };
            esClient.setClient(new Client(clientConf));
            console.log('ElasticSearch client connected');
            return resolve(true);
        } catch (error) {
            reject(error);
        }
    })
};
