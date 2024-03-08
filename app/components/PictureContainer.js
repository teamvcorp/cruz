"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import './picture.scss';

const PictureContainer = ({ imageSrc }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <>
     <div className="whitebox"></div>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imageSrc.map((image, index) => (
          <div key={index} className="embla__slide">
            <Image src={image.src} alt={image.alt} width="500" height="315" />
          </div>
        ))}
      </div>
    </div>
    <div className='homeBtnContainer'>

    <Link className="homeBtn" href='/'> <MdHome size={30} color='blue' /> Home </Link>
    </div>
    </>
  );
};
 export default PictureContainer;