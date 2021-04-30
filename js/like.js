const containre = document.querySelector(".cont_card")
const nameInput = document.querySelector(".hPsearch")


window.addEventListener('load', () => {
    if(JSON.parse(localStorage.getItem('likePersons'))){
        return;
    }else{
        localStorage.setItem('likePersons', JSON.stringify(likePersons  ))
    }

})
const likePersons = JSON.parse(localStorage.getItem('likePersons'))

function showCards(arr){
    const cards = arr.map(({name, species, gender, house, actor, image, wiki, id, like}) => {
        if(like){
            return `
                <div class="ct_card">
                    <div class="card">
                        <div class="card_img" ><img src='${image}'></div>
                        <div class="card_name">
                            <p class="name">Name: <b>${name}</b></p>
                            <p>Species : <b>${species}</b></p>
                            <p>Gender: <b>${gender}</b></p>
                            <p>House: <b>${house}</b></p>
                            <p>Actor: <a class="actor" href="${wiki}">${actor}</a></p>
                            <button onclick='like(${id})'><i style="color: red" class="fas fa-heart"></i></button></button>
                            <button onclick='disLike(${id})'><i class="fas fa-heart-broken"></i></button></button>
                        </div>
                    </div> 
                </div>
            `
        }else if(like === null){
            return `
                <div class="ct_card">
                    <div class="card">
                        <div class="card_img" ><img src='${image}'></div>
                        <div class="card_name">
                            <p class="name">Name: <b>${name}</b></p>
                            <p>Species : <b>${species}</b></p>
                            <p>Gender: <b>${gender}</b></p>
                            <p>House: <b>${house}</b></p>
                            <p>Actor: <a class="actor" href="${wiki}">${actor}</a></p>
                            <button onclick='like(${id})'><i style="color: #ccc" class="fas fa-heart"></i></button></button>
                            <button onclick='disLike(${id})'><i class="fas fa-heart-broken"></i></button></button>
                        </div>
                    </div> 
                </div>
            `
        }else{
            return `
                <div class="ct_card">
                    <div class="card">
                        <div class="card_img" ><img src='${image}'></div>
                        <div class="card_name">
                            <p class="name">Name: <b>${name}</b></p>
                            <p>Species : <b>${species}</b></p>
                            <p>Gender: <b>${gender}</b></p>
                            <p>House: <b>${house}</b></p>
                            <p>Actor: <a class="actor" href="${wiki}">${actor}</a></p>
                            <button onclick='like(${id})'><i style="color: #fff" class="fas fa-heart"></i></button></button>
                            <button onclick='disLike(${id})'><i style="color: #000" class="fas fa-heart-broken"></i></button></button>
                        </div>
                    </div> 
                </div>
            `
        }
    }).join('');

    containre.innerHTML = cards
}
window.addEventListener('load', showCards(likePersons))


nameInput.addEventListener('input', e => {
    const value = e.target.value.toUpperCase()

    const filtereArr = likePersons.filter(({name}) => {
        name.toUpperCase().includes(value)
    })
    showCards(filtereArr)
})

nameInput.addEventListener('input', e=> {
    const value = e.target.value.toUpperCase();

    const filtereArr = likePersons.filter(({name}) => name.toUpperCase().includes(value))
    showCards(filtereArr)
})


