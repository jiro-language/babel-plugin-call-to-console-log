const generate = require('babel-generator').default;
const traverse = require('babel-traverse').default;
const t = require('babel-types');

const travCall = require('./traverser');

const replace = code => {
  const ast =
      t.expressionStatement(
          t.callExpression(
              t.identifier('コール'),
              [t.stringLiteral('aaaa')]
          )
      )
  ;

  traverse(ast.program, travCall);

  const output = generate(ast, {}, code);
  return output.code;
};

console.log(replace("コール('aaa')"));