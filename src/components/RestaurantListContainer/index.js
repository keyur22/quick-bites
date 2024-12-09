import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/constants';
import RestaurantList from '../RestaurantList';
import './style.css';

// Search
// Restaurant List

const RestaurantListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurantList, setRestaurantList] = useState(null);
  const [error, setError] = useState(null);

  const getRestaurants = (list) =>
    list.filter((item) => item?.card?.card?.info).map((item) => item?.card?.card?.info);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    try {
      const apiResp = await fetch(API_URL);
      const listData = await apiResp.json();
      setIsLoading(false);
      setRestaurantList(getRestaurants(listData?.data?.cards));
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      {/* Search input */}
      <RestaurantList isLoading={isLoading} list={restaurantList} error={error} />
    </>
  );
};

export default RestaurantListContainer;
