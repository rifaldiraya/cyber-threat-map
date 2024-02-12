import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { topAttacked, topAttacker } from "../utils/dummy";
import TopTen from "./TopTen";
import DynamicAttackDetail from "./DynamicAttackDetail";

export default function AttackDetail() {
  const [expandLegend, setExpandLegend] = useState<boolean>(true);
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          left: "20%",
          bottom: "160px",
        }}
      >
        <TopTen icon='/icon/Top Ten Attack.svg' title="TOP 10 ATTACK" data={topAttacker} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "34.8%",
          bottom: "160px",
        }}
      >
        <DynamicAttackDetail title="TOP 10 ATTACK" data={topAttacker} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "60%",
          bottom: "160px",
        }}
      >
        <TopTen icon='/icon/Top Ten Attacked.svg' title="TOP 10 ATTACKED" data={topAttacked} />
      </Box>
    </Box>
  );
}
