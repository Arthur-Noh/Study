// 장난꾸러기 현수
// 정렬을 사용하면 더 쉽게 해결할 수 있다.
// 정렬을 해서 원본 배열과 위치가 다른 친구 2개를 찾으면 된다.
const solution6 = () => {
    let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let answer = [];

    sortedArr.map((value, index) => {
        if (value !== arr[index]) {
            answer.push(index + 1);
        }
    });

    return answer;
};