import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import 'normalize.css';
import './styles/common.css';
import RestaurantListContainer from './components/RestaurantListContainer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <RestaurantListContainer />
      </main>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
