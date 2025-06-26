const button = document.querySelector("button");
const input = document.querySelector(".search");
const weather = document.querySelector(".weather");



button.addEventListener("click",()=>{
      const text = input.value.trim();
    if(text == ""){
        alert("provide place  name")
    }else{
  fetch(`https://api.weatherapi.com/v1/current.json?key=92253d1a5bb74d64867185539252506&q=${text}&aqi=yes`)
  .then(function(raw){
    return raw.json();
  })
  .then(function(data){
      const region = data.location.region;
        const city = data.location.name;
        const temp = data.current.temp_c;
        const weatherText = data.current.condition.text;
        const icon = data.current.condition.icon;


       

        weather.innerHTML = `<p>Region: ${region} <br> city: ${city} <br>temp: ${temp} C <br>Weather Text: ${weatherText}<img src="https:${icon}" <br></p>`
  })
.catch(function(err){
    alert("something went wrong");
})}

});




