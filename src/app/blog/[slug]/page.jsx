import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
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
        <h1 className={styles.title}>Title</h1>

        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/3721535/pexels-photo-3721535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>12.12.2021</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          accusantium in, perspiciatis provident deserunt animi, nemo tenetur
          amet accusamus vero reiciendis eius aperiam. Illum molestiae
          praesentium atque numquam odit officiis?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
