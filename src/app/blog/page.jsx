import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH API

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {cache: "no-store"});

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

const BlogPage = async () => {
  const posts = await getData();
  //const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
