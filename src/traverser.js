"use strict";
const t = require('babel-types');

module.exports =
    {
      CallExpression(path) {
        if (path.node.callee.name === 'コール') {

          path.replaceWithMultiple([
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('console'),
                        t.identifier('log')
                    ),
                    [t.stringLiteral('aaaa')]
                )
            )
          ]);
        }
      }
    };
