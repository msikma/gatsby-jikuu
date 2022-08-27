---
title: Another programming code test
date: '2022-04-28T20:40:32.169Z'
tags: ['test 2', 'another tag']
---

So let’s see what it looks like when you post some code. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis nec turpis iaculis tempor. Nulla facilisi. Nullam cursus ullamcorper libero, a `condimentum` eros hendrerit nec. `css›.hello-world { color: red; }` and so on.

```diff
 "scripts": {
-  "start": "react-scripts start",
-  "build": "react-scripts build",
-  "test": "react-scripts test",
+  "start": "react-app-rewired start",
+  "build": "react-app-rewired build",
+  "test": "react-app-rewired test",
   "eject": "react-scripts eject"
 },
```

Here is a piece of Javascript code:

```js
const fetch = require('node-fetch')
const {execToText} = require('./exec')

const processNames = [
  '/StarCraft.exe', // Windows (maybe? untested.)
  'StarCraft.app/Contents/MacOS/StarCraft' // macOS
]

/**
 * Runs 'ps aux' and filters the output to find the StarCraft process.
 *
 * If found, it returns only the pid as a number, or null otherwise.
 */
const getProcessID = async (procMatches = processNames) => {
  const procMatchesLc = procMatches.map((match) => match.toLowerCase())
  const proc = (await execToText(['ps', 'aux']))
    .split('\n')
    .slice(1)
    .map((line) =>
      line
        .trim()
        .split(/\s+/)
        .map((segment) => segment.trim())
    )
    .map((segments) => ({user: segments[0], pid: segments[1], command: segments.slice(10).join(' ')}))
    .map((process) => ({...process, match: procMatchesLc.map((name) => process.command.toLowerCase().includes(name)).includes(true)}))
    .find((process) => process.match)

  if (!proc) return null

  return Number(proc.pid)
}
```

Here is some Fish:

```fish
function _iterate_help \
  --description "Iterate through and print a list of commands and descriptions"
  set _cmd_all $argv
  set neutral (set_color normal)

  # Iterate through our merged list and print the command name and description.
  set m 0
  set total (math 4 + (count $_cmd_all))
  set half (math "(floor($total / 8) * 4)")
  for n in (seq 1 4 (math $half))
    set m (math $m + 1)

    set l_color $_cmd_all[$n]
    set l_cmd_n $_cmd_all[(math $n + 1)]
    set l_cmd_d $_cmd_all[(math $n + 3)]

    set r_color $_cmd_all[(math $n + $half)]
    set r_cmd_n $_cmd_all[(math $n + $half + 1)]
    set r_cmd_d $_cmd_all[(math $n + $half + 3)]

    printf "%s%-16s%s%-34s%s%-16s%s%-34s\\n" $l_color $l_cmd_n $neutral $l_cmd_d $r_color $r_cmd_n $neutral $r_cmd_d
  end
end
```

Here is some Bash:

```bash
if [ -z ${dada_hostname+x} ]; then
  echo "$err \$dada_hostname is not set"
  exit 1
fi

echo $myvar

# Check whether our directories exist.
for ((a = 0; a < ${#SRC_DIRS[@]}; a++)); do
  src="${SRC_DIRS[a]}"
  dest="${DEST_DIRS[a]}"
  if [[ ! "$src" || ! -d "$src" ]]; then
    echo "$err Could not access source directory: $src"
    exit 1
  fi
  if [[ ! "$dest" || ! -d "$dest" ]]; then
    echo "$err Could not access destination directory: $dest"
    exit 1
  fi
done

# Create a temporary directory to store our zip files in.
if [[ ! "$WORK_DIR" || ! -d "$WORK_DIR" ]]; then
  echo "$err Could not create temp directory: $WORK_DIR"
  exit 1
fi
```

Here is some really old PHP code:

```php
function get_route($server) {
  if (!empty($server['QUERY_STRING'])) {
    parse_str($server['QUERY_STRING'], $query);
    return array('search', $query['query']);
  }
  $base = dirname($server['PHP_SELF']);

  // Filter out the base part of the URL.
  $pos = strpos($server['REQUEST_URI'], $base);
  if ($pos !== false) {
    $path = substr_replace($server['REQUEST_URI'], '', $pos, strlen($base));
  }
  $path = trim($path, '/');
  $parts = explode('/', $path);

  // If this is a news page, check if this is a valid news link.
  // If it's just 'news' without a subpage part, it's valid. If there is a subpage,
  // check if we have this category in the news results.
  if ($parts[0] === 'news' && !empty($parts[1])) {
    if ($parts[1] !== 'all' && !is_valid_news_category($parts[1])) {
      $parts = array('error', '404');
    }
  }
  // If the path is not prefixed by any of the other pages, we assume it's an info page.
  else if ($parts[0] !== 'search' && $parts[0] !== 'news' && $parts[0] !== '') {
    // Check whether the requested info page exists, by seeing if <pagename>.twig exists.
    if (is_file($GLOBALS['ROOT_DIR'].$GLOBALS['BASE_URL'].'/views/info/'.$parts[0].'.twig')) {
      // File exists, so this is a valid route.
      array_unshift($parts, 'info');
    }
    else {
      // File doesn't exist, so we'll redirect to 404.
      $parts = array('error', '404');
    }
  }

  return $path === '' ? array('home') : $parts;
}
```

And here is some CSS:

```css
.icon-link {
  line-height: 18px;
  padding-left: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}

.my-element {
  background: url('data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAMAAADXEh96AAAABlBMVEX///////9VfPVsAAAAAnRSTlP/AOW3MEoAAAATSURBVAjXY2BkAEEGBkYkiJUHAAGkABNgY9FfAAAAAElFTkSuQmCC') scroll repeat gray;
}

#zap {
  color: red;
}
```

Terminal session:

```shell
$ ls -lah

$ npx -lah

$ ls -lah
$ git log --pretty --oneline --graph
$ git checkout -- file.py
$ git log --pretty=oneline --abbrev-commit
$ git for-each-ref --count=25 --sort=-committerdate refs/heads/ --format='%(HEAD)'
```

End of post!
