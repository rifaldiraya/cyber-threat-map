import React, { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { motion, useTime, useTransform } from "framer-motion";
import AttackPoint from "../components/AttackPoint";
import { dummyCoordinate } from "../utils/dummy";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const [attackTemp, setAttackTemp] = useState(0);

  setTimeout(function () {
    setAttackTemp(Math.floor(Math.random() * 5));
  }, 3000);

  const DisplayAttack = useCallback(
    () => <AttackPoint from={dummyCoordinate[attackTemp].coordinate.from} to={dummyCoordinate[attackTemp].coordinate.to} />,
    [attackTemp]
  );

  return (
    <ComposableMap style={{ backgroundColor: "#141318" }}>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo: any) => (
            <Geography
              style={{
                default: {
                  fill: "#4F4A4F",
                },
                hover: {
                  fill: "#EE0D5C",
                },
                pressed: {
                  fill: "#63141C",
                },
              }}
              fill="#141318"
              stroke="#141318"
              strokeWidth={0.5}
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
      <DisplayAttack />
      {/* {dummyCoordinate.map((item, index) => {
        if (attackTemp === index) {
          return <AttackPoint from={item.coordinate.from} to={item.coordinate.to} />;
        }
      })} */}
    </ComposableMap>
  );
}
