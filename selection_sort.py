# 알고리즘 공부
# 정렬 알고리즘

# 선택 정렬
# 가장 작은 데이터를 선택해서 맨 앞 데이터와 바꾸는 것
# 0번 째 칸에 들어갈 가장 작은 데이터
# 1번 째 칸에 들어갈 가장 작은 데이터... 반복 수행하면 된다.
# 정렬되지 않은 데이터 1개가 남으면 처리하지 않으면 된다.

# 선택 정렬의 시간 복잡도
# N + (N - 1) + (N - 2) + ... + 2
# (N**2 + N - 2) / 2로 표현 할 수 있는데 빅 오 표기법에 따라 O(N**2) 만큼 시간 복잡도를 가진다.

# 이중 포문을 사용하여 선택 정렬을 수행할 수 있다.
arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(len(arr)):
    min_idx = i  # 가장 작은 원소의 인덱스

    for j in range(i + 1, len(arr)):
        if arr[min_idx] > arr[j]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]  # 둘의 위치 스왑왑
print(arr)
