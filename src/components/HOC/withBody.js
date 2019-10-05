import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function withBody(Component) {
	return function WrapperComponent(props) {
    	return (<React.Fragment><Header /><body><Component {...props} /></body><Footer /></React.Fragment>);
    }
};