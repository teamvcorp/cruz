import Image from "next/image";
import styles from "./page.module.css";
import {BsFillTelephoneFill, BsFillEnvelopeFill, BsFillBuildingsFill,} from 'react-icons/bs';
import {BiCameraHome} from 'react-icons/bi';
import {GiPowerGenerator} from 'react-icons/gi';
import {MdLocationOn, MdHome, MdPhonelink} from 'react-icons/md';
import {PiPlantBold} from 'react-icons/Pi';
// import BingMap from "./components/BingMap";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        {/* <h1>Cruz</h1> */}

        <div className={styles.contact}>
          <p>**under construction</p>
          <h4>
            {" "}
            <span><BsFillTelephoneFill color='white' size={25}/></span> (712) 732-0000{" "}
          </h4>
          <h4>
            {" "}
            <span><BsFillTelephoneFill color='white' size={25}/></span> (712) 299-7004{" "}
          </h4>
          <h4>
            {" "}
            <span><BsFillEnvelopeFill size={25}/></span> CruzElectric712@gmail.com{" "}
          </h4>
          <h4>
            {" "}
            <span><MdLocationOn /></span> 222 West Milwaukee Ave. <br></br> Storm Lake, IA
            50588{" "}
          </h4>

          <div>
            <iframe
              width="500"
              height="400"
              frameborder="0"
              src="https://www.bing.com/maps/embed?h=300&w=400&cp=42.647167~-92.40875244140625&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
              scrolling="no"
            ></iframe>
            <div>
              <h4>Hours</h4>
              <p> Monday-Friday 9:00am-5:00pm</p>
              <div>
                <h2>24hr Emergency Services Available!</h2>
              </div>
            </div>
            {/* <BingMap /> */}
          </div>
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
              <span><MdHome/></span> residential
            </h3>
            <h3 className="yellow">
              <span><BsFillBuildingsFill/></span> commercial
            </h3>
            <h3 className="blue">
              <span><PiPlantBold/></span> agricultural
            </h3>
            <h3 className="red">
              <span><MdPhonelink/></span> communications
            </h3>
            <h3 className="blueGrey">
              <span><GiPowerGenerator/></span> generator install
            </h3>
            <h3 className="black">
              <span><BiCameraHome/></span> security cameras
            </h3>
          </div>
        </div>

        <div>
          <h3>Testimonials</h3>

          <div>
            <p>
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>stars</span>
          </div>

          <div>
            <p>
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>stars</span>
          </div>

          <div>
            <p>
              Cruz fixed my electrical stuff quickly and efficiently! <br></br>
              -Bob
            </p>
            <span>stars</span>
          </div>
          <h4>Ask About Our Apprenticeship Program</h4>
        </div>
      </div>
    </main>
  );
}
