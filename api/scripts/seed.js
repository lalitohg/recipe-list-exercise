const crypto = require('crypto');
const environmentConf = require('../config/environment');
const elasticsearchConf = require('../config/elasticsearch');
const esClient = require('../db/clients/elasticsearch');
const seedingData = require('../seeds/recipes.json');

const setup = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await environmentConf();
            await elasticsearchConf();
            return resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const main = async () => {
    try {
        await setup();
        const client = esClient.getClient();
        let result = await Promise.all(
            seedingData.map(({ title, ingredients }) => client.create({
                id: crypto.randomUUID({ disableEntropyCache: false }),
                index: "recipes",
                wait_for_active_shards: "1",
                refresh: 'true',
                body: {
                    title,
                    ingredients
                }
            }))
        );
        console.log(`${result.length} new documents were created`);
    } catch (error) {
        console.error(error)
    }
}

main();