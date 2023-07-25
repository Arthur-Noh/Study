// 크레인 인형뽑기 (카카오)

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution3 = () => {
    let answer = 0;
    let stack = [];
    const size = board.length;

    moves.forEach(position => {
        for (let i = 0 ; i < size ; i++) {
            let item = board[i][position - 1];
            board[i][position - 1] = 0;
            
            // 만약에 뽑은 값이 0 이라면 한 줄 내려간다.
            if (item === 0) {
                continue;
            }

            // 만약 뽑은 값이 이미 스텍 최상단 값과 같다면 상단 값을 추방시킨다.
            if (item === stack[stack.length - 1]) {
                stack.pop();
                answer += 2;
                break;
            }

            // 아무것도 아니라면 스텍에 넣고 탈출한다.
            stack.push(item);
            break;
        }
    });

    return answer;
};