class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let column;
        let box;
        console.log(this.getFlatedSubBox(1, board));

        for (let i = 0; i < 9; i++) {
            column = this.getColumn(i, board);
            box = this.getFlatedSubBox(i, board);
            if (!(this.isValidRow(board[i]) && this.isValidRow(column) && this.isValidRow(box))) {
                return false;
            }
        }
        return true;
    }

    /**
     * @param {character[]} board
     * @return {boolean}
     */
    isValidRow(row) {
        const set = new Set();
        if (row.length != 9) return false;

        for (let i = 0; i < row.length; i++) {
            if (row[i] == ".") continue;
            if (!set.has(row[i])) {
                set.add(row[i]);
            } else {
                return false;
            }
        }

        return true;
    }

    /**
     * @param {integer} index
     * @param {char[][]} board
     * @return {char[]}
     */
    getColumn(index, board) {
        let column = [];
        for (let i = 0; i < 9; i++) {
            column.push(board[i][index]);
        }

        return column;
    }

    /**
     * @param {integer} index
     * @param {char[][]} board
     * @return {char[]}
     */
    getFlatedSubBox(index, board) {
        let box = [];
        let pointX = 0;

        if (index < 3) {
            pointX = 0;
        } else if (index < 6) {
            pointX = 3;
        } else {
            pointX = 6;
        }

        let pointY = (index % 3) * 3;

        for (let i = pointX; i <= pointX + 2; i++) {
            for (let j = pointY; j <= pointY + 2; j++) {
                box.push(board[i][j]);
            }
        }
        return box;
    }
}
