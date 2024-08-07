// "use client";

import Image from "next/image";
import styles from "./contact.module.css";

//import dynamic from "next/dynamic";
//const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {ssr: false});



export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};


const ContactPage = () => {
  /*const a = Math.random();
  console.log(a); */

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          className={styles.img}
          fill
        />
      </div>

      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR>{a}</HydrationTestNoSSR> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
