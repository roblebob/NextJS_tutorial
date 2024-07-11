import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// FETCH DATA WITH API

// const getPostUser = async (userId) => { 
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"}
//   );

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }

//   return response.json();
// };

const PostUser = async ({ userId }) => {
//   const postUser = await getPostUser(userId);
    const postUser = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{postUser.name}</span>
    </div>
  );
};

export default PostUser;
