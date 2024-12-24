import chunk from './chunk';

describe('chunk 함수 테스트', () => {
    it('배열을 지정된 크기로 균등하게 분할한다', () => {
        // Arrange
        const array = ['a', 'b', 'c', 'd'];
        
        // Act
        const result = chunk(array, 2);
        
        // Assert
        expect(result).toHaveLength(2);  // 배열 길이 검사
        expect(result[0]).toContain('a'); // 특정 요소 포함 여부
        expect(result).toEqual(expect.arrayContaining([['a', 'b']])); // 배열 포함 여부
        expect(Array.isArray(result[0])).toBeTruthy(); // 배열 타입 검사
    });

    it('빈 배열이나 잘못된 size가 입력되면 빈 배열을 반환한다', () => {
        // Arrange & Act & Assert
        expect(chunk([])).toBeDefined(); // 정의 여부 검사
        expect(chunk([], -1)).toEqual([]); // 정확한 값 비교
        expect(chunk([], 0)).toHaveLength(0); // 빈 배열 길이 검사
        expect(chunk([], -1)).toBeTruthy(); // truthy 값 검사
    });

    it('원본 배열과 다른 새로운 배열을 반환한다', () => {
        // Arrange
        const array = ['a', 'b', 'c', 'd'];
        
        // Act
        const result = chunk(array, 2);
        
        // Assert
        expect(result).not.toBe(array); // 참조 비교
        expect(result[0]).toBeInstanceOf(Array); // 인스턴스 타입 검사
        expect(Array.isArray(result)).toBe(true); // 배열 여부 검사
    });

    it('size가 유효하지 않은 값일 때 예외 처리를 한다', () => {
        // Arrange
        const array = ['a', 'b', 'c'];
        
        // Act & Assert
        expect(chunk(array, null as any)).toHaveLength(3);
        expect(chunk(array, undefined as any)).toHaveLength(3);
        expect(chunk(array, 'invalid' as any)).not.toBeNull(); // null 아님 검사
        expect(chunk(array, {} as any)).toBeDefined(); // undefined 아님 검사
    });

    it('반환된 배열의 구조를 검증한다', () => {
        // Arrange
        const array = ['a', 'b', 'c', 'd', 'e'];
        
        // Act
        const result = chunk(array, 2);
        
        // Assert
        expect(result).toEqual(
            expect.arrayContaining([
                expect.arrayContaining(['a', 'b']),
                expect.arrayContaining(['c', 'd']),
                expect.arrayContaining(['e'])
            ])
        );
        expect(result.flat()).toEqual(expect.arrayContaining(array)); // 중첩 배열 펼치기 후 비교
    });
});