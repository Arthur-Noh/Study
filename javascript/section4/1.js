// 자릿수 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.
// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.
// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123
// ▣ 출력예제

const solution1 = (arr=[]) => {
    // 나는 이렇게 풀었다.
    // let answer = Number.MIN_SAFE_INTEGER;
    // let len = arr.map((value) => 0);

    // for (let i = 0 ; i < arr.length ; i++) {
    //     let temp = arr[i];
    //     for(let j = 0 ; j < `${arr[i]}`.length ; j++) {
    //         len[i] += temp % 10;
    //         temp = Math.floor(temp/10);
    //     }
    // }

    // let maxLen = Math.max(...len);
    // let findMaxValue = len.map((value, index) => {
    //     if (value === maxLen) {
    //         return index;
    //     }
    // }).filter(_ => _ !== undefined);

    // if (findMaxValue.length === 1) {
    //     answer = arr[findMaxValue[0]];
    //     return answer;
    // }

    // for (let i = 0; i < findMaxValue.length ; i++) {
    //     if (answer < arr[findMaxValue[i]]) {
    //         answer = arr[findMaxValue[i]];
    //     }
    // }

    // return answer;

    // 같은 코드인데 좀더 깔끔하게 짜는 방식이 있는듯 하다.
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        let sum = 0;
        let temp = x;
        
        while(temp) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (sum > max) {
            max = sum;
            answer = x;
        } else if(sum === max) {
            if (x > answer) {
                answer = x;
            }
        }
    }
    return answer;
}