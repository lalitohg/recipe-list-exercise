const dotenv = require('dotenv');

module.exports = () => {
    return new Promise((resolve, reject) => {
        try {
            dotenv.config();
            console.log('Environment vars loaded');
            return resolve();
        } catch (error) {
            reject(error)
        }
    });
}
