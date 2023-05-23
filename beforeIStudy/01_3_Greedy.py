# 그리디 알고리즘 no.3
# 곱하기 혹은 더하기
data = input()

# 첫 번째 문자를 숫자로 변경하여 대입
result = int(data[0])

for i in range(1, len(data)):
    # 두 수 중에 하나라도 '0' 혹은 '1' 인 경우, 곱하기보다는 더하기를 수행
    num = int(data[i])

    # 뒷 부분의 "or result <= 1"은 초반에 한 두번만 수행되기 때문에 나중에 효율이 높음
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num

print(result)
