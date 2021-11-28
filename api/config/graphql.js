module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log('graphql config applied');
        return resolve(true);
    })
}