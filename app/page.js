import Image from "next/legacy/image";
import styles from "./page.module.scss";
import MapGoogle from "./components/GoogleMap";
import { Card } from "./components/Card";
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
        <section>
          <Image
            className={styles.image}
            src="/header.jpg"
            objectFit="contain"
            layout="fill"
          />
        </section>
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.contact}>
            <h4 className="h4bigger">
              {" "}
              <span>
                <BsFillTelephoneFill color="#003770" size={25} />
              </span>{" "}
              <a href="tel:7122997004">(712) 299-7004</a>
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
              <a href="tel:7122997004">(712) 299-7004</a>
            </h2>
            <h1>services</h1>
            <div className={styles.servicesContainer}>
              <Card
                color="blue"
                title="Residential"
                imageSrc="/residential.jpg"
              >
                <p>
                  At Cruz Electric, we specialize in providing exceptional
                  residential electrical repair services, ensuring that your
                  home remains a safe, functional, and comfortable space for you
                  and your loved ones. Understanding the critical importance of
                  a well-maintained electrical system, we dedicate ourselves to
                  delivering solutions that address your specific needs with
                  precision and care.
                </p>
              </Card>
              <Card
                color="yellow"
                title="Commercial"
                imageSrc="/commercial.jpg"
              >
                <p>
                  Cruz Electric is your trusted partner for comprehensive
                  commercial electrical repair services, dedicated to ensuring
                  your business operations run smoothly and efficiently. We
                  recognize the unique challenges and high standards required
                  for commercial electrical systems, which is why we offer
                  specialized repair solutions tailored to meet the demands of
                  businesses of all sizes.
                </p>
              </Card>
              <Card
                title="agricultural"
                color="darkBlue"
                imageSrc="/agricultural.jpg"
              >
                <p>
                  In the dynamic and demanding world of agriculture, Cruz
                  Electric stands out as your dependable source for specialized
                  agricultural electrical repair services. We understand the
                  critical role that reliable electrical systems play in the
                  productivity and efficiency of agricultural operations, from
                  small family farms to large agribusinesses. Our commitment is
                  to ensure that your agricultural endeavors flourish through
                  uninterrupted and safe electrical performance.
                </p>
              </Card>

              <Card
                title="communications"
                color="red"
                imageSrc="/communications.jpg"
              >
                <p>
                  Cruz Electric excels in providing cutting-edge communications
                  and low-voltage solutions, including the installation and
                  repair of security cameras and other essential systems. Our
                  certified electricians are experts in the latest technologies,
                  ensuring your property is equipped with reliable and efficient
                  communication networks and security measures. Whether
                  upgrading existing systems or installing new setups, we
                  prioritize safety, quality, and innovation.
                </p>
              </Card>

              <Card
                title="generator install"
                color="blueGrey"
                imageSrc="/generator.jpg"
              >
                <p>
                  Cruz Electric is proud to specialize in the installation of
                  Generac generators, offering top-tier solutions for
                  uninterrupted power supply to homes and businesses alike. Our
                  skilled electricians are trained and certified to install
                  Generac generators, ensuring your installation is performed to
                  the highest standards of safety and efficiency. We understand
                  the importance of reliable power, which is why we offer
                  customized solutions to match your specific energy needs,
                  providing peace of mind during power outages.
                </p>
              </Card>
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
              Cruz electric installed a stand-by generator for me. They had the
              estimate and installation done in a very timely manner. He also
              helped me download the app on my phone. He did a thorough
              explanation of how the generator works and went through the whole
              process of what happens when electricity goes out and comes back
              on again. Very satisfied with the work and follow up maintenance
              schedule and that the work area left clean. Good Job. -Laurie
              Rasmussen
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
              Isaac Cruz and his crew with Cruz Electric installed electricity
              to a building in our backyard. They were quick to respond to our
              inquiry with an estimate, scheduled the work when it was
              convenient with our travel plans and their schedule. They called
              Iowa One Call for utility locations. Cruz Electric came when they
              said they would come!! Everyone on the crew was friendly, kind,
              efficient and completed the job with superior work! We highly
              recommend Isaac Cruz and Cruz Electric for any of your electrical
              needs. We will sure be calling them again if needed! <br></br>
              -Bud and LuAnn
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
              Cruz electrical was very professional! They were easy to work with
              and I felt confident they could handle anything I threw at them.
              Would definitely call them again. -Erin Smith
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
              I am very pleased with the work that Cruz Electric did for me
              installing my Generac generator. Though I obviously hope I don’t
              need to use it I am confident it will take care of all my
              electrical needs if I do
              <br></br>
              -David Orthman
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
              Wonderful experience! They got an old house all fixed up. Fixed
              outside lighting that hadn't worked in over a decade. Couldn't be
              happier! -Cat R
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
        <h4 className="darkBlueTxt h4biggest">
          Ask About Our Apprenticeship Program
        </h4>
      </section>
    </>
  );
}
