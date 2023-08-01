// 쇠 막대기

// 스택에 쌓여있는 '(' 는 막대기의 조각을 의미하므로 계속 값을 세어주면 된다.
const solution5 = () => {
    const s = '()(((()())(())()))(())';
    let answer = 0;
    let stack = [];
    
    for(let i = 0 ; i < s.length ; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        }
        // 닫는 괄호를 만났을 때
        else {
            // 먼저 하나의 괄호를 제거해준다.
            stack.pop();
            // 바로 직전의 값이 레이저를 쏘는 부분이라면
            if (s[i - 1] === '(') {
                answer += stack.length;
            }
            // 막대기의 끝이라면
            else {
                answer += 1;
            }
        }
    }

    return answer;
};