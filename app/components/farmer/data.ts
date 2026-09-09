import { Farmer } from "./types";

export const farmers: Farmer[] = [
  {
    id: 1,
    farmName: "Chiang Rai Highland Coffee Collective",
    region: "North",
    province: "Chiang Rai",
    products: ["Coffee", "Tea", "Herbs"],
    capacity: "2.5 tons / season",
    status: "Verified",
    story:
      "A northern farm collective focused on traceable highland coffee and herb cultivation for specialty buyers.",
  },
  {
    id: 2,
    farmName: "Surin Jasmine Rice Group",
    region: "Northeast (Isaan)",
    province: "Surin",
    products: ["Jasmine Rice", "Chili"],
    capacity: "12 tons / harvest cycle",
    status: "Verified",
    story:
      "Producer group in Surin working with jasmine rice and supporting transparent regional sourcing for export readiness.",
  },
  {
    id: 3,
    farmName: "Ayutthaya Fruit & Tamarind Farm",
    region: "Central",
    province: "Ayutthaya",
    products: ["Fruits", "Tamarind", "Coconut"],
    capacity: "5 tons / season",
    status: "In Review",
    story:
      "Mixed produce farm with fruit and tamarind supply, preparing structured product data for future EU buyer access.",
  },
  {
    id: 4,
    farmName: "Nakhon Si Tropical Crop Network",
    region: "South",
    province: "Nakhon Si Thammarat",
    products: ["Spices", "Dried Fruit", "Tropical Crops"],
    capacity: "4 tons / season",
    status: "Verified",
    story:
      "Southern producer network supporting tropical crops and spices through a cluster-based sourcing model.",
  },
  {
    id: 5,
    farmName: "Ubon Chili Heritage Producers",
    region: "Northeast (Isaan)",
    province: "Ubon Ratchathani",
    products: ["Chili", "Fermented Foods"],
    capacity: "3 tons / cycle",
    status: "Verified",
    story:
      "A regional chili-focused producer group preserving traditional food heritage while improving digital sourcing visibility.",
  },
  {
    id: 6,
    farmName: "Phrae Botanical Herb Farm",
    region: "North",
    province: "Phrae",
    products: ["Herbs", "Tea"],
    capacity: "1.8 tons / season",
    status: "In Review",
    story:
      "Small-scale botanical herb farm building a digital profile for future partnerships with wellness and specialty buyers.",
  },
];

export const regions = [
  {
    name: "North",
    summary: "Coffee, tea, and herbs from highland farm clusters.",
  },
  {
    name: "Northeast (Isaan)",
    summary: "Jasmine rice, chili, and traditional fermented food producers.",
  },
  {
    name: "Central",
    summary: "Fruit, tamarind, and coconut sourcing from mixed agricultural zones.",
  },
  {
    name: "South",
    summary: "Spices, dried fruit, and tropical crop networks.",
  },
];
