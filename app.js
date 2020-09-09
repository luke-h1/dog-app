const dogOutput = document.getElementById('output');
const query = document.getElementById('dog_breed');
const form = document.getElementById('form-control');

async function getDogData(e) {
  e.preventDefault();
  try {
    let start = new Date().getTime();
    const searchTerm = query.value;
    const API_URL = `https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breed/${searchTerm}/images/random/5`;
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    let end = new Date().getTime();
    let time = end - start;
    console.log(`API Execution Time: ${time} Milliseconds`);
    addToDOM(data);
  } catch (error) {
    console.log(error);
  }
}

function addToDOM(data) {
  const div = document.createElement('div');
  div.innerHTML = data.message
    .map(
      (dog) => `
      <img class="col s6 center-align responsive-img"  src="${dog}" />
      `
    )
    .join('');
  dogOutput.appendChild(div);
}

form.addEventListener('submit', getDogData);
