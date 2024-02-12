import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { mapLegends } from "../utils/dummy";

export default function Legend() {
  const [expandLegend, setExpandLegend] = useState<boolean>(true);
  return (
    <Box
      sx={{
        width: "200px",
        color: "white",
        zIndex: 999,
        position: "absolute",
        marginLeft: "24px",
        padding: "12px",
        bottom: "180px",
        left: "0px",
        backgroundColor: "#161618",
      }}
    >
      <Box sx={{ fontSize: "12px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>MAP LEGEND</Box>
        <Button onClick={() => setExpandLegend((prev) => !prev)} sx={{ backgroundColor: "#DA5353" }} size="small" variant="contained">
          {expandLegend ? "-" : "+"}
        </Button>
      </Box>

      <Collapse sx={{ mt: "24px" }} in={expandLegend} timeout="auto" unmountOnExit>
        {mapLegends.map((legend) => (
          <Box
            sx={{
              fontSize: "8px",
              display: "flex",
              gap: "6px",
              p: "6px",
              height: "14px",
              mb: "3px",
              backgroundColor: "#212121",
            }}
          >
            <img width='14px' src={legend.icon} alt={legend.name} />
            <Box>{legend.name}</Box>
          </Box>
        ))}
      </Collapse>
    </Box>
  );
}
