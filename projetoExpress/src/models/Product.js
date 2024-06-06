import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    descricao :{
        type : String,
        require : true
    }

})
export default mongoose.model('Product', productSchema)