let mover = {
    getNextPoint(direction) {
        let nextPoint = {
            x: player.x,
            y: player.y
        }
        /*
        123
        456
        789
        */
        switch(direction) {
            case '1': 
                nextPoint.x = ( nextPoint.x - 1 + 10 ) % 10;
                nextPoint.y = (nextPoint.y - 1 + 10) % 10;
                break;
            case '2': 
                nextPoint.y = (nextPoint.y - 1 + 10) % 10;
                break;
            case '3':
                nextPoint.y = (nextPoint.y - 1 + 10) % 10;
                nextPoint.x = ( nextPoint.x + 1 ) % 10;
                break;
            case '4':
                nextPoint.x = ( nextPoint.x - 1 + 10) % 10;
                break;
            case '6':
                nextPoint.x = ( nextPoint.x + 1 ) % 10;
                break;
            case '7': 
                nextPoint.x = ( nextPoint.x - 1 + 10) % 10;
                nextPoint.y = (nextPoint.y + 1) % 10;
                break;
            case '8':
                nextPoint.y = (nextPoint.y + 1) % 10;
                break;
            case '9': 
                nextPoint.x = ( nextPoint.x + 1 ) % 10;
                nextPoint.y = (nextPoint.y + 1) % 10;
                break;
            default: 
                console.log('Такого направления нет');
        }
        
        return nextPoint;
    }
};