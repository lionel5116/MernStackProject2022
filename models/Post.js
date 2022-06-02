const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref:'user'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId, 
                ref:'user'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId, 
                ref:'user'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            avatar: {
                type: String,
            },
            Date: {
                type: Date,
                default:Date.now
            }

        }
    ],
    Date: {
        type: Date,
        default:Date.now
    },
})

module.exports = Post = mongoose.model('post',PostSchema)