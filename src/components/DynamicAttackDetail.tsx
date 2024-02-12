import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { topAttacker } from "../utils/dummy";

export type TTopTenProps = {
  title: string;
  data: string[];
};

export default function DynamicAttackDetail({ title, data }: TTopTenProps) {
  return (
    <Box
      sx={{
        width: "300px",
        color: "white",
        zIndex: 999,
        position: "absolute",
        marginLeft: "24px",
        padding: "12px",
        backgroundColor: "#161618",
      }}
    >
      <Box sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "space-between", mb: "12px" }}>
        <Box>ATTACK</Box>
        <Box>SEVERITY</Box>
        <Box>LOCATON</Box>
      </Box>

      {data.map((attack) => (
        <Box
          sx={{
            p: "6px",
            mb: "3px",
            fontSize: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // mb: "12px",
            backgroundColor: "#212121",
          }}
        >
          <Box>{attack}</Box>
          <Box>{attack}</Box>
          <Box>{attack}</Box>
        </Box>
      ))}

      {/* <Box
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
      </Box> */}
    </Box>
  );
}
