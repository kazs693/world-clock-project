function updateTime() {
  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = melbourneTime.format("dddd MMMM Do, YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("dddd MMMM Do, YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
