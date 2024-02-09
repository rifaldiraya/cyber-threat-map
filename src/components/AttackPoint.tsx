import React, { forwardRef, useState } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { motion, useTime, useTransform } from "framer-motion";
import { useDebounce } from "../hooks/useDebounce";

type TAttackPoint = {
  from: any;
  to: any;
  color: string;
};

export default function AttackPoint({ from, to, color }: TAttackPoint) {
  return (
    <>
      {/* <Marker coordinates={from}>
        <circle r={1} fill="green" />
      </Marker> */}

      <Marker className="marker" coordinates={to}>
        <g id="content">
          <g className="cls-1">
            <circle className="cls-2" style={{ fill: color }} r={6} />
          </g>
          {/* <g className="cls-3">
            <path className="cls-2" d="M18,30A12,12,0,1,1,30,18,12,12,0,0,1,18,30ZM18,8.05A10,10,0,1,0,28,18,10,10,0,0,0,18,8.05Z" />
          </g> */}
          <circle className="cls-2" style={{ fill: color }} r={2} />
        </g>
      </Marker>

      <Line
        className="dash"
        onClick={(e) => console.log(e)}
        fill="transparent"
        style={{ color, borderColor: "blue", strokeWidth: 1 }}
        from={from}
        to={to}
      />
    </>
  );
}
