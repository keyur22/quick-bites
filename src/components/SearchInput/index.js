import './style.css';

const SearchInput = ({ searchText, setSearchText, isLoading }) => {
  return (
    <div className='search-restaurant-input-container'>
      <input
        type='text'
        className='search-restaurant-input'
        placeholder='Search for restaurants'
        value={searchText}
        onChange={(e) => setSearchText(e?.target?.value)}
        disabled={isLoading}
      />
    </div>
  );
};

export default SearchInput;
