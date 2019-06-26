
const environments = {
    development: {
        apiUrl: 'http://localhost:9020/api/v1',
    },
    production: {
        apiUrl: 'http://www.site.com/api/v1',
    }
};

console.log('Configuration: process.env.NODE_ENV', process.env.NODE_ENV);

const config = environments[process.env.NODE_ENV];

export default config;
