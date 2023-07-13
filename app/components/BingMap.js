import React from "react";
import { ReactBingmaps } from "react-bingmaps";

export default function BingMap() {
  return (
    <ReactBingmaps
      bingmapKey="Your Bing Maps Key"
      center={[13.0827, 80.2707]}
      mapTypeId="road"
      pushPins={[
        {
          location: [13.0827, 80.2707],
          option: { color: "red" },
          addHandler: { type: "click", callback: () => console.log("Clicked") },
        },
      ]}
    />
  );
}
