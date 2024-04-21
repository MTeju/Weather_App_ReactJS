import { useState } from 'react'
import './RightContainer.css' 

const RightContainer = () => {

  const [value , setValue] = useState("")
  const [data, setData] = useState({});

  const [col , setCol] = useState();
  const [txtCol , setTxtCol] = useState();
  const [smallText , setSmallText] = useState();

  const temperature = data.main?.temp??'-';
  const humidity = data.main?.humidity??'-';
  const feelsLike = data.main?.feels_like??'-';
  const windSpeed = data.wind?.speed ? (data.wind?.speed * 3.6).toFixed(2) : '-';
  const cityName = data.name;
 
  const dispData = () => {
    console.log(value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e8fc3b737163e783daf3e8adcb9210f3&units=metric`)
    .then(res => res.json()
    .then(json => setData(json))
  )
  setValue("");
  }

  const colorFun = (color,textColor,smlTxt) => {
      setCol(color);
      setTxtCol(textColor);
      setSmallText(smlTxt);
  }

  return (
    <div className="right-container">
      <div className="search-icon">
          <div className="search-bar">
            <input type="text" placeholder='Enter City Name / Zipcode' value={value} onChange={(e) => setValue(e.target.value)}/>
          </div>
          <div className="search-btn">
            <button onClick={dispData}>search<i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
      </div>
      <div className="theams">
          <button className='circle-theam color1' onClick={() => {colorFun("rgba(188, 196, 211, 255)","black","green")}}></button>
          <button className='circle-theam color5' onClick={() => {colorFun("#45818e","White","black")}}></button>
          <button className='circle-theam color3' onClick={() => {colorFun("#3d8","white","black")}}></button>
          <button className='circle-theam color4' onClick={() => {colorFun("#a64d79","white","black")}}></button>
          <button className='circle-theam color2' onClick={() => {colorFun("#b6d7a8")}}></button>
      </div>
      <div className="mid-container">
        <div className="mid-left">
            <div className="mid-left-box" style={{background: col,color : txtCol}}>
              <div className="hum-logo">
                  <div className="logo"><i className="fa-solid fa-droplet"></i></div>
                  <div className="hum">Humidity</div>
              </div>
              
              <div className="hum-image">
                <img src="https://static-00.iconduck.com/assets.00/humidity-icon-512x419-5m7ztixz.png" alt="" />
              </div>
              
              <div className="hum-bot">
                <div className="hum-per">{humidity}%</div>
                <div className="hum-status">
                  <div className="stat" style={{color : smallText}}>Status</div>
                  <div className="stat-qual">Good Quality</div>
                </div>
              </div>
            </div>
        </div>
        <div className="mid-mid">
          <div className="deg-val">
            <div className="deg">
              <div className="degree">{temperature}&deg;C</div>
            <div className="val">
                <div className="climate" style={{background: col,color : txtCol}}>
                  <i className="fa-solid fa-location-dot"></i>
                  <marquee direction="">{cityName}</marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-bot" style={{background: col,color : txtCol}}>
          <div className="feels">
            Cloudy
          </div>
          <div className="feels-like">
            Feels Like <span style={{color : smallText}}>{feelsLike}&deg;</span>
          </div>
        </div>
      </div>
      <div className="bottom-cont">
        <div className="wind-speed" style={{background: col,color : txtCol}}>
          <div className="wind-logo">
            <i className="fa-solid fa-wind"></i>
            <div className="speed">Wind <span style={{color : smallText}}>Status</span></div>
          </div>

          <div className="speed-status">
            <div className="speed-no">{windSpeed}</div>
            <div className="km"><span style={{color:setSmallText}}>Km/h</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContainer
