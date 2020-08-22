let mover = {
    /**
     * Получает и отдает направление от пользователя
     * @returns {str}, Возвращает направление введенное пользователем
     */
    getDirection() {
        const avialableDirection = ['r', 'l', 'd', 'u', 'q'];
        while (true) {
            let direction = prompt('Введите направление, куда вы хотите переместится r - вправо, l - влево, d - вниз, u - вверх, q - конец игры');
            if (!avialableDirection.includes(direction)) {
                alert('Необходимо вводить: r - вправо, l - влево, d - вниз, u - вверх, q - конец игры');
                continue;
            }
            return direction;
        }
    },

    /**
     * Возвращает следующую точку, в которой будет находится пользователь после движения
     * @param {str} direction Направление движения игрока
     * @returns {{x: int, y: int}} Следующая позиция игрока
     */

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        }
        switch (direction) {
            case 'd':
                nextPosition.x++;
                break;
            case 'u':
                nextPosition.x--;
                break;
            case 'r':
                nextPosition.y++;
                break;
            case 'l':
                nextPosition.y--;
                break;
        }
        if (nextPosition.x < 0) {
            nextPosition.x = 0;
        };
        if (nextPosition.x > (config.colsCount - 1)) {
            nextPosition.x = config.colsCount - 1;
        }
        if (nextPosition.y < 0) {
            nextPosition.y = 0;
        }
        if (nextPosition.y > (config.rowsCount - 1)) {
            nextPosition.y = config.rowsCount - 1;
        }
        return nextPosition;
    }
}