var config = {
    local: {
        mode: 'development',
        port: 7808,
        postgres :{
            host :'217.26.169.21',
            port :10000
        }
    },
    staging: {
        mode: 'staging',
        port: 8080,
        postgres :{
            host :'217.26.169.21',
            port :10000
        }
    },
    production: {
        mode: 'production',
        port: 80,
        postgres :{
            host :'217.26.169.21',
            port :10000
        }
    }
}
module.exports = function(mode) {
      return config[mode || process.argv[2] || 'local'] || config.local;
}
