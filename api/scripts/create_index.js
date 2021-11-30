const environmentConf = require('../config/environment');
const elasticsearchConf = require('../config/elasticsearch');
const seedingData = require('../seeds/recipes.json');
const { keyword } = require('color-convert');

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
        let result = await esClient.indices.create({
            index: "recipes",
            include_type_name: false,
            wait_for_active_shards: "1",
            body: {
                mappings: {
                    properties: {
                        title: { type: "text" },
                        ingredients: { type: "keyword" }
                    }
                }
            }
        });
        if (result.statusCode === 200) {
            console.log('All done');
        } else {
            console.log('Something was wrong creating the index. See info below');
            console.log(result);
        }
    } catch (error) {
        console.error(error)
    }
}

main();