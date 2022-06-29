const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19'
function request(method, url) {
  return fetch(url).then(response => {
    return response.json()
  })
}
request('GET', requestURL)
  .then(data => {
    document.querySelector('.city').innerHTML = 'City' + ' : ' + JSON.stringify(data.name)
    document.querySelector('.temp').innerHTML = 'Temperature' + ' : ' + JSON.stringify(data.main.temp)
    document.querySelector('.pressure').innerHTML = 'Pressure' + ' : ' + JSON.stringify(data.main.pressure)
    document.querySelector('.description').innerHTML = 'Description' + ' : ' + JSON.stringify(data.weather[0].description)
    document.querySelector('.humidity').innerHTML = 'Humidity' + ' : ' + JSON.stringify(data.main.humidity)
    document.querySelector('.speed').innerHTML = 'Speed' + ' : ' + JSON.stringify(data.wind.speed)
    document.querySelector('.deg').innerHTML = 'Wind deg' + ' : ' + JSON.stringify(data.wind.deg)
    document.querySelector('.img-icon').setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png `)
  })
