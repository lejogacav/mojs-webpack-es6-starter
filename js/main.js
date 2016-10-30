import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import MojsCurveEditor from 'mojs-curve-editor';

const scaleCurve = new MojsCurveEditor({ name: 'scale' });

const square1 = new mojs.Html({
  el: '#js-el',
  y: { [-300]: -300, curve: 'M0, 0 C10.101525445522112, -1.5300968740935288 24.578551642263555, 1.7142857142857142 30, 87.42857142857143 C33.06687772061731, 107.14285714285714 50, 107 50, 107 C50, 107 62.917147228930936, 104.99294035155644 70, 87.14285714285714 C74.31276966857592, 6.435631077014981 90.03697870960255, 0.67295401695068 100, 0 ' },
  scaleX: { 1: 1, curve: scaleCurve.getEasing() },
  duration: 1000
})
new MojsPlayer({ add: square1 });
