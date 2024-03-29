import lag_list from "../data/iso_language";

function validateClient(campaignCode, client) {
	let error = "";
	let value = campaignCode.split(".", 1)[0].toUpperCase();

	switch (client) {
		case "vfl":
			if (value !== "VFL" && value !== "VFD" && value !== "VFC")
				error =
					"You selected Visit Florida, the client code does not match. It should be VFL, VFC or VFD ";
			break;
		case "cpa":
			if (value !== "CPA")
				error =
					"You selected Copa Airline, the client code does not match. It should be CPA ";
			break;
		case "htz":
			if (value !== "HTZ")
				error =
					"You selected Hertz, the client code does not match. It should be HTZ ";
			break;
		case "spr":
			if (value !== "SPR")
				error =
					"You selected Sprint, the client code does not match. It should be SPR ";

			break;
		case "kfc":
			if (value !== "KFC")
				error =
					"You selected KFC, the client code does not match. It should be KFC ";

			break;
		case "pmi":
			if (value !== "PMI")
				error =
					"You selected Phillip Morris, the client code does not match. It should be PMI ";

			break;
		default:
			break;
	}
	return error;
}
function validateCampaign(campaignCode, client) {
	let _error = null;
	if (!campaignCode) {
		_error = "Required";
	} else if (!/^([A-Z]){2,3}\.+([0-9]){4}$/i.test(campaignCode)) {
		_error = `Invalid characters or format. Example: ${client.toUpperCase()}.1001`;
	} else {
		_error = validateClient(campaignCode, client);
	}

	return _error;
}
function validateCreativePillar(creativePillar) {
	let _error = null;
	if (!creativePillar) {
		_error = "Required";
	} else if (!/^([a-z0-9-%$]){1,20}$/i.test(creativePillar)) {
		_error = "Invalid characters on creative pillar";
	}
	return _error;
}
function validateSize(size, creativeType) {
	console.log(`size ${size}`);
	if (!size) {
		return "Required";
	} else if (
		!creativeType &&
		!/^(([0-9]){1,10}x([0-9]){1,10}$)|^([0-9])+(sec)$/i.test(size)
	) {
		return "Invalid characters";
	} else if (
		creativeType &&
		(creativeType === "deck" || creativeType === "page") &&
		size !== 0
	) {
		return "For Deck or Page creative type the size is 0";
	} else if (
		creativeType &&
		(creativeType === "audio" || creativeType === "video" || creativeType === "storyvideo") &&
		!/^([0-9])+(sec)$/i.test(size)
	) {
		// return `Invalid format for ${creativeType} creative type`;
		return "For audio and video, use length"
	} else if (
		creativeType &&
		creativeType !== "audio" &&
		creativeType !== "video" &&
		creativeType !== "deck" &&
		creativeType !== "page" &&
		creativeType !== "storyvideo" &&
		!/^(([0-9]){1,10}x([0-9]){1,10}$)$/i.test(size)
	) {
		return "Invalid format";
	} else if (
		creativeType &&
		creativeType !== "deck" &&
		creativeType !== "page" &&
		!/^(([0-9]){1,10}x([0-9]){1,10}$)|^([0-9])+(sec)$/i.test(size)
	) {
		return "Invalid characters";
	}
}
function validateCreativeVariation(creativeVariation, creativePillar, client) {
	if (
		client === "htz" &&
		(creativePillar.includes("%") || creativePillar.includes("$")) &&
		!/^(\d)+$/i.test(creativeVariation)
	) {
		return "Invalid characters, for the creative pillar selected it's only accept numbers";
	} else if (!/^([A-Za-z0-9:])*$/i.test(creativeVariation)) {
		/* "Invalid characters, for the creative pillar selected it's only accept numbers"; */
		return "Invalid characters";
	}
}

function validateCreativeConcept(creativeConcept) {
	if (!/^([A-Za-z0-9:])*$/i.test(creativeConcept)) {
		return "Invalid characters";
	}
}
function validateAlphanumeric(value, required) {
	if (required && !value) {
		return "Required";
	} else if (!/^([A-Za-z0-9])*$/i.test(value)) {
		return "Invalid characters, only alphanumeric characters allowed";
	}
}

function validateCarouselFrame(value, required) {
	if (required && !value) {
		return "Required";
	} else if (!/^([0-9]){2}$/i.test(value) && value !== "") {
		return "Invalid characters. Only two-digit numbers are allowed (Example: 02, 12).";
	}
}
function validListLanguage(lang_values) {
	const _values = lang_values.split("-");
	return !_values.some(
		lang => !lag_list.find(value => value.code_3 === lang)
	);
}
function validateLanguage(language) {
	if (!language) {
		return "Required";
	} else if (!/^([a-z]){3}(-([a-z]){3})*$/i.test(language)) {
		return "Invalid format";
	} else if (!validListLanguage(language.toLowerCase())) {
		return "Invalid language code";
	}
}
function validateRequired(value) {
	if (!value) {
		return "Required";
	}
}
function validateNumbers(value, required) {
	if (!value && required) {
		return "Required";
	} else if (!/^(\d)+$/i.test(value)) {
		return "Invalid characters, only numbers allowed";
	}
}
function validateAlphabetic(value, required) {
	if (!value && required) {
		return "Required";
	} else if (!/^([A-Za-z]){1,15}$/i.test(value)) {
		return "Invalid characters, only letters allowed";
	}
}

export {
	validateClient,
	validateCampaign,
	validateCreativePillar,
	validateSize,
	validateCreativeVariation,
	validateAlphanumeric,
	validateLanguage,
	validateRequired,
	validateNumbers,
	validateAlphabetic,
	validateCreativeConcept,
	validateCarouselFrame
};
