const { Client } = require('@elastic/elasticsearch');
let esclient = null;

// TODO - Implement authentication logic for conf

module.exports = {
    setup: () => {
        return new Promise((resolve, reject) => {
            try {
                const { ELASTIC_URL, ELASTIC_PORT } = process.env;
                let clientConf = {
                    node: `${ELASTIC_URL}:${ELASTIC_PORT}`
                };
                esclient = new Client(clientConf);
                console.log('ElasticSearch client connected');
                return resolve(true);
            } catch (error) {
                reject(error);
            }
        })
    },
    getClient: () => esclient
};
