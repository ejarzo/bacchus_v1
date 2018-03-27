import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch2 from './p5sketch2';
import styles from './styles.module.css';

function NewsScraperComponent (props) {
  return (
    <div>
      <P5Wrapper
        sketch={sketch2}
        article={props.newsArticles[props.articleIndex]}
      />
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
