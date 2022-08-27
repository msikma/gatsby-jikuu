// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'

const ArticleStyleDiv = styled.div`
  header {
    h2, h3 {
      position: relative;
      margin: 0 0 0.3em 0;
      font-weight: normal;

      a {
        color: var(--jikuu-body-color);

        :hover {
          color: var(--jikuu-primary);
          text-decoration: none;
        }
      }
    }
    h2 {
      font-size: 2em;
      line-height: 1.15em;
    }
    h3 {
      font-size: 1.35em;
      line-height: 1.15em;
    }
  }
  main {
    h1, h2, h3, h4, h5, h6 {
      display: block;
      font-weight: 500;
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.15em;
      font-weight: 600;
    }
    h4 {
      font-size: 1.15em;
      font-weight: 500;
    }
    h5 {
      font-size: 1em;
      font-weight: 600;
    }
    h6 {
      font-size: 1em;
      font-weight: 500;
    }
    ul, ol {
      padding-inline-start: 2em;
    }
    blockquote {
      margin: 1em;
      padding: 0 0 0 1em;
      border: none;
      position: relative;

      &::before {
        position: absolute;
        display: block;
        content: '';
        left: 0;
        top: 0;
        bottom: 0;
        width: 0.1875rem;
        background: var(--jikuu-dotted-background);
        background-size: 2px 2px;
        background-color: var(--jikuu-medium-gray);
      }
    }
    pre {
      overflow: auto hidden;
    }
    code {
      text-shadow: none;
      font-family: var(--jikuu-mono-font);
      font-size: var(--jikuu-mono-font-scale);
      padding: 0 !important;
      border-radius: 0 !important;
      background: none !important;
    }
    hr {
      // Note: see HorizontalLine component.
      border: none;
      height: 0.1875rem;
      background-image: var(--jikuu-dotted-background);
      background-size: 2px 2px;
      background-color: var(--jikuu-medium-gray);
      margin: 1em 0;
    }
    // Code blocks that have been decorated by PrismJS.
    .gatsby-highlight {
      --code-vertical-padding: 0.8em;
      --code-horizontal-padding: 0.8em;
      --code-horizontal-padding-small: 0.8em;
      --code-line-numbers-width: 3ch;

      position: relative;

      pre {
        background: var(--jhl-background);
        padding: var(--code-vertical-padding) var(--code-horizontal-padding);
        margin: 0.5em 0;
        border-radius: var(--jikuu-block-rounding);

        code {
          color: var(--jhl-text);
          display: block;
        }

        a {
          color: var(--jhl-text);
          text-decoration: underline;
        }
        a:hover,
        a:focus {
          color: var(--jhl-text-aaa);
          text-decoration: none;
        }
        a:visited {
          color: var(--jhl-text-aaa);
        }
        a:visited:hover,
        a:visited:focus {
          text-decoration: none;
        }

        .token {
          background: none;

          &.inserted {
            color: var(--jhl-inserted);
          }
          &.deleted {
            color: var(--jhl-deleted);
          }
          &.parameter {
            color: var(--jhl-text);

            .punctuation {
              color: var(--jhl-comma);
            }
          }
          &.operator {
            color: var(--jhl-operator);
          }
          &.operator.arrow {
            color: var(--jhl-arrow-operator);
          }
          &.keyword {
            color: var(--jhl-keyword);
          }
          &.string {
            color: var(--jhl-string);

            .variable {
              color: var(--jhl-text);
            }
          }
          &.function {
            color: var(--jhl-function);
          }
          &.selector {
            color: var(--jhl-punctuation);
          }
          &.atrule {
            .rule {
              color: var(--jhl-keyword);
            }
            .property {
              color: var(--jhl-builtin);
            }
          }
          &.punctuation {
            color: var(--jhl-punctuation);
          }
          &.punctuation.comma {
            color: var(--jhl-comma);
          }
          &.punctuation.curly-brace {
            color: var(--jhl-curly-braces);
          }
          &.punctuation.bracket {
            color: var(--jhl-function);
          }
          &.class-name {
            color: var(--jhl-class-name);
          }
          &.console.class-name {
            color: var(--jhl-builtin);
          }
          &.property {
            color: var(--jhl-operator);
          }
          &.comment {
            color: var(--jhl-comment);
          }
          &.url {
            color: var(--jhl-function);
          }
          &.boolean {
            color: var(--jhl-boolean);
          }
          &.constant {
            color: var(--jhl-constant);
          }
          // 'extends' keyword.
          &.class-name + .keyword {
            color: var(--jhl-extends);
          }
          // The extended class.
          &.class-name + .keyword + .class-name {
            color: var(--jhl-extended-class-name);
          }
          // JSX tags.
          &.tag {
            color: var(--jhl-extends);

            .tag .punctuation {
              color: var(--jhl-text);
            }
            .attr-name {
              color: var(--jhl-attribute);
            }
            .attr-value {
              color: var(--jhl-string);

              .punctuation {
                color: var(--jhl-text);
              }
              .punctuation:first-child {
                color: var(--jhl-operator);
              }
            }
            .punctuation:last-child {
              color: var(--jhl-text);
            }
          }
          &.number {
            color: var(--jhl-attribute);
          }
          &.shell-command {
            .dollar {
              color: var(--jhl-keyword);
            }
            .function {
              color: var(--jhl-function);
            }
          }
        }

        // Fish shell fixes.
        &.fish.language-bash {
          .token {
            &.variable {
              color: var(--jhl-class-name);
            }
          }
        }

        &.line-numbers {
          padding: var(--code-vertical-padding) var(--code-horizontal-padding-small) var(--code-vertical-padding) calc(var(--code-horizontal-padding-small) + var(--code-horizontal-padding-small) + var(--code-horizontal-padding-small) + var(--code-line-numbers-width));
        }
      }

      // Line numbering.
      .line-numbers-rows {
        font-family: var(--jikuu-mono-font);
        font-size: var(--jikuu-mono-font-scale);
        // Not a clue why the 0.5px is needed, but it is.
        // Otherwise the line numbers are 0.5px off from the source code (visible on retina only).
        padding: calc(var(--code-vertical-padding) + 0.5px) var(--code-horizontal-padding-small);
        position: absolute;
        top: 0;
        bottom: 0;
        letter-spacing: 0;
        border-right: 1px solid var(--jhl-line);
        border-radius: 0;
        border-top-left-radius: var(--jikuu-block-rounding);
        border-bottom-left-radius: var(--jikuu-block-rounding);
        text-shadow: none;
        background: var(--jhl-background);
        user-select: none;
        pointer-events: none;

        > span {
          display: block;
          counter-increment: linenumber;

          &::before {
            content: counter(linenumber);
            color: var(--jhl-comment);
            width: var(--code-line-numbers-width);
            display: block;
            text-align: right;
          }
        }
      }
    }

    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin: 0.5em 0;

      th, td {
        border-color: var(--jikuu-medium-gray);
        border-width: 0;
        border-style: solid;
        padding: 0.35em 0.6em;
        margin: 0;
        text-align: left;
      }

      thead, tbody, tfoot {
        th, td {
          border-top-width: 1px;
          border-right-width: 1px;
        }
        th:first-child, td:first-child {
          border-left-width: 1px;
        }
      }
      thead:last-child, tbody:last-child, tfoot:last-child {
        tr:last-child {
          th, td {
            border-bottom-width: 1px;
          }
        }
      }

      thead:first-child, tbody:first-child, tfoot:first-child {
        tr:first-child {
          th:first-child, td:first-child {
            border-top-left-radius: var(--jikuu-block-rounding);
          }
          th:last-child, td:last-child {
            border-top-right-radius: var(--jikuu-block-rounding);
          }
        }
      }

      thead:last-child, tbody:last-child, tfoot:last-child {
        tr:last-child {
          th:first-child, td:first-child {
            border-bottom-left-radius: var(--jikuu-block-rounding);
          }
          th:last-child, td:last-child {
            border-bottom-right-radius: var(--jikuu-block-rounding);
          }
        }
      }
    }
  }
`

const ArticleStyle = ({children}) => {
  return (
    <ArticleStyleDiv>
      {children}
    </ArticleStyleDiv>
  )
}

export default ArticleStyle
