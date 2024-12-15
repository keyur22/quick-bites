import './style.css';
import { IMG_CDN_URL } from '../../utils/constants';

const MenuCategoryCardList = ({ list }) => {
  const getRecommendedCategory = () => {
    const filteredData = list?.filter(
      (x) => x?.card?.card?.title?.toLowerCase() === 'recommended'
    );

    return filteredData?.length ? filteredData[0]?.card?.card : {};
  };

  const { title, itemCards } = getRecommendedCategory();

  console.log(itemCards);

  if (itemCards?.length) {
    return (
      <section className='menu-category-card-container'>
        <p className='menu-category-title'>{`${title} (${itemCards?.length})`}</p>
        <div>
          {itemCards.map((x) => {
            const { id, name, defaultPrice, description, imageId } =
              x?.card?.info || {};

            return (
              <div className='category-list' key={id}>
                <div className='menu-category-card-description'>
                  <p className='name'>{name}</p>
                  <p className='price'>Rs. {defaultPrice / 100}</p>
                  <p className='cuisines'>{description}</p>
                </div>
                <div className='menu-image'>
                  <img src={`${IMG_CDN_URL}/${imageId}`} alt='menu-item' />
                  <button>Add</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  return null;
};

export default MenuCategoryCardList;
