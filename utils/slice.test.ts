import slice from './slice';

// slice 함수에 대한 테스트 묶음
describe('slice 함수 테스트', () => {
    it('빈 배열이 입력되면 빈 배열을 반환한다', () => {
        // Arrange
        const array: number[] = [];
        
        // Act
        const actual = slice(array);
        
        // Assert
        expect(actual).toEqual([]);
    });

    it('start 인덱스만 지정하면 해당 인덱스부터 끝까지 반환한다', () => {
        // Arrange
        const array = [1, 2, 3, 4];
        
        // Act
        const actual = slice(array, 2);
        
        // Assert
        expect(actual).toEqual([3, 4]);
    });

    it('음수 인덱스로 배열 끝에서부터 자른다', () => {
        // Arrange
        const array = [1, 2, 3, 4, 5];
        
        // Act
        const actual = slice(array, -2);
        
        // Assert
        expect(actual).toEqual([4, 5]);
    });

    it('start와 end 범위의 배열을 반환한다', () => {
        // Arrange
        const array = [1, 2, 3, 4, 5];
        
        // Act
        const actual = slice(array, 1, 4);
        
        // Assert
        expect(actual).toEqual([2, 3, 4]);
    });

    it('start가 end보다 크면 빈 배열을 반환한다', () => {
        // Arrange
        const array = [1, 2, 3, 4];
        
        // Act
        const actual = slice(array, 3, 2);
        
        // Assert
        expect(actual).toEqual([]);
    });
});