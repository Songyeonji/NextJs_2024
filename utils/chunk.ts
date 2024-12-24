/**
 * 'size' 길이만큼 그룹으로 분할된 요소 배열을 만듭니다. `배열`을 균등하게 분할할 수 없는 경우 
 *  최종 청크는 나머지 요소가 됩니다.
 *
 * @param {Array} array 배열을 처리할 대상
 * @param {number} [size=1] 분할할 크기
 * @returns {Array} 새로운 배열을 반환
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

export default function chunk(array: any[], size: number = 1) {

      // 배열 타입 체크
      if (!Array.isArray(array)) {
        return [];
    }

    // size 타입 체크 및 처리
    if (typeof size !== 'number') {
        size = 1;
    }

    // 소수점 처리 및 음수 처리
    size = Math.max(Math.floor(size), 0);
    
    const length = array.length;
    if (!length || size < 1) {
        return [];
    }

    let index = 0;
    let resIndex = 0;
    const result = new Array(Math.ceil(length / size));
  
    while (index < length) {
      result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
  }