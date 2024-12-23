import slice from "./slice";

describe('slice 함수 테스트', () => {
    it('빈 배열이 입력되면 빈 배열을 반환한다', () => {
      const array: number[] = [];
      const actual = slice(array);
      expect(actual).toEqual([]);
    });
  
    it('start 인덱스만 지정하면 해당 인덱스부터 끝까지 반환한다', () => {
      const array = [1, 2, 3, 4];
      const actual = slice(array, 2);
      expect(actual).toEqual([3, 4]);
    });
  
    it('start와 end 인덱스를 모두 지정하면 해당 범위의 배열을 반환한다', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = slice(array, 1, 4);
      expect(actual).toEqual([2, 3, 4]);
    });
  
    it('음수 start 인덱스는 끝에서부터의 오프셋으로 처리된다', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = slice(array, -2);
      expect(actual).toEqual([4, 5]);
    });
  
    it('음수 end 인덱스는 끝에서부터의 오프셋으로 처리된다', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = slice(array, 1, -1);
      expect(actual).toEqual([2, 3, 4]);
    });
  
    it('start가 배열 길이보다 크면 빈 배열을 반환한다', () => {
      const array = [1, 2, 3];
      const actual = slice(array, 5);
      expect(actual).toEqual([]);
    });
  
    it('end가 배열 길이보다 크면 배열 끝까지만 반환한다', () => {
      const array = [1, 2, 3];
      const actual = slice(array, 0, 5);
      expect(actual).toEqual([1, 2, 3]);
    });
  
    it('start와 end가 생략되면 전체 배열의 복사본을 반환한다', () => {
      const array = [1, 2, 3, 4];
      const actual = slice(array);
      expect(actual).toEqual(array);
      expect(actual).not.toBe(array); // 새로운 배열 인스턴스인지 확인
    });
  
    it('음수 start가 배열 길이보다 크면 0부터 시작한다', () => {
      const array = [1, 2, 3];
      const actual = slice(array, -5);
      expect(actual).toEqual([1, 2, 3]);
    });
  
    it('start가 end보다 크면 빈 배열을 반환한다', () => {
      const array = [1, 2, 3, 4];
      const actual = slice(array, 3, 2);
      expect(actual).toEqual([]);
    });
  });