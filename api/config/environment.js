module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log('Environment loaded');
        return resolve(true);
    });
}
