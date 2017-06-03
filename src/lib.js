const core = require('babel-core');
const generate = require('babel-generator').default;
const traverse = require('babel-traverse').default;
const t = require('babel-types');

const travCall = require('./traverser');

const replace = () => {
  const ast =
      {
        "type": "File",
        "start": 0,
        "end": 9,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "program": {
          "type": "Program",
          "start": 0,
          "end": 9,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "sourceType": "module",
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 0,
              "end": 9,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "expression": {
                "type": "CallExpression",
                "start": 0,
                "end": 8,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "callee": {
                  "type": "Identifier",
                  "start": 0,
                  "end": 3,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    },
                    "identifierName": "コール"
                  },
                  "name": "コール"
                },
                "arguments": [
                  {
                    "type": "StringLiteral",
                    "start": 4,
                    "end": 7,
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 4
                      },
                      "end": {
                        "line": 1,
                        "column": 7
                      }
                    },
                    "extra": {
                      "rawValue": "a",
                      "raw": "'a'"
                    },
                    "value": "a"
                  }
                ]
              }
            }
          ],
          "directives": []
        },
        "comments": [],
        "tokens": [
          {
            "type": {
              "label": "name",
              "beforeExpr": false,
              "startsExpr": true,
              "rightAssociative": false,
              "isLoop": false,
              "isAssign": false,
              "prefix": false,
              "postfix": false,
              "binop": null
            },
            "value": "コール",
            "start": 0,
            "end": 3,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 3
              }
            }
          },
          {
            "type": {
              "label": "(",
              "beforeExpr": true,
              "startsExpr": true,
              "rightAssociative": false,
              "isLoop": false,
              "isAssign": false,
              "prefix": false,
              "postfix": false,
              "binop": null
            },
            "start": 3,
            "end": 4,
            "loc": {
              "start": {
                "line": 1,
                "column": 3
              },
              "end": {
                "line": 1,
                "column": 4
              }
            }
          },
          {
            "type": {
              "label": "string",
              "beforeExpr": false,
              "startsExpr": true,
              "rightAssociative": false,
              "isLoop": false,
              "isAssign": false,
              "prefix": false,
              "postfix": false,
              "binop": null,
              "updateContext": null
            },
            "value": "a",
            "start": 4,
            "end": 7,
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 7
              }
            }
          },
          {
            "type": {
              "label": ")",
              "beforeExpr": false,
              "startsExpr": false,
              "rightAssociative": false,
              "isLoop": false,
              "isAssign": false,
              "prefix": false,
              "postfix": false,
              "binop": null
            },
            "start": 7,
            "end": 8,
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            }
          },
          {
            "type": {
              "label": ";",
              "beforeExpr": true,
              "startsExpr": false,
              "rightAssociative": false,
              "isLoop": false,
              "isAssign": false,
              "prefix": false,
              "postfix": false,
              "binop": null,
              "updateContext": null
            },
            "start": 8,
            "end": 9,
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 9
              }
            }
          },
          {
            "type": {
              "label": "eof",
              "beforeExpr": false,
              "startsExpr": false,
              "rightAssociative": false,
              "isLoop": false,
              "isAssign": false,
              "prefix": false,
              "postfix": false,
              "binop": null,
              "updateContext": null
            },
            "start": 9,
            "end": 9,
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 9
              }
            }
          }
        ]
      }
  ;

  traverse(core.transformFromAst(ast).ast, travCall);

  const output = generate(ast, {}, 'コール("aa")');
  return output.code;
};

console.log(replace());