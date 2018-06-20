function getCreativePillar(client) {
  switch (client) {
    case "htz":
      return creativePillarHTZ;
    case "vfl":
      return creativePillarVFL;
    case "spr":
      return creativePillarSPR;
    default:
      return creativePillarCPA;
  }
}

const creativePillarHTZ = [
  {},
  { value: "upto%off", label: "up to % off" },
  { value: "%off", label: "% off" },
  { value: "upto$off", label: "up to $off" },
  { value: "$off", label: "$off" },
  { value: "seasonal", label: "seasonal" },
  { value: "membership", label: "membership" },
  { value: "benefits", label: "benefits" },
  { value: "car", label: "car" },
  { value: "promo", label: "promo" },
  { value: "generic", label: "generic" }
];

const creativePillarVFL = [
  {},
  { value: "WinterSunseekers", label: "Winter Sunseekers" },
  { value: "ImpulseGetaways", label: "Impulse Getaways" },
  { value: "FamilyMemoryMakers", label: "Family Memory Makers" },
  { value: "AdventureSeekers", label: "Adventure Seekers" },
  { value: "Experienceseekers", label: "Experience seekers" },
  { value: "Fall", label: "Fall" },
  { value: "Spring", label: "Spring" },
  { value: "Summer", label: "Summer" },
  { value: "International", label: "International" },
  { value: "Partner", label: "Partner" }
];

const creativePillarCPA = [
  {},
  { value: "BeMore", label: "Be More" },
  { value: "GetBetter", label: "Get Better" },
  { value: "GoPlaces", label: "Go Places" }
];

const creativePillarSPR = [
  {},
  { value: "rp", label: "Rate Plans" },
  { value: "pdo", label: "Phones/Device Offers" },
  { value: "ao", label: "Add-Ons" },
  { value: "s", label: "Sponsorships" },
  { value: "wte", label: "Web/Tele Exclusives" }
];

export default { getCreativePillar };
export { getCreativePillar };
