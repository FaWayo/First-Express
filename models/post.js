const mongoose = require ('mongoose')
// const User = require('./user')


const postSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    author:{
      type: String,
      required: true  
    },

    title:{
        type: String,
        required: true,
    },

    content:{
        type: String,
        required: true

    },

    dateCreated: {
        type: Date,
        default: Date.now
    },

    upVotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },

    downVotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
})

module.exports = mongoose.model("Post", postSchema);