/** @type {import("prettier").Config} */

module.exports = {
  semi: false, // 세미콜론 사용 여부 (true: 사용, false: 생략)
  singleQuote: true, // 작은 따옴표 사용
  tabWidth: 2, // 탭 너비 설정
  trailingComma: "all", // 여러 줄일 경우 마지막에도 쉼표 추가
  printWidth: 100, // 한 줄 최대 길이
  arrowParens: "always", // 화살표 함수 매개변수 괄호 처리
  plugins: ['prettier-plugin-tailwindcss'],  // Tailwind 정렬 플러그인 추가
};
