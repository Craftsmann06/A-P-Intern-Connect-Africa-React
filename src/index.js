import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import News from './views/news'
import ContactUs from './views/contact-us'
import OurStrategy from './views/our-strategy'
import OurWork from './views/our-work'
import Home from './views/home'
import Founders from './views/founders'
import Goals from './views/goals'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/page" />
        <Route component={News} exact path="/news" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={OurStrategy} exact path="/our-strategy" />
        <Route component={OurWork} exact path="/our-work" />
        <Route component={Home} exact path="/" />
        <Route component={Founders} exact path="/founders" />
        <Route component={Goals} exact path="/goals" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
