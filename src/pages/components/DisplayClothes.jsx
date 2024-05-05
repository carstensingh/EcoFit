import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function ClothingCard({ cloth, index, badges }) {
  return (
      <div style={{width:'300px', height:'600px'}} 
          className="bg-white rounded-lg flex flex-col text-center hover:border hover:rounded-none transition-all">
          <img src={cloth} alt={`Cloth ${index}`} 
              className="object-contain rounded-t-lg hover:rounded-none transition-all"
              style={{ maxWidth: '300px', maxHeight: '300px' }}/>
          <p className="mt-5 mb-1 font-bold text-xl"> Company Name </p>
          <p className="text-sm mb-3"> $99.99 </p>
          <hr className="h-px w-3/4 self-center bg-gray-200 border-0 dark:bg-gray-300 mb-3"></hr>
          <div className="grid grid-cols-3 gap-y-6 mt-2 justify-items-center">
            {badges.map((badge, badgeIndex) => (
              <Link to="/Criteria" key={badgeIndex}>
                <img
                  src={badge}
                  alt={`Badge ${badgeIndex}`}
                  className="rounded-lg hover:scale-125"
                  style={{ maxWidth: '40px', maxHeight: '40px'}}
                />
              </Link>
            ))}
          </div>
      </div>
  );
}
function DisplayClothes() {
  const clothes = [
    'https://dummyimage.com/300x300/000/fff',
    'https://dummyimage.com/300x300/333/fff',
    'https://dummyimage.com/300x300/666/fff',
    'https://dummyimage.com/300x300/000/fff',
    'https://dummyimage.com/300x300/333/fff',
    'https://dummyimage.com/300x300/666/fff',
    'https://i.etsystatic.com/22819560/r/il/a5f6b8/3963743381/il_570xN.3963743381_ak2s.jpg',
    'https://www.rei.com/media/a306fcac-92ef-4ef3-9f61-a33654f08ec9.jpg?size=576x768'
  ];

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
    prevArrow: <PrevArrow />
  };

  return (
    <div className="p-4">
        <Slider {...settings}>
            {clothes.map((cloth, index) => (
                <div key={index}>
                    <ClothingCard cloth={cloth} index={index} badges={badges} />
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
          className={className}
          style={{ 
              ...style, 
              display: "block", 
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "15px solid black", // Right-pointing triangle
              width: 0, 
              height: 0,
              zIndex: 9
          }}
          onClick={onClick}
      />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ 
              ...style, 
              display: "block", 
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "15px solid black", // Left-pointing triangle
              width: 0, 
              height: 0,
              zIndex: 9
          }}
          onClick={onClick}
      />
  );
}
export default DisplayClothes;
