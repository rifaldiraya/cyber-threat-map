import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { topAttacker } from "../utils/dummy";

export type TTopTenProps = {
  title: string;
  data: string[];
  icon: string;
  iconicColor: string;
};

export default function TopTen({ title, data, icon, iconicColor }: TTopTenProps) {
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        zIndex: 999,
        marginLeft: "24px",
        padding: "12px",
        backgroundColor: "#161618",
      }}
    >
      <Box sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", mb: "6px" }}>
        <img src={icon} alt={title} />
        <Box>{title}</Box>
      </Box>

      {data.map((attack, index) => (
        <Box
          sx={{
            fontSize: "8px",
            display: "flex",
            gap: "6px",
            mb: "3px",
            backgroundColor: "#212121",
          }}
        >
          <Box sx={{ width: "24px", backgroundColor: iconicColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box>{index + 1}</Box>
          </Box>
          <Box sx={{ p: "6px" }}>{attack}</Box>
        </Box>
      ))}
    </Box>
  );
}
