const matrix = [[1,2,3],[4,5,6],[7,8,9]];
// for(let row of matrix){
//     console.log(row);
// }

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}

matrix[0][0] = 'x';
matrix[0][1] = '0';
matrix[0][2] = 'x';

matrix[1][0] = '0';
matrix[1][1] = 'x';
matrix[1][2] = '0';

matrix[2][0] = 'x';
matrix[2][1] = '0';
matrix[2][2] = 'x';

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}