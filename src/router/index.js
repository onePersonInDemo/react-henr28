//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件
import Home from '../pages/home';
import About from '../pages/about';
import Login from '../pages/login/login';
//引入一些模块
import { BrowserRouter as Router, Route } from 'react-router-dom';

function router() {
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default router;
