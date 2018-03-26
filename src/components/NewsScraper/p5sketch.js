export default function sketch (p) {
  const width = 1000;
  const height = 800;
  const synth = window.speechSynthesis;

  let newsArticles = [];
  p.setup = function () {
    p.createCanvas(width, height);
    p.frameRate(60);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.newsArticles) {
      console.log(props.newsArticles);
      newsArticles = props.newsArticles;
    }
  };

  p.draw = function () {
    const r = Math.sin(p.frameCount / 50) * 100;
    const g = Math.cos(p.frameCount / 10) * 100;
    const b = Math.tan(p.frameCount / 3) * 100;

    p.background(r, g, b, 40);
    p.noStroke();
    if (p.frameCount % 10 === 0) {
      p.fill(b, r, g);
      p.rect(r * 4, g * 3, b, r);
    }

    if (newsArticles.length > 0) {      
      newsArticles.forEach((article, articleIndex) => {
        p.fill(r, g, b, 40);
        if(articleIndex === 1 || true) {
          
          const scrambledTitle = article.title.split('').sort(() => 0.5 - Math.random()).join('');
          for (let i = 0; i < scrambledTitle.length; i++) {
            const x = i * 20;
            ///const rate = Math.sin(p.frameCount / 50) * 50;
            const y = Math.random() * 10 * Math.sin(p.frameCount / 50) + (articleIndex * 50) + 10;
            //p.textSize(Math.random() * 5 + 10);
            p.textSize(20);
            //p.fill(0);
            p.text(scrambledTitle.charAt(i), x, y);
            if (p.frameCount % 10 === 5) {
              synth.cancel();
            }
            if (p.frameCount % 20 === 0) {
              const utterThis = new SpeechSynthesisUtterance(scrambledTitle);
              synth.speak(utterThis);
              //p.fill(255);
              p.textSize(80);
              p.text(article.title.charAt(i), x * 2, y);
            }
          }
        }
      });
    }
  };
}