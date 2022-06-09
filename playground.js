// var two_d = [[1,2,3],[4,5,6],[7,8,9]];
// var col3 = two_d.map(function(value,index) { return value[1]; });

// console.log(col3);

let arr = [[1, 2, 1], [2, 3, 4]];

arr.findIndex((value, index) => {
    if(value[index] == 1){
        console.log(index);

    }
})
