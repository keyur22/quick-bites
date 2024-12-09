import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/constants';
import RestaurantList from '../RestaurantList';
import './style.css';
import SearchInput from '../SearchInput';

const RestaurantListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurantList, setRestaurantList] = useState(null);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(null);

  const getRestaurants = (list) =>
    list.filter((item) => item?.card?.card?.info).map((item) => item?.card?.card?.info);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    try {
      const apiResp = await fetch(API_URL);
      const listData = await apiResp.json();
      setIsLoading(false);
      setRestaurantList(getRestaurants(listData?.data?.cards));
      setFilteredRestaurantList(getRestaurants(listData?.data?.cards));
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    const filteredRestaurants = restaurantList?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredRestaurantList(filteredRestaurants);
  }, [searchText]);

  return (
    <>
      <SearchInput searchText={searchText} setSearchText={setSearchText} isLoading={isLoading} />
      <RestaurantList isLoading={isLoading} list={filteredRestaurantList} error={error} />
    </>
  );
};

export default RestaurantListContainer;
