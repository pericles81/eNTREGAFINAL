import  {mongoose, connect } from 'mongoose'

export default async function connectDatabase() {
    await mongoose.connect(
        process.env.MONGODB_URI
    )    
}
