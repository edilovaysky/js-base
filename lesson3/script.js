/*
    Задание 1
    С помощью цикла while вывести все простые числа в промежутке от 0 до 100
    */
    function task1() { 
        let x = 0;
        while (x < 100) {
            x++;
            alert(x);
        }
    }

    /*
    Задание 2
    С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:
        0 – это ноль
        1 – нечетное число
        2 – четное число
        3 – нечетное число
        …
        10 – четное число
    */
    function task2() {
      let x = 0;
        do { if(x == 0) {
                alert(x + ' ' + '- это 0');
            }
            if(x == 1 || x == 3 || x == 5 || x == 7 || x == 9) {
                alert(x + '- нечетное число');
            }
            if(x == 2 || x == 4 || x == 6 || x == 8 || x == 10) {
                alert(x + '- четное число');
            }  
            x++;
        } while (x <= 10);
    }

    /*
    Задание 3
     * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
     for(…){// здесь пусто}
    */
    function task3() {
        for (i = 0; i <= 9; alert(i), i++) {}
    }

    /*
    Задание 4
    * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

    x
    xx
    xxx
    xxxx
    xxxxx
    */
    function task4() {
    let drawStr = '';
    for (var i = 1; i <= 20; i++) {
        drawStr += 'x';
        console.log(drawStr);
        }
    }

/*var str = '';
for (var i = 1; i <= 20; i++) {
	str += 'x';
	document.write(str + '<br>');
}*/