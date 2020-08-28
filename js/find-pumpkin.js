$(window).on("load", init);

function init() {
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    var randomNumber = randomInteger(1, 5);
    var targetItem = 'i-' + randomNumber;

    $('.item').on('click', function (e) {
        var target = e.target.className;
        var targetString = target.substring(target.length - 3);
        if (targetString == targetItem) {
            alert('You win!')
        }
    });
    function increment (inc='8'){
        $('timer').html(inc);
    }
    var inc = 0;
    let timerId = setInterval(() => increment(inc+1), 1000);

// остановить вывод через 10 секунд
    setTimeout(() => { clearInterval(timerId); alert('Game Over'); }, 10000);
}

