module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log('elasticsearch config applied');
        return resolve(true);
    })
}
