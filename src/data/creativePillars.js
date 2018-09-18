function getCreativePillar(client) {
  switch (client) {
    case "htz":
      return creativePillarHTZ;
    case "vfl":
      return creativePillarVFL;
    case "spr":
      return creativePillarSPR;
    case "kfc":
      return creativePillarKFC;
    case "cpa":
      return creativePillarCPA;
    default:
      return [];
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
  { value: "generic", label: "generic" },
  { value: "other", label: "Other" }
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
  { value: "partner", label: "Partner" },
  { value: "other", label: "Other" }
];

const creativePillarCPA = [
  {},
  { value: "bm", label: "Be More" },
  { value: "fb", label: "Feel Better" },
  { value: "gp", label: "Go Places" },
  { value: "other", label: "Other" }
];

const creativePillarSPR = [
  {},
  { value: "rateplans", label: "Rate Plans" },
  { value: "phonesdeviceoffers", label: "Phones/Device Offers" },
  { value: "addons", label: "Add-Ons" },
  { value: "sponsorships", label: "Sponsorships" },
  { value: "webteleexclusives", label: "Web/Tele Exclusives" },
  { value: "other", label: "Other" }
];

const creativePillarKFC = [
  {},
  { value: "mc-innovation", label: "MC Innovation" },
  { value: "mc-uniquemoments", label: "MC Uniquemoments" },
  { value: "mc-trueyou", label: "MC True You" },
  { value: "va-money", label: "VA Money" },
  { value: "va-time", label: "VA Time" },
  { value: "va-food", label: "VA Food" },
  { value: "fs-foodprep", label: "FS Foodprep" },
  { value: "fs-secretrecipe", label: "FS Secret Recipe" },
  { value: "fs-colonel", label: "FS Colonel" },
  { value: "campaign", label: "Campaign" },
  { value: "other", label: "Other" }
];

export default { getCreativePillar };
export { getCreativePillar };
