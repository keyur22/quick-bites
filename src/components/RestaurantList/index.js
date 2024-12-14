import ErrorContainer from '../ErrorContainer';
import RestaurantCard from '../RestaurantCard';
import Shimmer from '../ShimmerCard';
import './style.css';

const RestaurantList = ({ isLoading, list = [], error }) => {
  if (isLoading) return <Shimmer />;

  if (list?.length) {
    return (
      <section className='restaurant-list'>
        {list?.map((item) => (
          <RestaurantCard data={item} key={item?.id} />
        ))}
      </section>
    );
  }

  if (error) {
    return <ErrorContainer />;
  }

  return (
    <div className='restaurant-list-info-container'>
      <span>No Restaurants Available</span>
    </div>
  );
};

export default RestaurantList;
