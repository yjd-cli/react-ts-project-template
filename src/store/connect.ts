import {
    connect as nativeConnect,
    MapDispatchToPropsParam,
    MapStateToPropsParam,
    MergeProps,
    Options,
} from 'react-redux';

export const connect = nativeConnect as any;

/*import { ComponentClass } from 'react';
import {
    connect as nativeConnect,
    MapDispatchToPropsParam,
    MapStateToPropsParam,
} from 'react-redux';
import { withRouter as nativeWithRouter } from 'react-router-dom';

export type ComponentDecorator<P = any> = <T extends ComponentClass<P>>(WrappedComponent: T) => T;

export const connect: <P, S>(
    mapState: MapStateToPropsParam<Partial<P>, P, S>,
    // mapDispatch?: MapDispatchToPropsParam<Partial<P>, P>
    mapDispatch?: any,
) => ComponentDecorator = nativeConnect as any;

export const withRouter: ComponentDecorator = nativeWithRouter as any;*/
