const api_key = '89ef33f3ecda48bfb6d138b42780f9a5'
const url = 'https://newsapi.org/v2/everything?'

function fetchdata(query){
    let api = `${url}q=${query}&apikey=${api_key}`  
    fetch(api).then(function(re){
        return re.json()
    }).then(function(data){
        renderMain(data.articles)
    })
}

fetchdata('all')

mobilemenu = document.querySelector('.mobile')
menubtn = document.querySelector('.menuBtn')


menubtn.addEventListener('click', function(){
    mobilemenu.classList.toggle('hidden')
})

function renderMain(arr){
    console.log("function invokes");
   
   let mainHtml = ''
    for(i=0 ; i<arr.length; i++)
        {
            if(arr[i].urlToImage){ 
                mainHtml += ` <div class="card">
                            <a href=${arr[i].url}>
                            <img src=${arr[i].urlToImage} lazy="loading" />
                            <h4>${arr[i].title}</h4>
                            <div class="publishbyDate">
                                <p>${arr[i].source.name}</p>
                                <span>•</span>
                                <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                            </div>
                            <div class="desc">
                               ${arr[i].description}
                            </div>
                            </a>
                         </div>
            `
        }
        document.querySelector('main').innerHTML = mainHtml
        }
}


let search = document.querySelector('#searchInput')
let mobileSearch = document.querySelector('#searchInputMobile')

document.addEventListener("DOMContentLoaded", function(){
    search.addEventListener('keypress', function(e){
        if(e.key === "Enter")
            {
                e.preventDefault();
                fetchdata(search.value)
            }
    })
})
document.addEventListener("DOMContentLoaded", function(){
    mobileSearch.addEventListener('keypress', function(e){
        if(e.key === "Enter")
            {
                e.preventDefault();
                fetchdata(mobileSearch.value)
            }
    })
})


function navsearch(data){
    fetchdata(data);
}






