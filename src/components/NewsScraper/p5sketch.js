export default function sketch (p) {
  const width = 1000;
  const height = 800;
  let newsArticles = [];

  p.setup = function () {
    p.createCanvas(width, height);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.newsArticles) {
      console.log(props.newsArticles);
      newsArticles = props.newsArticles;
    }
  };

  p.draw = function () {
    p.background(250);
    if (newsArticles.length > 0) {
      newsArticles.forEach((article, articleIndex) => {
        const title = article.title;
        for (let i = 0; i < title.length; i++) {
          const x = i * 10;
          const y = Math.random() * 5 + (articleIndex * 50) + 10;
          p.textSize(Math.random() * 5 + 10)
          p.text(title.charAt(i), x, y);
        }
      });
    
    }
  };
}