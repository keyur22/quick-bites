import { useParams } from 'react-router-dom';
import './style.css';
import MenuCategoryCardList from '../MenuCategoryCard';
import { IMG_CDN_URL, RESTAURANT_MENU_URL } from '../../utils/constants';
import { useEffect, useState } from 'react';
import ErrorContainer from '../ErrorContainer';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMenuInfo = () => {
    const filteredData = menuData?.filter(
      (x) =>
        x?.card?.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
    );

    return filteredData?.length ? filteredData[0]?.card?.card?.info : {};
  };

  const getCategoriesList = () => {
    let categoriesMenu = [];

    menuData?.forEach((x) => {
      if (x?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length) {
        categoriesMenu = x?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      }
    });

    return categoriesMenu?.filter(
      (x) =>
        x?.card?.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  };

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    sla,
    areaName,
    totalRatingsString,
    cloudinaryImageId
  } = getMenuInfo();

  const fetchRestaurantMenu = async () => {
    setIsLoading(true);
    try {
      const apiResp = await fetch(`${RESTAURANT_MENU_URL}/${id}`);
      const resp = await apiResp.json();
      setIsLoading(false);
      setMenuData(resp?.data?.cards);
    } catch (err) {
      setError(err?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  if (isLoading) {
    return (
      // Shimmer can be added here
      <section className='restaurant-details-loading-container'>
        Loading...
      </section>
    );
  }

  if (error || !menuData?.length) {
    return <ErrorContainer />;
  }

  return (
    <section className='restaurant-details-container'>
      <h1 className='title'>{name}</h1>
      <div className='description'>
        <img
          src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
          alt={name}
          className='restaurant-img'
        />
        <div className='details'>
          <p className='price'>{`${avgRatingString} (${totalRatingsString}) - ${costForTwoMessage}`}</p>
          <p className='cuisines'>{cuisines?.join(', ')}</p>
          <p className='location'>
            Outlet: <span>{areaName}</span>
          </p>
          <p className='delivery-time'>{sla?.slaString?.toLowerCase()}</p>
        </div>
      </div>
      <p className='menu-title'>Menu</p>
      <MenuCategoryCardList list={getCategoriesList()} />
    </section>
  );
};

export default RestaurantDetails;
