// 공주 구하기

// 돌아가면서 K를 외친 수를 제거하는 문제이다.
// Queue를 사용하여 개발하면 된다.
const solution6 = () => {
    const n = 8;
    const k = 3;

    let answer;
    let queue = Array.from({length: n}, (v, i) => {
        return i + 1;
    });

    while(queue.length) {
        for(let i = 1 ; i < k ; i++) {
            // 가장 맨 앞에 있는 값을 빼내서 다시 맨 뒤로 삽입한다.
            queue.push(queue.shift());
        }
        if (queue.length === 1) {
            answer = queue.shift();
        }
    }

    return answer;
};