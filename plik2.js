
const container = document.querySelector('#container');

const content = document.createElement('div');
container.classList.add('content');
content.textContent = 'Hej jestem czerwony';

container.appendChild(content);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!"

container.appendChild(h3);

const div2 = document.createElement('div');
div2.style.backgroundColor = "pink";
div2.style.border = "black";


content.appendChild(div2);

const h1 = document.createElement("H1");
h1.textContent = "I'm in a div!";

div2.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";

div2.appendChild(p);


const buttons = document.querySelectorAll('button');

buttons.forEach((button)) => {

    button.addEvenListener('click', () => {
        alert(button.id);
    });
}