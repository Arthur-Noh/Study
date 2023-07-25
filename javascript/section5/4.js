// 연속 부분수열 2
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 13123
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.
// ▣ 입력예제 1 55 13123
// ▣ 출력예제 1 10

// Two pointer
const solution4 = (m, arr=[]) => {
    let answer = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0 ; right < arr.length ; right++) {
        sum += arr[right];

        while (sum > m) {
            sum -= arr[left++];
        }

        answer += (right - left + 1);
    }

    return answer;
};