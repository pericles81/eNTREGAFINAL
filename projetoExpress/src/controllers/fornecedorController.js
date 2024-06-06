import Fornecedor from '../models/Fornecedor.js'

async function getUsers1(req, res) {
    try {
        const USERS = await Fornecedor.find()
        return res.status(200).json(USERS)
    } catch (error) {

    }
}

async function createUsers1(req, res) {
    try {
        const USER = req.body
        const NEW_USER = await Fornecedor.create(USER)
        return res.status(201).json(NEW_USER)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser1(req, res) {
    try {
        const id = req.params.id
        await Fornecedor.findByIdAndDelete({ _id: id })
        return res.status(200).json({ res: 'user deleted' })
    } catch (error) {

    }
}
async function pegarPorId1(req, res) {
    try {
        const { _id } = req.params
        const user = await Fornecedor.findOne({ _id });
        res.json(user)
    } catch (error) {

    }
}

async function update1(req, res) {
    try {
        const { nome, cnpj} = req.body;
        let data = {};
        data = { nome, preco, tipo, imagem }
        user = await Fornecedor.findByIdAndUpdate({ _id }, data, { new: true })
        return res.status(200).json(user)
    } catch (error) {

    }
}



export { getUsers1, createUsers1, deleteUser1, pegarPorId1, update1 }