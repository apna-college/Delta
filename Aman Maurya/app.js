let url = " https://quote-garden.onrender.com/api/v3/quotes/random";


let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let quote = await getQuotes();
    //  console.log(quote);
    show(quote);
});

function show(quote) {
    let p = document.querySelector("p");
    let span = document.querySelector("span");
    for (key of quote) {
        // console.log(key);
        p.innerText = "";
        span.innerText ="";
        span.innerHTML = `<i> ~ ${key.quoteAuthor} </i>`;
        p.innerHTML =  `<b>"</b> ${key.quoteText} <b>"</b>`;
    }
}


async function getQuotes() {
    try {
        let res = await axios.get(url);
        console.log(res.data.data);
        //  console.log(res.data);
        return res.data.data;
    } catch (err) {
        console.log("Error", err);
        return "Erroe";
    }
}

