import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH API

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revaluate: 3600}});

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }

//   return response.json();
// };

const BlogPage = async () => {
  // const posts = await getData();
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
