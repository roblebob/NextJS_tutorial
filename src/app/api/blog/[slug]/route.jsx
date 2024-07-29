import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    return NextResponse.status(500).send(
      "Something went wrong: " + err.message
    );
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;

  try {
    connectToDb();
    await Post.findOneAndDelete({ slug });
    return NextResponse.status(200).send("Post successfully deleted");
  } catch (err) {
    console.error(err);
    return NextResponse.status(500).send(
      "Something went wrong: " + err.message
    );
  }
};
