const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16387.c245.us-east-1-3.ec2.cloud.redislabs.com',
        port: 16387
    }
});

module.exports = redisClient;
