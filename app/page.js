import Image from "next/image";
import styles from "./page.module.css";
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
      <header className={styles.headerBody}>
          
        <div className={styles.headerLeft}>
          <span>
            <Image src="/cruz.svg"  layout='fill' quality="80" />
          </span>
          <h2 className="whiteTxt">Licensed & Insured</h2>
        </div>


        <div className={styles.headerRight}>
          <span>
            <Image src="/electric.svg" layout='fill' quality="80" />
          </span>
          <h2 className="redTxt">Serving Storm Lake and Surrounding Areas</h2>
        </div>

      </header>

    <main className={styles.main}>
      <div className={styles.left}>
      

        <div className={styles.contact}>
          {/* <p className="temp">under construction</p> */}
          <h4 className="h4bigger">
            {" "}
            <span>
              <BsFillTelephoneFill color="white" size={25} />
            </span>{" "}
            (712) 732-0000{" "}
          </h4>
          <h4 className="h4bigger">
            {" "}
            <span>
              <BsFillTelephoneFill color="white" size={25} />
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
          <h4 className="h4bigger">
            {" "}
            <span>
              <MdLocationOn />
            </span>{" "}
            222 West Milwaukee Ave. <br></br>&nbsp; &nbsp;Storm Lake, IA 50588{" "}
          </h4>

          <div>
            <iframe
              width="400"
              height="250"
              frameborder="0"
              src="https://www.bing.com/maps/embed?h=300&w=400&cp=42.647167~-92.40875244140625&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
              scrolling="no"
            ></iframe>
            <div>
              <h4>Hours</h4>
              <p className="whiteTxt"> Monday-Friday 9:00am-5:00pm</p>
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
          <div className={styles.aboutContainer}>
            <h1>about us</h1>
            <p>
              {" "}
              Cruz Electric opened in 2020 in Cherokee Iowa. We are expanding to
              our new location in Storm Lake Iowa and all surrounding areas. We
              are here to serve the customer and provide excellent service. Cruz
              Electric will cruise right through it!{" "}
            </p>
            <button> request a quote </button>
          </div>

          <div className={styles.servicesContainer}>
            <h1>services</h1>
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
        </div>

        <div className={styles.testimonialsContainer}>
          <section>
          <h3 className="darkBlueTxt">Testimonials</h3>
  

            <div className="white">
              <p className="darkBlueTxt">
                Cruz fixed my electrical stuff quickly and efficiently!{" "}
                <br></br>
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
                Cruz fixed my electrical stuff quickly and efficiently!{" "}
                <br></br>
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
                Cruz fixed my electrical stuff quickly and efficiently!{" "}
                <br></br>
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
                Cruz fixed my electrical stuff quickly and efficiently!{" "}
                <br></br>
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
          </section>
     
          <h4 className="darkBlueTxt">Ask About Our Apprenticeship Program</h4>
        </div>
      </div>
    </main>
    </>
  );
}
