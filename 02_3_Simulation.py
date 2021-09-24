# 구현 no.3
# 왕실 나이트 문제
# 전형적인 완전 탐색 문제이면서, 2차원 배열을 이용하는 문제라고 이해하면 좋다.

# 현재 나이트의 위치 입력 받기
input_data = input()
row = int(input_data[1]) # 나이트가 존재하는 행의 위치
column = int(ord(input_data[0])) - int(ord('a')) + 1 # 나이트가 존재하는 열의 위치(아스키 코드값을 변환해준거)

# 나이트가 이동할 수 있는 8가지 방향 정의
# 단순히 하나의 리스트로도 풀 수 있다고 보여주는 문제
# 각각의 값이 하나의 방향 벡터가 된다.
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

# 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
result = 0
for step in steps:
    # 이동하고자 하는 위치 확인
    next_row = row + step[0]
    next_column = column + step[1]

    # 해당 위치로 이동이 가능하다면 카운트 증가
    if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_row <= 8:
        result += 1

print(result)
