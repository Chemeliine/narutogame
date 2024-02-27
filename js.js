function startGame(){
    gameLoop();
}

var count = 0; 
var personVis = false;
var score = 0; //подсчет баллов

function gameLoop(){
    personVis = ! personVis; //переключение видимости

    // Условие проверки на переключение
    if (personVis ==true){
        var classToset = "character visible";
    }
    else{
        var classToset = "character hidden";
    }

    var gamezone  = document.getElementById("gamezone");

    // Перебор всех блоков
    for (i = 0; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = ""; 
        // Минус 2 балла если кликнули не туда 
        gamezone.children[i].onclick = function(){
            score -= 2 ;
            document.getElementById("outScore").innerHTML = score;
        }
    }

    // Выбор случайного числа 
    var randomNum = Math.floor(Math.random()*8) +1;
    
    // Прикрепление слово лишний к рандомному блоку 
    gamezone.children[randomNum-1].innerHTML = ""; 
    //Плюс 1 балл если кликнули правильно 
    gamezone.children[randomNum-1].onclick = function(){
        score += 1; 
        document.getElementById("outScore").innerHTML = score;
    }

    // применение внешнего вида лишнему
    gamezone.children[randomNum-1].className = classToset + " naruto";

    count += 1
    if (count < 12){
        setTimeout(gameLoop, personVis ? 1000: 3000);
    }
    else{
        alert("Игра завершенa! Твой счет " + score);
        location.reload()     
    }
    
}

