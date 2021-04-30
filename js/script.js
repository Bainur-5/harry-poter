const persons = [
    {
        name: "Harry Potter",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        actor: "Daniel Radcliffe",
        image: "http://hp-api.herokuapp.com/images/harry.jpg",
        wiki: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8D%D0%B4%D0%BA%D0%BB%D0%B8%D1%84%D1%84,_%D0%94%D1%8D%D0%BD%D0%B8%D0%B5%D0%BB",
        like: null,
        id: 1
    },
    {
  
        name: "Hermione Granger",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        actor: "Emma Watson",
        image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
        wiki: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BE%D1%82%D1%81%D0%BE%D0%BD,_%D0%AD%D0%BC%D0%BC%D0%B0",
        like: null,
        id: 2
    },
    {
  
        name: "Ron Weasley",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        actor: "Rupert Grint",
        image: "http://hp-api.herokuapp.com/images/ron.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B8%D0%BD%D1%82,_%D0%A0%D1%83%D0%BF%D0%B5%D1%80%D1%82',
        like: null,
        id: 3
    },
    {
  
        name: "Draco Malfoy",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Tom Felton",
        image: "http://hp-api.herokuapp.com/images/draco.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D0%BB%D1%82%D0%BE%D0%BD,_%D0%A2%D0%BE%D0%BC',
        like: null,
        id:4
    },
    {
  
        name: "Minerva McGonagall",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        actor: "Dame Maggie Smith",
        image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%B8%D1%82,_%D0%9C%D1%8D%D0%B3%D0%B3%D0%B8',
        like: null,
        id: 5
  
    },  
    {
  
        name: "Cedric Diggory",
        species: "human",
        gender: "male",
        house: "Hufflepuff",
        actor: "Robert Pattinson",
        image: "http://hp-api.herokuapp.com/images/cedric.png",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%82%D1%82%D0%B8%D0%BD%D1%81%D0%BE%D0%BD,_%D0%A0%D0%BE%D0%B1%D0%B5%D1%80%D1%82',
        like: null,
        id: 6
    },
    {
  
        name: "Cho Chang",
        species: "human",
        gender: "female",
        house: "Ravenclaw",
        actor: "Katie Leung",
        image: "http://hp-api.herokuapp.com/images/cho.jpg",
        wiki: 'https://en.wikipedia.org/wiki/Katie_Leung',
        like: null,
        id: 7
  
    },
    {
  
        name: "Severus Snape",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Alan Rickman",
        image: "http://hp-api.herokuapp.com/images/snape.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%A0%D0%B8%D0%BA%D0%BC%D0%B0%D0%BD,_%D0%90%D0%BB%D0%B0%D0%BD',
        like: null,
        id: 8
    },
    {
  
        name: "Rubeus Hagrid",
        species: "half-giant",
        gender: "male",
        house: "Gryffindor",
        actor: "Robbie Coltrane",
        image: "http://hp-api.herokuapp.com/images/hagrid.png",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D1%82%D1%80%D0%B5%D0%B9%D0%BD,_%D0%A0%D0%BE%D0%B1%D0%B1%D0%B8',
        like: null,
        id: 9
    },
    {
  
        name: "Neville Longbottom",
        species: "human",
        gender: "male",
        actor: "Matthew Lewis",
        image: "http://hp-api.herokuapp.com/images/neville.jpg",
        wiki: 'https://www.instagram.com/mattdavelewis/?hl=ru',
        like: null,
        id: 10
    },
    {
  
        name: "Luna Lovegood",
        species: "human",
        gender: "female",
        house: "Ravenclaw",
        actor: "Evanna Lynch",
        image: "http://hp-api.herokuapp.com/images/luna.jpg",
        wiki: 'Evanna Lynch',
        like: null,
        id: 11
    },
    {
  
        name: "Ginny Weasley",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        actor: "Bonnie Wright",
        image: "http://hp-api.herokuapp.com/images/ginny.jpg",
        wiki: 'https://en.wikipedia.org/wiki/Bonnie_Wright',
        like: null,
        id: 12
  
    },
    {
  
        name: "Sirius Black",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        actor: "Gary Oldman",
        image: "http://hp-api.herokuapp.com/images/sirius.JPG",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%B4%D0%BC%D0%B5%D0%BD,_%D0%93%D1%8D%D1%80%D0%B8' ,
        like: null,
        id: 13
    },
    {
  
        name: "Remus Lupin",
        species: "werewolf",
        gender: "male",
        house: "Gryffindor",
        actor: "David Thewlis",
        image: "http://hp-api.herokuapp.com/images/lupin.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%A2%D1%8C%D1%8E%D0%BB%D0%B8%D1%81,_%D0%94%D1%8D%D0%B2%D0%B8%D0%B4',
        like: null,
        id: 14
    },
    {
  
        name: "Arthur Weasley",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        actor: "Mark Williams",
        image: "http://hp-api.herokuapp.com/images/arthur.jpg",
        wiki: 'https://en.wikipedia.org/wiki/Mark_Williams_(snooker_player)',
        like: null,
        id: 15
    },
    {
  
        name: "Bellatrix Lestrange",
        species: "human",
        gender: "female",
        house: "Slytherin",
        actor: "Helena Bonham Carter",
        image: "http://hp-api.herokuapp.com/images/bellatrix.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BD%D0%B5%D0%BC_%D0%9A%D0%B0%D1%80%D1%82%D0%B5%D1%80,_%D0%A5%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0',
        like: null,
        id: 16
    },
    {
  
        name: "Lord Voldemort",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Ralph Fiennes",
        image: "http://hp-api.herokuapp.com/images/voldemort.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BD%D1%81,_%D0%A0%D1%8D%D0%B9%D1%84',
        like: null,
        id: 17
    },
    {
  
        name: "Horace Slughorn",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Jim Broadbent",
        image: "http://hp-api.herokuapp.com/images/slughorn.JPG",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%BE%D0%B4%D0%B1%D0%B5%D0%BD%D1%82,_%D0%94%D0%B6%D0%B8%D0%BC',
        like: null,
        id: 18
    },
    {
        name: "Kingsley Shacklebolt",
        species: "human",
        gender: "male",
        house: "",
        actor: "George Harris",
        image: "http://hp-api.herokuapp.com/images/kingsley.jpg",
        wiki: 'https://en.wikipedia.org/wiki/George_Harris_(actor)',
        like: null,
        id: 19
    },
    {
  
        name: "Dolores Umbridge",
        species: "human",
        gender: "female",
        house: "Slytherin",
        actor: "Imelda Staunton",
        image: "http://hp-api.herokuapp.com/images/umbridge.jpg",
        wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%BE%D0%BD%D1%82%D0%BE%D0%BD,_%D0%98%D0%BC%D0%B5%D0%BB%D1%8C%D0%B4%D0%B0',
        like: null,
        id: 20
    },
    {
        name: "Lucius Malfoy",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Jason Isaacs",
        image: "http://hp-api.herokuapp.com/images/lucius.jpg",
        wiki: 'https://en.wikipedia.org/wiki/Jason_Isaacs',
        like: null,
        id: 21
    },
    {
  
        name: "Vincent Crabbe",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Jamie Waylett",
        image: "http://hp-api.herokuapp.com/images/crabbe.jpg",
        wiki: 'https://en.wikipedia.org/wiki/Jamie_Waylett',
        like: null,
        id: 22
    },
    {
  
        name: "Gregory Goyle",
        species: "human",
        gender: "male",
        house: "Slytherin",
        actor: "Josh Herdman",
        image: "http://hp-api.herokuapp.com/images/goyle.jpg",
        wiki: 'https://en.wikipedia.org/wiki/Josh_Herdman'  ,
        like: null,
        id: 23
    },
    {
  
        name: "Mrs Norris",
        species: "cat",
        gender: "female",
        house: "",
        actor: "Maxime, Alanis and Tommy the cats",
        image: "http://hp-api.herokuapp.com/images/norris.JPG",
        like: null,
        id: 24
  
    },
    {
  
        name: "Argus Filch",
        species: "human",
        gender: "male",
        house: "",
        actor: "David Bradley",
        image: "http://hp-api.herokuapp.com/images/filch.jpg",
        wiki: 'https://en.wikipedia.org/wiki/David_Bradley_(English_actor)',
        like: null,
        id: 25
  
    }
]
// DOM

const containre = document.querySelector('.cont_card')
const  nameInput = document.querySelector('.hPsearch')
const newCards = document.querySelector('.new_cards')



window.addEventListener('load', () => {
    if(JSON.parse(localStorage.getItem('persons'))){
        return;
    }else{
        localStorage.setItem('persons', JSON.stringify(persons))
    }

})





// База данных из локал
const personsFromLocal = JSON.parse(localStorage.getItem('persons'));


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
                            <button onclick='disLike(${id})'><i class="fas fa-heart-broken"></i></button>
                            <button onclick='redag(${id})'><i class="fas fa-pen"></i></button>
                            <button onclick='delet(${id})'><i class="fas fa-trash-alt"></i></button>
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
                            <button onclick='disLike(${id})'><i class="fas fa-heart-broken"></i></button>
                            <button onclick='redag(${id})'><i class="fas fa-pen"></i></button>
                            <button onclick='delet(${id})'><i class="fas fa-trash-alt"></i></button>
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
                            <button onclick='disLike(${id})'><i style="color: #000" class="fas fa-heart-broken"></i></button>
                            <button onclick='redag(${id})'><i class="fas fa-pen"></i></button>
                            <button onclick='delet(${id})'><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div> 
                </div>
            `
        }
    }).join('');
    containre.innerHTML = cards
}


window.addEventListener('load', showCards(personsFromLocal))




const newPers = document.querySelector('.newPerson')
newPers.addEventListener("click", () =>{
    const newPerson = {
        name: prompt('User Name'),
        species: prompt('specise'),
        gender: prompt('gender'),
        house: prompt('house'),
        actor: prompt('actor'),
        image: prompt('new Photo', 'https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg'),
        wiki: prompt('New link', "https://ru.wikipedia.org/wiki/%D0%A0%D1%8D%D0%B4%D0%BA%D0%BB%D0%B8%D1%84%D1%84,_%D0%94%D1%8D%D0%BD%D0%B8%D0%B5%D0%BB"),
        id: personsFromLocal.length + 1,
        like: null
    }
    personsFromLocal.push(newPerson)
    console.log(personsFromLocal);
    window.addEventListener('load', showCards(personsFromLocal))
})


// поиск




nameInput.addEventListener('input', e=> {
    const value = e.target.value.toUpperCase();

    const filtereArr = personsFromLocal.filter(({name}) => name.toUpperCase().includes(value))
    showCards(filtereArr)
})

6

// Like
function like(id){
    const filteredArr = personsFromLocal.map(item => {
        if(item.id === id){
            return {
                ...item,
                like: true
            }
        }else{
            return item
        }
    })

    localStorage.setItem('persons', JSON.stringify(filteredArr));
    window.location.reload()
}

function disLike(id){
    const dislArr = personsFromLocal.map(item => {
        if(item.id === id){
            return {
                ...item,
                like:false
            }
        }else{
            return item
        }
    })

    localStorage.setItem('persons', JSON.stringify(dislArr));
    window.location.reload()
}
function redag(id){
    const redagArr = personsFromLocal.map(item => {
        if(item.id === id){
            return {
                ...item,
                name: prompt('User Name'),
                species: prompt('specise'),
                gender: prompt('gender'),
                house: prompt('house'),
                actor: prompt('actor'),
                image: prompt('new Photo', 'https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg'),
                wiki: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8D%D0%B4%D0%BA%D0%BB%D0%B8%D1%84%D1%84,_%D0%94%D1%8D%D0%BD%D0%B8%D0%B5%D0%BB",
            }
        }else{
            return item;
        }
    })
    if(redagArr.name == ""){
        alert('Пишите имя')
    }else{
        localStorage.setItem('persons', JSON.stringify(redagArr));
        window.location.reload()
    }
}
function delet(id){
    const askDelete = confirm('are u sure ?')
    if(!askDelete) return;

    const todos =JSON.parse(localStorage.getItem('persons'));
    const newTodos = todos.filter(item => item.id !== id);

    localStorage.setItem('persons', JSON.stringify(newTodos))
    window.location.reload()
    
}

const likePersons = [];

window.addEventListener('load', () => {
    
    for (let i = 0; i < personsFromLocal.length; i++) {
        if(personsFromLocal[i].like === true){
            likePersons.push(personsFromLocal[i])
            localStorage.setItem('likePersons', JSON.stringify(likePersons))
        }
    }
})

const signtOutBtn = document.querySelector('.sighnOutBtn')

signtOutBtn.addEventListener('click', e => {
    e.preventDefault;

    localStorage.setItem('isAuth', 'false')
    window.location.reload()
})