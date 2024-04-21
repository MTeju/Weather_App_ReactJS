import './LeftContainer.css'

const LeftContainer = () => {
  return (
    <div className='left-container'>
        <div className='top-cont'>
          <span>W</span>
          <span>E</span>
          <span>A</span>
          <span>T</span>
          <span>H</span>
          <span>E</span>
          <span>R</span>
        </div>
        <div className="bottom-cont">
          <div className="weather-box">
            <div className="name">Weather App</div>
            <div className="desc">A dynamic weather app provides real-time forecasts, customizable features for optimal user experience and weather tracking.</div>
          </div>

          <div className="social-icons">
            <div className="icon">
            <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
            </div>

            <div className="icon">
            <a href=""><i className="fa-brands fa-github"></i></a>
            </div>

            <div className="icon">
            <a href=""><i className="fa-brands fa-google-plus-g"></i></a>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default LeftContainer
