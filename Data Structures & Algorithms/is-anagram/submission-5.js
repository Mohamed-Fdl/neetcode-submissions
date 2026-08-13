class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        while (t.length) {
            let foundAt = t.indexOf(s[0]);
            if (foundAt === -1) {
                return false;
            }

            s = s.slice(1);
            t = t.replace(t[foundAt], "");
        }

        return true;
    }
}
