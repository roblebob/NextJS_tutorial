import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

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
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        height={50}
        width={50}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
