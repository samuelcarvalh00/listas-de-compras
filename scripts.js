function addItem() {
  const input = document.getElementById('input-maneiro');
  const itemText = input.value.trim();
  
  if (itemText === '') {
    alert('Por favor, digite um item!');
    return;
  }

  const list = document.getElementById('shoppinglist');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${itemText}</span>
    <button class="BUTAODEREMOVER" onclick="removeItem(this)">Remover</button>
  `;
  list.appendChild(li);
  input.value = '';
  input.focus();
}

function removeItem(button) {
  const li = button.parentElement;
  li.remove();
}

document.getElementById('input-maneiro').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addItem();
  }
});