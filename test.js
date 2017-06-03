const t = require('babel-types');
const generate = require('babel-generator').default;

let ast =
    t.expressionStatement(
        t.callExpression(
            t.memberExpression(
                t.identifier('console'),
                t.identifier('log')
            ),
            [t.stringLiteral('aaaa')]
        )
    )
;

ast =
    t.expressionStatement(
        t.callExpression(
            t.identifier('コール'),
            [t.stringLiteral('aaaa')]
        )
    )
;

console.log(generate(ast, {}, ''));
