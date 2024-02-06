import React, { forwardRef } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { motion, useTime, useTransform } from "framer-motion";

type TAttackPoint = {
  from: any;
  to: any;
};

export default function AttackPoint({ from, to }: TAttackPoint) {
  return (
    <>
      <Marker coordinates={from}>
        <circle r={4} fill="green" />
      </Marker>

      <Marker coordinates={to}>
        <circle r={4} fill="red" />
      </Marker>
      <Line
        className="dash"
        onClick={(e) => console.log(e)}
        // fill="transparent"
        style={{ color: "blue", borderColor: "blue" }}
        from={from}
        to={to}
      />
    </>
  );
}
