//import statements
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
//import NotFound from './404';
import Handlebars from "handlebars";
//import "./styles.css";

// attempt at fixing OWASP errors (still working on it)
//import 'dont-sniff-mimetype';
/*import {Helmet} from 'react-helmet';


const nosniff = require('dont-sniff-mimetype');
nosniff();*/

//BEGIN HANDLEBARS TEMPLATE
const hbr = `
<h1>{{name}} - PAGE NOT FOUND
`;

const template = Handlebars.compile(hbr);

function PageNotFound() {
  const data = {
    name: "404"
  };
  return (
    <div className="PageNotFound">
      <div dangerouslySetInnerHTML={{ __html: template(data) }} />
    </div>
  );
}
//END HANDLEBARS TEMPLATE



// routing starts
const App = () => (
  
  <BrowserRouter>
    <div>
      
      <main>
      
        <Switch>
          <Route exact path="/" component={Home} />
		  <Route exact path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
        
      </main>
      
    </div>
  </BrowserRouter>
);

//export app
export default App;