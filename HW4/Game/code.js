let game = {
    run() {
        console.log('Игра началась');
        while (true) {
            let direction = prompt('Введите направление');
            if (direction === null) {
                console.log('Игра закончилась');
                return;
            }
            let newPoint = mover.getNextPoint(direction);
            renderer.clear();
            player.move(newPoint);
            renderer.render();
        };
        
    },
    init() {
        console.log('Для начала игры введите команду game.run()');
        renderer.render();
  } 
    
};

game.init();