const output = document.getElementById('output');

function log(text) {
  output.textContent += text + '\n';
}
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    log(this.name + ' barks.');
  }
}
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    log('Count: ' + count);
  }
}
function getDataCallback(cb) {
  setTimeout(() => cb('Callback data'), 500);
}
function getDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Promise data'), 500);
  });
}
async function asyncExample() {
  const data = await getDataPromise();
  log('Async/Await got: ' + data);
}
output.textContent = ''; 
const dog = new Dog('Rex');
dog.speak();
const counter = makeCounter();
counter();
counter();
getDataCallback(data => log('Callback received: ' + data));
getDataPromise().then(data => log('Promise received: ' + data));
asyncExample();
