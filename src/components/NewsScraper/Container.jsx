import React from 'react';
import axios from 'axios';
import NewsScraperComponent from './Component';
import { newsApiKey } from 'utils/apiKeys.js';

class NewsScraperContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsArticles: [],
    };

    this.getNews = this.getNews.bind(this);
  }
  
  componentDidMount () {
    this.getNews();
  }

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines/';
    const params = {
      country: 'us',
      apiKey: newsApiKey,
    }
    axios.get(url, { params })
    .then(response => {
      const newsArticles = response.data.articles;
      console.log(response);
      this.setState({ newsArticles });
    })
  }

  render() {
    console.log("render called");
    return (
      <div>
        <NewsScraperComponent
          newsArticles={this.state.newsArticles}
        />
      </div>
    );
  }
}

export default NewsScraperContainer;
