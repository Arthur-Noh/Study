// 회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
// 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
// ▣ 입력예제 1
// gooG
// ▣ 출력예제 1
// YES

const solution1 = (str='') => {
    // 나는 이렇게 풀었다.
    // 문자열을 분리해서 하나는 리버스를 하고
    // 각각의 값을 비교한다.
    
    // let answer = 'YES';

    // const str1 = str.toUpperCase().slice().split('');
    // const str2 = str.toUpperCase().slice().split('').reverse();
    // const n = str.length;

    // for (let i = 0 ; i < n ; i++) {
    //     if (str1[i] != str2[i]) {
    //         answer = 'NO';
    //         break;
    //     }
    // }

    // 이렇게 푸는 경우도 있고
    // let answer = 'YES';
    // let s = str.toLowerCase();
    // let len = s.length;

    // for (let i = 0 ; i < Math.floor(len/2) ; i++) {
    //     if (s[i] !== s[len - i - 1]) {
    //         answer = 'NO';
    //         break;
    //     }
    // }

    // 강한 비교로 풀어 볼 수도 있다.
    let answer = 'YES';
    str = str.toLowerCase();
    if (str.split('').reverse().join('') !== str) {
        answer = 'NO';
    }

    return answer;
};