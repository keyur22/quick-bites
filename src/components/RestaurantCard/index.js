import { useNavigate } from 'react-router-dom';
import { IMG_CDN_URL } from '../../utils/constants';
import './style.css';

const RestaurantCard = ({ data = {} }) => {
  const navigate = useNavigate();

  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName,
    sla,
    costForTwo
  } = data;

  return (
    <div
      className='card'
      onClick={() => navigate('/restaurant/' + data?.id)}
      role='presentation'
    >
      <div className='restaurant-image-container'>
        <img
          className='restaurant-image'
          src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
          alt={name}
        />
      </div>
      <div className='description'>
        <span className='name'>{name}</span>
        <span className='cuisines'>{cuisines.join(', ')}</span>
        <span className='areaName'>{areaName}</span>
        <span className='ratings'>
          <span
            style={
              avgRating < 4
                ? { backgroundColor: 'var(--light-red)' }
                : avgRating === '--'
                  ? { backgroundColor: 'white', color: 'black' }
                  : { color: 'white' }
            }
          >
            {avgRating}
          </span>
          <span>•</span>
          <span>{sla?.slaString}</span>
          <span>•</span>
          <span>{costForTwo}</span>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
