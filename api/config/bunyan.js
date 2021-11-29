module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log('Bunyan config applied');
        return resolve(true);
    })
}
