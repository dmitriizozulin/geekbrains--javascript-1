'use strict';

function getDigits(num) {
	if (!Number.isInteger(num) || num > 999 || num < 0) {
		console.log("Неверные данные!");
		return {};
	}

	return {
		hundreds: Math.floor(num / 100),
		tens: Math.floor(num / 10) % 10,
		units: num % 10,
	};
}
console.log(getDigits(123));

// -----------------------------------------------------------

{ // ES5
	function Product(name, price) {
		this.name = name;
		this.price = price;
	}

	Product.prototype.make25PercentDiscount = function () {
		this.price = this.price - (this.price * 25 / 100);
	};

	const product = new Product('Cheese', 200);
	product.make25PercentDiscount();

	console.log(product);
}

{ // ES6
	class Product {
		constructor(name, price) {
			this.name = name;
			this.price = price;
		}

		make25PercentDiscount() {
			this.price = this.price - (this.price * 25 / 100);
		}
	}

	const product = new Product('Milk', 100);
	product.make25PercentDiscount();

	console.log(product);
}

// -----------------------------------------------------------

{ // ES5
	function Post(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}

	Post.prototype.edit = function (text) {
		this.text = text;
	}

	const post = new Post('Michael', 'Hello', new Date());
	console.log(post);
	post.edit('World!');
	console.log(post);


	function AttachedPost(author, text, date) {
		Post.call(this, author, text, date);
		this.highlighted = false;
	}

	AttachedPost.prototype = Object.create(Post.prototype);
	AttachedPost.prototype.constructor = AttachedPost;

	AttachedPost.prototype.makeTextHighlighted = function () {
		this.highlighted = true;
	}

	const attached = new AttachedPost('Alex', 'Lorem ipsum dolor sit', new Date());
	console.log(attached);
	attached.makeTextHighlighted();
	attached.edit('amet consectetur, adipisicing');
	console.log(attached);
}


{ // ES6
	class Post {
		constructor(author, text, date) {
			this.author = author;
			this.text = text;
			this.date = date;
		}

		edit(text) {
			this.text = text;
		}
	}

	const post = new Post('Michael', 'Hello', new Date());
	console.log(post);
	post.edit('World!');
	console.log(post);


	class AttachedPost extends Post {
		constructor(name, text, date) {
			super(name, text, date);
			this.highlighted = false;
		}

		makeTextHighlighted() {
			this.highlighted = true;
		}
	}

	const attached = new AttachedPost('Alex', 'Lorem ipsum dolor sit', new Date());
	console.log(attached);
	attached.makeTextHighlighted();
	attached.edit('amet consectetur, adipisicing');
	console.log(attached);
}
