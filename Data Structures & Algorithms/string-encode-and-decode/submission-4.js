class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return "";

        let encoded = "";

        for (let i = 0; i < strs.length; i++) {
            const separator = (i == strs.length - 1) ? "" : "--";
            encoded += `/#/${strs[i]}/#/${separator}`;
        }

        console.log(encoded)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str.length) return [];
        return str.split("--").map((str) => str.replaceAll('/#/', ''));
    }
}
