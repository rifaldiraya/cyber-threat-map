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
        <circle r={1} fill="green" />
      </Marker>

      <Marker coordinates={to}>
        <circle r={1} fill="red" />
      </Marker>
      {/* <svg className="dash" height="210" width="300" xmlns="http://www.w3.org/2000/svg">
        <line x1="14.006" y1="30.7128" x2="379" y2="380" style={{ stroke: "red", strokeWidth: 1 }} />
      </svg> */}
      <Line
        className="dash"
        onClick={(e) => console.log(e)}
        // fill="transparent"
        style={{ color: "blue", borderColor: "blue", strokeWidth: 1 }}
        from={from}
        to={to}
      />
    </>
  );
}
