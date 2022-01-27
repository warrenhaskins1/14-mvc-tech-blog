const User = require("../models/User");
const Comment = require("../models/Comment");
const Post = require("../models/Post");

//Associations
User.hasMany(Post, {
    foreignKey: "user_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports ={User, Comment, Post}

