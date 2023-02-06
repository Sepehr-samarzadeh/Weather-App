import { setLocationObject, getHomeLocation } from "./dataFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
import { addSpinner, displayError } from "./domFunctions.js";
const currentLoc = new CurrentLocation();
const initApp = () => {
    // add listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click",getGeoWeather);
    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", loadweather);

    // set up

    // load weather
    loadweather();
};

document.addEventListener("DOMContentLoaded",initApp);

const getGeoWeather = (event) => {
    if (event) {
        if (event.type === "click") {
            const mapIcon = document.querySelector(".fa-map-marker-alt");
            addSpinner(mapIcon);
        }
    }
    if (!navigator.geolocation) geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError (errMsg, errMsg);
};

const geoSuccess = (position) => {
    const myCoordsObj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`
    };
    setLocationObject(currentLoc, myCoordsObj);
    console.log(currentLoc);
    updateDataAndDisplay(currentLoc);
};

const loadweather = (event) => {
    const savedLocation = getHomeLocation();
    if (!savedLocation && !event) return getGeoWeather();
    if (!savedLocation && event.type === "click") {
        displayError(
            "No Home Location Saved.",
            "Sorry Please save your home location first."
        );
    } else if (savedLocation && !event) {
        displayHomeLocationWeaher(savedLocation);
    } else {
        const homeIcon = document.querySelector(".fa-home");
        addSpinner(homeIcon);
        displayHomeLocationWeaher(savedLocation);
    }
};

const updateDataAndDisplay = async (locationObj) => {
    //const weatherJson = await getWeatherFromCoords(locationObj);
    //if (weatherJson) updateDisplay(weatherJson, locationObj);
};
