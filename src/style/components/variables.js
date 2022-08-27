// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import {createGlobalStyle} from 'styled-components'
import {baseColors} from '../colors'
import {baseFonts} from '../fonts'

const StyleVariables = createGlobalStyle`
  :root {
    --jikuu-primary: ${baseColors.primary};
    --jikuu-visited: ${baseColors.visited};
    --jikuu-hover: ${baseColors.hover};
    --jikuu-white: ${baseColors.white};
    --jikuu-light-gray: ${baseColors.lightGray};
    --jikuu-medium-gray: ${baseColors.mediumGray};
    --jikuu-dark-gray: ${baseColors.darkGray};
    --jikuu-near-black: ${baseColors.nearBlack};
    --jikuu-meta-text: ${baseColors.metaText};

    --jikuu-body-color: var(--jikuu-near-black);
    --jikuu-block-rounding: 0.215em;

    --jikuu-body-font: ${baseFonts.bodyFont};
    --jikuu-mono-font: ${baseFonts.monoFont};
    --jikuu-mono-font-scale: ${baseFonts.monoFontScale};

    --jikuu-layout-narrow-width: 51em;
    --jikuu-layout-narrow-content-width: 35.75em;
    --jikuu-layout-narrow-sidebar-width: 12.25em;

    --jikuu-layout-width: 71.5em;
    --jikuu-layout-content-width: 52.15em;
    --jikuu-layout-sidebar-width: 14.25em;
    --jikuu-layout-gap: calc(var(--jikuu-layout-width) - var(--jikuu-layout-content-width) - var(--jikuu-layout-sidebar-width));

    --jikuu-dotted-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAMAAACeL25MAAAABlBMVEX///////9VfPVsAAAAAnRSTlP/AOW3MEoAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QTRFNzhGMTU2MTIxMUU5OUIzQUJGMEI5OEM2NTA0RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QTRFNzhGMDU2MTIxMUU5OUIzQUJGMEI5OEM2NTA0RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5ODcwOTg3NTYwQzExRTk5QjNBQkYwQjk4QzY1MDRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5ODcwOTg4NTYwQzExRTk5QjNBQkYwQjk4QzY1MDRFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2wcOFQAAABNJREFUCFtjYGRkYGAAE1CKkREAAGQACUNUyl8AAAAASUVORK5CYII=');

    // Syntax highlight colors.
    --jhl-inserted: #91e129;
    --jhl-deleted: #fd4787;

    --jhl-text: ${baseColors.lightGray};
    --jhl-background: #081c29;

    --jhl-curly-braces: #ebeb9e;
    --jhl-builtin: #1cbcfa;
    --jhl-constant: #1af1e1;
    --jhl-function: #1cbcfa;
    --jhl-string: #d6f808;
    --jhl-boolean: #fd4787;
    --jhl-extended-class-name: #d6f808;
    --jhl-attribute: #fd5b06;
    --jhl-operator: #fd9007;
    --jhl-class-name: #fd9007;
    --jhl-punctuation: #f8c200;
    --jhl-keyword: #936bff;
    --jhl-arrow-operator: #936bff;
    --jhl-extends: #fc4f5b;
    --jhl-comma: #5f7790;
    --jhl-comment: #5f7790;
    --jhl-line: #5f779050;
  }
`

export default StyleVariables
