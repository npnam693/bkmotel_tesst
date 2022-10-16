import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
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
 
const Room = mongoose.model('Room', roomSchema)

export default Room;