# 알고리즘 공부
# 이진 탐색 알고리즘

# 이진 탐색
# 정렬되어 있는 리스트에서 탐색 범위를 절반 씩 좁혀가며 데이터를 탐색하는 방법
# 탐색 범위를 명시해야 한다.
# 시작, 끝, 중간

# 이진 탐색의 시간 복잡도
# 연산 횟수는 log2 N에 비례한다.
# 시간 복잡도는 O(log N)을 보장한다.

import sys
n, target = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))


def binary_search(arr, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2

    if arr[mid] == target:
        return mid

    elif arr[mid] > target:
        return binary_search(arr, target, start, mid - 1)
    else:
        return binary_search(arr, target, mid + 1, end)


result = binary_search(arr, target, 0, n - 1)
if result is None:
    print("원소가 없습니다.")
else:
    print(result + 1)
