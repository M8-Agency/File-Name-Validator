function createName(
  campaignCode,
  concept,
  creativePillar,
  creativeVariation,
  size,
  tech,
  language,
  creativeType,
  carouselFrame,
  platform,
  initiative
) {
  let name = {};
  const _campaignCode = campaignCode ? campaignCode.toUpperCase() + "_" : "";
  const _creativePillar = creativePillar
    ? creativePillar.toLowerCase() + "_"
    : "";
  const _concept = concept ? concept.toLowerCase() + "_" : "";
  const _size = size ? size.toLowerCase() + "_" : "";
  const _language = language ? language.toLowerCase() + "_" : "";
  const _tech = creativeVariation && tech ? "-" + tech.toLowerCase() : "";
  const _creativeVariation = creativeVariation
    ? creativeVariation.toLowerCase() + _tech + "_"
    : "";
  const _platform = platform ? platform.toLowerCase() : "";

  const _carouselFrame =
    creativeType && carouselFrame ? "-" + carouselFrame.toLowerCase() : "";

  const _creativeType = creativeType
    ? creativeType.toLowerCase() +
      _carouselFrame +
      (initiative === "social" ? "_" : "")
    : "";
  // const _creativeType = creativeType
  //   ? `${creativeType.toLowerCase()}${_carouselFrame} _`
  //   : "";

  // const final = initiative == "social" ? ''

  // name = campaignCode + '_' + creativePillar + '_' + concept + '_' + size + '_' + creativeVariation + '-' + tech + '_' + language + '_' + creativeType + '-' + carouselFrame + '_' + platform;
  name =
    _campaignCode +
    _creativePillar +
    _concept +
    _size +
    _creativeVariation +
    _language +
    _creativeType +
    _platform;
  return name;
}

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
    default:
      break;
  }
  return error;
}

export default createName;
export { validateClient, createName };
