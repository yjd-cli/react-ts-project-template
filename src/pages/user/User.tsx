import React from 'react';
import { Link } from 'react-router-dom';
import ViteReactShowArea from '@src/components/vite-react-show-area/ViteReactShowArea';

const UserContainer = () => {
  return (
    <div>
      <h2>UserContainer</h2>
      <ViteReactShowArea />
      <div>
        <div>
          <Link to="/home">To Home</Link>
        </div>
      </div>
    </div>
  );
};
export default UserContainer;
