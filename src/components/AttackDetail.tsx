import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { topAttacked, topAttacker } from "../utils/dummy";
import TopTen from "./TopTen";
import DynamicAttackDetail from "./DynamicAttackDetail";

export default function AttackDetail() {
  const [expandLegend, setExpandLegend] = useState<boolean>(true);
  return (
    <Box
      sx={{
        bottom: "12px",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "-webkit-fill-available",
        gap: "36px",
      }}
    >
      <Box sx={{ width: "160px" }}>
        <TopTen iconicColor="#E53F3E" icon="/icon/Top Ten Attack.svg" title="TOP 10 ATTACK" data={topAttacker} />
      </Box>
      <Box sx={{ width: "300px" }}>
        <DynamicAttackDetail title="TOP 10 ATTACK" data={topAttacker} />
      </Box>
      <Box
        sx={{
          width: "160px",
        }}
      >
        <TopTen iconicColor="#4E71E8" icon="/icon/Top Ten Attacked.svg" title="TOP 10 ATTACKED" data={topAttacked} />
      </Box>
    </Box>
  );
}
