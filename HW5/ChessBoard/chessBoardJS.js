let board = '';
for (let j = 0; j < 9; j++) {
    board += '<tr>';
    for (let i = 0; i < 9; i++) {
        board += `<td data-i = '${i}' data-j = '${j}'></td>`
    };
    board += '</tr>';
};
board = '<table><tbody>' + board + '</tbody></table>';
document.body.insertAdjacentHTML('afterbegin', board);

for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let cell = document.querySelector(`[data-i = '${i}'][data-j = '${j}']`);
        if (i == 0) {
            cell.classList.add('number');
        } else if (j == 0) {
            cell.classList.add('letter');
        };
    };
};

for(let j = 1; j < 9; j++) {
    let cell = document.querySelector(`[data-i = '0'][data-j = '${j}']`);
    cell.innerHTML = 9 - j;
};
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for(let i = 1; i < 9; i++) {
    let cell = document.querySelector(`[data-i = '${i}'][data-j = '0']`);
    cell.innerHTML = letters[i - 1];
};
for (let j = 1; j < 9; j++) {
    for (let i = 1; i < 9; i++) {
        let cell = document.querySelector(`[data-i = '${i}'][data-j = '${j}']`);
        if ((i + j) % 2 != 0) {
            cell.classList.add('black');
        };
    };
};