import './style.css';
import MenuItemImg from '../../../public/menu.png';

const MenuCategoryCardList = ({ list }) => {
  console.log(list);

  return (
    <section className='menu-category-card-container'>
      <p className='menu-category-title'>Recommended (20)</p>
      <div className='category-list'>
        <div className='menu-category-card-description'>
          <p className='name'>
            Pesto Chicken Paradiso Medium Pizza (Serves 2) (Save 15% Extra){' '}
          </p>
          <p className='price'>Rs. 469</p>
          <p className='cuisines'>
            Italian Basil Pesto Sauce, Juicy Chicken Chunks,Capsicum, Tomato,
            Onion, Mozzarella Cheese
          </p>
        </div>
        <div className='menu-image'>
          <img src={MenuItemImg} alt='menu-item' />
        </div>
      </div>
    </section>
  );
};

export default MenuCategoryCardList;
