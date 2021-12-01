let esClient = null;

module.exports = {
    getClient: () => esClient,
    setClient: (client) => {
        esClient = client
    }
}