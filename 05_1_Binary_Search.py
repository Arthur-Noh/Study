# Binary Search no.1
# 떡볶이 떡 만들기 문제

# 떡볶이의 떡의 길이가 일정하지 않다. 대신 한 봉지 안에 들어가는 떡의 총 길이는 절단기로 잘라서 맞춰 준다.
# 절단기에 높이 H를 지정하면 줄지어진 떡을 한번에 절단한다. 높이가 H 보다 긴 떡은 H 윗 부분이 잘린다.
# 손님이 왔을 때 요청한 총 길이가 M 이면, 적어도 M 만큼의 떡을 얻기 위해 절단기에 설정할 수 있는 높이의 최댓값을 구하여라

# 잘린 윗 부분을 구하는 문제임

import sys
# 떡의 갯수(N)과 요청한 떡의 길이 M 입력
n, m = list(map(int, sys.stdin.readline().split()))
# 각 떡의 개별 높이 정보 입력
arr = list(map(int, sys.stdin.readline().split()))

# 이진 탐색을 위한 시작점과 끝점 설정
start = 0
end = max(arr)

# 이진 탐색 수행
result = 0

while start <= end:
    total = 0
    mid = (start + end) // 2

    for x in arr:
        # 잘랐을 때의 떡의 양 계산
        if x > mid:
            total += x - mid

    # 떡의 양이 부족한 경우 더 많이 자르기(왼쪽 부분 탐색)
    if total < m:
        end = mid - 1
    # 떡의 양이 충분한 경우 덜 자르기(오른쪽 부분 탐색)
    else:
        result = mid # 최대한 덜 잘랐을 때가 정답이므로, 여기에서 result 기록
        start = mid + 1

print(result)
