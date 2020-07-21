import React from 'react';
import classes from './App.module.css';
import Layout from './Component/Layout/Layout';
import Landing from './Component/Landing/Landing';
function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Landing/>
      </Layout>
    </div>
  );
}

export default App;
