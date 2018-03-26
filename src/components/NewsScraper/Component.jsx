import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './p5sketch';
import styles from './styles.module.css';

function NewsScraperComponent (props) {
  return (
    <div>
      {/* <P5Wrapper sketch={sketch} newsArticles={props.newsArticles}/> */}
      <ul className={styles.articlesList}>
        {
          props.newsArticles.map(article => (
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

export default NewsScraperComponent;
