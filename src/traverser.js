"use strict";
const t = require('babel-types');

module.exports =
    {
      name: "call-to-console-log",
      visitor: {
        Identifier(){
          console.log('iden')
        },
        ExpressionStatement(path){
          console.log('ooooooooo')
        },

        CallExpression(path) {
          const callee = path.get("callee");

          if (!callee.isMemberExpression()) return;

          if (path.name === 'コール') {

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
      }
    };
