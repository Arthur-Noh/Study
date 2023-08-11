// 좌표 정렬
const solution7 = () => {
    let arr = [
        [2, 7],
        [1, 3],
        [1, 2],
        [1, 2],
        [2, 5],
        [3, 6],
    ];

    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    return arr;
};