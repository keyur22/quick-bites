import './style.css';

const Shimmer = () => {
  return (
    <div className='shimmer-card-container'>
      {[...Array(10).keys()].map((x) => (
        <div className='shimmer-card' key={x}>
          <div className='rectangle'></div>
          <div className='description'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
