import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    title: String,
    creator: String,
    image: [String],
    
    ratingCount: Number,
    ratingPoint: Float32Array,
    Area: Number,
    description: String,

    createAt: {
        type: Date,
        default: new Date(),
    }
})
 
const User = mongoose.model('User', roomSchema)

export default User;