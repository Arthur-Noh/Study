// 모든 아나그램 찾기 (해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
// ▣ 입력예제 1 bacaAacba abc
// ▣ 출력예제 1 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.

const compareMaps = (map1, map2) => {
    if (map1.size !== map2.size ) {
        return false; // key 종류, 갯수 자체가 다르기 때문에
    }

    for (let [key, value] of map1) {
        if (!map2.has(key)) {
            return false;
        }
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
};

const solution8 = (s='', t='') => {
    let answer = 0;
    let sHash = new Map();
    let tHash = new Map();
    let length = t.length - 1;

    for (let x of t) {
        if (tHash.has(x)) {
            tHash.set(x, tHash.get(x) + 1);
        } else {
            tHash.set(x, 1);
        }
    }

    for (let i = 0 ; i < length ; i++) {
        if (sHash.has(s[i])) {
            sHash.set(s[i], sHash.get(s[i]) + 1);
        } else {
            sHash.set(s[i], 1);
        }
    }

    let left = 0;
    for (let right = length ; right < s.length ; right++ ) {
        if (sHash.has(s[right])) {
            sHash.set(s[right], sHash.get(s[right]) + 1);
        } else {
            sHash.set(s[right], 1);
        }

        if (compareMaps(sHash, tHash)) {
            answer ++;
        }
        sHash.set(s[left], sHash.get(s[left]) - 1);
        if (sHash.get(s[left]) === 0) {
            sHash.delete(s[left]);
        }
        left++;
    }

    return answer;
};