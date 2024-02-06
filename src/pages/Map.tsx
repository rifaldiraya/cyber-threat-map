import React, { forwardRef } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { motion, useTime, useTransform } from "framer-motion";
import AttackPoint from "../components/AttackPoint";
import { dummyCoordinate } from "../utils/dummy";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo: any) => (
            <Geography
              style={{
                default: {
                  fill: "#EEE",
                },
                hover: {
                  fill: "#F53",
                },
                pressed: {
                  fill: "#E42",
                },
              }}
              fill="#D6D6DA"
              stroke="#FFFFFF"
              strokeWidth={0.5}
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
      {dummyCoordinate.map((item) => (
        <AttackPoint from={item.coordinate.from} to={item.coordinate.to} />
      ))}
    </ComposableMap>
  );
}
