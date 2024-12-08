import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import 'normalize.css';
import './styles/common.css';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
