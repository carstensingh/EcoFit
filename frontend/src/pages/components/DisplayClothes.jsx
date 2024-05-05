import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./display.css"

function ClothingCard({ cloth, index, badges, companyNames, itemLink }) {
  return (
    <Link target="_blank" rel='noreferrer' to={itemLink} style={{ textDecoration: 'none' }}> {/* Wraps the entire card */}
      <div style={{width: '300px', height: '600px', paddingRight: '40px'}} 
          className="bg-white rounded-lg flex flex-col text-center hover:border hover:rounded-none transition-all">
          <img src={cloth} alt={`Cloth ${index}`} 
              className="object-contain rounded-t-lg hover:rounded-none transition-all"
              style={{ maxWidth: '300px', maxHeight: '300px' }}/>
          <p className="mt-5 mb-1 font-bold text-xl"> {companyNames[index]}</p>
          <p className="text-sm mb-3"> $99.99 </p>
          <hr className="h-px w-3/4 self-center bg-gray-200 border-0 dark:bg-gray-300 mb-3"></hr>
          <div className="grid grid-cols-3 gap-y-6 mt-2 justify-items-center">
            {badges.map((badge, badgeIndex) => (
              <img src={badge} alt={`Badge ${badgeIndex}`}
                className="rounded-lg hover:scale-125"
                style={{ maxWidth: '40px', maxHeight: '40px'}}
              />
            ))}
          </div>
      </div>
    </Link>
);
}
function DisplayClothes({responseData}) {
  console.log(responseData);
  const clothes = responseData.map(item => `data:image/png;base64,${item.image_data}`);
  const companyNames = responseData.map(item => item.company_name);
  const itemLinks = responseData.map(item => item.image_link);
  const badges = [
    './badges/bcorp.png',
    './badges/criteria.png',
    './badges/fairtrade.png',
    './badges/fsc.png',
    './badges/gots.png',
    './badges/natural.png',
    './badges/oeko.png',
    './badges/package.png',
    './badges/recycle.png'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true, 
    centerPadding: '50px'
  };

  return (
    <div className="p-4">
        <Slider {...settings}>
            {clothes.map((cloth, index) => (
                <div  key={index} style={{marginLeft: '20px'}}>
                    <ClothingCard cloth={cloth} index={index} badges={badges} companyNames={companyNames}itemLink={itemLinks[index]}  />
                </div>
            ))}
        </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={`${className} custom-arrow`}
      style={{right: "10px", background: 'none',transform: "scale(0.2,0.2)"}}
      onClick={onClick}
    >
      <img src="./right-arrow.png" alt="Next" />  
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={`${className} custom-arrow`} 
      style={{ ...style, display: "block", left: "2px" , zIndex:"9", top:"2vh", background: 'none', transform: "scale(0.2,0.2)"}}
      onClick={onClick}
    >
      <img src="./left-arrow.png" alt="Previous" />
    </div>
  );
}
export default DisplayClothes;
