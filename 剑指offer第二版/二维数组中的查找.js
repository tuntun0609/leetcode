/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
	const rowNum = matrix.length;
	if (rowNum == 0) return false
	const colNum = matrix[0].length;

	let rowMark = rowNum - 1;
	let colMark = 0;
	let mark = matrix[rowMark][colMark];
	while(rowMark > 0 && colMark < colNum - 1) {
		if (matrix[rowMark][colMark] == target) return true
		else if (matrix[rowMark][colMark] < target) col++
		else row--
	}
	return false;
};