const { Circle } = require("./circle.js");
const { Square } = require("./square.js");
const { Triangle } = require("./triangle.js");

describe("Shape classes", () => {
  test("Circle render method", () => {
    const circle = new Circle("red");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });

  test("Triangle render method", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toBe(
      '<polygon points="150,18 244,182 56,182" fill="blue" />'
    );
  });

  test("Square render method", () => {
    const square = new Square("green");
    expect(square.render()).toBe(
      '<rect x="70" y="50" width="160" height="160" fill="green" />'
    );
  });
});
