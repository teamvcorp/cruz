import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./page.module.scss";
import MapGoogle from "./components/GoogleMap";
import { Card } from "./components/Card";
import { BsFillStarFill, BsFillPeopleFill } from "react-icons/bs";
import { TbMessageStar } from "react-icons/tb";
import { TfiPencilAlt } from "react-icons/tfi";
import { BiCameraHome } from "react-icons/bi";
import { GiPowerGenerator } from "react-icons/gi";
import { MdLocationOn, MdHome, MdPhonelink, MdMargin } from "react-icons/md";
import { PiPlantBold } from "react-icons/pi";
// import BingMap from "./components/BingMap";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="whitebox"></div>

        <div className={styles.servicesContainer}>
          <div className={styles.heroContainer}>
            <div className={styles.heroBanner}>
              <p>Licensed & Insured</p>
              <p> Serving Storm Lake & Surrounding Area</p>
            </div>
            <div className={styles.heroImg}>
              <Image
                className="heroImage"
                src="/hero.jpg"
                width="500"
                height="350"
              />
              <p>Empowering Your Space with Expert Electrical Solutions</p>
            </div>
            <Link
              className={styles.quoteBtn}
              href="mailto:cruzelectric712@@gmail.com?
          &subject=Please reach out to me for a quote"
            >
              <TfiPencilAlt size={25} />
              Request A Quote
            </Link>
          </div>
          <Card
            color="blue"
            title="Residential"
            imageSrc="/residential.jpg"
            gallaryPage="residential"
          >
            <p>
              At Cruz Electric, we specialize in providing exceptional
              residential electrical repair services, ensuring that your home
              remains a safe, functional, and comfortable space for you and your
              loved ones. Understanding the critical importance of a
              well-maintained electrical system, we dedicate ourselves to
              delivering solutions that address your specific needs with
              precision and care.
            </p>
          </Card>
          <Card
            color="yellow"
            title="Commercial"
            imageSrc="/commercial.jpg"
            gallaryPage="commercial"
          >
            <p>
              Cruz Electric is your trusted partner for comprehensive commercial
              electrical repair services, dedicated to ensuring your business
              operations run smoothly and efficiently. We recognize the unique
              challenges and high standards required for commercial electrical
              systems, which is why we offer specialized repair solutions
              tailored to meet the demands of businesses of all sizes.
            </p>
          </Card>
          <Card
            title="agricultural"
            color="darkBlue"
            imageSrc="/agricultural.jpg"
            gallaryPage="agricultural"
          >
            <p>
              In the dynamic and demanding world of agriculture, Cruz Electric
              stands out as your dependable source for specialized agricultural
              electrical repair services. We understand the critical role that
              reliable electrical systems play in the productivity and
              efficiency of agricultural operations, from small family farms to
              large agribusinesses. Our commitment is to ensure that your
              agricultural endeavors flourish through uninterrupted and safe
              electrical performance.
            </p>
          </Card>

          <Card
            title="communications"
            color="red"
            imageSrc="/communications.jpg"
            gallaryPage="communications"
          >
            <p>
              Cruz Electric excels in providing cutting-edge communications and
              low-voltage solutions, including the installation and repair of
              security cameras and other essential systems. Our certified
              electricians are experts in the latest technologies, ensuring your
              property is equipped with reliable and efficient communication
              networks and security measures. Whether upgrading existing systems
              or installing new setups, we prioritize safety, quality, and
              innovation.
            </p>
          </Card>

          <Card
            title="generator install"
            color="blueGrey"
            imageSrc="/generator.jpg"
            gallaryPage="generator"
          >
            <p>
              Cruz Electric is proud to specialize in the installation of
              Generac generators, offering top-tier solutions for uninterrupted
              power supply to homes and businesses alike. Our skilled
              electricians are trained and certified to install Generac
              generators, ensuring your installation is performed to the highest
              standards of safety and efficiency. We understand the importance
              of reliable power, which is why we offer customized solutions to
              match your specific energy needs, providing peace of mind during
              power outages.
            </p>
          </Card>
          <Card title="About Us" color="grey" imageSrc="/header.jpg">
            <p>
              Cruz Electric opened in 2020 in Cherokee Iowa. We are expanding to
              our new location in Storm Lake Iowa and all surrounding areas. We
              are here to serve the customer and provide excellent service. Cruz
              Electric will cruise right through it!{" "}
            </p>
          </Card>
        </div>
      </main>

      <footer className={styles.footer}>
        <h2>
          <TbMessageStar size={30} /> Reviews
        </h2>
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
        <span><BsFillPeopleFill size={25} /></span>
        <h4 className="darkBlueTxt h4biggest">
         Ask About Our Apprenticeship Program!
        </h4>
        
      </section>
    </>
  );
}
