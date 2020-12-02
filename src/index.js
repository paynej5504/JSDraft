//import statements
import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";

import App from './App';
//import { string } from 'prop-types';


//controls the contents of CookiesProvider and App
ReactDOM.render(
    
<CookiesProvider> 
<App />
</CookiesProvider>,
document.getElementById('root')
);





