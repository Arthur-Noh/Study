# 다이나믹 프로그래밍의 사용 조건을 만족하는지 확인한다.
# 1. 최적 부분 구조 : 큰 문제를 작은 문제로 나눌 수 있다.
# 2. 중복되는 부분 문제 : 동일한 작은 문제를 반복적으로 해결한다.
# 피보나치 수열은 다이나믹 프로그래밍의 사용조건을 만족한다.

# 메모이제이션(Memoization)
# 한 번 계산한 결과를 메모리 공간에 메모하는 기법
# 같은 문제를 다시 호출하면 메모했던 결과를 그대로 가져온다.
# 값을 기록해 놓는다는 점에서 캐싱(Caching)이라고도 한다.

# 탑다운 vs 바텀업
# 탑다운(메모이제이션) 방식은 하향식이라고도 하며, 바텀업 방식은 상향식이라고도 한다.
# 다이나믹 프로그래밍의 전형적인 형태는 바텀업 방시깅다.
# 결과 저장용 리스트는 DP 테이블이라고 부른다.
# 엄밀하게 말하면 메모이제이션은 이전에 계산된 결과를 일시적으로 기록해 놓은 넓은 개념을 의미한다.
# 따라서 메모이제이션은 다이나믹 프로그래밍에 국한된 개념이 아니다.
# 한 번 계산된 결과를 담아놓기만 하고 다이나믹 프로그래밍을 위해 활용하지 않을 수 있다.

# 피보나치 수열 : 탑다운 다이나믹 프로그래밍 소스
# 한 번 계산된 결과를 메모이제이션(Memoization)하기 위한 리스트 초기화
d = [0] * 100


# 피보나치 함수를 재귀함수로 구현(탑다운 다이나믹 프로그래밍)
def fibo(x):
    # 종료 조건 : 1 or 2 일때 1을 반환
    if x == 1 or x == 2:
        return 1

    # 이미 계산한 적이 있는 문제라면 그대로 반환
    if d[x] != 0:
        return d[x]

    # 아직 계산하지 않은 문제라면 점화식에 따라 피보나치 결과 반환
    d[x] = fibo(x - 1) + fibo(x - 2)
    return d[x]
