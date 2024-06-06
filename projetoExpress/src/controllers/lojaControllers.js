import Loja from "../models/Loja.js"

async function getUsers2(req, res) {
    try {
        const USERS = await Loja.find()
        return res.status(200).json(USERS)
    } catch (error) {

    }
}

async function createUsers2(req, res) {
    try {
        const USER = req.body
        const NEW_USER = await Loja.create(USER)
        return res.status(201).json(NEW_USER)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser2(req, res) {
    try {
        const id = req.params.id
        await Loja.findByIdAndDelete({ _id: id })
        return res.status(200).json({ res: 'user deleted' })
    } catch (error) {

    }
}
async function pegarPorId2(req, res) {
    try {
        const { _id } = req.params
        const user = await Loja.findOne({ _id });
        res.json(user)
    } catch (error) {

    }
}

async function update2(req, res) {
    try {
        const { nome, cnpj } = req.body;
        let data = {};
        data = { nome, cnpj }
        user = await Loja.findByIdAndUpdate({ _id }, data, { new: true })
        return res.status(200).json(user)
    } catch (error) {

    }
}



export { getUsers2, createUsers2, deleteUser2, pegarPorId2, update2 }