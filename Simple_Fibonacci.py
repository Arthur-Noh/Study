# 다이나믹 프로그래밍
# 메모리를 적절히 사용하여 수행 시간 효율성을 비약적으로 향상시키는 방법
# 이미 계산된 결과(작은 문제)는 별도의 메모리 영역에 저장하여 다시 계산하지 않도록 함
# 다이나믹 프로그래밍의 구현은 일반적으로 두가지 방식(탑다운, 바텀업) 으로 구성된다.
# 탑다운 : 위에서 아래로 - 하향식
# 바텀업 : 아래에서 위로 - 상향식

# 다이나믹 프로그래밍은 동적계획법이라고 부른다.
# 일반적으로 프로그래밍 분야에서 동적(Dynamic)은 '프로그램 실행 도중 필요한 메모리를 할당하는 기법'이고
# 다이나믹 프로그래밍에서 '다이나믹'은 별다른 의미 없이 사용된 단어이다.

# 문제가 특정 조건을 만족할 때만 사용할 수 있다.
# 1. 최적 부분 구조(Optimal Substructure)
# - 큰 문제를 작은 문제로 나눌 수 있으며, 작은 문제의 답을 모아 큰 문제를 해결할 수 있을 때
# 2. 중복되는 부분 문제(Overlapping Subproblem)
# - 동일한 작은 문제를 반복적으로 해결해야 할 때

# 피보나치 수열
# 피보나치 수열은 다이나믹 프로그래밍으로 효과적으로 계산할 수 있다.
# 점화식이란 인접한 항들 사이의 관계식을 의미한다.
# 피보나치 수열은 점화식으로 표현하면 다음과 같다.
# An = An-1 + An-2, A1 = 1, A2 = 1


# 피보나치 수열 : 단순 재귀 소스코드
def fibo(x):
    if x == 1 or x == 2:
        return 1
    return fibo(x - 1) + fibo(x - 2)


print(fibo(4))
