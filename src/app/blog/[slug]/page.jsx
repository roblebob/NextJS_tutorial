import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH API
// const getData = async (slug) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   );

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }

//   return response.json();
// };



const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // const post = await getData(slug);
  const post = await getPost(slug);
 
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3721535/pexels-photo-3721535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/3721535/pexels-photo-3721535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={50}
            width={50}
          />

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>12.12.2021</span>
          </div>
        </div>

        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
