// Initializing express.
const express = require("express");
// Setting postRoute as express router.
const postRoute = express.Router();
// Importing post.js from database which is basically the post model (schema).
const Post = require("../database/post");

// Route in /postRoute to test the router.
postRoute.get("/test", (req, res) => {
  res.send("From Post Route!! ");
});

// To get all the posts from db.
postRoute.get("/", async (req, res) => {
  try {
    // Getting all the collection from the db using .find({}) and assign the whole data in post variable.
    let post = await Post.find({});
    // Consiling.log the post variable.
    console.log("posts from db===> ", post);
    // Sending the text below as response to the user (browser) with all data in post variable.
    res.send(`posts from db===> ${post}`);
  } catch (error) {
    // If there is any error from getting the data from db it will catch it here and send it to the user (browser).
    res.send(`errrrrrrror===>  ${error}`);
  }
});

// To send a post to database.
postRoute.post("/post", async (req, res) => {
  // We create and assign postTxt from req.body to our variable that has the same name which is postTxt.
  let { postTxt } = req.body;

  try {
    // Check will have the value of checking the postTxt in db using .findOne({}) function.
    let check = await Post.findOne({ postTxt });
    // Consoling.log check variable to see what .find({}) function has returned.
    console.log("CHECK===> ", check);
    // If check vaiable has a value that means we have it in the db, we send a response to the user saying the text below.
    if (check) return res.send("This post is exist!!");
    // Posted is haveing what Post.create returns, which is a function to create postTxt in our db.
    let posted = await Post.create({ postTxt });
    // Consoling.log posted variable to see what .create({}) function has returned.
    console.log("POSTED IN DB===> ", posted);
    // If posted vaiable has a value that means we have created it in the db, we send a response to the user saying the text below.
    if (posted) return res.send("Post created successfully ");
  } catch (error) {
    // If there is any error from getting the data from db it will catch it here and send it to the user (browser).
    throw error;
  }
  // res.send(`post text===> ${postTxt}`);
});

// This route should delete an element BUT IT'S NOT TESTED YET.
// postRoute.delete("/delete", async (req, res) => {
//   let { _id } = req.body;
//   console.log("postID===> ", _id);

//   try {
//     let deleted = await Post.findByIdAndDelete({ _id });
//     console.log("DELETED===> ", deleted);
//   } catch (error) {
//     throw error;
//   }
// });

// Exporting postRoute.
module.exports = postRoute;
