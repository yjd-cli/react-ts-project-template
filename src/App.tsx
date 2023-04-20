import './App.less';

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

console.log(import.meta.env);

function App() {
  const location = useLocation();
  console.log('location: ', location);

  useEffect(() => {
    console.log('App 挂载');
    return () => {
      console.log('App 卸载');
    };
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
