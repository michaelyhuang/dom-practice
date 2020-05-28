const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm red!";
content.style.color = 'red';

container.appendChild(content)

const blueheading = document.createElement('h3');
blueheading.classList.add('blueheading');
blueheading.textContent = "Hey I'm blue!";
blueheading.style.color = 'blue';
content.appendChild(blueheading);

const div = document.createElement('div');
div.style.cssText = 'background: pink; padding: 40px 40px 40px 40px; color: black; border-style: solid';
content.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const pdiv = document.createElement('pdiv');
pdiv.textContent = "ME TOO"
div.appendChild(pdiv)

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

btn3.addEventListener('click', function (e) {
    console.log(e);
});

btn4.addEventListener('click', function (e) {
    console.log(e.target);
});

btn4.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });