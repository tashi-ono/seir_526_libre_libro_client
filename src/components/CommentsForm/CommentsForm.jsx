import React, { useState } from "react";
import "./CommentsForm.scss";
import axios from "axios";
// DONT FORGET TO ADD VALUE!

const CommentsForm = ({ library, getAllLibraries }) => {
  // console.log("comment form props", library);
  const [commentInput, setCommentInput] = useState({
    username: "",
    comment: "",
  });
  const handleCommentChange = (event) => {
    // console.log("comment changes", event.target.value);
    setCommentInput({
      ...commentInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // console.log("handle comment submit", event.target);
    addComment(commentInput);
    setCommentInput({ username: "", comment: "" });
  };

  const addComment = async (commentObj) => {
    console.log("commentObj", commentObj);
    try {
      await axios.post(
        `http://localhost:3000/libraries/${library.id}/comments`,
        commentObj
      );
      getAllLibraries();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleCommentSubmit}>
      <label htmlFor="username">Add username:</label>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleCommentChange}
        value={commentInput.username}
        required
      />
      <br />

      <label htmlFor="comment"></label>
      {/* 
      <input
        type="text"
        name="comment"
        placeholder="add comment"
        onChange={handleCommentChange}
        value={commentInput.comment}
      /> */}

      <textarea
        name="comment"
        type="text"
        placeholder="Enter comment here..."
        rows="10"
        cols="50"
        onChange={handleCommentChange}
        value={commentInput.comment}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentsForm;