// 이분검색
const solution10 = () => {
    let arr = [23, 87, 65, 12, 57, 32, 99, 81];
    let target = 32;
    let answer;

    // 오름차순 정렬을 수행한다.
    arr.sort((a, b) => a - b);

    // 이분 탐색을 수행한다.
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = parseInt((left + right) / 2);

        if (arr[middle] === target) {
            answer = middle + 1;
            break;
        }
        else if (arr[middle] > target) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }

    return answer;
};