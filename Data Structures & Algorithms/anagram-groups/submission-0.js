class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapConstruct = new Map();
        const result = [];

        for (let str of strs) {
            let hasBeenAddedToAGroup = false;
            if (mapConstruct.has(str.length)) {
                for (let i = 0; i < mapConstruct.get(str.length).length; i++) {
                    const currentGroup = mapConstruct.get(str.length)[i];
                    if (this.areValidAnagram(str, currentGroup[0])) {
                        currentGroup.push(str);
                        const newValue = mapConstruct.get(str.length);
                        newValue[i] = currentGroup;
                        mapConstruct.set(str.length, newValue);
                        hasBeenAddedToAGroup = true;
                    }
                }
                if (!hasBeenAddedToAGroup) {
                    const newValue = mapConstruct.get(str.length);
                    newValue.push([str]);
                    mapConstruct.set(str.length, newValue);
                }
            } else {
                mapConstruct.set(str.length, [[str]]);
            }
        }

        for(let value of mapConstruct.values()) {
            result.push(...value)
        }

        return result;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    areValidAnagram(s, t) {
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
