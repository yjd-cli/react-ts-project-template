import styles from './register.module.less';

import ViteReactShowArea from '@src/components/vite-react-show-area/ViteReactShowArea';
import { RootDispatch, RootState } from '@src/store';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function RegisterContainer() {
  const countState = useSelector((state: RootState) => state.global.count);
  console.log(countState);

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch.global.incrementAsync(1);
  }, []);

  return (
    <div className={styles.container}>
      <h2>RegisterContainer</h2>
      <ViteReactShowArea />
      <div>
        <div>
          <Link to="/home">To Home</Link>
        </div>
        <div>
          <Link to="/login">To Login</Link>
        </div>
        <div>
          <Link to="/user">To User</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterContainer;
