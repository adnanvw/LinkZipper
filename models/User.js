import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{type: mongoose.Schema.Types.ObjectId, ref: 'Link'}]
})

export default mongoose.model('User', UserSchema)