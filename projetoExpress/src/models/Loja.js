import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const LojaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required : true
    },    
    password : {
        type : String,
        required : true,
        select : false
    },    


    
})
LojaSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
export default mongoose.model('Loja', LojaSchema)