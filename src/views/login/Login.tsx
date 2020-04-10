import React from 'react';
import styles from './login.module.less';
import logo from '@assets/images/logo.svg';
import GlobalContext from '@src/common/global-context';
import { RouteComponentProps } from 'react-router';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

function mapStateToProps(state: RootState) {
    const {
        login: { count },
    } = state;
    return { count };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { login } = dispatch;
    return {
        increment: login.INCREMENT,
        decrement: login.decrement,
    };
}

/**
 * 路由参数 Props 类型声明
 */
type RouterProps = RouteComponentProps<any>;

/**
 * 映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
 */
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>;
/**
 * 组件派发 action 集合的类型声明
 */
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;

/**
 * 组件最终接收的所有 Props 类型声明
 */
type LoginProps = RouterProps &
    MapStateFromStoreProps &
    ComponentDispatchProps & {
        routes?: any;
        count?: number;
    };

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component<LoginProps> {
    static contextType = GlobalContext;
    constructor(props, context) {
        super(props, context);
    }

    handleLinkBtnClick = () => {
        this.props.history.push('/home');
    };

    handleAddBtnClick = () => {
        this.props.increment();
    };

    handleDecreaseBtnClick = () => {
        this.props.decrement();
    };

    render() {
        const { count } = this.props;
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <p>This is Login Page </p>
                    <p className={styles.btn} onClick={this.handleLinkBtnClick}>
                        Go to <span className={styles.pageName}>Home</span> Page
                    </p>
                    <p className={styles.btn} onClick={this.handleAddBtnClick}>
                        Add Btn
                    </p>
                    <p className={styles.btn} onClick={this.handleDecreaseBtnClick}>
                        Decrease Btn
                    </p>
                    <p>count : {count}</p>
                </header>
            </div>
        );
    }
}
