const crypto = require('crypto');
const environmentConf = require('../config/environment');
const elasticsearchConf = require('../config/elasticsearch');
const seedingData = require('../seeds/recipes.json');
const { result } = require('lodash');

let esClient = null;

const setup = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await environmentConf();
            await elasticsearchConf.setup();
            return resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const main = async () => {
    try {
        await setup();
        esClient = elasticsearchConf.getClient();
        let result = await Promise.all(
            seedingData.map(({ title, ingredients }) => esClient.create({
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
    } catch (error) {
        console.error(error)
    }

    console.log(`${result.length} new documents were created`);
}

main();