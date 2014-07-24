describe("Configuration Setup", function(){
    it("shold load local configuration", function(next){
        var config = require('../config/locals')();
        expect(config.mode).toBe('development');
        next();
    });

    it("shold load local configuration", function(next){
        var config = require('../config/locals')('staging');
        expect(config.mode).toBe('staging');
        next();
    });

    it("shold load local configuration", function(next){
        var config = require('../config/locals')('production');
        expect(config.mode).toBe('production');
        next();
    });


});
