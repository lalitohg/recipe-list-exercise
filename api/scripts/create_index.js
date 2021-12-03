const environmentConf = require('../config/environment');
const elasticsearchConf = require('../config/elasticsearch');
const esClient = require('../db/clients/elasticsearch');

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
        let result = await client.indices.create({
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