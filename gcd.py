# 최대공약수 계산
# 유클리드 호제법 사용

def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)

import sys
sys.stdout.write("{0}".format(gcd(192, 162)))
sys.stdout.write("\n")
