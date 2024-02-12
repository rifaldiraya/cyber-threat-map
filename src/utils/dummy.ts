export const topAttacker = ["DDOS", "BACKDOOR", "APACHE STRUTS"];
export const topAttacked = ["10.90.1.102", "10.50.1.100", "21.45.1.100"];

export const mapLegends = [
  { icon: "/icon/External Low Attack.svg", name: "External Low Attack" },
  { icon: "/icon/External Medium Attack.svg", name: "External Medium Attack" },
  { icon: "icon/External High Attack.svg", name: "External High Attack" },
  { icon: "/icon/External Critical Attack.svg", name: "External Critical Attack" },
  { icon: "/icon/Internal Low Attack.svg", name: "Internal Low Attack" },
  { icon: "/icon/Internal Medium Attack.svg", name: "Internal Medium Attack" },
  { icon: "/icon/Internal High Attack.svg", name: "Internal High Attack" },
  { icon: "/icon/Internal Critical Attack.svg", name: "External Critical Attack" },
  { icon: "/icon/defence.svg", name: "Defence" },
];

export const dummyCoordinate = [
  {
    coordinate: {
      from: [14.006, 30.7128],
      to: [379, 360],
    },
    city: {
      from: "Bangkalan, Indonesia",
      to: "Or Yehuda, Israel",
    },
    attackType: "critical",
    color: "#B240B4",
    attackName: "DDOS",
  },
  {
    coordinate: {
      from: [14.006, 30.7128],
      to: [379, 380],
    },
    city: {
      from: "Bangkalan, Indonesia",
      to: "Or Yehuda, Israel",
    },
    attackType: "high",
    color: "#FF1D25",
    attackName: "DDOS",
  },
  {
    coordinate: {
      from: [14.006, 30.7128],
      to: [260, 380],
    },
    city: {
      from: "Bangkalan, Indonesia",
      to: "Or Yehuda, Israel",
    },
    attackType: "medium",
    color: "#ffb72d",
    attackName: "DDOS",
  },
  {
    coordinate: {
      from: [14.006, 30.7128],
      to: [280, 400],
    },
    city: {
      from: "Bangkalan, Indonesia",
      to: "Or Yehuda, Israel",
    },
    attackType: "low",
    color: "#73FE01",
    attackName: "BACKDOOR",
  },
  {
    coordinate: {
      from: [14.006, 30.7128],
      to: [450, 385],
    },
    city: {
      from: "Bangkalan, Indonesia",
      to: "Or Yehuda, Israel",
    },
    attackType: "low",
    color: "#73FE01",
    attackName: "APACHE STRUTS",
  },
];
