// 3
// 연필 개수
// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
const soultion3 = (n) => {
    // 이렇게 풀어도 괜찮고
    // let das = parseInt(n / 12);
    // let remainStudent = n % 12;

    // if (remainStudent != 0) {
    //     return das + 1;
    // }
    // return das;

    // js 내장 함수중에 Math 의 ceil 올림 함수를 사용해도 된다.
    return Math.ceil(n / 12);
};