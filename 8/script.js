const Form = document.getElementById("Form");
const errorMessage = document.getElementById("errorMessage");
const weatherResult = document.getElementById("weatherResult");

Form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
    const res = await fetch(url, { method: "GET" }).then((res) => res.json());
    // const data = res.json();
    console.log(res);
    weatherResult.innerHTML = `temp is ${res.current.temperature_2m}`;
  } catch (error) {
    console.log(error);
  }
});
