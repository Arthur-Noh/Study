// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
// 력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
// 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 1 0 1 2 1 0 1 2 2 1 0

const solution4 = (str='', s='') => {
    // 나는 이렇게 풀었다.
    // 문자에 인덱스에 해당하는 배열을 생성하고
    // 입력받은 문자열을 탐색한다.
    // 동일한 문자가 나오면 0으로 리턴하고
    // 아닐경우 인덱스에 해당하는 값을 전부 빼보고, 최솟값을 push한다.
    // let answer = [];
    // let sIndex = [];
    // let temp = [];

    // str.split('').filter((value, index) => {
    //     if (value === s) {
    //         sIndex.push(index);
    //     }
    // });

    // for (let i = 0 ; i < str.length ; i++) {
    //     // 동일하면 간격이 0
    //     if (str[i] === s) {
    //         answer.push(0);
    //         continue;
    //     }
    //     // 동일하지 않을 경우
    //     temp = [];
    //     for (let index of sIndex) {
    //         temp.push(Math.abs(i - index));
    //     }
    //     answer.push(Math.min(...temp));
    // }

    // return answer;

    // 좌 우로 탐색을 2번 순회하면 된다.
    // 만나면 0으로 초기화 하고 아닐때마다 1씩 더해서 적용한다.
    let answer = [];
    let p = 101;

    // 정방향으로 순회한다.
    for (let x of str){
        if (x !== s) {
            answer.push(++p);
            continue;
        }
        answer.push(0);
        p = 0;
    }

    p = 101;
    // 역방향으로 순회한다.
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        if (str[i] !== s) {
            answer[i] = Math.min(answer[i], ++p);
            continue;
        }
        p = 0;
    }

    return answer;
}