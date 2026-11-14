const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();
const lastModified = document.querySelector("#last-modified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


let temperature = 10;
let velocity = 5;

const calculateWindChill = (temperature, velocity) => {
    return 13.2 + 0.6215 * temperature - 11.37 * velocity**0.16 + 0.3965 * temperature * velocity**0.16;
}


const windchill = document.querySelector(".wind");

if(temperature <= 10 && velocity > 4.8) {
    let condition = calculateWindChill(10, 5);
    windchill.textContent = `${condition} deg`;
} else {
    windchill.textContent = "N/A";
}
