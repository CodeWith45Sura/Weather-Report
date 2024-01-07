 //const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=4TS3TKRAZGN6TDCCYZXJRSQ3F&contentType=json";
const body=document.querySelector("body");
const temp=document.getElementById("temp");
const pressure=document.getElementById("Pressure");
const windspeed=document.getElementById("windspeed");

const humidity=document.getElementById("humidity");
const icon=document.getElementById("icon");
const submit=document.getElementById("submit");
const input=document.getElementById("city");
const mode=document.getElementById("mode");
const Fact = async (city) => {
  const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?unitGroup=us&key=4TS3TKRAZGN6TDCCYZXJRSQ3F&contentType=json"
  );
  const result = await response.json();
  console.log(result);
  temp.innerText=Math.floor((result.currentConditions.temp-32)*5/9);
  
  pressure.innerText=result.currentConditions.pressure;
  humidity.innerText=result.currentConditions.humidity;
  windspeed.innerText=result.currentConditions.windspeed;
  icon.innerText=result.currentConditions.icon;



};
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  Fact(city.value);
});

Fact("delhi");

body.style.backgroundColor="rgba(150, 81, 214, 0.842) ";
turnB=true;
mode.addEventListener("click",()=>{
  
  if(turnB){
    body.style.backgroundColor="rgba(150, 81, 214, 0.842)";
    turnB=false;
    body.style.backgroundColor="rgba(243, 243, 9, 0.916)";
  }
  else{
    body.style.backgroundColor="rgba(243, 243, 9, 0.916)";
    turnB=true;
    body.style.backgroundColor="rgba(150, 81, 214, 0.842)";
  
  }
})
