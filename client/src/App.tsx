import React from 'react';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Logo from 'components/Logo'
import Search from 'components/Search'

const App: React.FC = () => {
  return (
    <>
      <Map />
      <Sidebar />
      <Logo />
      <Search />
    </>
  );
}
export default App;
