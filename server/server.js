const express = require("express")
const mangoose = require("mongoose")

const cors = require('cors')


const UserModel = require("./models/Users")
const TransactionModel = require('./models/Transaction')

require("./db/conn")

const app = express()

app.use(cors())

app.use(express.json());

app.post('/transfer', async (req, res) => {
    let body = req.body;
    let from = await UserModel.findOne({name: body.from});
    let to = await UserModel.findOne({name: body.to});
    if (from.accountbalance < body.amount) {
        return res.json({
            message: "Insufficient balance"
        })
    }

    from.accountbalance = +from.accountbalance - +body.amount;
    to.accountbalance = +to.accountbalance + +body.amount;

    let trans = new TransactionModel({
        from : from,
        to: to,
        amount: body.amount
    });

    await trans.save();

    from.save();
    to.save();

    return res.json({
        message: "Sucess"
    })
})



//api for fetch

app.get('/getusers',(req,res)=>{
    UserModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/history',(req,res)=>{
    TransactionModel.find()
    .then(trans=>res.json(trans))
    .catch(err=>res.json(err))
})

app.get('/', (req, res) => {
    res.send("HEllo")
})





app.listen(9000,()=>{console.log(`server is running on 9000`)})




