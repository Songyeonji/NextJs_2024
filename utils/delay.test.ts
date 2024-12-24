import delay from "./delay";

describe("delay", () => {
    it("특정시간이 지나면 callback 함수를 실행한다.", (done) => {
        let actual = true;
        delay(() => {
            actual = false;
       
    }, 10);

    setTimeout(() => {
        expect(actual).toBeTruthy();
        done();
    }, 2)
})
})