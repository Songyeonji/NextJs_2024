import { escape, unescape } from "./htmlEscape";

describe("HTML 특수문자 변환 함수 테스트", () => {
  describe("escape 함수", () => {
    it.each([null, undefined])("문자열이 %s이면 빈 문자열을 반환한다", (input) => {
      expect(escape(input as any)).toBe("");
    });

    it.each([
      ["A & B", "A &amp; B"],
      ["<div>", "&lt;div&gt;"],
      ['>text<', "&gt;text&lt;"],
      ['text "quote"', 'text &quot;quote&quot;'],
      ["it's", "it&#39;s"],
    ])("'%s'를 escape'%s'로 변환한다", (input, expected) => {
      expect(escape(input)).toBe(expected);
    });

    it.each([
      "normal text",
      "hello world",
      "12345"
    ])("특수문자가 없는 문자열 '%s'는 그대로 반환한다", (input) => {
      expect(escape(input)).toBe(input);
    });
    it.skip("빈 문자열을 넣으면 빈 문자열을 반환한다", () => {
        expect(escape("")).toBe("");
      });
  });

  describe("unescape 함수", () => {
    it.each([null, undefined])("문자열이 %s이면 빈 문자열을 반환한다", (input) => {
      expect(unescape(input as any)).toBe("");
    });

    it.each([
      ["A &amp; B", "A & B"],
      ["&lt;div&gt;", "<div>"],
      ["&gt;text&lt;", ">text<"],
      ['text &quot;quote&quot;', 'text "quote"'],
      ["it&#39;s", "it's"],
    ])("'%s'를 '%s'로 변환한다", (input, expected) => {
      expect(unescape(input)).toBe(expected);
    });

    it.each([
      "normal text",
      "hello world",
      "12345"
    ])("HTML 엔터티가 없는 문자열 '%s'는 그대로 반환한다", (input) => {
      expect(unescape(input)).toBe(input);
    });

    it.each([
      ["&lt;div class=&quot;test&quot;&gt;", '<div class="test">'],
      ["&lt;span&gt;&amp;&lt;/span&gt;", "<span>&</span>"],
    ])("여러 HTML 엔터티가 포함된 '%s'를 '%s'로 변환한다", (input, expected) => {
      expect(unescape(input)).toBe(expected);
    });
    
  });
});