import RestaurantCard from '../RestaurantCard';
import Shimmer from '../ShimmerCard';
import './style.css';

const RestaurantList = ({ isLoading, list = [], error }) => {
  if (isLoading) return <Shimmer />;

  if (list?.length) {
    return (
      <section className='restaurant-list'>
        {list?.map((item) => (
          <RestaurantCard key={item.id} data={item} />
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <div className='restaurant-list-error-container'>
        <span> Oops, Something went wrong!</span>
        <span>Please try again later.</span>
      </div>
    );
  }

  return null;
};

export default RestaurantList;
