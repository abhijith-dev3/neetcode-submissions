class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for(let r = 0 ; r < 9 ; r++){
            for(let c = 0 ; c < 9; c++){
                
                let val = board[r][c];

                if(val === ".") continue;

                let rowKey = `${val} in row ${r}`;
                let colKey = `${val} in col ${c}`;
                let boxKey = `${val} in box ${Math.floor(r/3)} -${Math.floor(c/3)}`;

                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                    return false
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
        return true;
    }
}
