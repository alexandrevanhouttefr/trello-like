const env = process.env.NODE_ENV;

const dev = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'trello-like-server'
    }
};

const test = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'trello-like-server'
    }
};

const config = {
    dev,
    test
};

module.exports = config[env];