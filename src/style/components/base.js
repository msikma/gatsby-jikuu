// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import {createGlobalStyle} from 'styled-components'

const StyleBase = createGlobalStyle`

body {
  // Note: reset for easy calculations.
  font-size: 16px;
  line-height: 1.5;
  
  font-family: var(--jikuu-body-font);
}

a {
  text-decoration: none;
  color: var(--jikuu-primary);
}
a:hover, a:focus {
  text-decoration: underline;
  color: var(--jikuu-hover);
}
a:visited {
  color: var(--jikuu-visited);
}
a:visited:hover, a:visited:focus {
  color: var(--jikuu-hover);
}

`

export default StyleBase
