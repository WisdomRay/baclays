const membershipNumber = document.getElementById('membership-number');
const cardNumber = document.getElementById('card-number');
const sortCodeNumber = document.getElementById('sort-code-number');

const membershipContainer = document.getElementById('membership-container');
const cardContainer = document.getElementById('card-container');
const sortCodeContainer = document.getElementById('sortCode-container');

cardNumber.addEventListener('click', ()=>{
    membershipContainer.style.display =  'none'
    cardContainer.style.display = 'block'

    cardNumber.style.color = '#0076b6'
    membershipNumber.style.color = '#666'
    sortCodeNumber.style.color = '#666'

    cardNumber.style.backgroundColor = '#fff'
    sortCodeNumber.style.backgroundColor = '#fbfbfb'
    membershipNumber.style.backgroundColor = '#fbfbfb'



});

sortCodeNumber.addEventListener('click', ()=>{
    membershipContainer.style.display =  'none'
    cardContainer.style.display = 'none'
    sortCodeContainer.style.display = 'block'

    sortCodeNumber.style.color = '#0076b6'
    cardNumber.style.color = '#666'
    membershipNumber.style.color = '#666'

    sortCodeNumber.style.backgroundColor = '#fff'
    membershipNumber.style.backgroundColor = '#fbfbfb'
    cardNumber.style.backgroundColor = '#fbfbfb'

});

membershipNumber.addEventListener('click', ()=>{
    cardContainer.style.display = 'none'
    sortCodeContainer.style.display = 'none'
    membershipContainer.style.display = 'block'

    membershipNumber.style.color = '#0076b6'
    cardNumber.style.color = '#666'
    sortCodeNumber.style.color = '#666'

    membershipNumber.style.backgroundColor = '#fff'
    sortCodeNumber.style.backgroundColor = '#fbfbfb'
    cardNumber.style.backgroundColor = '#fbfbfb'



});

const radio = document.getElementById('radio');
radio.checked = true