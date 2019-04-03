let barrier = {
    x: 0,
    y: 0,
    generatePosition() {
        this.x = Math.round(Math.random() * (colsCount - 1));
        this.y = Math.round(Math.random() * (rowsCount - 1));
    },
};