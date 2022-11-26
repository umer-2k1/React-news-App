import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <>
        <img 
    
    style={{ marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    marginBottom: "2rem", }}

    src={loading} alt="" />
      </>
    )
  }
}
