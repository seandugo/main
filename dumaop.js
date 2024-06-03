let hobby = document.getElementById("Hobby");
let ball = document.getElementById("Ball");
let color = document.getElementById("Color");
let season = document.getElementById("Season");
let character = document.getElementById("Character");
let dessert = document.getElementById("Dessert");
let food = document.getElementById("Food");
let place = document.getElementById("Place");
let Day = document.getElementById("Day");

let isPictureDisplayed = false;

hobby.onclick = function () {
    if (!isPictureDisplayed) {
        hobby.style.backgroundImage = 'url("./hobby.jpg")';
        hobby.textContent = '';
        hobby.style.transform = 'scale(3.00)';
        hobby.style.position = 'absolute';
        hobby.style.left = '40%';
        hobby.style.top = '30%';
        hobby.style.width = '50px';
        hobby.style.height = '100px';
        hobby.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        hobby.style.backgroundImage = 'none';
        hobby.textContent = 'HOBBY';
        hobby.style.transform = 'scale(1)';
        hobby.style.position = 'static';
        hobby.style.width = 'auto';
        hobby.style.height = 'auto';
        hobby.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

ball.onclick = function () {
    if (!isPictureDisplayed) {
        ball.style.backgroundImage = 'url("./ball.png")';
        ball.textContent = '';
        ball.style.transform = 'scale(3.00)';
        ball.style.position = 'absolute';
        ball.style.left = '40%';
        ball.style.top = '30%';
        ball.style.width = '50px';
        ball.style.height = '100px';
        ball.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        ball.style.backgroundImage = 'none';
        ball.textContent = 'BALL';
        ball.style.transform = 'scale(1)';
        ball.style.position = 'static';
        ball.style.width = 'auto';
        ball.style.height = 'auto';
        ball.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

color.onclick = function () {
    if (!isPictureDisplayed) {
        color.style.backgroundImage = 'url("./color.jpg")';
        color.textContent = '';
        color.style.transform = 'scale(3.00)';
        color.style.position = 'absolute';
        color.style.left = '36%';
        color.style.top = '30%';
        color.style.width = '26%';
        color.style.height = '15%';
        color.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        color.style.backgroundImage = 'none';
        color.textContent = 'COLOR';
        color.style.transform = 'scale(1)';
        color.style.position = 'static';
        color.style.width = 'auto';
        color.style.height = 'auto';
        color.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

season.onclick = function () {
    if (!isPictureDisplayed) {
        season.style.backgroundImage = 'url("./season.webp")';
        season.textContent = '';
        season.style.transform = 'scale(3.00)';
        season.style.position = 'absolute';
        season.style.left = '38%';
        season.style.top = '30%';
        season.style.width = '25%';
        season.style.height = '100px';
        season.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        season.style.backgroundImage = 'none';
        season.textContent = 'SEASON';
        season.style.transform = 'scale(1)';
        season.style.position = 'static';
        season.style.width = 'auto';
        season.style.height = 'auto';
        season.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

character.onclick = function() {
    if (!isPictureDisplayed) {
        character.style.backgroundImage = 'url("./character.webp")';
        character.textContent = '';
        character.style.transform = 'scale(3.00)';
        character.style.position = 'absolute';
        character.style.left = '40%';
        character.style.top = '30%';
        character.style.width = '89px';
        character.style.height = '100px';
        character.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        character.style.backgroundImage = 'none';
        character.textContent = 'CHARACTER';
        character.style.transform = 'scale(1)';
        character.style.position = 'static';
        character.style.width = 'auto';
        character.style.height = 'auto';
        character.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

dessert.onclick = function () {
    if (!isPictureDisplayed) {
        dessert.style.backgroundImage = 'url("./dessert.jpg")';
        dessert.textContent = '';
        dessert.style.transform = 'scale(3.00)';
        dessert.style.position = 'absolute';
        dessert.style.left = '40%';
        dessert.style.top = '30%';
        dessert.style.width = '89px';
        dessert.style.height = '100px';
        dessert.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        dessert.style.backgroundImage = 'none';
        dessert.textContent = 'DESSERT';
        dessert.style.transform = 'scale(1)';
        dessert.style.position = 'static';
        dessert.style.width = 'auto';
        dessert.style.height = 'auto';
        dessert.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

food.onclick = function() {
    if (!isPictureDisplayed) {
        food.style.backgroundImage = 'url("./food.jpg")';
        food.textContent = '';
        food.style.transform = 'scale(3.00)';
        food.style.position = 'absolute';
        food.style.left = '40%';
        food.style.top = '30%';
        food.style.width = '89px';
        food.style.height = '100px';
        food.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        food.style.backgroundImage = 'none';
        food.textContent = 'FOOD';
        food.style.transform = 'scale(1)';
        food.style.position = 'static';
        food.style.width = 'auto';
        food.style.height = 'auto';
        food.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

place.onclick = function() {
    if (!isPictureDisplayed) {
        place.style.backgroundImage = 'url("./place.jpg")';
        place.textContent = '';
        place.style.transform = 'scale(3.00)';
        place.style.position = 'absolute';
        place.style.left = '40%';
        place.style.top = '30%';
        place.style.width = '89px';
        place.style.height = '100px';
        place.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        place.style.backgroundImage = 'none';
        place.textContent = 'PLACE';
        place.style.transform = 'scale(1)';
        place.style.position = 'static';
        place.style.width = 'auto';
        place.style.height = 'auto';
        place.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}

Day.onclick = function() {
    if (!isPictureDisplayed) {
        Day.style.backgroundImage = 'url("./Day.webp")';
        Day.textContent = '';
        Day.style.transform = 'scale(3.00)';
        Day.style.position = 'absolute';
        Day.style.left = '40%';
        Day.style.top = '30%';
        Day.style.width = '89px';
        Day.style.height = '100px';
        Day.style.zIndex = '3'
        isPictureDisplayed = true;
    } else {
        Day.style.backgroundImage = 'none';
        Day.textContent = 'TIME OF DAY';
        Day.style.transform = 'scale(1)';
        Day.style.position = 'static';
        Day.style.width = 'auto';
        Day.style.height = 'auto';
        Day.style.zIndex = '0'
        isPictureDisplayed = false;
    }
}