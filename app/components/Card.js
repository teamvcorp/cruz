import Image from "next/image";
import { FaHome } from "react-icons/fa";
import styles from "./component.module.scss";
import Link from "next/link";
import { IoMdImages } from "react-icons/io";

export const Card = ({ color, children, title, imageSrc, gallaryPage }) => {
  return (
    <div className={styles.cardContainer}>
      <section className={`${styles.cardHeader} ${styles[color]} `}>
        <span>
          {" "}
          <h2 className={styles.h2Card}>{title}</h2>
        </span>
      </section>

      <Image
        src={imageSrc}
        objectFit="cover"
        width={400}
        height={250}
        alt="image of house"
      /> 

      {children}
      
      <Link className={styles.gallery} href={`/gallary/${gallaryPage}`}><IoMdImages size={30}/>Gallery</Link>
    </div>
  );
};
