import React from 'react';
import classes from './App.module.css';
import {Route,Switch, Redirect} from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Landing from './Component/Landing/Landing';
import Decor from './Component/Categories/Decor/Decor';
import FurnitureLightning from './Component/Categories/Furniture&Lightning/Furniture&Lightning';
import KitchenWare from './Component/Categories/Kitchenware/Kitchenware';
import TableWare from './Component/Categories/Tableware/Tableware';
function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
            <Route path="/Categories/Decor" component={Decor}/>
            <Route path="/Categories/FurnitureandLightning" component={FurnitureLightning}/>
            <Route path="/Categories/KitchenWare" component={KitchenWare}/>
            <Route path="/Categories/TableWare" component={TableWare}/>
            {/* <Route path="/Categories/Decor" component={Decor}/> */}
            {/* <Route path="/Categories/Decor" component={Decor}/> */}
            <Route path="/" exact  component={Landing}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
