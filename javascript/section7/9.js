// 결혼식
const solution9 = () => {
    let answer = Number.MIN_SAFE_INTEGER;
    let times = [
        [14, 18],
        [12, 15],
        [15, 20],
        [20, 30],
        [5, 14],
    ];

    // 각각의 시간 라인을 넣어준다.
    let timeLine = [];
    for (let time of times) {
        timeLine.push([time[0], 's']);
        timeLine.push([time[1], 'e']);
    }

    // 시간을 정렬해준다.
    timeLine.sort((a, b) => {
        // 아스키코드상 e가 더 낮으므로 오름차순 정렬
        // 나가는게 먼저고 들어오는걸 계산하기 위해서
        // 들어오고 나가게 된다면 갯수를 1개 더 세기 때문이다.
        if(a[0] === b[0]) {
            return a[1].charCodeAt() - b[1].charCodeAt();
        }
        return a[0] - b[0];
    });

    // 갯수를 세어준다.
    let count = 0;
    for (let x of timeLine) {
        if (x[1] === 's') {
            count++;
        } else {
            count--;
        }
        
        answer = Math.max(answer, count);
    }

    return answer;
};