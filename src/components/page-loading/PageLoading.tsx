/**
 * 页面正在加载中效果
 * @author 姚嘉东
 */

import React from 'react';
import styles from './page-loading.less';
import { Spin } from 'antd';

export class PageLoading extends React.Component<
    {
        message?: string;
        className?: string;
        style?: React.CSSProperties;
    },
    {}
> {
    render() {
        const { style, message = '加载中...', className } = this.props;
        return (
            <div className={`${styles.container}  ${className}`} style={style}>
                <Spin size="large" tip={message} />
            </div>
        );
    }
}
