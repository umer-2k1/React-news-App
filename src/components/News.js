import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import "../Style/NewsItem.css"
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        pageSize: 10,
        country: 'in',
        category: 'science',
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }


  constructor(){
    super()
    console.log("I am a constructor of NewsItem ")

    this.state = {
      articles: [],
      page: 1,
      loading: false,
    }
}

// fetching news data from newsApi
async UpdateNewsData(){
    this.props.progress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76391eac970d49128bc779b01b64f345&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let newsData = await fetch(url)
    this.props.progress(30)
    let parseData = await newsData.json()
    this.props.progress(70)
    console.log(parseData)
    this.setState({
        articles: parseData.articles,
        totalArticles: parseData.totalResults,
        loading: false
    })
    this.props.progress(100)
}



async componentDidMount(){
    this.UpdateNewsData()
}
   
 handlePrevious = async() =>{
    this.setState({
        page: this.state.page -1,
    })
    this.UpdateNewsData()


}


 handleNext = async() =>{

    if (this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pageSize)) {
        
    }
    else{
    this.props.progress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76391eac970d49128bc779b01b64f345&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})

    let newsData = await fetch(url)
    this.props.progress(30)
    let parseData = await newsData.json()
    this.props.progress(70)
    console.log(parseData)
    this.setState({
        page: this.state.page +1,
        articles: parseData.articles,
        loading: false
        
    })
    this.props.progress(100)
}
}


render() {
    
    // 6rem 0rem
    
    return (
        <>

{/* api key
76391eac970d49128bc779b01b64f345  */}

        <h1 style={{marginTop: "8rem", marginBottom: "3rem",textAlign:"center"}} >CrazyNews - Top <strong>{this.props.category}</strong> Headlines</h1>
        {/* if loeading = true the show Spinner */}
        {this.state.loading && <Spinner />}
          
<div className="main-card">


        {/* if loeading = false then show articles */}
        {!this.state.loading && this.state.articles.map((element) =>{
            
            return (
                <>
<div className="cards"  key={element.url}   >
<NewsItem  image={element.urlToImage} title = {element.title} description = {element.description} newsUrl ={element.url} author ={element.author? element.author : "Unknown"} date ={element.publishedAt} />

</div>
                </>
            
            )
        })}


        
</div>
<div className="page-btn">

<button disabled ={this.state.page<=1} onClick={this.handlePrevious} className="button-1" role="button">	&larr; Previous</button>

<button disabled ={this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} onClick={this.handleNext} className="button-1" role="button">Next &rarr;</button>

</div>      

      
      </>
    )
  }
}
