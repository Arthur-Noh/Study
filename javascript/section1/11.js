// 11
// 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
// 을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자의 개수를 출력한다.
// ▣ 입력예제 1
// KoreaTimeGood
// ▣ 출력예제 1
// 3

const solution11 = (str) => {
    let countLargeAlphabet = 0;
    for(let text of str) {
        // 약간 전통적인 해결 방법 toUpperCase() 문자를 대문자로 변경해준다.
        // if (text === text.toUpperCase()) {
        //     countLargeAlphabet++;
        // }

        // 아니면 아스키코드를 사용하는 방법도 있다.
        const target = text.charCodeAt();
        if (target >= 65 && target <= 90) {
            countLargeAlphabet++;
        }
    }
    return countLargeAlphabet;
};