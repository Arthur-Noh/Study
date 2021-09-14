# 그리디 알고리즘
# 1이 될 때까지
n, k = map(int, input().split())

result = 0

while True:
    # N이 K로 나누어 떨어지는 수가 될 때까지 빼기

    # K로 나눌수 있는 가장 가까운 N 값이 몇인지 찾을 수 있다(target).
    # 1씩 빼는 것은 오래 걸리기 때문에 한번에 target를 찾아 N에서 빼준 후, result에 더해준다.
    # 그리고 N에 target 값을 대입한다.
    target = (n // k) * k
    result += (n - target)
    n = target

    # N이 K보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
        break

    # K로 나누기
    # 위 코드로 한번에 K로 나눌 수 있는 값을 찾았기 때문에
    # 나눈 횟수(result)에 1을 더해준 후
    # N에 K를 나눈 몫을 대입한다.
    result += 1
    n //= k

# 마지막으로 남은 수에 대하여 1씩 빼기
result += (n - 1)
print(result)