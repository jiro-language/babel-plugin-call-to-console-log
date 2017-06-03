"use strict";
const t = require('babel-types');

module.exports =
    {
      CallExpression(path) {
        if (path.node.callee.name === 'コール') {
          let arg;
          if (path.get('arguments')[0].node.type === 'StringLiteral') {
            arg = t.stringLiteral(path.get('arguments')[0].node.value);
          }else{
            t.stringLiteral('')
          }

          console.log(arg)

          path.replaceWithMultiple([
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('console'),
                        t.identifier('log')
                    ),
                    [arg]
                )
            )
          ]);
        }
      }
    };
