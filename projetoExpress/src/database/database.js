import  {mongoose, connect } from 'mongoose'

export default async function connectDatabase() {
    await mongoose.connect(
        'mongodb+srv://merrd78:BfrrmSNPFftJh5lH@cluster0.tn55sdm.mongodb.net/Cluster0?retryWrites=true&w=majority'
    )    
}
