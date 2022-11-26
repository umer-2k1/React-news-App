import React, { Component } from 'react'

// manually imported
import Navbar from './components/Navbar'
import News from './components/News'
// loading bar imported
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";

export default class App extends Component {
  pageNo = 10

  state = {
      progress: 0,
  }

  setProgress = (progress) => {
    this.setState({
      setProgress: progress,
    })
  }

  render() {
    return (
      <>

<Router>
{/* top loader  */}

      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.setProgress}
        // onLoaderFinished={() => setProgress(0)}
/>

<Navbar/>
<Routes>

<Route exact path ="/" element = { <News progress={this.setProgress}  key="general" pageSize ={this.pageNo} country ='in' category = "general" /> }/>

<Route exact path ="/general" element = { <News progress={this.setProgress}  key="general" pageSize ={this.pageNo} country ='in' category = "general" /> }/>

<Route exact path ="/entertainment" element = { <News progress={this.setProgress}  key="entertainment" pageSize ={this.pageNo} country ='in' category = "entertainment" /> }/>

<Route exact path ="/health" element = { <News progress={this.setProgress}  key="health" pageSize ={this.pageNo} country ='in' category = "health" /> }/>

<Route exact path ="/science" element = { <News progress={this.setProgress}  key="science" pageSize ={this.pageNo} country ='in' category = "science" /> }/>

<Route exact path ="/sports" element = { <News progress={this.setProgress}  key="sports" pageSize ={this.pageNo} country ='in' category = "sports" /> }/>

<Route exact path ="/technology" element = { <News progress={this.setProgress}  key="technology" pageSize ={this.pageNo} country ='in' category = "technology" /> }/>

<Route exact path ="/business" element = { <News progress={this.setProgress}  key="business" pageSize ={this.pageNo} country ='in' category = "business" /> }/>




</Routes>

</Router>


      </>
    )
  }
}
