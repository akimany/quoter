/*
	external imports
*/
import React from 'react';
import ReactDOM from 'react-dom';
// it might be said
var fs = require('fs');
/*
	internal imports
*/

import MyComponent from './components/MyComponent';

/*
	app render
*/

ReactDOM.render(
  <MyComponent theQuoter="It might be said:" />,
  document.querySelectorAll('#rootElement')[0]
);
