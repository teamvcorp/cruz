"use client"
import PictureContainer from "@/app/components/PictureContainer";
import { genImages } from "@/public/lib/images/images";

const generator = () => {
  return <PictureContainer ImageSrc={genImages} />;
};

export default generator;
