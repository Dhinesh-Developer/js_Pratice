import {PI,getCircumference,getArea,getVolume} from './MathUtil.js';

console.log(PI); //3.14159

const Circumference = getCircumference(10);
console.log(`${Circumference.toFixed(2)}cm`); //62.83cm

const area = getArea(10);
console.log(`${area.toFixed(2)}cm`); //314.16cm

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm`);  //1256.64cm