function getCreativePilar(client) {
  switch (client) {
    case "htz":
      return creativePilarHTZ;
    case "vfl":
      return creativePilarVFL;
    default:
      return creativePilarCPA;
  }
}

const creativePilarHTZ = [
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

const creativePilarVFL = [
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

const creativePilarCPA = [
  { value: "BeMore", label: "Be More" },
  { value: "GetBetter", label: "Get Better" },
  { value: "GoPlaces", label: "Go Places" }
];

export default { getCreativePilar };
export { getCreativePilar };
