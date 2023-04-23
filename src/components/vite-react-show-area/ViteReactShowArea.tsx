/**
 * @description：
 */
import reactLogo from '@src/assets/svgs/react.svg';
import React from 'react';

interface ViteReactShowAreaProps {
  [props: string]: any;
}

const ViteReactShowArea = (props: ViteReactShowAreaProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;
  return (
    <div style={{ border: '1px solid red', padding: 20 }}>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/vite.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default ViteReactShowArea;
