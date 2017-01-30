class TicTacToe {
    constructor() {
        this.GameField = [[null,null,null],[null,null,null],[null,null,null]];
        this.CurrentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.GameField[rowIndex][columnIndex] == null)
        {
            if (this.CurrentPlayerSymbol == 'x')
            {        
                this.GameField[rowIndex][columnIndex] = 'x';
                this.CurrentPlayerSymbol = 'o';
            }
            else
            {
                this.GameField[rowIndex][columnIndex] = 'o';
                this.CurrentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.getWinner() != null || this.noMoreTurns() == true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getWinner() {
        for (var index = 0; index <= 2; ++index)
        {
            if (this.GameField[index][0] != null)
            {
                if (this.GameField[index][0] == this.GameField[index][1] && this.GameField[index][0] == this.GameField[index][2])
                {
                    return this.GameField[index][0];           
                }
            }
            if (this.GameField[0][index] != null)
            {
                if (this.GameField[0][index] == this.GameField[1][index] && this.GameField[0][index] == this.GameField[2][index])
                {
                    return this.GameField[0][index];
                }
            }
        }
        if (this.GameField[1][1] != null)
        {
            if (this.GameField[0][0] != null)
            {
                if (this.GameField[0][0] == this.GameField[1][1] && this.GameField[0][0] == this.GameField[2][2])
                {
                    return this.GameField[0][0];
                }
            }
            if (this.GameField[0][2] != null)
            {
                if (this.GameField[0][2] == this.GameField[1][1] && this.GameField[0][2] == this.GameField[2][0])
                {
                    return this.GameField[0][2];
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        for (var RowIndex = 0; RowIndex <= 2; ++RowIndex)
        {
            for (var ColumnIndex = 0; ColumnIndex <= 2; ++ColumnIndex)
            {
                if (this.GameField[RowIndex][ColumnIndex] == null)
                {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        if (!this.isFinished() || this.getWinner() != null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.GameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
