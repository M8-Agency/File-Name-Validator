function getCreativeType(initiative) {
	switch (initiative) {
		case "social":
			return creativeTypeSocial;
		case "display":
			return creativeTypeDisplay;
		default:
			return creativeTypeOther;
	}
}

const creativeTypeDisplay = [
	{},
	{ value: "html5", label: "Html5" },
	{ value: "video", label: "Video" },
	{ value: "audio", label: "Audio" },
	{ value: "image", label: "Image" },
	{ value: "gif", label: "Gif" },
	{ value: "image+text", label: "Image + text" },
	{ value: "email", label: "Email" },
	{ value: "copy", label: "Copy" },
	{ value: "dynamic", label: "Dynamic" },
	{ value: "richmedia", label: "Rich media" },
	{ value: "custom", label: "Custom" }
];

const creativeTypeOther = [
	{},
	{ value: "page", label: "Page" },
	{ value: "deck", label: "Deck" },
	{ value: "html5", label: "Html5" },
	{ value: "video", label: "Video" },
	{ value: "audio", label: "Audio" },
	{ value: "image", label: "Image" },
	{ value: "gif", label: "Gif" },
	{ value: "image+text", label: "Image + text" },
	{ value: "email", label: "Email" },
	{ value: "copy", label: "Copy" },
	{ value: "dynamic", label: "Dynamic" },
	{ value: "richmedia", label: "Rich media" },
	{ value: "custom", label: "Custom" }
];

const creativeTypeSocial = [
	{},
	{ value: "carousel", label: "Carousel" },
	{ value: "image", label: "Image" },
	{ value: "gif", label: "Gif" },
	{ value: "video", label: "Video" },
	{ value: "slideshow", label: "Slideshow" },
	{ value: "leadform", label: "Leadform" },
	{ value: "page", label: "Page" },
	{ value: "canvas", label: "Canvas" },
	{ value: "dynamic", label: "Dynamic" }, 
	{ value: "storyimage", label: "Story-Image" }, 
	{ value: "storyvideo", label: "Story-Video" }
];

export default getCreativeType;
export { getCreativeType, creativeTypeSocial, creativeTypeDisplay };
