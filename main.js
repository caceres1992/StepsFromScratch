const handleBoton = document.getElementById('btnStep')
const btnBack = document.getElementById('btnBack')
const wrappers = document.getElementsByClassName('wrapper')
const tags = document.getElementsByClassName('optionContainer')

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone')

const currentStep = 0


const planSelected = document.getElementsByClassName('plan');
let nameOfTime = 'Monthly'
let nameOfPlan = document.getElementById('titleFinal')
const timePlanSelected = document.getElementById('planSwitch');

const advancePrice = document.getElementById('advanceIsPrice')
const proPrice = document.getElementById('proIsPrice')
const arcadePrice = document.getElementById('arcadeIsPrice')

const servicePrice = document.getElementById('servicePrice')
const storagePrice = document.getElementById('storagePrice')
const profilePrice = document.getElementById('profilePrice')
const priceFinal = document.getElementById('planPriceFinal')
const listDetails = document.getElementById('list-details')
const listAddons = document.getElementsByClassName('desc-content')

handleBoton.addEventListener('click', () => {
    if (validateFields()) {

        for (let index = 0; index < wrappers.length; index++) {
            if (wrappers[index].classList.contains('show') && index < wrappers.length - 1) {
                btnBack.classList.remove('hidden')
                wrappers[index].nextElementSibling.classList.add('show')
                wrappers[index].classList.remove('show')
                for (let idx = 0; idx < tags.length; idx++) {
                    if (tags[idx].classList.contains('active') && idx < (tags.length - 1)) {
                        tags[idx].nextElementSibling.classList.add('active')
                        tags[idx].classList.remove('active')
                        return
                    }
                    else if (idx > 3) {
                        console.log("sd")
                        return
                    }
                }
            } else if (index > wrappers.length - 2) {
                btnBack.classList.add('hidden')
                handleBoton.classList.add('hidden')
            }
        }
    }
})

btnBack.addEventListener(('click'), () => {
    for (let index = 0; index < wrappers.length; index++) {
        if (wrappers[index].classList.contains('show')) {
            if (wrappers[1].classList.contains('show')) {
                btnBack.classList.add('hidden')
            }
            wrappers[index - 1].classList.add('show')
            wrappers[index].classList.remove('show')
            for (let idx = 0; idx < tags.length; idx++) {
                if (idx > 3) {
                    return
                } else if (tags[idx].classList.contains('active')) {
                    tags[idx - 1].classList.add('active')
                    tags[idx].classList.remove('active')
                    return
                }
            }
        }
    }

})


function validateFields() {

    if (fullName.value == '' && email.value == '' && phone.value == '') {
        fullName.parentElement.classList.add('error')
        email.parentElement.classList.add('error')
        phone.parentElement.classList.add('error')
        console.log(fullName.parentElement)
        return false
    } else if (fullName.value == '' && email.value == '') {
        fullName.parentElement.classList.add('error')
        email.parentElement.classList.add('error')

        return false
    } else if (fullName.value == '' && phone.value == '') {
        fullName.parentElement.classList.add('error')
        phone.parentElement.classList.add('error')
        return false
    } else if (phone.value == '' && email.value == '') {
        email.parentElement.classList.add('error')
        phone.parentElement.classList.add('error')
        return false
    } else if (phone.value == '') {
        phone.parentElement.classList.add('error')
        return false
    } else if (email.value == '') {
        email.parentElement.classList.add('error')
        return false
    }
    return true
}


fullName.oninput = () => {
    if (fullName.value.length > 3) {
        fullName.parentElement.classList.remove('error')
    }
}

phone.oninput = () => {
    if (phone.value.length > 3) {
        phone.parentElement.classList.remove('error')
    }
}

email.oninput = () => {
    if (email.value.length > 3) {
        email.parentElement.classList.remove('error')
    }
}


timePlanSelected.onchange = () => {
    const pArcade = document.createElement('p')
    const pAdvance = document.createElement('p')
    const pPro = document.createElement('p')
    pArcade.classList.add('promotion')
    pAdvance.classList.add('promotion')
    pPro.classList.add('promotion')
    pArcade.innerHTML = "2 months free"
    pAdvance.innerHTML = "2 month free"
    pPro.innerHTML = "2 month free"
    handlePriceOfPlan('arcade')

    if (timePlanSelected.checked) {

        arcadePrice.innerHTML = '$90/yr'
        arcadePrice.parentElement.appendChild(pArcade)

        advancePrice.innerHTML = '$120/yr'
        advancePrice.parentElement.appendChild(pAdvance)

        proPrice.innerHTML = '$150/yr'
        proPrice.parentElement.appendChild(pPro)


        servicePrice.innerHTML = '+$10/yr'
        storagePrice.innerHTML = '+$20/yr'
        profilePrice.innerHTML = '+$20/yr'



    } else {
        arcadePrice.innerHTML = '$10/mo'
        arcadePrice.nextElementSibling.remove()

        advancePrice.innerHTML = '$12/mo'
        advancePrice.nextElementSibling.remove()

        proPrice.innerHTML = '$15/mo'
        proPrice.nextElementSibling.remove()

        servicePrice.innerHTML = '+$1/mo'
        storagePrice.innerHTML = '+$2/mo'
        profilePrice.innerHTML = '+$2/mo'
    }
    handlePlanSelected()

}


function handlePriceOfPlan(value) {


    if (value === 'arcade') {
        if (timePlanSelected.checked) nameOfTime = "Yearly"
        else nameOfTime = "Monthly"
        priceFinal.innerHTML = arcadePrice.outerText
        console.log(nameOfTime)
    } else if (value == 'advanced') {
        if (timePlanSelected.checked) nameOfTime = "Yearly"
        else nameOfTime = "Monthly"
        priceFinal.innerHTML = advancePrice.outerText
        console.log(nameOfTime)
    } else if (value == 'pro') {
        if (timePlanSelected.checked) nameOfTime = "Yearly"
        else nameOfTime = "Monthly"
        priceFinal.innerHTML = proPrice.outerText
        console.log(nameOfTime)
    }
    nameOfPlan.innerHTML = value


}


function handlePlanSelected() {
    for (let index = 0; index < planSelected.length; index++) {
        const element = planSelected[index];
        if (element.firstElementChild.checked) {
            priceFinal.innerHTML = index === 0 && arcadePrice.outerText || index === 1 && advancePrice.outerText || index === 2 && proPrice.outerText
            handlePriceOfPlan(index === 0 && "arcade" || index === 1 && 'advanced' || index === 2 && "pro")
        }


    }
}


function handleAddOns() {

    console.log("hacierndo click")
}
document.addEventListener('DOMContentLoaded', () => {
    handlePriceOfPlan('arcade')

})