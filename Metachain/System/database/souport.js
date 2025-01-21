import mongoose from "mongoose";

const souport = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    messege: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
})

export default mongoose.model("support", souport)
