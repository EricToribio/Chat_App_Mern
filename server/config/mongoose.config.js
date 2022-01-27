const mongoose = require("mongoose");
const db_name = "ChatApp";

module.exports = ()=>{
    mongoose.connect(`mongodb://localhost/${db_name}`, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } )
        .then(()=> console.log("connected to database", db_name))
        .catch((err)=>console.log("No connection", err))

}