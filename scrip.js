let dealCards = document.querySelector('#dealCards')
let drawCards = document.querySelector('#drawCards')
let cardsImg = document.querySelectorAll(`.cards`) 
const player1One= document.getElementById('player1One')
console.log(cardsImg[8].attributes.src)
let control = '';
dealCards.addEventListener('click',shuffleDraw)
drawCards.addEventListener('click',shuffleDraw)

console.log(cardsImg[8])
// -------------------------------------------------
let deckId;
function shuffleDraw (event) {    
    event.preventDefault()
    let url;
//    console.log(event.target.id)
    if(event.target.id === `dealCards`){
        control = `shuffle`
        url= `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2`
    }else if(event.target.id === `drawCards`){
        control = `draw`
        url= `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
        }

    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        // console.log(res)
        if (control === `shuffle`){
            deckId = res.deck_id
            // console.log(res)
        }else if(control ===`draw`){
            // console.log(res.cards)
            console.log(res.cards)
            // cardsImg[8].setAttribute('src', res.cards[0].image )
            player1One.setAttribute('src', res.cards[0].image )
            console.log(cardsImg[8].attributes.src)
        }
    
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });
}



