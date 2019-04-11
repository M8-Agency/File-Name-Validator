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
		case "pmi":
			return creativePillarPMI;
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
	{ value: "impulse", label: "Impulse" },
	{ value: "adventure", label: "Adventure" },
	{ value: "winter", label: "Winter" },
	{ value: "summer", label: "Summer" },
	{ value: "fall", label: "Fall" },
	{ value: "spring", label: "Spring" },
	{ value: "family-hispanic", label: "Family Hispanic" },
	{ value: "family-african-american", label: "Family African American" },
	{ value: "family", label: "Family" },
	{ value: "experience", label: "Experience" },
	{ value: "international", label: "International" },
	{ value: "partner", label: "Partner" }
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

const creativePillarPMI = [
	{},
	{ value: "convenience", label: "Convenience" },
	{ value: "vanity", label: "Vanity" },
	{ value: "social", label: "Social" },
	{ value: "lifestyle", label: "Lifestyle" },
	{ value: "other", label: "Other" }
];

export default { getCreativePillar };
export { getCreativePillar };
