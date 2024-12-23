/**
 * 'start'부터 'end'까지(포함하지 않음) 배열 조각을 만듭니다.
 *
 * @param {Array} array 조각을 만들 배열
 * @param {number} [start=0] 시작 위치. 음수 인덱스는 끝에서부터의 오프셋으로 처리됩니다.
 * @param {number} [end=array.length] 끝 위치. 음수 인덱스는 끝에서부터의 오프셋으로 처리됩니다.
 * @returns {Array} 배열 조각
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */

function slice(array: any[], start?: number, end?: number) {
    //배열 초기 처리리
    let length = array.length;
    if (!length) {
      return [];
    }
    //기본값 설정
    start = start == null ? 0 : start;
    end = end === undefined ? length : end;
  
    //음수 인덱스 처리
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    //end값 보정
    end = end > length ? length : end; // end가 배열 길이보다 크면 length로 조정
    if (end < 0) {
      end += length;
    }
    //결과 길이 계산
    length = start > end ? 0 : (end - start) >>> 0;
    start >>>= 0;
  //배열 생성
    let index = -1;
    const result = new Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  
  export default slice;