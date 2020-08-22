let renderer = {
    /**
     * Карта с состоянием игры
     */
    map: '',
    /**
     * Отображает игру в консоли
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.x == row && player.y == col) {
                    this.map += 'o '
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
}