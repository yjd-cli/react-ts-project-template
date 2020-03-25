/**
 * 样式
 */
import 'antd/dist/antd.css';
import '@styles/index.less';

/**
 * 第三方库
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';

/**
 * 自定义脚本
 */
import { routesConfig } from '@routes/routes-config';
import { renderRoutes } from '@routes/route-loader';
import store from '@store/index';
import history from '@store/history';

/**
 * 组件
 */
// import App from './App';

function renderApp() {
    ReactDOM.render(
        <ConfigProvider locale={zh_CN}>
            <Provider store={store}>
                {/*<BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>*/}
                <ConnectedRouter history={history}>{renderRoutes(routesConfig)}</ConnectedRouter>
            </Provider>
        </ConfigProvider>,
        document.getElementById('root'),
    );
}

renderApp();

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}
