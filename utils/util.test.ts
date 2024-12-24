import { toUpperCase } from "./util";

describe("toUpperCase 테스트 입니다.", ()=> {
    //    test("",()=>{}) 둘중 하나로 함 
    it("소문자를 넣으면 대문자를 리턴합니다.",() => {
        //실제 테스트 로직을 적는다. 
        //AAA (Arrange, Act, Assert)
        
        //Arrage
        const input = "hello";
        const output = "HELLO";
        
        //Act 
        //actual : "살제로" 함수를 호출한 결과
        const actual = toUpperCase(input);
        
        //Assert
        //expext(실제값).matcher(기대값값)
        expect(actual).toBe(output);
    });
    it("특수문자를 넣으면 그대로 반환한다.", () =>{
        const param = "@##$";
        const actual = toUpperCase(param);
        expect(actual).toBe(param);
    }); 
    it("빈 문자열을 넣으면 빈 문자열을 반환한다.", () =>{
        const param = "";

        expect(() => toUpperCase(param)).toThrow();
    });
    });

    describe("Form 테스트", () => {
        it("name input에 텍스트를 입력하면 name에 텍스트값이 있어야합니다.", () =>{});
        //실제 테스트 코드 작성
        //Arrage
        //테스트에 필요한 파라미터, 예상값 등 테스트에 필요한 데이터를 정의의

        //Act
        //테스트 대상 함수를 호출

        //Assert
        //테스트 결과를 검증

    });

