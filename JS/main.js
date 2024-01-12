const apiKey = "aaa8e7f5878c80b741d2f8a926845dfc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector('.weather-icon');

async function checkWeather(city){
    let response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status ==  404 || search.value == "" ){

        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'

    }else{


        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h'
    
        if(data.weather[0].main == "Clouds"){
    
            icon.src = "images/clouds.png"
        }
    
        else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png"
        }
    
        else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png"
        }
        
        else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png"
        }
        
    
        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"

    }

}

searchBtn.addEventListener( "click" , function(){
    checkWeather(search.value)
})


