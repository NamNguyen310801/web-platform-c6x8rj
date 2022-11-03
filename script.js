var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.btn-removeAll');
var tags = ['Nodejs', 'Reactjs'];
function render() {
  content.innerHTML = '';
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `
    <li>
    ${tag}
    <i class="bx bx-x" onclick="removeTag(${i})" ></i>
    </li>
    `;
  }
  content.appendChild(input);
  // input.focus();
}
render();
input.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    tags.push(input.value.trim());
    render();
  }
});
function removeTag(index) {
  tags.splice(index, 1);
  render();
}
btnRemoveAll.addEventListener('click', function () {
  tags = [];
  render();
});
