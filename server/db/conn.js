const mongoose = require('mongoose');

const url="mongodb+srv://Eswantharao:eswanth%402003@mongodb-demo.jklyi9z.mongodb.net/bank?retryWrites=true&w=majority";

//create new client

// const client = new MongoClient(url)

mongoose.connect(url);



// const dbconnect= async ()=>{
//     try {
//         await client.connect()
//         console.log("dbconnected succesfully");

// //create a new db

// const db=client.db("bank");

// //create a collection in a database

// const customers=db.collection("customers")


// // create a document in the collection

// // const student1=await customers.insertOne({
// //     "name":"krithi",
// //     "age":18
// // })


// // view the all data

// const allcustomers= await customers.find().toArray()



// var allCustomerName = allcustomers.map(obj=>obj.name);
// console.log(allCustomerName);





// // console.log(allstudents);



    
//     }catch (error) {
//       console.log(error);
//         }
// }

// dbconnect()





