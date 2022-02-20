var currentPriceCurrency = document.querySelector('.priceCurrency')
var currentPriceSign = document.querySelectorAll('.currenc-sign')[0].innerHTML
var itemsInCart = document.querySelector('.nav-button').innerText
var bannerLocation = 'stone'

function priceCurrency(element) {
    if (currentPriceSign == '€') {
        if (element.value == 'usd') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 1.1322572)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = '$'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = '$'
            }
        }
        else if (element.value == 'cad') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 1.4440863)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = 'C$'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = 'C$'
            }
        }
        else if (element.value == 'euro') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 1)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = '€'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = '€'
            }
        }
    }
    else if (currentPriceSign == 'C$') {
        if (element.value == 'usd') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 0.7840648)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = '$'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = '$'
            }
        }
        else if (element.value == 'cad') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 1)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = 'C$'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = 'C$'
            }
        }
        else if (element.value == 'euro') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 0.69247939)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = '€'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = '€'
            }
        }
    }
    else if (currentPriceSign == '$') {
        if (element.value == 'usd') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 1)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = '$'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = '$'
            }
        }
        else if (element.value == 'cad') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 1.2754538)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = 'C$'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = 'C$'
            }
        }
        else if (element.value == 'euro') {
            for (i = 0; i < 6; i++ ) {
                var prices = document.querySelectorAll('.price')[i].innerHTML
                prices = Math.round((prices * 0.88319323)*100)/100
                document.querySelectorAll('.price')[i].innerHTML = prices
            }
            for (i = 0; i < 6; i++ ) {
                var newPriceSign = '€'
                document.querySelectorAll('.currenc-sign')[i].innerHTML = newPriceSign
                currentPriceSign = '€'
            }
        }
    }
}

function add1ToCart() {
    console.log(itemsInCart)
    itemsInCart ++
    document.querySelector('.nav-button').innerHTML = "<img class='cart-pic' src='./images/cart-light.png' alt='cart image'>" + itemsInCart
    console.log(itemsInCart)
}

function bannerLeft() {
    if (bannerLocation == 'stone') {
        document.querySelector('.currentBanner').src = './images/pixel-ninjas-2.png'
        bannerLocation = 'pixel'
        document.querySelector('.pixel').style.backgroundColor = '#9900ff'
        document.querySelector('.stone').style.backgroundColor = 'grey'
        document.querySelector('.cafe').style.backgroundColor = 'grey'
    }
    else if (bannerLocation == 'pixel') {
        document.querySelector('.currentBanner').src = './images/cafe-neko.png'
        bannerLocation = 'cafe'
        document.querySelector('.pixel').style.backgroundColor = 'grey'
        document.querySelector('.stone').style.backgroundColor = 'grey'
        document.querySelector('.cafe').style.backgroundColor = '#9900ff'
    }
    else if (bannerLocation == 'cafe') {
        document.querySelector('.currentBanner').src = './images/stonepunk.png'
        bannerLocation = 'stone'
        document.querySelector('.pixel').style.backgroundColor = 'grey'
        document.querySelector('.stone').style.backgroundColor = '#9900ff'
        document.querySelector('.cafe').style.backgroundColor = 'grey'
    }
}

function bannerRight() {
    if (bannerLocation == 'stone') {
        document.querySelector('.currentBanner').src = './images/cafe-neko.png'
        bannerLocation = 'cafe'
        document.querySelector('.pixel').style.backgroundColor = 'grey'
        document.querySelector('.stone').style.backgroundColor = 'grey'
        document.querySelector('.cafe').style.backgroundColor = '#9900ff'
    }
    else if (bannerLocation == 'cafe') {
        document.querySelector('.currentBanner').src = './images/pixel-ninjas-2.png'
        bannerLocation = 'pixel'
        document.querySelector('.pixel').style.backgroundColor = '#9900ff'
        document.querySelector('.stone').style.backgroundColor = 'grey'
        document.querySelector('.cafe').style.backgroundColor = 'grey'
    }
    else if (bannerLocation == 'pixel') {
        document.querySelector('.currentBanner').src = './images/stonepunk.png'
        bannerLocation = 'stone'
        document.querySelector('.pixel').style.backgroundColor = 'grey'
        document.querySelector('.stone').style.backgroundColor = '#9900ff'
        document.querySelector('.cafe').style.backgroundColor = 'grey'
    }
}

function windows () {
    alert('This game is supported on Windows')
}

function apple() {
    alert('This game is supported on Apple')
}

function linux() {
    alert('This game is supported on Linux')
}