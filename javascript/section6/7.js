// 교육과정 설계

// Stack 로 저장해서 값이 잘 들어갔는지 확인해보자.
const solution7 = () => {
    const input = 'CBA'.split('');
    const s = 'CBDAGE';

    let answer = 'NO';
    let current = 0;
    let stack = [];
    
    for (let x of s) {
        if (x === input[current]) {
            stack.push(x);
            current++;
        }
    }

    if (stack.length === input.length){
        return 'YES';
    }


    return answer;
};

// 다른 방법으로 해결해본다.
// Queue로 해결해본다.
const solution7_1 = () => {
    const need = 'CBA';
    const plan = 'CBDGE';

    let queue = need.split('');

    for (let subject of plan) {
        // 큐에 값이 있는지 확인하고, 그게 큐의 가장 최앞단 값과 일치하지 않으면 NO 출력
        if (queue.includes(subject)) {
            if (subject !== queue.shift()) {
                return 'NO';
            }
        }
    }
    // 남은 큐가 존재한다면
    if (queue.length > 0) {
        return 'NO';
    }
    return 'YES';
};