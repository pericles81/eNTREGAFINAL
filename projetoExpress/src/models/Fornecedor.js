import mongoose from "mongoose";

const FornecedorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj : {
        type : String,
        required : true
    }

    
})
export default mongoose.model('Forcenedor', FornecedorSchema)