// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.
// ▣ 입력예제 1 3
// 135
// 5
// 23679
// ▣ 출력예제 1 12335679

const solution1 = (arr1=[], arr2=[]) => {
    // 난 단순하게 이렇게 풀었는데, 시간복잡도가 n log n 이라고 한다.
    // let answer = arr1.concat(...arr2).sort((a, b) => a - b);

    // Two pointers 방식
    let answer = [];
    let p1 = 0;  // 첫번째 배열의 포인터
    let p2 = 0;  // 두번째 배열의 포인터

    let n = arr1.length;
    let m = arr2.length;

    while (p1 < n && p2 < m) {  // 둘 중에 하나가 충족되면 Stop
        if (arr1[p1] < arr2[p2]) {
            answer.push(arr1[p1++]);
        } else {
            answer.push(arr2[p2++]); 
        }
    }
    if (n < m) {
        answer = answer.concat(...arr2.slice(n - 1, m));
    } else {
        answer = answer.concat(...arr1.slice(m - 1, n));
    }

    return answer;
};