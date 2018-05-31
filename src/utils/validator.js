
export default function createName(campaignCode, concept, creativePilar, creativeVariation, size, tech, language, creativeType, carouselFrame, platform) {
    let name = {};
    const _campaignCode = campaignCode ? campaignCode.toUpperCase() + '_' : '';
    const _creativePilar = creativePilar ? creativePilar.toLowerCase() + '_' : '';
    const _concept = concept ? concept.toLowerCase() + '_' : '';
    const _size = size ? size.toLowerCase() + '_' : '';
    const _language = language ? language.toLowerCase() + '_' : '';
    const _tech = creativeVariation && tech ? '-' + tech.toLowerCase() : '';
    const _creativeVariation = creativeVariation ? creativeVariation.toLowerCase() + _tech + '_' : '';
    const _platform = platform ? platform.toLowerCase() + '_' : '';
    
    const _carouselFrame = creativeType && carouselFrame ? '-' + carouselFrame.toLowerCase() : '';
    const _creativeType = creativeType ? creativeType.toLowerCase() + _carouselFrame + '_' : '';


    // name = campaignCode + '_' + creativePilar + '_' + concept + '_' + size + '_' + creativeVariation + '-' + tech + '_' + language + '_' + creativeType + '-' + carouselFrame + '_' + platform;
    name = _campaignCode + _creativePilar + _concept + _size + _creativeVariation + _language + _creativeType + _platform
    return name;
}

export function Ca(params) {
    
}