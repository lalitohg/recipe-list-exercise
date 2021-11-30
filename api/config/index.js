const environmentConf = require('./environment');
const bunyanConf = require('./bunyan');
const elasticsearchConf = require('./elasticsearch');
const graphqlConf = require('./graphql');
const expressConf = require('./express');

module.exports = async () => {
    try {
        await environmentConf();
        await bunyanConf();
        await elasticsearchConf.setup();
        await graphqlConf();
        await expressConf();
    } catch(e) {
        console.log('Errors during initial setup: ', e);
    }
}
