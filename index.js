'use strict';

const showModal = document.querySelector('.showModal');
const closeModal = document.querySelector('.closeModal');

showModal.addEventListener('click', () => {
	document.querySelector('.modal').removeAttribute('hidden');
});

closeModal.addEventListener('click', () => {
	document.querySelector('.modal').setAttribute('hidden', 'hidden');
});

const products = document.querySelectorAll('.product');

products.forEach(product => {
	const button = product.querySelector('.product__show-more');

	button.addEventListener('click', () => {
		product.querySelector('.product__img').toggleAttribute('hidden');
		product.querySelector('.product__desc').toggleAttribute('hidden');

		if (button.textContent == 'Подробнее') {
			button.textContent = 'Отмена';
		} else {
			button.textContent = 'Подробнее';
		}
	});
})

const generateChessBoard = () => {
	const getTile = () => {
		const tile = document.createElement('div');
		tile.classList.add('chess__tile')
		tile.style.cssText = `
			background-color: #fff;
			width: 50px;
			height: 50px;
		`;

		return tile;
	};

	const getTileDark = () => {
		const tile__dark = getTile();
		tile__dark.classList.add('chess__tile--dark');
		tile__dark.style.cssText = 'background-color: #333';

		return tile__dark;
	};

	const getCol = (color) => {
		return color == 'black' ? getTileDark() : getTile();
	};

	const getRow = (startColor, rowNum) => {
		const row = document.createElement('div');
		row.classList.add('chess__row');
		row.style.cssText = `
			display: inline-grid;
			grid-template-columns: repeat(9, 50px);
		`;

		const rowInfo = getTile();
		rowInfo.textContent = rowNum;
		rowInfo.style.cssText = `
			display: inline-grid;
			place-items: center;
			font-weight: bold;
			border-right: 1px solid #333;
		`;
		row.appendChild(rowInfo);

		let color = startColor;
		for (let w = 0; w < 8; w++) {
			row.appendChild(getCol(color));

			if (color == 'white') {
				color = 'black';
			} else {
				color = 'white';
			}
		}

		return row;
	};

	const getColInfo = () => {
		const row = document.createElement('div');
		row.classList.add('chess__row');
		row.style.cssText = `
			display: inline-grid;
			grid-template-columns: repeat(9, 50px);
		`;

		row.appendChild(getTile());

		const colChars = 'ABCDEFGH';

		for (let w = 0; w < 8; w++) {
			const colInfo = getTile();
			colInfo.textContent = colChars[w];
			colInfo.style.cssText = `
				display: inline-grid;
				place-items: center;
				font-weight: bold;
				border-top: 1px solid #333;
			`;

			row.appendChild(colInfo);
		}

		return row;
	}

	const getBoard = () => {
		const board = document.createElement('div');
		board.classList.add('chess__board');
		board.style.cssText = `
			display: inline-grid;
			grid-template-rows: repeat(8, 50px);
			border: 1px solid #333;
			margin: 20px;
		`;

		for (let h = 0, color = 'white'; h < 8; h++) {
			board.appendChild(getRow(color, 8 - h));

			if (color == 'white') {
				color = 'black';
			} else {
				color = 'white';
			}
		}

		board.appendChild(getColInfo())

		return board;
	};

	document.body.appendChild(getBoard());
};
generateChessBoard();
