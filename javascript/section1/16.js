// 16
// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
// 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력됩니다.
// ▣ 출력설명
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.
// ▣ 입력예제 1
// ksekkset
// ▣ 출력예제 1
// kset

const solution16 = (str='') => {
    // 난 set 로 풀었고
    /*
    let strSet = new Set();
    for (let text of str) {
        strSet.add(text);
    }
    let answer = '';
    strSet.forEach((value) => answer += `${value}`);

    return answer;
    */

    // 이렇게도 풀었다.
    /*
    let strSet = [];
    let answer = '';

    for (let text of str) {
        if (!strSet.includes(text)) {
            strSet.push(text);
        }
    }

    strSet.forEach((value) => answer += value);

    return answer;
    */

    // 풀이는 indexOf 로 풀은듯
    // indexOf 는 가장 앞에부터 순회하면서 찾는다. 두번째 인자는 언제부터 searching 을 시작할지 정하는것임
    let answer = '';
    for (let i = 0 ; i < str.length ; i++) {
        if (str.indexOf(str[i]) === i) {
            answer += str[i];
        }
    }

    return answer;
};