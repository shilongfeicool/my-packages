/**
 * 
 * @param str 
 * 第一步指针移动获取所有可能的字符串
 * 第二步把该字符串作为key,次数作为value生成一个对象
 * 第三步先判断最多的次数
 * 第四步反向查找出现最多次数的字符
 * 第五步找出最长的那个字符串
 * @returns str[]
 */
export function getLongStr(str) {
    let obj = {}; // 所有可能的字符集
    for (let i = 0; i <= str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const curStr = str.substring(i, j);
            if (obj[curStr]) {
                obj[curStr] = obj[curStr] + 1
            } else {
                obj[curStr] = 1;
            }
        }
    }
    // 最多的次数
    const maxTimes = Math.max(...Object.values(obj))
    let maxLenArr = []; // 最多次数的字符集
    for (const key in obj) {
        if (obj[key] === maxTimes) {
            maxLenArr.push(key)
        }
    }
    const newArr = maxLenArr.map((item) => {
            return item.length
        }) // 形成length的字符集方便比较最长的长度
    const maxLen = Math.max(...newArr); // 最长的长度
    maxLenArr = maxLenArr.filter((item) => {
            return item.length === maxLen;
        }) // 最长长度对应的字符串集合
    return maxLenArr;
}