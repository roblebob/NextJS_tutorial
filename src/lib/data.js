// TEMPORARY DATA
// const user = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Jane"},
// ];
// const posts = [
//     {id: 1, title: "Post 1", body: "Body 1", userId: 1},
//     {id: 2, title: "Post 2", body: "Body 2", userId: 2},
//     {id: 3, title: "Post 3", body: "Body 3", userId: 1},
//     {id: 4, title: "Post 4", body: "Body 4", userId: 2},
// ];

import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as no_store} from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  no_store();
  try {
    connectToDb();
    const post = await Post.findOne({ slug }); // {slug: slug}
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts" + error);
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
