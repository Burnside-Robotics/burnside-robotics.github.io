const background_image_parallax = function (object, multiplier) {
	multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
	multiplier = 1 - multiplier;
	object.forEach((item, index) => {
		item.style.backgroundAttachment = "fixed";
	});
	window.onscroll = function () {
		const from_top = window.pageYOffset;
		object.forEach((item, index) => {
			item.style.backgroundPositionY = multiplier * -from_top + "px";
		});
	};
};

//Just pass the jQuery object
//optional second value for speed
background_image_parallax(
	[
		document.getElementsByClassName("circuit-background")[0],
		document.getElementsByClassName("parallax-window")[0],
	],
	0.5
);
