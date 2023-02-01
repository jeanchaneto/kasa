import "./Banner.css";

const Banner = ({ text, picture }) => {
    return (
      <div className='banner'> 
        <img src={picture} alt="Banner" className="banner-picture"/>
        {text && <h1 className="banner-title">{text}</h1>}
      </div>
    );
  };

  export default Banner;