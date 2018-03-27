import React from 'react';
import axios from 'axios';
import NewsScraperComponent from './Component';
import { newsApiKey, thesaurusApiKey } from 'utils/apiKeys.js';

class NewsScraperContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      newsArticles: [],
      articleIndex: 0,
    };

    this.getNews = this.getNews.bind(this);
    this.incrementArticleIndex = this.incrementArticleIndex.bind(this);
  }
  
  componentDidMount () {
    this.getNews();
  }

  incrementArticleIndex () {
    const currI = this.state.articleIndex;
    this.setState({
      articleIndex: currI + 1,
    });
  }

  getNews () {
    const url = 'https://newsapi.org/v2/top-headlines/';
    const params = {
      country: 'us',
      apiKey: newsApiKey,
    };
    axios.get(url, { params })
      .then(response => {
        const newsArticles = response.data.articles;
        this.setState({ newsArticles });
        newsArticles[0].title.split(' ').forEach(word => {
          this.getSynonym(word);
        });
        this.getSynonym('test');
      });
  }

  getSynonym (word) {
    const url = 'http://words.bighugelabs.com/api/2/' + thesaurusApiKey + '/' + word + '/json';
    axios.get(url)
      .then(response => {
        const synonyms = response.data;
        console.log('word:', word);
        console.log(synonyms);
        // this.setState({ sy });
      }).catch(error => {
        console.log('error for...', word);
      });
  }

  render () {
    return (
      <div>
        <button onClick={this.incrementArticleIndex}>
          One More
        </button>
        <NewsScraperComponent
          newsArticles={this.state.newsArticles}
          articleIndex={this.state.articleIndex}
        />
      </div>
    );
  }
}

export default NewsScraperContainer;
