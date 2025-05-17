let mysql=require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",       
    password: "root",  
    database: "julyjava",
    port:3000          
});



conn.connect((err)=>{
    if(err){
        console.log("database connection failed",err);
    }
    else
    {
        console.log("Database is connected");
    }

});

module.exports =conn;