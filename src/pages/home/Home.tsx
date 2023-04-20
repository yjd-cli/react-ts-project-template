import styles from './home.module.less';

import ViteReactShowArea from '@src/components/vite-react-show-area/ViteReactShowArea';
import { RootDispatch, RootState } from '@src/store';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
// import history from '@src/store/history';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link, Outlet } from 'react-router-dom';

const HomeContainer = () => {
  const [count, setCount] = useState(0);

  const countState = useSelector((state: RootState) => state.global.count);

  console.log(countState);

  const dispatch = useDispatch<RootDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch.global.incrementAsync(1);
  }, []);

  return (
    <div className={styles.container}>
      <h2>HomeContainer</h2>
      <ViteReactShowArea />
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </div>

      <div>
        <div>
          {/* <Link to="/register">To Register</Link> */}
          <div
            onClick={() => {
              // history.push('/register')
              // 必须用 navigate 跳转路由，而不是 history.push
              navigate('/register');
            }}
          >
            To Register 222
          </div>
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
};
export default HomeContainer;
