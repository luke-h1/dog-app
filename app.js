const API_URL = `https://dog.ceo/api/breeds/image/random` 
const btn = document.getElementById('getDogs').addEventListener('click', getImages); 
const results = document.getElementById('results');  
// API RESPONSE 
// MESSAGE: URL 
// STATUS: SUCCESS 


async function getImages(){
  try {
    let start = new Date().getTime();     
    await fetch(API_URL) 
      .then((res) => res.json())
      .then((res) => { 
        console.log(res); 
      })


  } catch (e) {
      console.log(e); 
  }
}
