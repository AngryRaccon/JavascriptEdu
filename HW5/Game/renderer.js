let renderer = {
    render() {
        let table = this.generateTable();
        document.body.insertAdjacentHTML('afterbegin', table);
        this.generateBarriers(numOfBarriers);
        this.renderUserPosition(player);
    },
    generateTable() {
        let board = '';
        for(let y = 0; y < rowsCount; y++) {
           board += '<tr>';
            for(let x = 0; x < colsCount; x++) {
                board += `<td data-x = '${x}' data-y = '${y}'></td>`;
            }
            board += '</tr>';
        }
        return '<table><tbody>' + board + '</tbody></table>'
    },
    getSquare(obj) {
        return document.querySelector(`[data-x = '${obj.x}'][data-y = '${obj.y}']`);
    },
    renderUserPosition(player) {
        let square = this.getSquare(player);
        square.classList.add('user');
    },
    clearUserPosition() {
        document.querySelector('.user').classList.remove('user');
    },
    renderBarrierPosition(barrier) {
        let square = this.getSquare(barrier);
        square.classList.add('barrier');
    },
    generateBarriers(n) {
        for(let i = 1; i <= n; i++) {
            barrier.generatePosition();
            this.renderBarrierPosition(barrier);
        }
    }
};
