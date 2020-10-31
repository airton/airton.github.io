import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px auto 0;
  max-width: 800px;
  padding: 0 16px;
`

export const Article = styled.article`
  /* border: 1px solid red; */

  > h2 {
    margin-bottom: 3rem;
    font-size: 3.2rem;
    line-height: 4.2rem;
  }

  > h3 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
    line-height: 3.2rem;
  }

  > p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }

  > p,
  > ul,
  > ol,
  > h2,
  > h3 {
    code {
      padding: 2px 4px;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
  }

  ul,
  ol {
    margin: 30px 0;
    font-size: 1.8rem;
    line-height: 2.6rem;
    padding-left: 2rem;

    li {
      margin-bottom: 15px;
    }
  }

  blockquote {
    background-color: #f9f9f9;
    padding: 20px;
    margin: 0 0 30px;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    font-size: 16px;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .table td,
  .table th{
    padding: 8px;
    line-height: 20px;
    vertical-align: top;
    border: 1px solid #ddd;
  }

  .table td.success{
    background-color: #dff0d8;
  }

  .table td.danger{
    background-color: #f2dede;
  }

  .table td.active{
    background-color: #f8f5f0;
  }

  .table td.warning{
    background-color: #fcf8e3;
  }

  .text-info {
    color: ${({theme}) => theme.colors.blueLigth};
  }

  frame {
    margin-bottom: 30px;
  }

  /**
  * a11y-dark theme for JavaScript, CSS, and HTML
  * Based on the okaidia theme: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css
  * @author ericwbailey
  */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    cursor: auto;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin-bottom: 3rem;
    font-size: 1.8rem;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2b2b2b;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #d4d0ab;
  }

  .token.punctuation {
    color: #fefefe;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ffa07a;
  }

  .token.boolean,
  .token.number {
    color: #00e0e0;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #abe338;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #00e0e0;
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #ffd700;
  }

  .token.keyword {
    color: #00e0e0;
  }

  .token.regex,
  .token.important {
    color: #ffd700;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  @media screen and (-ms-high-contrast: active) {
    code[class*="language-"],
    pre[class*="language-"] {
      color: windowText;
      background: window;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: window;
    }

    .token.important {
      background: highlight;
      color: window;
      font-weight: normal;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.keyword,
    .token.operator,
    .token.selector {
      font-weight: bold;
    }

    .token.attr-value,
    .token.comment,
    .token.doctype,
    .token.function,
    .token.keyword,
    .token.operator,
    .token.property,
    .token.string {
      color: highlight;
    }

    .token.attr-value,
    .token.url {
      font-weight: normal;
    }
  }
`

export const Header = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 4rem;
  margin-bottom: 4rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 300px;
    background-color: #f5f5f5;
    left: calc(50% - 150px)
  }
`

export const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 5.2rem;
  margin-bottom: 2rem;
  text-align: center;
`

export const Desc = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  margin-bottom: 2rem;
  text-align: center;
`

export const Date = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
`

export const ReadingTime = styled.span`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 100;
  text-align: center;
  display: block;
`

