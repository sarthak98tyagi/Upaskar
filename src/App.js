import React from 'react';
import classes from './App.module.css';
import {Route,Switch, Redirect} from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Landing from './Component/Landing/Landing';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
// import Decor from './Component/Categories/Decor/Decor';
// import FurnitureLightning from './Component/Categories/Furniture&Lightning/Furniture&Lightning';
// import KitchenWare from './Component/Categories/Kitchenware/Kitchenware';
// import TableWare from './Component/Categories/Tableware/Tableware';
function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
            {/* <Route path="/Categories/Decor" exact component={Decor}/>
            <Route path="/Categories/FurnitureandLightning" exact component={FurnitureLightning}/>
            <Route path="/Categories/KitchenWare" exact component={KitchenWare}/>
            <Route path="/Categories/TableWare" exact component={TableWare}/> */}
            <Route path="/About" exact component={About}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/" exact  component={Landing}/>
            <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
