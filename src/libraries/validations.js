import lag_list from "../data/iso_language";

function validateClient(campaignCode, client) {
  let error = "";
  let value = campaignCode.split(".", 1)[0].toUpperCase();

  switch (client) {
    case "vfl":
      if (value !== "VFL" && value !== "VFD")
        error =
          "You selected Visit Florida, the client code does not match. It should be VFL or VFD ";
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
  } else if (!/^([a-z0-9%$]){1,15}$/i.test(creativePillar)) {
    _error = "Invalid characters on creative pillar";
  }
  return _error;
}

function validateConcept(concept) {
  let _error = null;
  if (!concept) {
    _error = "Required";
  } else if (!/^([a-z]){1,15}$/i.test(concept)) {
    _error = "Invalid characters on concept";
  }
  return _error;
}

function validateSize(size, creativeType) {
  if (!size) {
    return "Required";
  } else if ((creativeType == "deck") & (size != "0")) {
    return "This format is only for deck creative type";
  } else if (
    (creativeType === "audio" || creativeType === "video") &&
    !/^([0-9])+(sec)$/i.test(size)
  ) {
    return `Invalid format for ${creativeType} creative type`;
  } else if (
    creativeType !== "audio" &&
    creativeType !== "video" &&
    !/^(([0-9]){1,3}x([0-9]){1,3}$)$/i.test(size)
  ) {
    return "This format is only for video/audio creative type";
  } else if (!/^(([0-9]){1,3}x([0-9]){1,3}$)|^([0-9])+(sec)$/i.test(size)) {
    return "Invalid characters";
  }
}

function validateCreativeVariation(creativeVariation, creativePillar, client) {
  if (!creativeVariation) {
    return "Required";
  } else if (
    client === "htz" &&
    (creativePillar.includes("%") || creativePillar.includes("$")) &&
    !/^(\d)+$/i.test(creativeVariation)
  ) {
    return "Invalid characters, for the creative pillar selected it's only accept numbers";
  } else if (!/([A-Za-z0-9])*/i.test(creativeVariation)) {
    /* "Invalid characters, for the creative pillar selected it's only accept numbers"; */
    return "Invalid characters";
  }
}

function validateAlphanumeric(value) {
  if (!/([A-Za-z0-9])*/i.test(value)) {
    return "Invalid characters";
  }
}

function validateRequiredAlphanumeric(value) {
  if (!value) {
    return "Required";
  } else if (!/([A-Za-z0-9])*/i.test(value)) {
    return "Invalid characters";
  }
}

function validateCreativeType(creativeType) {
  if (!creativeType) {
    return "Required";
  } else if (!/([A-Za-z0-9])*/i.test(creativeType)) {
    return "Invalid characters";
  }
}

function validListLanguage(lang_values) {
  const _values = lang_values.split("-");
  return !_values.some(lang => !lag_list.find(value => value.code_3 === lang));
}

function validateLanguage(language) {
  if (!language) {
    return "Required";
  } else if (!/^([a-z]){3}(-([a-z]){3})*$/i.test(language)) {
    return "Invalid characters";
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
  } else if (!/^([a-z]){1,15}$/i.test(value)) {
    return "Invalid characters";
  }
}

export {
  validateClient,
  validateCampaign,
  validateCreativePillar,
  validateConcept,
  validateSize,
  validateCreativeVariation,
  validateAlphanumeric,
  validateRequiredAlphanumeric,
  validateCreativeType,
  validateLanguage,
  validateRequired,
  validateNumbers,
  validateAlphabetic
};
