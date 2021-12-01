const environmentConf = require('./environment');
const bunyanConf = require('./bunyan');
const elasticsearchConf = require('./elasticsearch');
const graphqlConf = require('./graphql');
const expressConf = require('./express');

module.exports = async () => {
    try {
        await environmentConf();
        await bunyanConf();
        await elasticsearchConf();
        const schema = await graphqlConf();
        await expressConf(schema);
    } catch(error) {
        console.error('Errors during initial setup: ', error);
        process.exit(1);
    }
}
