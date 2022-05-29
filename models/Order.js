const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId:{type:String, required:true},
        dishes:[{
            dishId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
    ],
    status:{
        type:String,
        default:"The order is ordered.",
    },
    amount:{type:Number, required:true},
    },
    {timestamps:true}
)
module.exports = mongoose.model("Order", OrderSchema); 