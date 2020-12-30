
const mongoose = require("mongoose");

// Creating postSchema.
const postSchema = mongoose.Schema({
  // In the post schema we only have postTxt which is the post itself.
 postTxt: {
    type: String,
    required: true,
    unique: true,
  },
});

// Exporting post schema as a model that has a name as Post.
module.exports = mongoose.model("Post", postSchema);
