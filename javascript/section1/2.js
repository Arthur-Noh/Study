// 2
// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

const solution2 = (a, b, c) => {
    const sum = a + b + c;
    let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    
    if (sum - max > max) {
        return 'YES'
    }

    return 'NO';
};