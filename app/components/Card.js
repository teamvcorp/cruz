import Image from "next/image";
import { FaHome } from "react-icons/fa";
import styles from "./component.module.scss";

export const Card = ({ color, children, title, imageSrc }) => {
  return (
    <div className={styles.cardContainer} style={{border: `1px solid ${color}`}}>
      <section className={`${styles.cardHeader} ${styles[color]} `}>
        <span>
          {" "}
          {/* <FaHome color="white" size={30} /> */}
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
    </div>
  );
};
