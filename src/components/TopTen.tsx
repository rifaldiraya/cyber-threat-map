import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { topAttacker } from "../utils/dummy";

export type TTopTenProps = {
  title: string;
  data: string[];
  icon: string;
};

export default function TopTen({ title, data, icon }: TTopTenProps) {
  return (
    <Box
      sx={{
        width: "160px",
        color: "white",
        zIndex: 999,
        position: "absolute",
        marginLeft: "24px",
        padding: "12px",
        backgroundColor: "#161618",
      }}
    >
      <Box sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", mb: "6px" }}>
        <img src={icon} alt={title} />
        <Box>{title}</Box>
      </Box>

      {data.map((attack) => (
        <Box
          sx={{
            fontSize: "8px",
            display: "flex",
            gap: "6px",
            p: "6px",
            mb: "3px",
            backgroundColor: "#212121",
          }}
        >
          <Box>{attack}</Box>
        </Box>
      ))}
    </Box>
  );
}
