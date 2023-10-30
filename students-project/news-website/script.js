const API_key = "d3799d1aba104287a0644763c03dc92f"
const URL = "https://newsapi.org/v2/everything?q="

window.addEventListener("load", fetchNews("india"))

async function fetchNews(query){

    const res = await fetch(`${URL}${query}&apiKey=${API_key}`)
    const data = await res.json()
    const articles = data.articles
    console.log(articles)
    bindData(articles)
}

function bindData(articles){
    const cardsContainer = document.getElementById("main-card-container")
    const card = document.getElementById("template-news-card")

    cardsContainer.innerHTML = ""

    articles.forEach((article) => {
        let cardClone = card.content.cloneNode(true)
        fillDataInCard(cardClone, article)
        cardsContainer.appendChild(cardClone)
    });
}

function fillDataInCard(cardClone, article){
    let newsImage = cardClone.getElementById("news-image")
    let newsTitle = cardClone.getElementById("news-title")
    let newsSource = cardClone.getElementById("news-source")
    let newsDesc = cardClone.getElementById("news-desc")

    newsImage.src = article.urlToImage
    newsTitle.innerHTML = article.title
    newsDesc.innerHTML = article.description

    let date = new Date(article.publishedAt).toLocaleString(
        "en-US", { timeZone: "Asia/Kolkata" }
    )

    newsSource = `${article.source} • ${date}`

    cardClone.firstElementChild.addEventListener('click', ()=>{
        window.open(article.url, "_blank")
    })

}

let isActive = null
function onNaItemClicked(id){
    fetchNews(id)
    let navItem = document.getElementById(id)
    isActive?.classList.remove("active")
    isActive = navItem
    isActive.classList.add('active')
}

let searchButton = document.getElementById("search-button")
let searchInput = document.getElementById("search-input")

searchButton.addEventListener("click", ()=>{
    let query = searchInput.value;
    if(!query) return 
    else{
        fetchNews(query);
        isActive?.classList.remove("active")
        isActive= null
    }
})


let icon = document.getElementById('icon')
icon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        icon.className = "fa-solid fa-sun"
    }else{
        icon.className = "fa-solid fa-moon"
    }
})