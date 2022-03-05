import profileReducer, { deletePost } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
};

it("after deleting length of messages should be decrement ", () => {
  //1. test data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  //3.expectation -ожидание
  expect(newState.posts.length).toBe(3);
});
