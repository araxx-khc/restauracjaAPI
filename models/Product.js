const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        dishId:{type:String, required:true},
        products:[{
            productId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
    ]
}
)
module.exports = mongoose.model("Product", ProductSchema); 