const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    time_posted: {
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
