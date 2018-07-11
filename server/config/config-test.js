const config = {
    // for sequelize`
    sequelize: {
        dialect: 'mysql',
        database: 'mvnndata',
        username: 'root',
        password: '123456',
        host: 'localhost',
        port: 33306
    },
    // for redis
    redisCache: true,
    redis: {
        host: 'localhost',
        port: 16379,
        opts: {}
    },
    // for mongo
    mongoFlag: true,
    mongo: {
        connect: 'mongodb://127.0.0.1:27017/mvnn'
    },
    // for elasticsearch
    elasticsearchFlag: false,
    elasticsearch: {
        index: 'mvnn',
        host: 'localhost:9200',
        log: {
            type: 'file',
            level: 'error',
            path: '../log/elasticsearch.log'
        }
    },
    // for logger
    loggerConfig: {
        level: 'DEBUG',
        config: {
            "appenders": [{
                "type": "clustered",
                "appenders": [{
                        "type": "dateFile",
                        "filename": "../log/access.log",
                        "pattern": "-yyyy-MM-dd",
                        "category": "http"
                    },
                    {
                        "type": "dateFile",
                        "filename": "../log/app.log",
                        "pattern": "-yyyy-MM-dd",
                        "maxLogSize": 10485760,
                        "numBackups": 3
                    },
                    {
                        "type": "logLevelFilter",
                        "level": "ERROR",
                        "appenders": {
                            "type": "file",
                            "filename": "../log/errors.log"
                        }
                    }
                ]
            }]
        }
    },
    uploadOptions: {
        uploadDir: '../public/temp',
        maxFileSize: 2 * 1024 * 1024,
        keepExtensions: true
    },
    tempDir: '../public/temp',
    filesDir: '../public/files',
    tmpUrlBase: '/temp/',
    fileUrlBase: '/files/',
    // SECRET_KEY
    SECRET_KEY: 'zc7#_66#g%u2n$j_)j$-r(swt63d(2l%wc2y=wqt_m8kpy%04*',
    TOKEN_AGE: 43200000, // 12 * 60 * 60 * 10000
    MOBILE_TOKEN_AGE: 31536000000 // 365 * 24 * 60 * 60 * 1000
};

module.exports = config;
