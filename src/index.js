let div = document.getElementById("div");
let img = document.querySelector("img");
let button = document.querySelector("button");
async function getFact() {
	let response = await fetch("http://numbersapi.com/3/12/date");
    let data = await response.text();
    updateDiv(data);
    updateImg(data)
}

function updateDiv(text) {
    div.innerHTML = text;
}

async function updateImg(text){
    let response =   await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${text}&pageNumber=1&pageSize=1&autoCorrect=true&safeSearch=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a4bb31e2a1mshf2a061b1457527fp1d799bjsn8ce19c4ff635",
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
});
   let x = await  response.json();
   let imgSrc = x.value[0].url;
    console.log(x);
    img.src = imgSrc;

}

window.onload = getFact;

button.addEventListener('click', ()=>{
    getFact();
});
