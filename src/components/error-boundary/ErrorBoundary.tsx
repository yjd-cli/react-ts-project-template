import * as React from "react";

interface Props {

}

interface State {
    hasErrors: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {hasErrors: false};
    }

    // 此生命周期函数可以用来捕获错误和信息
    componentDidCatch(err, info) {
        if (err) {
            console.log(err);
            this.setState({
                hasErrors: true
            });
        }
    }

    render() {
        if (this.state.hasErrors) {
            return <div style={{position: "relative", display: "inline-block"}}>子组件发生未知错误，无法正常显示</div>;
        }
        return this.props.children;
    }
}
