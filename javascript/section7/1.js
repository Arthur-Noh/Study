// 선택 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
// 정렬하는 방법은 선택정렬입니다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에
// 있습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.
// ▣ 입력예제 1
// 6
// 13 5 11 7 23 15
// ▣ 출력예제 1
// 5 7 11 13 15 23

const solution1 = () => {
    const target = [13, 5, 11, 7, 23, 15];
    let answer;

    // js 의 경우 내장 함수로 간단하게 해결 할 수 있는데
    // 이런 해결 방법을 원하지 않았을 수도 있겠다 싶었다.
    answer = target.sort((a, b) => a - b);

    let _target = [13, 5, 11, 7, 23, 15];

    // 직접 구현을 하면 이런 느낌이다.
    for (let i = 0 ; i < _target.length ; i++) {
        let index = i;
        for (let j = i ; j < _target.length ; j++) {
            if (_target[j] < _target[index]) {
                index = j;
            }
        }
        [_target[i], _target[index]] = [_target[index], _target[i]];
    }

    return _target;
};