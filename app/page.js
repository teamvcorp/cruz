import Image from "next/image";
import styles from "./page.module.scss";
import MapGoogle from "./components/GoogleMap";
import Script from "next/script";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillBuildingsFill,
  BsFillStarFill,  
} from "react-icons/bs";
import { BiCameraHome } from "react-icons/bi";
import { GiPowerGenerator } from "react-icons/gi";
import { MdLocationOn, MdHome, MdPhonelink } from "react-icons/md";
import { PiPlantBold } from "react-icons/pi";
// import BingMap from "./components/BingMap";

export default function Home() {
  return (
    <>
      <header className={styles.headerImage}>
        <Image
          className={styles.image}
          src="/headerwhite.png"
          objectFit="contain"
          layout="fill"
        />
      </header>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.contact}>
            {/* <p className="temp">under construction</p> */}
            <h4 className="h4bigger">
              {" "}
              <span>
                <BsFillTelephoneFill color="#003770" size={25} />
              </span>{" "}
              (712) 732-0000{" "}
            </h4>
            <h4 className="h4bigger">
              {" "}
              <span>
                <BsFillTelephoneFill color="#003770" size={25} />
              </span>{" "}
              (712) 299-7004{" "}
            </h4>
            <h4 className="h4bigger">
              {" "}
              <span>
                <BsFillEnvelopeFill size={20} />
              </span>{" "}
              CruzElectric712@gmail.com{" "}
            </h4>
           
            <div>
             
              <MapGoogle />
             
              <div>
                <h4 className="h4bigger">
                  {" "}
                  <span>
                    <MdLocationOn />
                  </span>{" "}
                  222 West Milwaukee Ave. <br></br>&nbsp; &nbsp;Storm Lake, IA
                  50588{" "}
                </h4>

                <h3 className="darkBlueTxt">Hours</h3>
                <p className="darkBlueTxt"> Monday-Friday 9:00am-5:00pm</p>
              </div>

              {/* <BingMap /> */}
            </div>
          </div>
          <div className={styles.emergency}>
            <h2>24hr Emergency Services Available!</h2>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightTop}>
           
          <h2 className="hiddenNumber">
              {" "}
              {/* <span>
                <BsFillTelephoneFill color="#003770" size={25} />
              </span>{" "} */}
              (712) 299-7004{" "}
            </h2>
              <h1>services</h1>
            <div className={styles.servicesContainer}>
              <h3 className="darkBlue">
                <span>
                  <MdHome />
                </span>{" "}
                residential
              </h3>
              <h3 className="yellow">
                <span>
                  <BsFillBuildingsFill />
                </span>{" "}
                commercial
              </h3>
              <h3 className="blue">
                <span>
                  <PiPlantBold />
                </span>{" "}
                agricultural
              </h3>
              <h3 className="red">
                <span>
                  <MdPhonelink />
                </span>{" "}
                communications
              </h3>
              <h3 className="blueGrey">
                <span>
                  <GiPowerGenerator />
                </span>{" "}
                generator install
              </h3>
              <h3 className="black">
                <span>
                  <BiCameraHome />
                </span>{" "}
                security cameras
              </h3>
            </div>
              <h1>about us</h1>
            <div className={styles.aboutContainer}>
              <p>
                {" "}
                Cruz Electric opened in 2020 in Cherokee Iowa. We are expanding
                to our new location in Storm Lake Iowa and all surrounding
                areas. We are here to serve the customer and provide excellent
                service. Cruz Electric will cruise right through it!{" "}
              </p>
              <button> request a quote </button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.testimonialsContainer}>
          <div className="white">
            <p className="darkBlueTxt">
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>
              {" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
            </span>
          </div>

          <div className="white">
            <p className="darkBlueTxt">
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>
              {" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
            </span>
          </div>
          <div className="white">
            <p className="darkBlueTxt">
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>
              {" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
            </span>
          </div>
          <div className="white">
            <p className="darkBlueTxt">
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>
              {" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
            </span>
          </div>
          <div className="white">
            <p className="darkBlueTxt">
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>
              {" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
              <BsFillStarFill color="#ffcd02" size={15} />{" "}
            </span>
          </div>
        </div>
      </footer>
        <section className={styles.apprentice}>
          <h4 className="darkBlueTxt h4biggest">Ask About Our Apprenticeship Program</h4>
        </section>
    </>
  );
}
