// Least Recently Used(카카오 캐시 문제 변형)

// 삽입정렬로 해결해보자.
const solution5 = () => {
    const size = 5;
    let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
    let answer = Array.from({ length: size }, () => 0);

    arr.forEach(value => {
        let position = -1;

        // 배열에 이미 값이 존재하는지 확인한다.
        for (let i = 0 ; i < size ; i++) {
            if (value === answer[i]) {
                position = i;
                break;
            }
        }

        // 만약 배열 안에 값이 존재하지 않는다면
        if (position === -1) {
            for (let i = size - 1 ; i > 0 ; i--) {
                answer[i] = answer[i - 1];
            }
            answer[0] = value;
        }
        // 만약 배열 안에 값이 존재한다면
        else {
            for (let i = position ; i > 0 ; i--) {
                answer[i] = answer[i - 1];
            }
            answer[0] = value;
        }
    });

    return answer;
};