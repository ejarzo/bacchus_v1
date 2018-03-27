export default function sketch2 (p) {
  const width = 1000;
  const height = 800;
  const synth = window.speechSynthesis;
  let headline = '';

  p.setup = function () {
    p.createCanvas(width,height);
    p.frameRate(60);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.article) {
      headline = props.article.title;
      const utterThis = new SpeechSynthesisUtterance(headline);
      synth.speak(utterThis);
    }
  };

  p.draw = function () {
    let x = 10;
    let y = 10;
    p.background(255);
    p.text(headline, x, y);
  };
}