const dogOutput = document.getElementById('output');
const query = document.getElementById('dog_breed');
const form = document.getElementById('form-control');

async function getDogData(e) {
  e.preventDefault();
  try {
    let start = new Date().getTime();
    const searchTerm = query.value;
    const API_URL = `https://dog.ceo/api/breed/${searchTerm}/images/random`;
    const res = await fetch(`${API_URL}`);
    const json = await res.json();
    let end = new Date().getTime();
    let time = end - start;
    console.log(`API Execution Time: ${time} Milliseconds`);
    showDogData(json);
  } catch (error) {
    console.log(error);
  }
}

function showDogData(json) {
  console.log(json);
  // message with json
  // message with status
}

// EVENT LISTENERS
form.addEventListener('submit', getDogData);

// https://dog.ceo/api/breed/${query}/images/random

// async function getImages() {
//   try {
//     let start = new Date().getTime();
//     await fetch(API_URL)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         const results = document.querySelector('.results');
//         // console.log(res.message)

//         // obj.forEach((item) => {
//         //   results.innerHTML += `
//         //                 <div class="wrapper">
//         //             <div class="card mb-3">
//         //             <img class="card-img-top" src="${res.message}" alt="Card image cap">
//         //             <div class="card-body">
//         //               <h5 class="card-title">Dogs ✅</h5>
//         //               <p class="card-text"></p>
//         //               <p class="card-text"><small class="text-muted"></small></p>
//         //             </div>
//         //             </div>
//         //                 `;
//         // });
//       });
//     let end = new Date().getTime();
//     let time = end - start;
//     console.log(`API Execution Time: ${time} Milliseconds`);
//   } catch (e) {
//     console.log(e);
//   }
// }
