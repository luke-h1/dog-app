const API_URL = `https://dog.ceo/api/breeds/image/random`;
const btn = document.getElementById('getDogs').addEventListener('click', getImages);
const results = document.getElementById('results');
// API RESPONSE
// MESSAGE: URL
// STATUS: SUCCESS

async function getImages() {
    try {
        let start = new Date().getTime();
        await fetch(API_URL)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                const output  = ` 
                <div class="wrapper"> 
                <div class="card mb-3">
                <img class="card-img-top" src="${res.message}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Dogs ✅</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small class="text-muted"></small></p>
                </div>
                </div> 
        `;
        const results = document.querySelector('.results'); 
        results.innerHTML = output;

                let end = new Date().getTime();
                let time = end - start;
                console.log(`API Execution Time: ${time} Milliseconds`);
            });
    } catch (e) {
        console.log(e);
    }
}
