let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueUI = document.querySelector('#value');

const decrementValue = () => {counterValue -= 1;
    valueUI.textContent = counterValue;
return counterValue }
const incrementValue = () => {counterValue += 1;
    valueUI.textContent = counterValue;
return counterValue }

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);


















// const CounterPlugin = function ({
//     rootSelector = "#counter",
//     initialValue = 0,
//     step = 1,} = {}) {
//         this._value = initialValue;
//         this._step = step;
//         this._refs = this._getRefs(rootSelector);
//     }
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.decrementBtn = document.querySelector('button[data-action="decrement"]');
//     refs.incrementBtn = document.querySelector('button[data-action="increment"]');
//     refs.value = refs.container.querySelector('#value');
//     return refs;
// }
// CounterPlugin.prototype.incrementValue = () => {
//     this._value += this._step;
//     console.log(this._value);
// }
// CounterPlugin.prototype.decrementValue = () => {
//     this._value -= this._step;
//     console.log(this._value);
// }
// CounterPlugin.prototype._updateValueUI = () => {
//     this._refs.value.textContent = this._value
// }
// CounterPlugin.prototype.bindEvents = () => {
// this._refs.decrementBtn.addEventListener('click', this.decrementValue, this.updateValueUI)
// this._refs.incrementBtn.addEventListener('click', this.incrementValue, this.updateValueUI)
// }

// const counter = new CounterPlugin
// console.log(counter);
// // button.addEventListener("click", () => {
// //     console.log("Button was clicked");
// //   });