---
title: Code formatting test
date: '2022-05-28T20:40:32.169Z'
tags: ['Javascript']
authors: ['Michiel Sikma']
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien elit, cursus et finibus ut, euismod eget lectus. Nunc ut malesuada ipsum. Mauris eu dictum ipsum, sed cursus eros.

Terminal session:

```shell
ffmpeg -y -i "in.mkv" -vf eq=gamma=1.25,format=yuv444p10,colorspace=all=bt709:format=yuv444p10 "out.mkv"
```

Javascript:

```js
/**
 * Formats a metavar help string.
 * 
 * This returns a string that explains how many arguments an option takes.
 * For example, an option that takes two arguments and has a metavar
 * 'FOO' will get 'FOO FOO' as help string.
 * 
 * The 'shortZeroOrMore' changes the behavior of the * nargs value and
 * determines its size/verbosity.
 * 
 * Options with a variable number of arguments get a string that indicates
 * how many the user may pass. See the formatArg() description for examples.
 */
function formatMetavar(arg, shortZeroOrMore = false) {
  const {L} = this
  const {nargs} = arg.opts

  // Helper function for wrapping metavar strings.
  const getMetavar = (n, ellipsis) => ellipsis
    ? L.argOptionalEllipsis('')
    : (arg.metavars[n] ? arg.metavars[n].content : arg.metavars[arg.metavars.length - 1].content)
  // Helper function for adding brackets.
  const addBrackets = (str, needed) => needed
    ? L.argOptionalBrackets(str)
    : str
  // Joins items together using the appropriate joiner for the language.
  const collect = items => L.joinMetavars(omitFalsy(items))
  
  let itemTypes = []

  if (isString(nargs)) {
    // FOO [FOO ...]
    if (nargs === '+') itemTypes.push({optional: false}, {optional: true}, {optional: false, ellipsis: true})
    // [FOO ...]
    if (nargs === '*' && shortZeroOrMore) itemTypes.push({optional: true}, {optional: false, ellipsis: true})
    // [FOO [FOO ...]]
    if (nargs === '*' && !shortZeroOrMore) itemTypes.push({optional: true}, {optional: true}, {optional: false, ellipsis: true})
    // [FOO]
    if (nargs === '?') itemTypes.push({optional: true})
  }

  if (isInteger(nargs) || (nargs == null && arg.typeData.properties.takesValues)) {
    const amount = nargs || 1
    for (let n = 0; n < amount; ++n) {
      itemTypes.push({optional: false})
    }
  }

  // Work from the inside out to properly wrap the brackets.
  itemTypes = itemTypes.reverse()
  let result = ''
  for (let n = 0; n < itemTypes.length; ++n) {
    const type = itemTypes[n]
    const metavar = getMetavar(itemTypes.length - n - 1, type.ellipsis)
    result = addBrackets(collect([metavar, result]), type.optional)
  }

  return result
}
```
