// 17
// 중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
// ▣ 입력예제 1
// 5
// good
// time
// good
// time
// student
// ▣ 출력예제 1
// good
// time
// student

const solution17 = (strArr = []) => {
    // indexOf 로 풀어볼까?
    // indexOf 로 푸니까 시간복잡도가 그냥 O 가 되었음
    let answer = [];

    for (let i = 0 ; i < strArr.length ; i++) {
        if (strArr.indexOf(strArr[i]) === i) {
            answer.push(strArr[i]);
        }
    }

    // Set 함수로 푼 경우
    let answer2 = [];
    let setArr = new Set(strArr);
    setArr.forEach((value) => answer2.push(value));
    console.log('setArr :', answer2);

    // filter 로도 풀 수 있음, 꼭 for 문을 쓸 필요는 없음
    let answer3 = [];
    answer3 = strArr.filter((value, index) => {
        if (strArr.indexOf(value) === index) {
            return true;
        }
        // (value, index) => strArr.indexOf(value) === index;
    });
    console.log('filter :', answer3);

    return answer;
};