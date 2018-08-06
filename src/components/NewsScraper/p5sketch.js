export default function sketch (p) {
  const width = 1000;
  const height = 800;
  const synth = window.speechSynthesis;
  let IS_ACTIVE = false;
  let ARTICLE_INDEX = 0;
  let newsArticles = [];
  p.setup = function () {
    p.createCanvas(width, height);
    p.frameRate(60);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.newsArticles) {
      console.log(props.articleIndex);
      newsArticles = props.newsArticles;
      ARTICLE_INDEX = props.articleIndex;
      IS_ACTIVE = props.isActive;
    }
    if (props.isActive === false) {
      synth.cancel();
    }
  };

  let count = 0;
  p.draw = function () {
    const r = Math.sin(p.frameCount / 50) * 100;
    const g = Math.cos(p.frameCount / 10) * 100;
    const b = Math.tan(p.frameCount / 3) * 100;

    // p.background(r, g, b, 40);
    p.background(255,40);
    p.noStroke();
    if (p.frameCount % 10 === 0 && p.frameCount % 20 !== 0) {
      p.fill(b, r, g);
      p.rect(r * 4, g * 3, b, r);
    }
    if (newsArticles.length > 0 && IS_ACTIVE) {   
      newsArticles.forEach((article, articleIndex) => {
        if(articleIndex === 1 || true) {
          // const titleWords = newsArticles[ARTICLE_INDEX].split(' ');
          const scrambledTitle = scramble(article.title);

          // for (let i = 0; i < scrambledTitle.length; i++) {
          //   const x = i * 20;
          //   const y = (articleIndex * 50) + 10;
          //   p.textSize(20);
          //   if (p.frameCount % 20 === 0) {
          //     p.textSize(80);
          //     p.text(article.title.charAt(i), x * 2, y);
          //   }
          // }

          if (p.frameCount % 20 === 15 && p.frameCount % 20 !== 0) {
            synth.cancel();
          }
          if (p.frameCount % 20 === 0) {
            if (articleIndex === ARTICLE_INDEX) {
              p.fill(0, 0, 0, 100);
            } else {
              p.fill(r, g, b, 40);
            }
            for (let i = 0; i < scrambledTitle.length; i++) {
              const x = i * 20;
              const y = (articleIndex * 50) + 10;
              p.textSize(20);
              p.textSize(80);
              p.text(article.title.charAt(i), x * 2, y);
            }
            const activeTitle = newsArticles[ARTICLE_INDEX].title;
            const activeTitleWords = activeTitle.split(' ');
            if (count % 10 === 0) {
              const randIndex = parseInt(Math.random() * activeTitleWords.length);
              const word = activeTitleWords[randIndex];
              console.log('say real word', word);
              const utterThis = new SpeechSynthesisUtterance(word);
              synth.speak(utterThis);
            } else {
              console.log('say scramble', scramble(activeTitle));
              const utterThis = new SpeechSynthesisUtterance(scramble(activeTitle));
              synth.speak(utterThis);
            }
            count++;
          }

        }
      });
    }
  };
}

function scramble (str) {
  return str.split('').sort(() => 0.5 - Math.random()).join('');
}