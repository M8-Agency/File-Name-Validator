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
  { value: "wintersunseekers", label: "Winter Sunseekers" },
  { value: "impulsegetaways", label: "Impulse Getaways" },
  { value: "familymemorymakers", label: "Family Memory Makers" },
  { value: "adventureseekers", label: "Adventure Seekers" },
  { value: "experienceseekers", label: "Experience seekers" },
  { value: "fall", label: "Fall" },
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "international", label: "International" },
  { value: "partner", label: "Partner" }
];

const creativePillarCPA = [
  {},
  { value: "bm", label: "Be More" },
  { value: "gb", label: "Get Better" },
  { value: "gp", label: "Go Places" }
];

const creativePillarSPR = [
  {},
  { value: "rateplans", label: "Rate Plans" },
  { value: "phonesdeviceoffers", label: "Phones/Device Offers" },
  { value: "addons", label: "Add-Ons" },
  { value: "sponsorships", label: "Sponsorships" },
  { value: "webteleexclusives", label: "Web/Tele Exclusives" }
];

export default { getCreativePillar };
export { getCreativePillar };
