// 15
// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
// 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.
// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u
// ▣ 입력예제 2
// good
// ▣ 출력예제 2
// oo

const solution15 = (str='') => {
    // 나는 이렇게 풀었다.
    /*
    let answer;
    let middleIndex;
    
    if (str.length % 2 === 0) {
        middleIndex = str.length / 2;
        answer = `${str[middleIndex - 1]}${str[middleIndex]}`;
    } else {
        middleIndex = Math.floor(str.length / 2);
        answer = str[middleIndex];
    }
    */

    let answer;
    let mid = Math.floor(str.length / 2);

    if (str.length % 2 === 1) {
        // 그니까 substring 은 뭔소리냐면
        // 만약에 study 가 입력됬다고 해보자
        // 0, 1, 2, 3, 4 의 각각의 인덱스가 있을거 아냐
        // 시작 위치가 mid = 2,  2번인덱스에서 시작을 해서
        // 끝나는 위치의 직전까지만 mid + 1 = 3 의 전 까지만 텍스트를 자르겠다는거야.
        // 그니까 2번만 자를거니까 u가 정상적으로 나오겠지.
        answer = str.substring(mid, mid + 1);
        // substr 이라는 것도 있는데, n번째 인덱스부터 m개의 문자열을 잘라내라 라는 뜻임
        // mdn 보니까 쓰지말라던데
    } else {
        answer = str.substring(mid - 1, mid + 1);
    }
    return answer;
}