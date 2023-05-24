// 5
// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

const solution5 = (a, b, c, d, e, f, g) => {
    const sortedArr = [a, b, c, d, e, f, g].sort(
        // 반대로 내림차순 정렬을 하려면 b - a 로 선언하면 된다.
        (a, b) => { return a - b; }
    );
    // 또는 Math 내장함수로도 가능함.
    const min = Math.min(...sortedArr);
    return sortedArr[0];
};