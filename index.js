'use strict'

{
	let a = 1, b = 1, c, d;
	c = ++a; // Значение a увеличивается на 1, затем присваевается c
	alert(c); // 2

	d = b++; // Значение b присваевается d, затем значение b увеличивается на 1
	alert(d); // 1

	c = 2 + ++a; // Значение a увеличивается на 1, затем к нему прибавляется 2, затем это присваевается c
	alert(c); // 5

	d = 2 + b++; // К значению b прибавляется 2, затем это присваевается d, затем значение b увеличивается на 1
	alert(d); // 4

	alert(a); // 3
	alert(b); // 3
}


{
	let a = 2;
	let x = 1 + (a *= 2);

	/*
		1. Переменной a присваевается значение 2
		2. Значение a умножается на 2, результат присваевается a
		3. К значению a прибавляется 1, результат присваевается x

		a = 4
		x = 5
	*/
}


{
	let a = 12, b = -18;

	if (a >= 0 && b >= 0) console.log(a - b);
	else if (a < 0 && b < 0) console.log(a * b);
	else if (Math.sign(a) !== Math.sign(b)) console.log(a + b);
}

{
	function add(a, b) { return +a + +b; }
	function sub(a, b) { return +a - +b; }
	function mul(a, b) { return +a * +b; }
	function div(a, b) { return +a / +b; }

	function mathOperation(a, b, op) {
		switch (String(op).toLowerCase()) {
			case "сложение": return add(a, b);
			case "вычитание": return sub(a, b);
			case "умножение": return mul(a, b);
			case "деление": return div(a, b);
			default: console.error("Оператор не найден"); return NaN;
		}
	}

	console.log(mathOperation(5, 3, "умножение"));
}

{
	const val = prompt("Введите сумму, на которую Вы хотите пополнить счет").trim();

	switch (val[val.length - 1]) { // Последняя цифра
		case '1': {
			if (val.slice(val.length - 2) !== '11') { // Последние 2 цифры не равны 11?
				alert(`Ваша сумма в ${val} рубль зачислена`);
				break;
			}
		}

		case '2':
		case '3':
		case '4': {
			if (
				val.length >= 3 && +val.slice(val.length - 2) > 20 // Число 3х значное и последние 2 цифры больше 20?
				|| val.length == 1
			) {
				alert(`Ваша сумма в ${val} рубля зачислена`);
				break;
			}
		}

		default: alert(`Ваша сумма в ${val} рублей зачислена`);
	}
}
