"use client"
import PictureContainer from "@/app/components/PictureContainer";
import { genImages } from "@/app/lib/images/images";

const Generator = () => {
  return <PictureContainer imageSrc={genImages} />;
};

export default Generator;
