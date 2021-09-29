# 반복문을 사용하여 구현한 n!
def factorial_iterative(n):
    result = 1

    # 1부터 n까지의 수를 차례대로 곱하기
    for i in range(1, n + 1):
        result *= i

    return result

# 재귀함수를 사용하여 구현한 n!
def factorial_recursive(n):
    if n <= 1: # n의 값이 1 이하가 된 경우 1을 반환한다.
        return 1
    # n! = n * (n-1)!
    return n * factorial_recursive(n - 1)

# 각각의 방식으로 구현한 n! 출력(n=5)
import sys
sys.stdout.write("반복문으로 구현 : {0}\n".format(factorial_iterative(5)))
sys.stdout.write("재귀함수로 구현 : {0}".format(factorial_recursive(5)))
