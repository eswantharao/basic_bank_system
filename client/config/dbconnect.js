const mongoose = require("mongoose")


//conect

const dbconnect = async () =>{



    try {
        await mongoose.connect('"mongodb+srv://Eswantharao:eswanth%402003@mongodb-demo.jklyi9z.mongodb.net/?retryWrites=true&w=majority"');

        console.log("db connected successfully");

    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }
}