var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
// this is used to turn to SQL 
  function objToSQL(ob)
  {
      var arr = [];

      for(var key in ob)
      {
          var value = ob[key];

          if(Object.hasOwnProperty.call(ob, key))
          {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
              }
              arr.push(key + "=" + value);  
          }
      }
      return arr.toString();
  }

  var orm = {
    // this selects from the database and returns all the values 
      selectAll: function(tableInput, cb)
      {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result)
        {
            if(err)
            {
                throw err;
            }
            cb(result);
        });
      },
      // this inserts into a database with values as a new entry
      insertOne: function(table, cols, vals, cb)
      {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString + "=================");

        connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
      },
      // this updates the database from the id of the game and changes the condition which is in the games.js
      updateOne: function(table, objCols, condition, cb)
      {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSQL(objCols);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
      }
 
  };
  module.exports = orm;