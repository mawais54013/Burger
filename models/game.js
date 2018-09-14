var orm = require("../config/orm.js");
// this entire area sets the factors for each function to use in the middleware of orm
var burger = {
    selectAll: function(cb)
    {
        // gets the info from the database and should return as callback
        orm.selectAll("burgers", function(res) {
            cb(res);
            });
    },

    insertOne: function(cols, vals, cb)
    {
        // this also uses the database and uses two factors as infomation to put into the database and return as callback
        orm.insertOne("burgers", cols, vals, function(res)
        {
            
            cb(res);
        });
    },
    updateOne: function(objCols, condition, cb)
    {
        // this is used to update a database entry 
        // ex: from good game to bad or likewise 
        orm.updateOne("burgers", objCols, condition, function(res)
        {
            cb(res);
        });
    }
};
module.exports = burger;