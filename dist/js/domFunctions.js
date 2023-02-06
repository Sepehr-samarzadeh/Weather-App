export const addSpinner = (element) => {
    animateButton(element);
    setTimeout(animateButton, 1000, element)
}

const animateButton = (element) => {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
};

export const displayError = (headerMsg, srMsg) => {
    updateWeatherLocationHeather(headerMsg);
    updateScreenReaderConfirmation(srMsg);
}

const updateWeatherLocationHeather = (message) => {
    const h1 = document.getElementById("currentForecast__location");
    h1.textContent = message;
};

const updateScreenReaderConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
};