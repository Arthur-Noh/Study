// 공통원소 구하기
// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
// 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
// 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 각 집합의 원소는 1,000,000,000이하의 자연수입니다.
// ▣ 출력설명
// 두 집합의 공통원소를 오름차순 정렬하여 출력합니다.
// ▣ 입력예제 1 5
// 13952
// 5
// 32578
// ▣ 출력예제 1 235

const solution2 = (arr1=[], arr2=[]) => {
    // 나는 include 를 사용해서 풀었다.
    // 근데 결국 include 도 순회해서 찾는거라 시간복잡도는 O^2 된다고 한다.
    // let answer = [];

    // for (let i = 0 ; i < arr1.length ; i++) {
    //     if (arr2.includes(arr1[i])) {
    //         answer.push(arr1[i]);
    //     }
    // }

    // answer.sort((a, b) => a - b);

    // Two pointer 방식으로 해결해보자
    let answer = [];
    let p1 = 0;  // 1번 배열의 포인터
    let p2 = 0;  // 2번 배열의 포인터

    let n = arr1.length;
    let m = arr2.length;

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    while(p1 < n && p2 < m) {
        if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1]);
            p1++;
            p2++;
        } else if (arr1[p1] < arr2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }

    return answer;
};