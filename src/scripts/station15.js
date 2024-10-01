function displayList() {
  const fruits = document.getElementById('fruits');
  const Button = document.getElementById('Button');

    const ulElement = document.createElement('ul');

    const paragraphs = fruits.querySelectorAll('p');
    paragraphs.forEach(function(p) {
        const liElement = document.createElement('li');
        liElement.textContent = p.textContent; 
        ulElement.appendChild(liElement);
    });

    fruits.innerHTML = '';
    fruits.appendChild(ulElement);
  

};