import React, { forwardRef, useState } from "react";
import { Annotation, ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { motion, useTime, useTransform } from "framer-motion";
import { useDebounce } from "../hooks/useDebounce";

type TAttackPoint = {
  from: any;
  to: any;
  color: string;
  city: any;
};

export default function AttackPoint({ from, to, color, city }: TAttackPoint) {
  return (
    <>
      {/* FROM MARKER */}
      {/* <Marker coordinates={from}>
        <circle r={1} fill="green" />
      </Marker> */}

      <Annotation
        subject={from}
        dx={-10}
        dy={-10}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 0,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" y={-10} fill="white" fontSize={8}>
          Attack from
        </text>
        <text x="-8" fill="white" fontSize={10}>
          {city.from}
        </text>
      </Annotation>

      <Annotation
        subject={to}
        dx={-10}
        dy={-10}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 0,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" y={-10} fill="white" fontSize={8}>
          Attack to
        </text>
        <text x="-8" fill="white" fontSize={10}>
          {city.to}
        </text>
      </Annotation>

      <Marker className="marker" coordinates={to}>
        <g id="content">
          <g className="cls-1">
            <circle className="cls-2" style={{ fill: color }} r={6} />
          </g>
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
