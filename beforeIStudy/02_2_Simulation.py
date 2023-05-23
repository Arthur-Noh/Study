# 구현 no.2
# 시각 문제
# 전형적인 완전 탐색 문제(Brute Forcing)이다.

# H 입력 받기
h = int(input())

count = 0
for i in range(h + 1):
    for j in range(60):
        for k in range(60):
            # 매 시각 안에 '3'이 포함되어 있다면 카운트 증가
            if '3' in str(i) + str(j) + str(k): # 파이썬은 그냥 문자열로 합쳐버림
                count += 1

print(count)
