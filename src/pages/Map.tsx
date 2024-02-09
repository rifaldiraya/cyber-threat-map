import React, { useCallback, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import AttackPoint from "../components/AttackPoint";
import { dummyCoordinate } from "../utils/dummy";
import MapHeader from "../components/MapHeader";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  const [attackTemp, setAttackTemp] = useState(0);
  const [attackMultipleTemp, setAttackMultipleTemp] = useState(0);

  setTimeout(function () {
    setAttackTemp(Math.floor(Math.random() * 5));
    setAttackMultipleTemp(Math.floor(Math.random() * 5));
  }, 3000);

  const DisplayAttack = useCallback(
    () => (
      <AttackPoint
        color={dummyCoordinate[attackTemp].color}
        from={dummyCoordinate[attackTemp].coordinate.from}
        to={dummyCoordinate[attackTemp].coordinate.to}
      />
    ),
    [attackTemp]
  );

  const DisplayMultipleAttack = useCallback(
    () => (
      <AttackPoint
        color={dummyCoordinate[attackMultipleTemp].color}
        from={dummyCoordinate[attackMultipleTemp].coordinate.from}
        to={dummyCoordinate[attackMultipleTemp].coordinate.to}
      />
    ),
    [attackMultipleTemp]
  );

  return (
    <div>
      <MapHeader />
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
        <DisplayMultipleAttack />
      </ComposableMap>
    </div>
  );
}
