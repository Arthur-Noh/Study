# 알고리즘 공부
# 정렬 알고리즘

# 퀵 정렬
# 기준 데이터를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법
# 일반적인 상황에서 가장 많이 사용되는 알고리즘
# 기본 퀵 정렬은 첫 번째 데이터를 기준 데이터(Pivot)로 설정한다.

# 첫 번째 데이터가 기준 데이터(Pivot)라면
# 리스트의 왼쪽부터 Pivot 보다 큰 데이터를 찾고
# 리스트의 오른쪽 부터 Pivot보다 작은 데이터를 찾는다.
# 그 두값의 위치를 바꾼다.

# 그러다보면 두 값의 인덱스가 엇갈리는 경우가 발생(작은게 오른쪽, 큰게 왼쪽) 하는데
# 이때는 작은 데이터와 Pivot 값의 위치를 바꾼다.
# 데이터가 Pivot 를 중심으로 좌우로 나뉘게 된다.
# 이 순간 Pivot 를 중심으로 좌측은 Pivot보다 작은 값, 우측은 Pivot 보다 큰 값만 남게 된다.

# 다시 왼쪽에 있는 데이터 묶음을 퀵 정렬을 수행
# 오른쪽에 있는 데이터 묶음을 퀵 정렬을 수행한다.

# 이 과정을 재귀적으로 수행하다 보면 정렬이 수행된다.
# O(NlogN)의 시간 복잡도를 기대할 수 있다.
# 너비 X 높이 = N * log N

arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]


def quick_sort(arr, start, end):
    if start >= end:  # 원소의 갯수가 1개인 경우 종료
        return

    pivot = start  # 피벗은 첫 원소
    left = start + 1
    right = end

    while left <= right:
        # 피벗보다 큰 데이터를 찾을 때까지 반복
        while left <= end and arr[left] <= arr[pivot]:
            left += 1
        # 피벗보다 작은 데이터를 찾을 때까지 반복
        while right > start and arr[right] >= arr[pivot]:
            right -= 1

        if left > right:  # 엇갈렸다면 작은 데이터와 피벗을 교체
            arr[right], arr[pivot] = arr[pivot], arr[right]
        else:  # 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            arr[left], arr[right] = arr[right], arr[left]

    # 분할 이후 왼쪽 부분과 오른쪽 부분에 대해 각각 정렬 수행행
    quick_sort(arr, start, right - 1)
    quick_sort(arr, right + 1, end)


quick_sort(arr, 0, len(arr) - 1)
print(arr)
