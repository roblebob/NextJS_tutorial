"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Post added successfully");
    revalidatePath("/blog");
} catch (err) {
    console.error(err);
    return { error: "Something went wrong: " + err.message };
  }
};

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
      await Post.findByIdAndDelete(id);
      console.log("Post successfully deleted");
      revalidatePath("/blog");
    } catch (err) {
      console.error(err);
      return { error: "Something went wrong: " + err.message };
    }
  };