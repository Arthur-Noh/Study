// 연속 부분수열 1
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.
// ▣ 입력예제 1 86 12131112
// ▣ 출력예제 1 3

// Two pointer
const solution3 = (m, arr=[]) => {
    let answer = 0;
    let left = 0;   // 왼쪽 포인터
    let right = 0;  // 오른쪽 포인터

    while (right < arr.length) {  // 오른쪽 포인터가 길이를 벗어나지 않을 때 까지
        let sum = 0;

        for (let i = left ; i <= right ; i++ ) {  // 부분합 구하기
            sum += arr[i];
        }

        if (sum === m) {
            answer++;
            left++;
        } else if (sum > m) {
            left++;
        } else {
            right++;
        }
    }

    return answer;
};