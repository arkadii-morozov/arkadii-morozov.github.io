$(window).on("load", init);

function init() {
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    var randomNumber = randomInteger(1, 5);
    var targetItem = 'i-' + randomNumber;
    var isWinner = false;
    var resultBlock = $('.pop-up-result');

    $('.item').on('click', function (e) {
        var target = e.target.className;
        var targetString = target.substring(target.length - 3);
        if (targetString == targetItem) {
            resultBlock.fadeIn(150);
            isWinner = true;
            console.log(isWinner);
        }
    });

    $('.button-repeat').on('click', function (e) {
        $('.timer').text(10);
        isWinner = false;
        resultBlock.fadeOut(150);
        console.log(isWinner);
    });

}

