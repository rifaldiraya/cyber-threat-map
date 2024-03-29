import React, { useCallback, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import AttackPoint from "../components/AttackPoint";
import { dummyCoordinate } from "../utils/dummy";
import MapHeader from "../components/MapHeader";
import Legend from "../components/Legend";
import AttackDetail from "../components/AttackDetail";
import { Box } from "@mui/material";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  const [attackTemp, setAttackTemp] = useState(0);
  const [attackMultipleTemp, setAttackMultipleTemp] = useState(0);

  setTimeout(function () {
    setAttackTemp(Math.floor(Math.random() * 5));
    setAttackMultipleTemp(Math.floor(Math.random() * 5));
  }, 2000);

  const DisplayAttack = useCallback(
    () => (
      <AttackPoint
        city={dummyCoordinate[attackTemp].city}
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
        city={dummyCoordinate[attackMultipleTemp].city}
        color={dummyCoordinate[attackMultipleTemp].color}
        from={dummyCoordinate[attackMultipleTemp].coordinate.from}
        to={dummyCoordinate[attackMultipleTemp].coordinate.to}
      />
    ),
    [attackMultipleTemp]
  );

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <MapHeader />
      <Legend />
      <AttackDetail />
      <ComposableMap style={{ width: "100%", height: "100vh", backgroundColor: "#2A2B2B" }}>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo: any) => (
              <Geography
                style={{
                  default: {
                    fill: "#9C9D9C",
                  },
                  hover: {
                    fill: "#EE0D5C",
                  },
                  pressed: {
                    fill: "#63141C",
                  },
                }}
                fill="#2A2B2B"
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
    </Box>
  );
}
