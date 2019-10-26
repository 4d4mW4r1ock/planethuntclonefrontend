import React from 'react';

//import das rotas
import Routes from './routes';

//import de componentes
import Header from './components/Header';
import Main from './pages/main';

//import da api
import api from './services/api';

//import do css padrão da aplicação
import './styles.css';  

const App = () => (
  <div className="App">
      <Header />
      <Routes />
  </div>
);

export default App;
