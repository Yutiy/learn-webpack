import TestImg from './test.jpg';
import './index.less';

const fn1 = () => {
  console.log('hello loader');
}

fn1();

let img = document.createElement('img');
img.src = TestImg;
document.body.appendChild(img);
