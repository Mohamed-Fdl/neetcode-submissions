class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapConstruct = new Map();
        const result = [];

        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (mapConstruct.has(sortedStr)) {
                mapConstruct.get(sortedStr).push(str);
            } else {
                mapConstruct.set(sortedStr, [str]);
            }
        }

        for(let value of mapConstruct.values()) {
            result.push(value)
        }

        return result;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    areValidAnagrams(s, t) {
        if (s.length != t.length) return false;

        const sMap = {};
        const tMap = {};

        for (let i = 0; i < s.length; i++) {
            sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1;
            tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
        }

        for (let key in sMap) {
            if (sMap[key] != tMap[key]) return false;
        }

        return true;
    }
}
