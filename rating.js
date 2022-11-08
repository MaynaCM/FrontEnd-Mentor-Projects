const switchDiv = () => {

    const ratingDiv = document.querySelector('.ratingDiv');
    const thanksDiv = document.querySelector('.thanksDiv');
    const styleRating = ratingDiv.style.display;
    styleThanksDiv = thanksDiv.style.display;
    if(styleRating ==''){
        ratingDiv.style.display = 'none';
        thanksDiv.style.display = 'block';
    }
    else{
        ratingDiv.style.display = 'block';
        thanksDiv.style.display = 'none';
    }

}


const btn = document.querySelector('.submitBtn');
btn.addEventListener('click', switchDiv);


window.onclick = function(event) {
    const modal = document.querySelector('.ratingDiv');
    If (event.target == modal); {
        switchDiv
    }
}

var functionmay = document.querySelectorAll(".button_rate")

functionmay.forEach(botao => {
    botao.addEventListener('click', function handleClick() {
        const note = botao.getAttributeNode('id').value;
        const text = document.querySelector('.rateInfo');
        text.innerText = `You selected ${note} out of 5`
});
}); 



// end of functions for feedback buttons // 



const btnEventsOver = document.querySelectorAll('.button_rate');

btnEventsOver.forEach((eventOver) => {
    eventOver.addEventListener('mouseover', () => {
        eventOver.style.color = "white";
        var colorOver = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
        eventOver.style.backgroundColor = colorOver;
        
    });

})

btnEventsOver.forEach((eventOut) => {
    eventOut.addEventListener('mouseout', () => {
        eventOut.style.color = "";
        eventOut.style.backgroundColor = "";
    });
})


let submitEvent = document.querySelector('.submitBtn');

submitEvent.addEventListener('mouseover', () =>{
    var textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    submitEvent.style.color = textPrimary;
    submitEvent.style.backgroundColor = "white"
})

submitEvent.addEventListener("mouseout", () =>{
    submitEvent.style.color = "";
    submitEvent.style.backgroundColor = "";

} )
