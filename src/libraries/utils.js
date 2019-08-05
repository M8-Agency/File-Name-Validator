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
  date,
  person,
  version,
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

  creativeType = creativeType.replace("storyimage", "story");
  creativeType = creativeType.replace("storyvideo", "story");
  const _creativeType = creativeType
    ? creativeType.toLowerCase() +
      _carouselFrame +
      (initiative === "social" ? "_" : "")
    : "";
 
  const _version = version && `_${version}_`;
  const _person = person && `${person.toLowerCase()}_`;
  const _date = date && `${date}`;

  const _other = initiative === "other" ? _version + _person + _date : "";

  name =
    _campaignCode +
    _creativePillar +
    _concept +
    _size +
    _creativeVariation +
    _language +
    _creativeType +
    _platform +
    _other;
  return name;
}

function findError(objectList) {
  for (let key in objectList) {
    let _value = objectList[key];
    console.log(_value);
    if (_value !== null && _value !== undefined && _value !== "") {
      return true;
    }
  }
  return false;
}

export default createName;
export { createName, findError };
