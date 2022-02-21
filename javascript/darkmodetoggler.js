const btnElList = document.querySelectorAll(".theme__toggler");
let darkMode = localStorage.getItem("darkmode");
const bodyEl = document.querySelector("body");
const rootEl = document.querySelector(":root");
const enableDarkMode = (e) => {
	rootEl.style.setProperty("--COLOR-BG", "#172842");
	rootEl.style.setProperty("--COLOR-TXT", "#c6ddff");
	rootEl.style.setProperty("--COLOR-TXT-PRIMARY", "#c6ddff");
	rootEl.style.setProperty("--COLOR-OFFWHITE", "#2255A4");
	rootEl.style.setProperty("--COLOR-CARD-BG", "#0c1e3a");
	rootEl.style.setProperty("--COLOR-PRIMARY-DARK", "#163d77");

	localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = (e) => {
	rootEl.style.setProperty("--COLOR-BG", "#e6f0ff");
	rootEl.style.setProperty("--COLOR-TXT", "#000000");
	rootEl.style.setProperty("--COLOR-TXT-PRIMARY", "#2255a4");
	rootEl.style.setProperty("--COLOR-OFFWHITE", "#d3dded");
	rootEl.style.setProperty("--COLOR-CARD-BG", "white");
	rootEl.style.setProperty("--COLOR-PRIMARY-DARK", "#e6f0ff");
	localStorage.setItem("darkmode", null);
};

const darkModeClickHandler = (e) => {
	darkMode = localStorage.getItem("darkmode");
	console.log("Clicked");
	if (darkMode !== "enabled") {
		enableDarkMode();
		e.currentTarget.innerHTML = '<i class="bx bxs-sun"></i>';
	} else {
		disableDarkMode();
		e.currentTarget.innerHTML = '<i class="bx bxs-moon"></i>';
	}
};

if (darkMode === "enabled") {
	enableDarkMode();
} else {
	disableDarkMode();
}

btnElList.forEach((btn) => btn.addEventListener("click", darkModeClickHandler));
