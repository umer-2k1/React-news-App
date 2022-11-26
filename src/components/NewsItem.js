import React, { Component } from 'react'
import "../Style/NewsItem.css"

export default class NewsItem extends Component {
  
  render() {
   
    const {image, title, description, newsUrl, author, date} = this.props
    return (
      <>
        

      
      

      {/* looping starts here */}

{/* 1st */}


<div className="p-image">

<img src={!image ? "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3132,w_5568,x_0,y_302/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1657253402/2022-07-07T190843Z_1599408149_RC277V9NHFDZ_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-PUTIN_ypokla": image } />
</div>

<div className="title">
{/* <h2>{title.length>90 ?title.slice(0,90)+"...": title}</h2> */}
<h2>{title?title.slice(0,90)+"...": ""}</h2>
</div>


<div className="desc">
{/* <p>{description.length > 250?description.slice(0,250)+"...": description}</p> */}
<p>{description?description.slice(0,230)+"...": ""}</p>

<h5 style={{marginTop: "1rem", textAlign: "left", paddingLeft:"1rem", height: "3rem"}} >By {author} on {new Date(date).toLocaleString()}</h5>
</div>


<div className="btn">

<a href = {newsUrl} target="_blank" type="submit">Read More</a>
</div>










      </>
    )
  }
}
