setInterval(function updateTime() {
  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("dddd MMMM Do, YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Taipei
  let taipeiElement = document.querySelector("#taipei");
  if (taipeiElement) {
    let taipeiDateElement = taipeiElement.querySelector(".date");
    let taipeiTimeElement = taipeiElement.querySelector(".time");
    let taipeiTime = moment().tz("Asia/Taipei");

    taipeiDateElement.innerHTML = taipeiTime.format("dddd MMMM Do, YYYY");
    taipeiTimeElement.innerHTML = taipeiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("dddd MMMM Do, YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}, 1);

let intervalId;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  if (intervalId) {
    clearInterval(intervalId);
  }

  function refreshSearchedTime() {
    let cityTime = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
          <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>          
        </div>
        <div class="refresh"><a href="\">Refresh</a></div>
  `;
  }
  refreshSearchedTime();
  intervalId = setInterval(refreshSearchedTime, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
