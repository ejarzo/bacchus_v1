import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './p5sketch';
import styles from './styles.module.css';

class NewsScraperComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isActive: false,
      articleIndex: 0,
    };
  }

  render () {
    return (
      <div>
        <button onClick={() =>
          this.setState({ isActive: !this.state.isActive})}
        >
          {this.state.isActive ? 'Stop' : 'Go'}
        </button>
        {/*<button onClick={() =>
          this.setState({
            articleIndex: parseInt(Math.random() * this.props.newsArticles.length)
          })}
        >
          New Article
        </button>*/}
        <P5Wrapper
          isActive={this.state.isActive}
          sketch={sketch}
          newsArticles={this.props.newsArticles}
          articleIndex={this.state.articleIndex}
        />
        <ul className={styles.articlesList}>
          {
            this.props.newsArticles.map(article => (
              <li key={article.title}>
                <img src={article.urlToImage} />
                <h2>
                  {article.title}
                </h2>
                <p>
                  {article.description}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default NewsScraperComponent;
