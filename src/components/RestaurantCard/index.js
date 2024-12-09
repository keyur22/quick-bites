import { CDN_URL } from '../../utils/constants';
import './style.css';

const RestaurantCard = ({ data = {} }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName, sla } = data;

  return (
    <div className='card'>
      <div className='restaurant-image-container'>
        <img className='restaurant-image' src={`${CDN_URL}/${cloudinaryImageId}`} alt={name} />
      </div>
      <div className='description'>
        <span className='name'>{name}</span>
        <span className='ratings'>
          <span>{`${avgRating} . `}</span>
          {sla?.slaString}
        </span>
        <span className='cuisines'>{cuisines.join(', ')}</span>
        <span>{areaName}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
