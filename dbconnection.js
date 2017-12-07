var mysql = require('mysql');  
var connection = mysql.createPool({  
host: 'magnesium',  
user: 'a16mkovanen',  
password: 'markus',  
database: 'ska16mkovanen'  
});  
module.exports = connection;