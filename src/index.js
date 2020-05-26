/*
	external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';

/*
	internal imports
*/

import MyComponent from './components/MyComponent';

/*
	app render
*/

ReactDOM.render( <
    MyComponent theQuoter = "It might be said:" / > ,
    document.querySelectorAll('#rootElement')[0]
);
