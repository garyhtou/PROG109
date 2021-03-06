// slideshow photos, descriptions, and credits
const images = [
	{
		url:
			"https://images.unsplash.com/photo-1586065695931-44ebab9fca13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		alt: "Lion Dance",
		description: "Lion Dance at Seattle Center Armory",
		credit: {
			name: "Gary Tou",
			link: "https://unsplash.com/@garyhtou",
		},
	},
	{
		url:
			"https://images.unsplash.com/photo-1586063159125-5757e6092379?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&h=1080&q=80",
		alt: "Waterfall",
		description: "Green luscious waterfall",
		credit: {
			name: "Gary Tou",
			link: "https://unsplash.com/@garyhtou",
		},
	},
	{
		url:
			"https://images.unsplash.com/photo-1586063116826-c9fe0f281a64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
		alt: "Whistler Suspension Bridge",
		description: "Whistler Suspension Bridge",
		credit: {
			name: "Gary Tou",
			link: "https://unsplash.com/@garyhtou",
		},
	},
	{
		url:
			"https://images.unsplash.com/photo-1546145213-f22b87cd1e8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		alt: "Flower",
		description: "Red and white flower",
		credit: {
			name: "Gary Tou",
			link: "https://unsplash.com/@garyhtou",
		},
	},
	{
		url:
			"https://images.unsplash.com/photo-1555667865-f4be32e8cc29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
		alt: "Hydroflask",
		description: "Green hydroflask",
		credit: {
			name: "Gary Tou",
			link: "https://unsplash.com/@garyhtou",
		},
	},
];

// global vars
var currentImg;
var autoplay = true;
var autoplayInterval;
const autoplayDuration = 5000;

// set initial image
setImage(0);
setAutoplay(true);

/**
 * Updates the image
 * @param {object} imageProps object describing image
 * @param {string} imageProps.url URL of image
 * @param {string} imageProps.alt alt of image
 * @param {string} imageProps.description image description
 * @param {object} imageProps.credit object describing author credit
 * @param {string} imageProps.credit.name name of author
 * @param {string} imageProps.credit.link link to author
 */
function setImage(imgIndex) {
	const imageProps = images[imgIndex];
	const image = document.querySelector("#slideshow-img");
	image.src = imageProps.url;
	image.alt = imageProps.alt;

	const description = document.querySelector("#description");
	description.innerText = imageProps.description;

	const credit = document.querySelector("#credit");
	credit.innerHTML = `Photo by <a href="${imageProps.credit.link}" target="_blank" class="credit-link">${imageProps.credit.name}</a>`;

	currentImg = imgIndex;
	updateIndicator(currentImg);

	console.log(`FLIPPING TO IMAGE #${currentImg}`);
}

/**
 * Flip through x number of images.
 * negative number goes to backwards.
 * auto wraps number
 * if no x param passed, it will default to 1 (one picture to the right)
 * @param {number} x
 */
function flip(x = undefined) {
	// by default, flip +1 if nothing is passed in
	if (typeof x !== "number") {
		return flip(1);
	}

	// calculate next index
	// i thought ((currentImg + x) % images.length) would have worked, but i guess javascript's modulo with negative numbers is wonky
	const nextIndex =
		(((currentImg + x) % images.length) + images.length) % images.length;
	setImage(nextIndex);
}

/**
 * Toogle or set autoplay
 * calling this function without the "set" param will toggle
 * @param {boolean} [set] set boolean of autoplay
 */
function setAutoplay(set = undefined) {
	autoplay = typeof set !== "boolean" ? !autoplay : set;

	const icon = document.querySelector("#control-autoplay > i");
	if (autoplay) {
		autoplayInterval = setInterval(flip, autoplayDuration);
		icon.className = "fas fa-pause";
		console.log("AUTOPLAY IS ON");
	} else {
		autoplayInterval && clearInterval(autoplayInterval);
		autoplayInterval = undefined;
		icon.className = "fas fa-play";
		console.log("AUTOPLAY IS OFF");
	}
}

/**
 * Update indicators to show index of current image
 * @param {number} index
 */
function updateIndicator(index) {
	const indicatorParent = document.querySelector("#indicator");
	// remove all children - not very efficent... but it works
	indicatorParent.innerHTML = "";

	// add back children with appropicate indicator type and listener
	for (let i = 0; i < images.length; i++) {
		const indicator = document.createElement("i");
		indicator.className = `${i === index ? "fas" : "far"} fa-circle`;
		indicator.addEventListener("click", () => {
			setImage(i);
		});
		// i === index ? (indicator.style.color = "yellow") : null; // doesn't look great

		indicatorParent.appendChild(indicator);
	}
}

// respond to arrow keys
document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowRight":
			flip(1);
			break;
		case "ArrowLeft":
			flip(-1);
			break;
		case " ":
			setAutoplay();
			break;
	}
});
