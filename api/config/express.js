module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log('express config applied');
        return resolve(true);
    })
}
