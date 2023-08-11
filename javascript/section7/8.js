// 회의실 배정

// 그리디 알고리즘으로 해결할 수 있다.
// 끝나는 시간을 기준으로 정렬하고, 같을 경우에는 앞 시간을 비교해서 정렬하면 된다.
const solution8 = () => {
    let meeting = [
        [1, 4],
        [2, 3],
        [3, 5],
        [4, 6],
        [5, 7],
    ];
    let answer = 0;

    meeting.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        else {
            return a[1] - b[1];
        }
    });

    let endTime = 0;

    for (let x of meeting) {
        if (x[0] >= endTime) {
            answer++;
            endTime = x[1];
        }
    }
    return answer;
};