import React, { useEffect } from 'react';
import styled from '../lib/styled-components';
import { Wrapper } from '../components/Page';
import { Tabs, Tab, TabChangeHandler } from '../components/Tabs';
import { Typography } from '../components/Typography';
import '../css/github-markdown-css.css';

const RepoPageGrid = styled.div`
  display: grid;
  grid-template-columns: 75% 1fr;
  grid-gap: 6px;
  grid-template-areas: 'md_content stats';
  @media all and (max-width: 880px) {
    display: flex;
    flex-direction: column;
  }
`;

const parsedMarkdownExample1 = `<div id="readme" class="instapaper_body md" data-path="readme.md"><article class="markdown-body entry-content p-5" itemprop="text"><p><a href="https://nextjs.org" rel="nofollow"><img src="https://camo.githubusercontent.com/1f8dec51cb01842d7bb7a7cd50ade17c75c5e3bd/68747470733a2f2f6173736574732e7a6569742e636f2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67" alt="Next.js" data-canonical-src="https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png" style="max-width:100%;"></a></p>
<p><a href="https://www.npmjs.com/package/next" rel="nofollow"><img src="https://camo.githubusercontent.com/291255a5b51d99b79c16723c389030e95d494918/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6e6578742e737667" alt="NPM version" data-canonical-src="https://img.shields.io/npm/v/next.svg" style="max-width:100%;"></a>
<a href="https://travis-ci.org/zeit/next.js" rel="nofollow"><img src="https://camo.githubusercontent.com/90175866f6eedd1e4edc669c7b5576b8d10398fc/68747470733a2f2f7472617669732d63692e6f72672f7a6569742f6e6578742e6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/zeit/next.js.svg?branch=master" style="max-width:100%;"></a>
<a href="https://dev.azure.com/nextjs/next.js/_build/latest?definitionId=3" rel="nofollow"><img src="https://camo.githubusercontent.com/617af00d65bc6791ccedc4828d9c68edb2cbed00/68747470733a2f2f6465762e617a7572652e636f6d2f6e6578746a732f6e6578742e6a732f5f617069732f6275696c642f7374617475732f7a6569742e6e6578742e6a73" alt="Build Status" data-canonical-src="https://dev.azure.com/nextjs/next.js/_apis/build/status/zeit.next.js" style="max-width:100%;"></a>
<a href="https://coveralls.io/r/zeit/next.js?branch=master" rel="nofollow"><img src="https://camo.githubusercontent.com/af6b295d2d90e917a80e352b2a2a14247e08dde1/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f7a6569742f6e6578742e6a732f62616467652e7376673f6272616e63683d6d6173746572" alt="Coverage Status" data-canonical-src="https://coveralls.io/repos/zeit/next.js/badge.svg?branch=master" style="max-width:100%;"></a>
<a href="https://spectrum.chat/next-js" rel="nofollow"><img src="https://camo.githubusercontent.com/3cc3d27f23a2c3948de24fc02c58bc576655d621/68747470733a2f2f77697468737065637472756d2e6769746875622e696f2f62616467652f62616467652e737667" alt="Join the community on Spectrum" data-canonical-src="https://withspectrum.github.io/badge/badge.svg" style="max-width:100%;"></a></p>
<p><strong>Visit <a href="https://nextjs.org/learn" rel="nofollow">nextjs.org/learn</a> to get started with Next.js.</strong></p>
<hr>
<p><strong>The below readme is the documentation for the <code>canary</code> (prerelease) branch. To view the documentation for the latest stable Next.js version visit <a href="https://nextjs.org/docs" rel="nofollow">nextjs.org/docs</a></strong></p>
<hr>



<ul>
<li><a href="#how-to-use">How to use</a>
<ul>
<li><a href="#setup">Setup</a></li>
<li><a href="#automatic-code-splitting">Automatic code splitting</a></li>
<li><a href="#css">CSS</a>
<ul>
<li><a href="#built-in-css-support">Built-in CSS support</a></li>
<li><a href="#css-in-js">CSS-in-JS</a></li>
<li><a href="#importing-css--sass--less--stylus-files">Importing CSS / Sass / Less / Stylus files</a></li>
</ul>
</li>
<li><a href="#static-file-serving-eg-images">Static file serving (e.g.: images)</a></li>
<li><a href="#populating-head">Populating <code>&lt;head&gt;</code></a></li>
<li><a href="#fetching-data-and-component-lifecycle">Fetching data and component lifecycle</a></li>
<li><a href="#routing">Routing</a>
<ul>
<li><a href="#with-link">With <code>&lt;Link&gt;</code></a>
<ul>
<li><a href="#with-url-object">With URL object</a></li>
<li><a href="#replace-instead-of-push-url">Replace instead of push url</a></li>
<li><a href="#using-a-component-that-supports-onclick">Using a component that supports <code>onClick</code></a></li>
<li><a href="#forcing-the-link-to-expose-href-to-its-child">Forcing the Link to expose <code>href</code> to its child</a></li>
<li><a href="#disabling-the-scroll-changes-to-top-on-page">Disabling the scroll changes to top on page</a></li>
</ul>
</li>
<li><a href="#imperatively">Imperatively</a></li>
<li><a href="#intercepting-popstate">Intercepting <code>popstate</code></a>
<ul>
<li><a href="#with-url-object-1">With URL object</a></li>
<li><a href="#router-events">Router Events</a></li>
<li><a href="#shallow-routing">Shallow Routing</a></li>
</ul>
</li>
<li><a href="#using-a-higher-order-component">Using a Higher Order Component</a></li>
</ul>
</li>
<li><a href="#prefetching-pages">Prefetching Pages</a>
<ul>
<li><a href="#with-link-1">With <code>&lt;Link&gt;</code></a></li>
<li><a href="#imperatively-1">Imperatively</a></li>
</ul>
</li>
<li><a href="#custom-server-and-routing">Custom server and routing</a>
<ul>
<li><a href="#disabling-file-system-routing">Disabling file-system routing</a></li>
<li><a href="#dynamic-assetprefix">Dynamic assetPrefix</a></li>
</ul>
</li>
<li><a href="#dynamic-import">Dynamic Import</a>
<ul>
<li><a href="#basic-usage-also-does-ssr">Basic Usage (Also does SSR)</a></li>
<li><a href="#with-named-exports">With Named Exports</a></li>
<li><a href="#with-custom-loading-component">With Custom Loading Component</a></li>
<li><a href="#with-no-ssr">With No SSR</a></li>
<li><a href="#with-multiple-modules-at-once">With Multiple Modules At Once</a></li>
</ul>
</li>
<li><a href="#custom-app">Custom <code>&lt;App&gt;</code></a></li>
<li><a href="#custom-document">Custom <code>&lt;Document&gt;</code></a>
<ul>
<li><a href="#customizing-renderpage">Customizing <code>renderPage</code></a></li>
</ul>
</li>
<li><a href="#custom-error-handling">Custom error handling</a></li>
<li><a href="#reusing-the-built-in-error-page">Reusing the built-in error page</a></li>
<li><a href="#custom-configuration">Custom configuration</a>
<ul>
<li><a href="#setting-a-custom-build-directory">Setting a custom build directory</a></li>
<li><a href="#disabling-etag-generation">Disabling etag generation</a></li>
<li><a href="#configuring-the-ondemandentries">Configuring the onDemandEntries</a></li>
<li><a href="#configuring-extensions-looked-for-when-resolving-pages-in-pages">Configuring extensions looked for when resolving pages in <code>pages</code></a></li>
<li><a href="#configuring-the-build-id">Configuring the build ID</a></li>
<li><a href="#configuring-next-process-script">Configuring Next process script</a></li>
</ul>
</li>
<li><a href="#customizing-webpack-config">Customizing webpack config</a></li>
<li><a href="#customizing-babel-config">Customizing babel config</a></li>
<li><a href="#exposing-configuration-to-the-server--client-side">Exposing configuration to the server / client side</a></li>
<li><a href="#starting-the-server-on-alternative-hostname">Starting the server on alternative hostname</a></li>
<li><a href="#cdn-support-with-asset-prefix">CDN support with Asset Prefix</a></li>
</ul>
</li>
<li><a href="#production-deployment">Production deployment</a>
<ul>
<li><a href="#serverless-deployment">Serverless deployment</a>
<ul>
<li><a href="#one-level-lower">One Level Lower</a></li>
<li><a href="#summary">Summary</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#browser-support">Browser support</a></li>
<li><a href="#amp-support">AMP Support</a></li>
<li><a href="#static-html-export">Static HTML export</a>
<ul>
<li><a href="#usage">Usage</a></li>
<li><a href="#copying-custom-files">Copying custom files</a></li>
<li><a href="#limitation">Limitation</a></li>
</ul>
</li>
<li><a href="#multi-zones">Multi Zones</a>
<ul>
<li><a href="#how-to-define-a-zone">How to define a zone</a></li>
<li><a href="#how-to-merge-them">How to merge them</a></li>
</ul>
</li>
<li><a href="#recipes">Recipes</a></li>
<li><a href="#faq">FAQ</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#authors">Authors</a></li>
</ul>

<h2><a id="user-content-how-to-use" class="anchor" aria-hidden="true" href="#how-to-use"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>
<h3><a id="user-content-setup" class="anchor" aria-hidden="true" href="#setup"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h3>
<p>Install it:</p>
<div class="highlight highlight-source-shell"><pre>npm install --save next react react-dom</pre></div>
<p>and add a script to your package.json like this:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>dev<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>build<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next build<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>start<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next start<span class="pl-pds">"</span></span>
  }
}</pre></div>
<p>After that, the file-system is the main API. Every <code>.js</code> file becomes a route that gets automatically processed and rendered.</p>
<p>Populate <code>./pages/index.js</code> inside your project:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">div</span>&gt;Welcome to Next.js!&lt;/<span class="pl-ent">div</span>&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<p>and then just run <code>npm run dev</code> and go to <code>http://localhost:3000</code>. To use another port, you can run <code>npm run dev -- -p &lt;your port here&gt;</code>.</p>
<p>So far, we get:</p>
<ul>
<li>Automatic transpilation and bundling (with webpack and babel)</li>
<li>Hot code reloading</li>
<li>Server rendering and indexing of <code>./pages</code></li>
<li>Static file serving. <code>./static/</code> is mapped to <code>/static/</code> (given you <a href="#static-file-serving-eg-images">create a <code>./static/</code> directory</a> inside your project)</li>
</ul>
<h3><a id="user-content-automatic-code-splitting" class="anchor" aria-hidden="true" href="#automatic-code-splitting"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automatic code splitting</h3>
<p>Every <code>import</code> you declare gets bundled and served with each page. That means pages never load unnecessary code!</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">cowsay</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>cowsay-browser<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">CowsayHi</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">pre</span>&gt;<span class="pl-pse">{</span><span class="pl-smi"><span class="pl-smi">cowsay</span></span><span class="pl-k">.</span><span class="pl-en">say</span>({ <span class="pl-c1"><span class="pl-s">text</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>hi there!<span class="pl-pds">'</span></span> })<span class="pl-pse">}</span>&lt;/<span class="pl-ent">pre</span>&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">CowsayHi</span></pre></div>
<h3><a id="user-content-css" class="anchor" aria-hidden="true" href="#css"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS</h3>
<h4><a id="user-content-built-in-css-support" class="anchor" aria-hidden="true" href="#built-in-css-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Built-in CSS support</h4>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/basic-css">Basic css</a></li>
  </ul>
</details>
<p>We bundle <a href="https://github.com/zeit/styled-jsx">styled-jsx</a> to provide support for isolated scoped CSS. The aim is to support "shadow CSS" similar to Web Components, which unfortunately <a href="https://github.com/w3c/webcomponents/issues/71">do not support server-rendering and are JS-only</a>.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">function</span> <span class="pl-en">HelloWorld</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Hello world
      &lt;<span class="pl-ent">p</span>&gt;scoped!&lt;/<span class="pl-ent">p</span>&gt;
      &lt;<span class="pl-ent">style</span> <span class="pl-e">jsx</span>&gt;<span class="pl-pse">{</span><span class="pl-k">\`</span>
<span class="pl-s">        p {</span>
<span class="pl-s">          color: blue;</span>
<span class="pl-s">        }</span>
<span class="pl-s">        div {</span>
<span class="pl-s">          background: red;</span>
<span class="pl-s">        }</span>
<span class="pl-s">        @media (max-width: 600px) {</span>
<span class="pl-s">          div {</span>
<span class="pl-s">            background: blue;</span>
<span class="pl-s">          }</span>
<span class="pl-s">        }</span>
<span class="pl-s">      </span><span class="pl-k">\`</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">style</span>&gt;
      &lt;<span class="pl-ent">style</span> <span class="pl-e">global</span> <span class="pl-e">jsx</span>&gt;<span class="pl-pse">{</span><span class="pl-k">\`</span>
<span class="pl-s">        body {</span>
<span class="pl-s">          background: black;</span>
<span class="pl-s">        }</span>
<span class="pl-s">      </span><span class="pl-k">\`</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">style</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">HelloWorld</span></pre></div>
<p>Please see the <a href="https://www.npmjs.com/package/styled-jsx" rel="nofollow">styled-jsx documentation</a> for more examples.</p>
<h4><a id="user-content-css-in-js" class="anchor" aria-hidden="true" href="#css-in-js"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS-in-JS</h4>
<details>
  <summary>
    <b>Examples</b>
  </summary>
  <ul>
    <li><a href="/examples/with-styled-components">Styled components</a></li>
    <li><a href="/examples/with-styletron">Styletron</a></li>
    <li><a href="/examples/with-glamor">Glamor</a></li>
    <li><a href="/examples/with-cxs">Cxs</a></li>
    <li><a href="/examples/with-aphrodite">Aphrodite</a></li>
    <li><a href="/examples/with-fela">Fela</a></li>
  </ul>
</details>
<p>It's possible to use any existing CSS-in-JS solution. The simplest one is inline styles:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">function</span> <span class="pl-en">HiThere</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">p</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span>{ <span class="pl-c1"><span class="pl-s">color</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>red<span class="pl-pds">'</span></span> }<span class="pl-pse">}</span>&gt;hi there&lt;/<span class="pl-ent">p</span>&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">HiThere</span></pre></div>
<p>To use more sophisticated CSS-in-JS solutions, you typically have to implement style flushing for server-side rendering. We enable this by allowing you to define your own <a href="#custom-document">custom <code>&lt;Document&gt;</code></a> component that wraps each page.</p>
<h4><a id="user-content-importing-css--sass--less--stylus-files" class="anchor" aria-hidden="true" href="#importing-css--sass--less--stylus-files"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing CSS / Sass / Less / Stylus files</h4>
<p>To support importing <code>.css</code>, <code>.scss</code>, <code>.less</code> or <code>.styl</code> files you can use these modules, which configure sensible defaults for server rendered applications.</p>
<ul>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-css">@zeit/next-css</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-sass">@zeit/next-sass</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-less">@zeit/next-less</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-stylus">@zeit/next-stylus</a></li>
</ul>
<h3><a id="user-content-static-file-serving-eg-images" class="anchor" aria-hidden="true" href="#static-file-serving-eg-images"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Static file serving (e.g.: images)</h3>
<p>Create a folder called <code>static</code> in your project root directory. From your code you can then reference those files with <code>/static/</code> URLs:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">function</span> <span class="pl-en">MyImage</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/static/my-image.png<span class="pl-pds">"</span></span> <span class="pl-e">alt</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>my image<span class="pl-pds">"</span></span> /&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">MyImage</span></pre></div>
<p><em>Note: Don't name the <code>static</code> directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.</em></p>
<h3><a id="user-content-populating-head" class="anchor" aria-hidden="true" href="#populating-head"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Populating <code>&lt;head&gt;</code></h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/head-elements">Head elements</a></li>
    <li><a href="/examples/layout-component">Layout component</a></li>
  </ul>
</details>
<p>We expose a built-in component for appending elements to the <code>&lt;head&gt;</code> of the page.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Head</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/head<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">IndexPage</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">Head</span>&gt;
        &lt;<span class="pl-ent">title</span>&gt;My page title&lt;/<span class="pl-ent">title</span>&gt;
        &lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>viewport<span class="pl-pds">"</span></span> <span class="pl-e">content</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>initial-scale=1.0, width=device-width<span class="pl-pds">"</span></span> /&gt;
      &lt;/<span class="pl-ent">Head</span>&gt;
      &lt;<span class="pl-ent">p</span>&gt;Hello world!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">IndexPage</span></pre></div>
<p>To avoid duplicate tags in your <code>&lt;head&gt;</code> you can use the <code>key</code> property, which will make sure the tag is only rendered once:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Head</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/head<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">IndexPage</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">Head</span>&gt;
        &lt;<span class="pl-ent">title</span>&gt;My page title&lt;/<span class="pl-ent">title</span>&gt;
        &lt;<span class="pl-ent">meta</span>
          <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>viewport<span class="pl-pds">"</span></span>
          <span class="pl-e">content</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>initial-scale=1.0, width=device-width<span class="pl-pds">"</span></span>
          <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>viewport<span class="pl-pds">"</span></span>
        /&gt;
      &lt;/<span class="pl-ent">Head</span>&gt;
      &lt;<span class="pl-ent">Head</span>&gt;
        &lt;<span class="pl-ent">meta</span>
          <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>viewport<span class="pl-pds">"</span></span>
          <span class="pl-e">content</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>initial-scale=1.2, width=device-width<span class="pl-pds">"</span></span>
          <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>viewport<span class="pl-pds">"</span></span>
        /&gt;
      &lt;/<span class="pl-ent">Head</span>&gt;
      &lt;<span class="pl-ent">p</span>&gt;Hello world!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">IndexPage</span></pre></div>
<p>In this case only the second <code>&lt;meta name="viewport" /&gt;</code> is rendered.</p>
<p><em>Note: The contents of <code>&lt;head&gt;</code> get cleared upon unmounting the component, so make sure each page completely defines what it needs in <code>&lt;head&gt;</code>, without making assumptions about what other pages added.</em></p>
<p><em>Note: <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> elements need to be contained as <strong>direct</strong> children of the <code>&lt;Head&gt;</code> element, or wrapped into maximum one level of <code>&lt;React.Fragment&gt;</code>, otherwise the metatags won't be correctly picked up on clientside navigation.</em></p>
<h3><a id="user-content-fetching-data-and-component-lifecycle" class="anchor" aria-hidden="true" href="#fetching-data-and-component-lifecycle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fetching data and component lifecycle</h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/data-fetch">Data fetch</a></li>
  </ul>
</details>
<p>When you need state, lifecycle hooks or <strong>initial data population</strong> you can export a <code>React.Component</code> (instead of a stateless function, like shown above):</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">HelloUA</span> <span class="pl-k">extends</span> <span class="pl-smi">React</span><span class="pl-k">.</span><span class="pl-smi">Component</span> {
  <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en"><span class="pl-s">getInitialProps</span></span>({ <span class="pl-smi">req</span> }) {
    <span class="pl-k">const</span> <span class="pl-smi">userAgent</span> <span class="pl-k">=</span> <span class="pl-smi">req</span> <span class="pl-k">?</span> <span class="pl-smi"><span class="pl-smi">req</span></span><span class="pl-k">.</span><span class="pl-smi">headers</span>[<span class="pl-s"><span class="pl-pds">'</span>user-agent<span class="pl-pds">'</span></span>] : <span class="pl-smi"><span class="pl-smi">navigator</span></span><span class="pl-k">.</span><span class="pl-smi">userAgent</span>
    <span class="pl-k">return</span> { <span class="pl-smi">userAgent</span> }
  }

  <span class="pl-en"><span class="pl-s">render</span></span>() {
    <span class="pl-k">return</span> &lt;<span class="pl-ent">div</span>&gt;Hello World <span class="pl-pse">{</span><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">userAgent</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
  }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">HelloUA</span></pre></div>
<p>Notice that to load data when the page loads, we use <code>getInitialProps</code> which is an <a href="https://zeit.co/blog/async-and-await" rel="nofollow"><code>async</code></a> static method. It can asynchronously fetch anything that resolves to a JavaScript plain <code>Object</code>, which populates <code>props</code>.</p>
<p>Data returned from <code>getInitialProps</code> is serialized when server rendering, similar to a <code>JSON.stringify</code>. Make sure the returned object from <code>getInitialProps</code> is a plain <code>Object</code> and not using <code>Date</code>, <code>Map</code> or <code>Set</code>.</p>
<p>For the initial page load, <code>getInitialProps</code> will execute on the server only. <code>getInitialProps</code> will only be executed on the client when navigating to a different route via the <code>Link</code> component or using the routing APIs.</p>
<p><em>Note: <code>getInitialProps</code> can <strong>not</strong> be used in children components. Only in <code>pages</code>.</em></p>
<br>
<blockquote>
<p>If you are using some server only modules inside <code>getInitialProps</code>, make sure to <a href="https://arunoda.me/blog/ssr-and-server-only-modules" rel="nofollow">import them properly</a>.
Otherwise, it'll slow down your app.</p>
</blockquote>
<br>
<p>You can also define the <code>getInitialProps</code> lifecycle method for stateless components:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">function</span> <span class="pl-en">Page</span>({ <span class="pl-smi">stars</span> }) {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">div</span>&gt;Next stars: <span class="pl-pse">{</span><span class="pl-smi">stars</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
}

<span class="pl-en">Page</span><span class="pl-k">.</span><span class="pl-en">getInitialProps</span> <span class="pl-k">=</span> <span class="pl-k">async</span> ({ <span class="pl-smi">req</span> }) <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-smi">res</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">fetch</span>(<span class="pl-s"><span class="pl-pds">'</span>https://api.github.com/repos/zeit/next.js<span class="pl-pds">'</span></span>)
  <span class="pl-k">const</span> <span class="pl-smi">json</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi"><span class="pl-smi">res</span></span><span class="pl-k">.</span><span class="pl-en">json</span>()
  <span class="pl-k">return</span> { <span class="pl-c1"><span class="pl-s">stars</span>:</span> <span class="pl-smi"><span class="pl-smi">json</span></span><span class="pl-k">.</span><span class="pl-smi">stargazers_count</span> }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Page</span></pre></div>
<p><code>getInitialProps</code> receives a context object with the following properties:</p>
<ul>
<li><code>pathname</code> - path section of URL</li>
<li><code>query</code> - query string section of URL parsed as an object</li>
<li><code>asPath</code> - <code>String</code> of the actual path (including the query) shows in the browser</li>
<li><code>req</code> - HTTP request object (server only)</li>
<li><code>res</code> - HTTP response object (server only)</li>
<li><code>err</code> - Error object if any error is encountered during the rendering</li>
</ul>
<h3><a id="user-content-routing" class="anchor" aria-hidden="true" href="#routing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Routing</h3>
<p>Next.js does not ship a routes manifest with every possible route in the application, so the current page is not aware of any other pages on the client side. All subsequent routes get lazy-loaded, for scalability sake.</p>
<h4><a id="user-content-with-link" class="anchor" aria-hidden="true" href="#with-link"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With <code>&lt;Link&gt;</code></h4>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/hello-world">Hello World</a></li>
  </ul>
</details>
<p>Client-side transitions between routes can be enabled via a <code>&lt;Link&gt;</code> component.</p>
<p><strong>Basic Example</strong></p>
<p>Consider these two pages:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> pages/index.js</span>
<span class="pl-k">import</span> <span class="pl-smi">Link</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/link<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Click<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      &lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/about<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">a</span>&gt;here&lt;/<span class="pl-ent">a</span>&gt;
      &lt;/<span class="pl-ent">Link</span>&gt;<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      to read more
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> pages/about.js</span>
<span class="pl-k">function</span> <span class="pl-en">About</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">p</span>&gt;Welcome to About!&lt;/<span class="pl-ent">p</span>&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">About</span></pre></div>
<p><strong>Custom routes (using props from URL)</strong></p>
<p><code>&lt;Link&gt;</code> component has two main props:</p>
<ul>
<li><code>href</code>: the path inside <code>pages</code> directory + query string.</li>
<li><code>as</code>: the path that will be rendered in the browser URL bar.</li>
</ul>
<p>Example:</p>
<ol>
<li>
<p>Consider you have the URL <code>/post/:slug</code>.</p>
</li>
<li>
<p>You created the <code>pages/post.js</code></p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">class</span> <span class="pl-en">Post</span> <span class="pl-k">extends</span> <span class="pl-smi">React</span><span class="pl-k">.</span><span class="pl-smi">Component</span> {
  <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en"><span class="pl-s">getInitialProps</span></span>({ <span class="pl-smi">query</span> }) {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>SLUG<span class="pl-pds">'</span></span>, <span class="pl-smi"><span class="pl-smi">query</span></span><span class="pl-k">.</span><span class="pl-smi">slug</span>)
    <span class="pl-k">return</span> {}
  }
  <span class="pl-en"><span class="pl-s">render</span></span>() {
    <span class="pl-k">return</span> &lt;<span class="pl-ent">h1</span>&gt;My blog post&lt;/<span class="pl-ent">h1</span>&gt;
  }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Post</span></pre></div>
</li>
<li>
<p>You add the route to <code>express</code> (or any other server) on <code>server.js</code> file (this is only for SSR). This will route the url <code>/post/:slug</code> to <code>pages/post.js</code> and provide <code>slug</code> as part of query in getInitialProps.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi"><span class="pl-smi">server</span></span><span class="pl-k">.</span><span class="pl-en">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/post/:slug<span class="pl-pds">'</span></span>, (<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) <span class="pl-k">=&gt;</span> {
  <span class="pl-k">return</span> <span class="pl-smi"><span class="pl-smi">app</span></span><span class="pl-k">.</span><span class="pl-en">render</span>(<span class="pl-smi">req</span>, <span class="pl-smi">res</span>, <span class="pl-s"><span class="pl-pds">'</span>/post<span class="pl-pds">'</span></span>, { <span class="pl-c1"><span class="pl-s">slug</span>:</span> <span class="pl-smi"><span class="pl-smi">req</span></span><span class="pl-k">.</span><span class="pl-smi">params</span><span class="pl-k">.</span><span class="pl-smi">slug</span> })
})</pre></div>
</li>
<li>
<p>For client side routing, use <code>next/link</code>:</p>
<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/post?slug=something<span class="pl-pds">"</span></span> <span class="pl-e">as</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/post/something<span class="pl-pds">"</span></span>&gt;</pre></div>
</li>
</ol>
<p><strong>Note: use <a href="#prefetching-pages"><code>&lt;Link prefetch&gt;</code></a> for maximum performance, to link and prefetch in the background at the same time</strong></p>
<p>Client-side routing behaves exactly like the browser:</p>
<ol>
<li>The component is fetched</li>
<li>If it defines <code>getInitialProps</code>, data is fetched. If an error occurs, <code>_error.js</code> is rendered</li>
<li>After 1 and 2 complete, <code>pushState</code> is performed and the new component is rendered</li>
</ol>
<p>To inject the <code>pathname</code>, <code>query</code> or <code>asPath</code> in your component, you can use <a href="#using-a-higher-order-component">withRouter</a>.</p>
<h5><a id="user-content-with-url-object" class="anchor" aria-hidden="true" href="#with-url-object"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With URL object</h5>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-url-object-routing">With URL Object Routing</a></li>
  </ul>
</details>
<p>The component <code>&lt;Link&gt;</code> can also receive a URL object and it will automatically format it to create the URL string.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> pages/index.js</span>
<span class="pl-k">import</span> <span class="pl-smi">Link</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/link<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Click<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      &lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-pse">{</span>{ <span class="pl-c1"><span class="pl-s">pathname</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>/about<span class="pl-pds">'</span></span>, <span class="pl-c1"><span class="pl-s">query</span>:</span> { <span class="pl-c1"><span class="pl-s">name</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Zeit<span class="pl-pds">'</span></span> } }<span class="pl-pse">}</span>&gt;
        &lt;<span class="pl-ent">a</span>&gt;here&lt;/<span class="pl-ent">a</span>&gt;
      &lt;/<span class="pl-ent">Link</span>&gt;<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      to read more
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<p>That will generate the URL string <code>/about?name=Zeit</code>, you can use every property as defined in the <a href="https://nodejs.org/api/url.html#url_url_strings_and_url_objects" rel="nofollow">Node.js URL module documentation</a>.</p>
<h5><a id="user-content-replace-instead-of-push-url" class="anchor" aria-hidden="true" href="#replace-instead-of-push-url"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Replace instead of push url</h5>
<p>The default behaviour for the <code>&lt;Link&gt;</code> component is to <code>push</code> a new url into the stack. You can use the <code>replace</code> prop to prevent adding a new entry.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> pages/index.js</span>
<span class="pl-k">import</span> <span class="pl-smi">Link</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/link<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Click<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      &lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/about<span class="pl-pds">"</span></span> <span class="pl-e">replace</span>&gt;
        &lt;<span class="pl-ent">a</span>&gt;here&lt;/<span class="pl-ent">a</span>&gt;
      &lt;/<span class="pl-ent">Link</span>&gt;<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      to read more
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<h5><a id="user-content-using-a-component-that-supports-onclick" class="anchor" aria-hidden="true" href="#using-a-component-that-supports-onclick"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using a component that supports <code>onClick</code></h5>
<p><code>&lt;Link&gt;</code> supports any component that supports the <code>onClick</code> event. In case you don't provide an <code>&lt;a&gt;</code> tag, it will only add the <code>onClick</code> event handler and won't pass the <code>href</code> property.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> pages/index.js</span>
<span class="pl-k">import</span> <span class="pl-smi">Link</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/link<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Click<span class="pl-pse">{</span><span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      &lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/about<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/static/image.png<span class="pl-pds">"</span></span> <span class="pl-e">alt</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>image<span class="pl-pds">"</span></span> /&gt;
      &lt;/<span class="pl-ent">Link</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<h5><a id="user-content-forcing-the-link-to-expose-href-to-its-child" class="anchor" aria-hidden="true" href="#forcing-the-link-to-expose-href-to-its-child"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Forcing the Link to expose <code>href</code> to its child</h5>
<p>If child is an <code>&lt;a&gt;</code> tag and doesn't have a href attribute we specify it so that the repetition is not needed by the user. However, sometimes, you’ll want to pass an <code>&lt;a&gt;</code> tag inside of a wrapper and the <code>Link</code> won’t recognize it as a <em>hyperlink</em>, and, consequently, won’t transfer its <code>href</code> to the child. In cases like that, you should define a boolean <code>passHref</code> property to the <code>Link</code>, forcing it to expose its <code>href</code> property to the child.</p>
<p><strong>Please note</strong>: using a tag other than <code>a</code> and failing to pass <code>passHref</code> may result in links that appear to navigate correctly, but, when being crawled by search engines, will not be recognized as links (owing to the lack of <code>href</code> attribute). This may result in negative effects on your sites SEO.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Link</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/link<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">Unexpected_A</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>third-library<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">NavLink</span>({ <span class="pl-smi">href</span>, <span class="pl-smi">name</span> }) {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-smi">href</span><span class="pl-pse">}</span> <span class="pl-e">passHref</span>&gt;
      &lt;<span class="pl-ent">Unexpected_A</span>&gt;<span class="pl-pse">{</span><span class="pl-smi">name</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">Unexpected_A</span>&gt;
    &lt;/<span class="pl-ent">Link</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">NavLink</span></pre></div>
<h5><a id="user-content-disabling-the-scroll-changes-to-top-on-page" class="anchor" aria-hidden="true" href="#disabling-the-scroll-changes-to-top-on-page"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disabling the scroll changes to top on page</h5>
<p>The default behaviour of <code>&lt;Link&gt;</code> is to scroll to the top of the page. When there is a hash defined it will scroll to the specific id, just like a normal <code>&lt;a&gt;</code> tag. To prevent scrolling to the top / hash <code>scroll={false}</code> can be added to <code>&lt;Link&gt;</code>:</p>
<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">Link</span> <span class="pl-e">scroll</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-c1">false</span><span class="pl-pse">}</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/?counter=10<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">a</span>&gt;Disables scrolling&lt;/<span class="pl-ent">a</span>&gt;&lt;/<span class="pl-ent">Link</span>&gt;
&lt;<span class="pl-ent">Link</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/?counter=10<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">a</span>&gt;Changes with scrolling to top&lt;/<span class="pl-ent">a</span>&gt;&lt;/<span class="pl-ent">Link</span>&gt;</pre></div>
<h4><a id="user-content-imperatively" class="anchor" aria-hidden="true" href="#imperatively"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Imperatively</h4>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/using-router">Basic routing</a></li>
    <li><a href="/examples/with-loading">With a page loading indicator</a></li>
  </ul>
</details>
<p>You can also do client-side page transitions using the <code>next/router</code></p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Router</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/router<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">ReadMore</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Click &lt;<span class="pl-ent">span</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span>() <span class="pl-k">=&gt;</span> <span class="pl-smi">Router</span><span class="pl-k">.</span><span class="pl-en">push</span>(<span class="pl-s"><span class="pl-pds">'</span>/about<span class="pl-pds">'</span></span>)<span class="pl-pse">}</span>&gt;here&lt;/<span class="pl-ent">span</span>&gt; to read more
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">ReadMore</span></pre></div>
<h4><a id="user-content-intercepting-popstate" class="anchor" aria-hidden="true" href="#intercepting-popstate"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Intercepting <code>popstate</code></h4>
<p>In some cases (for example, if using a <a href="#custom-server-and-routing">custom router</a>), you may wish
to listen to <a href="https://developer.mozilla.org/en-US/docs/Web/Events/popstate" rel="nofollow"><code>popstate</code></a> and react before the router acts on it.
For example, you could use this to manipulate the request, or force an SSR refresh.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Router</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/router<span class="pl-pds">'</span></span>

<span class="pl-smi">Router</span><span class="pl-k">.</span><span class="pl-en">beforePopState</span>(({ <span class="pl-smi">url</span>, <span class="pl-smi">as</span>, <span class="pl-smi">options</span> }) <span class="pl-k">=&gt;</span> {
  <span class="pl-c"><span class="pl-c">//</span> I only want to allow these two routes!</span>
  <span class="pl-k">if</span> (<span class="pl-k">as</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span> <span class="pl-k">||</span> <span class="pl-k">as</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">'</span>/other<span class="pl-pds">'</span></span>) {
    <span class="pl-c"><span class="pl-c">//</span> Have SSR render bad routes as a 404.</span>
    <span class="pl-c1">window</span><span class="pl-k">.</span><span class="pl-smi">location</span><span class="pl-k">.</span><span class="pl-smi">href</span> <span class="pl-k">=</span> <span class="pl-k">as</span>
    <span class="pl-k">return</span> <span class="pl-c1">false</span>
  }

  <span class="pl-k">return</span> <span class="pl-c1">true</span>
})</pre></div>
<p>If the function you pass into <code>beforePopState</code> returns <code>false</code>, <code>Router</code> will not handle <code>popstate</code>;
you'll be responsible for handling it, in that case.
See <a href="#disabling-file-system-routing">Disabling File-System Routing</a>.</p>
<p>Above <code>Router</code> object comes with the following API:</p>
<ul>
<li><code>route</code> - <code>String</code> of the current route</li>
<li><code>pathname</code> - <code>String</code> of the current path excluding the query string</li>
<li><code>query</code> - <code>Object</code> with the parsed query string. Defaults to <code>{}</code></li>
<li><code>asPath</code> - <code>String</code> of the actual path (including the query) shows in the browser</li>
<li><code>push(url, as=url)</code> - performs a <code>pushState</code> call with the given url</li>
<li><code>replace(url, as=url)</code> - performs a <code>replaceState</code> call with the given url</li>
<li><code>beforePopState(cb=function)</code> - intercept popstate before router processes the event.</li>
</ul>
<p>The second <code>as</code> parameter for <code>push</code> and <code>replace</code> is an optional <em>decoration</em> of the URL. Useful if you configured custom routes on the server.</p>
<h5><a id="user-content-with-url-object-1" class="anchor" aria-hidden="true" href="#with-url-object-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With URL object</h5>
<p>You can use a URL object the same way you use it in a <code>&lt;Link&gt;</code> component to <code>push</code> and <code>replace</code> a URL.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Router</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/router<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-en">handler</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
  <span class="pl-smi">Router</span><span class="pl-k">.</span><span class="pl-en">push</span>({
    <span class="pl-c1"><span class="pl-s">pathname</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>/about<span class="pl-pds">'</span></span>,
    <span class="pl-c1"><span class="pl-s">query</span>:</span> { <span class="pl-c1"><span class="pl-s">name</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Zeit<span class="pl-pds">'</span></span> }
  })
}

<span class="pl-k">function</span> <span class="pl-en">ReadMore</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      Click &lt;<span class="pl-ent">span</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-smi">handler</span><span class="pl-pse">}</span>&gt;here&lt;/<span class="pl-ent">span</span>&gt; to read more
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">ReadMore</span></pre></div>
<p>This uses the same exact parameters as in the <code>&lt;Link&gt;</code> component.</p>
<h5><a id="user-content-router-events" class="anchor" aria-hidden="true" href="#router-events"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Router Events</h5>
<p>You can also listen to different events happening inside the Router.
Here's a list of supported events:</p>
<ul>
<li><code>routeChangeStart(url)</code> - Fires when a route starts to change</li>
<li><code>routeChangeComplete(url)</code> - Fires when a route changed completely</li>
<li><code>routeChangeError(err, url)</code> - Fires when there's an error when changing routes</li>
<li><code>beforeHistoryChange(url)</code> - Fires just before changing the browser's history</li>
<li><code>hashChangeStart(url)</code> - Fires when the hash will change but not the page</li>
<li><code>hashChangeComplete(url)</code> - Fires when the hash has changed but not the page</li>
</ul>
<blockquote>
<p>Here <code>url</code> is the URL shown in the browser. If you call <code>Router.push(url, as)</code> (or similar), then the value of <code>url</code> will be <code>as</code>.</p>
</blockquote>
<p>Here's how to properly listen to the router event <code>routeChangeStart</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">handleRouteChange</span> <span class="pl-k">=</span> <span class="pl-smi">url</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>App is changing to: <span class="pl-pds">'</span></span>, url)
}

<span class="pl-smi">Router</span>.<span class="pl-smi">events</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>routeChangeStart<span class="pl-pds">'</span></span>, handleRouteChange)</pre></div>
<p>If you no longer want to listen to that event, you can unsubscribe with the <code>off</code> method:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">Router</span>.<span class="pl-smi">events</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">'</span>routeChangeStart<span class="pl-pds">'</span></span>, handleRouteChange)</pre></div>
<p>If a route load is cancelled (for example by clicking two links rapidly in succession), <code>routeChangeError</code> will fire. The passed <code>err</code> will contain a <code>cancelled</code> property set to <code>true</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">Router</span>.<span class="pl-smi">events</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>routeChangeError<span class="pl-pds">'</span></span>, (<span class="pl-smi">err</span>, <span class="pl-smi">url</span>) <span class="pl-k">=&gt;</span> {
  <span class="pl-k">if</span> (<span class="pl-smi">err</span>.<span class="pl-smi">cancelled</span>) {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">\`</span>Route to <span class="pl-s1"><span class="pl-pse">\${</span>url<span class="pl-pse">}</span></span> was cancelled!<span class="pl-pds">\`</span></span>)
  }
})</pre></div>
<h5><a id="user-content-shallow-routing" class="anchor" aria-hidden="true" href="#shallow-routing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shallow Routing</h5>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-shallow-routing">Shallow Routing</a></li>
  </ul>
</details>
<p>Shallow routing allows you to change the URL without running <code>getInitialProps</code>. You'll receive the updated <code>pathname</code> and the <code>query</code> via the <code>router</code> prop (injected using <a href="#using-a-higher-order-component"><code>withRouter</code></a>), without losing state.</p>
<p>You can do this by invoking either <code>Router.push</code> or <code>Router.replace</code> with the <code>shallow: true</code> option. Here's an example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Current URL is "/"</span>
<span class="pl-k">const</span> <span class="pl-c1">href</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>/?counter=10<span class="pl-pds">'</span></span>
<span class="pl-k">const</span> <span class="pl-c1">as</span> <span class="pl-k">=</span> href
<span class="pl-smi">Router</span>.<span class="pl-c1">push</span>(href, as, { shallow<span class="pl-k">:</span> <span class="pl-c1">true</span> })</pre></div>
<p>Now, the URL is updated to <code>/?counter=10</code>. You can see the updated URL with <code>this.props.router.query</code> inside the <code>Component</code> (make sure you are using <a href="#using-a-higher-order-component"><code>withRouter</code></a> around your <code>Component</code> to inject the <code>router</code> prop).</p>
<p>You can watch for URL changes via <a href="https://reactjs.org/docs/react-component.html#componentdidupdate" rel="nofollow"><code>componentDidUpdate</code></a> hook as shown below:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">componentDidUpdate</span>(<span class="pl-smi">prevProps</span>) {
  <span class="pl-k">const</span> { <span class="pl-c1">pathname</span>, <span class="pl-c1">query</span> } <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">router</span>
  <span class="pl-c"><span class="pl-c">//</span> verify props have changed to avoid an infinite loop</span>
  <span class="pl-k">if</span> (<span class="pl-smi">query</span>.<span class="pl-c1">id</span> <span class="pl-k">!==</span> <span class="pl-smi">prevProps</span>.<span class="pl-smi">router</span>.<span class="pl-smi">query</span>.<span class="pl-c1">id</span>) {
    <span class="pl-c"><span class="pl-c">//</span> fetch data based on the new query</span>
  }
}</pre></div>
<blockquote>
<p>NOTES:</p>
<p>Shallow routing works <strong>only</strong> for same page URL changes. For an example, let's assume we have another page called <code>about</code>, and you run this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">Router</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">'</span>/?counter=10<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>/about?counter=10<span class="pl-pds">'</span></span>, { shallow<span class="pl-k">:</span> <span class="pl-c1">true</span> })</pre></div>
<p>Since that's a new page, it'll unload the current page, load the new one and call <code>getInitialProps</code> even though we asked to do shallow routing.</p>
</blockquote>
<h4><a id="user-content-using-a-higher-order-component" class="anchor" aria-hidden="true" href="#using-a-higher-order-component"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using a Higher Order Component</h4>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/using-with-router">Using the \`withRouter\` utility</a></li>
  </ul>
</details>
<p>If you want to access the <code>router</code> object inside any component in your app, you can use the <code>withRouter</code> Higher-Order Component. Here's how to use it:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> { <span class="pl-smi">withRouter</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/router<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">ActiveLink</span>({ <span class="pl-smi">children</span>, <span class="pl-smi">router</span>, <span class="pl-smi">href</span> }) {
  <span class="pl-k">const</span> <span class="pl-smi">style</span> <span class="pl-k">=</span> {
    <span class="pl-c1"><span class="pl-s">marginRight</span>:</span> <span class="pl-c1">10</span>,
    <span class="pl-c1"><span class="pl-s">color</span>:</span> <span class="pl-smi"><span class="pl-smi">router</span></span><span class="pl-k">.</span><span class="pl-smi">pathname</span> <span class="pl-k">===</span> <span class="pl-smi">href</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">'</span>red<span class="pl-pds">'</span></span> : <span class="pl-s"><span class="pl-pds">'</span>black<span class="pl-pds">'</span></span>
  }

  <span class="pl-k">const</span> <span class="pl-en">handleClick</span> <span class="pl-k">=</span> <span class="pl-smi">e</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-smi"><span class="pl-smi">e</span></span><span class="pl-k">.</span><span class="pl-en">preventDefault</span>()
    <span class="pl-smi"><span class="pl-smi">router</span></span><span class="pl-k">.</span><span class="pl-en">push</span>(<span class="pl-smi">href</span>)
  }

  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">a</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-smi">href</span><span class="pl-pse">}</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-smi">handleClick</span><span class="pl-pse">}</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-smi">style</span><span class="pl-pse">}</span>&gt;
      <span class="pl-pse">{</span><span class="pl-smi">children</span><span class="pl-pse">}</span>
    &lt;/<span class="pl-ent">a</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-en">withRouter</span>(<span class="pl-smi">ActiveLink</span>)</pre></div>
<p>The above <code>router</code> object comes with an API similar to <a href="#imperatively"><code>next/router</code></a>.</p>
<h3><a id="user-content-prefetching-pages" class="anchor" aria-hidden="true" href="#prefetching-pages"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prefetching Pages</h3>
<p><g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji> This is a production only feature <g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji></p>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-prefetching">Prefetching</a></li>
  </ul>
</details>
<p>Next.js has an API which allows you to prefetch pages.</p>
<p>Since Next.js server-renders your pages, this allows all the future interaction paths of your app to be instant. Effectively Next.js gives you the great initial download performance of a <em>website</em>, with the ahead-of-time download capabilities of an <em>app</em>. <a href="https://zeit.co/blog/next#anticipation-is-the-key-to-performance" rel="nofollow">Read more</a>.</p>
<blockquote>
<p>With prefetching Next.js only downloads JS code. When the page is getting rendered, you may need to wait for the data.</p>
</blockquote>
<blockquote>
<p><code>&lt;link rel="preload"&gt;</code> is used for prefetching. Sometimes browsers will show a warning if the resource is not used within 3 seconds, these warnings can be ignored as per <a href="https://github.com/zeit/next.js/issues/6517#issuecomment-469063892">https://github.com/zeit/next.js/issues/6517#issuecomment-469063892</a></p>
</blockquote>
<h4><a id="user-content-with-link-1" class="anchor" aria-hidden="true" href="#with-link-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With <code>&lt;Link&gt;</code></h4>
<p>You can add <code>prefetch</code> prop to any <code>&lt;Link&gt;</code> and Next.js will prefetch those pages in the background.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">Link</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/link<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">Header</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">nav</span>&gt;
      &lt;<span class="pl-ent">ul</span>&gt;
        &lt;<span class="pl-ent">li</span>&gt;
          &lt;<span class="pl-ent">Link</span> <span class="pl-e">prefetch</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">a</span>&gt;Home&lt;/<span class="pl-ent">a</span>&gt;
          &lt;/<span class="pl-ent">Link</span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span>&gt;
          &lt;<span class="pl-ent">Link</span> <span class="pl-e">prefetch</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/about<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">a</span>&gt;About&lt;/<span class="pl-ent">a</span>&gt;
          &lt;/<span class="pl-ent">Link</span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span>&gt;
          &lt;<span class="pl-ent">Link</span> <span class="pl-e">prefetch</span> <span class="pl-e">href</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">a</span>&gt;Contact&lt;/<span class="pl-ent">a</span>&gt;
          &lt;/<span class="pl-ent">Link</span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
      &lt;/<span class="pl-ent">ul</span>&gt;
    &lt;/<span class="pl-ent">nav</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Header</span></pre></div>
<h4><a id="user-content-imperatively-1" class="anchor" aria-hidden="true" href="#imperatively-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Imperatively</h4>
<p>Most prefetching needs are addressed by <code>&lt;Link /&gt;</code>, but we also expose an imperative API for advanced usage:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> { <span class="pl-smi">withRouter</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/router<span class="pl-pds">'</span></span>

<span class="pl-k">function</span> <span class="pl-en">MyLink</span>({ <span class="pl-smi">router</span> }) {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">a</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span>() <span class="pl-k">=&gt;</span> <span class="pl-c1">setTimeout</span>(() <span class="pl-k">=&gt;</span> <span class="pl-smi"><span class="pl-smi">router</span></span><span class="pl-k">.</span><span class="pl-en">push</span>(<span class="pl-s"><span class="pl-pds">'</span>/dynamic<span class="pl-pds">'</span></span>), <span class="pl-c1">100</span>)<span class="pl-pse">}</span>&gt;
        A route transition will happen after 100ms
      &lt;/<span class="pl-ent">a</span>&gt;
      <span class="pl-pse">{</span><span class="pl-c"><span class="pl-c">//</span> but we can prefetch it!</span>
      <span class="pl-smi"><span class="pl-smi">router</span></span><span class="pl-k">.</span><span class="pl-en">prefetch</span>(<span class="pl-s"><span class="pl-pds">'</span>/dynamic<span class="pl-pds">'</span></span>)<span class="pl-pse">}</span>
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-en">withRouter</span>(<span class="pl-smi">MyLink</span>)</pre></div>
<p>The router instance should be only used inside the client side of your app though. In order to prevent any error regarding this subject, when rendering the Router on the server side, use the imperatively prefetch method in the <code>componentDidMount()</code> lifecycle method.</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> { <span class="pl-smi">withRouter</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/router<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">MyLink</span> <span class="pl-k">extends</span> <span class="pl-smi">React</span><span class="pl-k">.</span><span class="pl-smi">Component</span> {
  <span class="pl-en"><span class="pl-s">componentDidMount</span></span>() {
    <span class="pl-k">const</span> { <span class="pl-smi">router</span> } <span class="pl-k">=</span> <span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span>
    <span class="pl-smi"><span class="pl-smi">router</span></span><span class="pl-k">.</span><span class="pl-en">prefetch</span>(<span class="pl-s"><span class="pl-pds">'</span>/dynamic<span class="pl-pds">'</span></span>)
  }

  <span class="pl-en"><span class="pl-s">render</span></span>() {
    <span class="pl-k">const</span> { <span class="pl-smi">router</span> } <span class="pl-k">=</span> <span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span>

    <span class="pl-k">return</span> (
      &lt;<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">a</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span>() <span class="pl-k">=&gt;</span> <span class="pl-c1">setTimeout</span>(() <span class="pl-k">=&gt;</span> <span class="pl-smi"><span class="pl-smi">router</span></span><span class="pl-k">.</span><span class="pl-en">push</span>(<span class="pl-s"><span class="pl-pds">'</span>/dynamic<span class="pl-pds">'</span></span>), <span class="pl-c1">100</span>)<span class="pl-pse">}</span>&gt;
          A route transition will happen after 100ms
        &lt;/<span class="pl-ent">a</span>&gt;
      &lt;/<span class="pl-ent">div</span>&gt;
    )
  }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-en">withRouter</span>(<span class="pl-smi">MyLink</span>)</pre></div>
<h3><a id="user-content-custom-server-and-routing" class="anchor" aria-hidden="true" href="#custom-server-and-routing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom server and routing</h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/custom-server">Basic custom server</a></li>
    <li><a href="/examples/custom-server-express">Express integration</a></li>
    <li><a href="/examples/custom-server-hapi">Hapi integration</a></li>
    <li><a href="/examples/custom-server-koa">Koa integration</a></li>
    <li><a href="/examples/parameterized-routing">Parameterized routing</a></li>
    <li><a href="/examples/ssr-caching">SSR caching</a></li>
  </ul>
</details>
<p>Typically you start your next server with <code>next start</code>. It's possible, however, to start a server 100% programmatically in order to customize routes, use route patterns, etc.</p>
<p>When using a custom server with a server file, for example called <code>server.js</code>, make sure you update the scripts key in <code>package.json</code> to:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>dev<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>node server.js<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>build<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next build<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>start<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>NODE_ENV=production node server.js<span class="pl-pds">"</span></span>
  }
}</pre></div>
<p>This example makes <code>/a</code> resolve to <code>./pages/b</code>, and <code>/b</code> resolve to <code>./pages/a</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> This file doesn't go through babel or webpack transformation.</span>
<span class="pl-c"><span class="pl-c">//</span> Make sure the syntax and sources this file requires are compatible with the current node version you are running</span>
<span class="pl-c"><span class="pl-c">//</span> See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel</span>
<span class="pl-k">const</span> { <span class="pl-c1">createServer</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>http<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> { <span class="pl-c1">parse</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>url<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> <span class="pl-c1">next</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>next<span class="pl-pds">'</span></span>)

<span class="pl-k">const</span> <span class="pl-c1">dev</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">NODE_ENV</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">'</span>production<span class="pl-pds">'</span></span>
<span class="pl-k">const</span> <span class="pl-c1">app</span> <span class="pl-k">=</span> <span class="pl-en">next</span>({ dev })
<span class="pl-k">const</span> <span class="pl-c1">handle</span> <span class="pl-k">=</span> <span class="pl-smi">app</span>.<span class="pl-en">getRequestHandler</span>()

<span class="pl-smi">app</span>.<span class="pl-en">prepare</span>().<span class="pl-c1">then</span>(() <span class="pl-k">=&gt;</span> {
  <span class="pl-en">createServer</span>((<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> Be sure to pass \`true\` as the second argument to \`url.parse\`.</span>
    <span class="pl-c"><span class="pl-c">//</span> This tells it to parse the query portion of the URL.</span>
    <span class="pl-k">const</span> <span class="pl-c1">parsedUrl</span> <span class="pl-k">=</span> <span class="pl-en">parse</span>(<span class="pl-smi">req</span>.<span class="pl-smi">url</span>, <span class="pl-c1">true</span>)
    <span class="pl-k">const</span> { <span class="pl-c1">pathname</span>, <span class="pl-c1">query</span> } <span class="pl-k">=</span> parsedUrl

    <span class="pl-k">if</span> (pathname <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>/a<span class="pl-pds">'</span></span>) {
      <span class="pl-smi">app</span>.<span class="pl-en">render</span>(req, res, <span class="pl-s"><span class="pl-pds">'</span>/b<span class="pl-pds">'</span></span>, query)
    } <span class="pl-k">else</span> <span class="pl-k">if</span> (pathname <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>/b<span class="pl-pds">'</span></span>) {
      <span class="pl-smi">app</span>.<span class="pl-en">render</span>(req, res, <span class="pl-s"><span class="pl-pds">'</span>/a<span class="pl-pds">'</span></span>, query)
    } <span class="pl-k">else</span> {
      <span class="pl-en">handle</span>(req, res, parsedUrl)
    }
  }).<span class="pl-en">listen</span>(<span class="pl-c1">3000</span>, <span class="pl-smi">err</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-k">if</span> (err) <span class="pl-k">throw</span> err
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>&gt; Ready on http://localhost:3000<span class="pl-pds">'</span></span>)
  })
})</pre></div>
<p>The <code>next</code> API is as follows:</p>
<ul>
<li><code>next(opts: object)</code></li>
</ul>
<p>Supported options:</p>
<ul>
<li><code>dev</code> (<code>bool</code>) whether to launch Next.js in dev mode - default <code>false</code></li>
<li><code>dir</code> (<code>string</code>) where the Next project is located - default <code>'.'</code></li>
<li><code>quiet</code> (<code>bool</code>) Hide error messages containing server information - default <code>false</code></li>
<li><code>conf</code> (<code>object</code>) the same object you would use in <code>next.config.js</code> - default <code>{}</code></li>
</ul>
<p>Then, change your <code>start</code> script to <code>NODE_ENV=production node server.js</code>.</p>
<h4><a id="user-content-disabling-file-system-routing" class="anchor" aria-hidden="true" href="#disabling-file-system-routing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disabling file-system routing</h4>
<p>By default, <code>Next</code> will serve each file in <code>/pages</code> under a pathname matching the filename (eg, <code>/pages/some-file.js</code> is served at <code>site.com/some-file</code>.</p>
<p>If your project uses custom routing, this behavior may result in the same content being served from multiple paths, which can present problems with SEO and UX.</p>
<p>To disable this behavior &amp; prevent routing based on files in <code>/pages</code>, simply set the following option in your <code>next.config.js</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  useFileSystemPublicRoutes<span class="pl-k">:</span> <span class="pl-c1">false</span>
}</pre></div>
<p>Note that <code>useFileSystemPublicRoutes</code> simply disables filename routes from SSR; client-side routing
may still access those paths. If using this option, you should guard against navigation to routes
you do not want programmatically.</p>
<p>You may also wish to configure the client-side Router to disallow client-side redirects to filename
routes; please refer to <a href="#intercepting-popstate">Intercepting <code>popstate</code></a>.</p>
<h4><a id="user-content-dynamic-assetprefix" class="anchor" aria-hidden="true" href="#dynamic-assetprefix"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dynamic assetPrefix</h4>
<p>Sometimes we need to set the <code>assetPrefix</code> dynamically. This is useful when changing the <code>assetPrefix</code> based on incoming requests.
For that, we can use <code>app.setAssetPrefix</code>.</p>
<p>Here's an example usage of it:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">next</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>next<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> <span class="pl-c1">http</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>http<span class="pl-pds">'</span></span>)

<span class="pl-k">const</span> <span class="pl-c1">dev</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">NODE_ENV</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">'</span>production<span class="pl-pds">'</span></span>
<span class="pl-k">const</span> <span class="pl-c1">app</span> <span class="pl-k">=</span> <span class="pl-en">next</span>({ dev })
<span class="pl-k">const</span> <span class="pl-c1">handleNextRequests</span> <span class="pl-k">=</span> <span class="pl-smi">app</span>.<span class="pl-en">getRequestHandler</span>()

<span class="pl-smi">app</span>.<span class="pl-en">prepare</span>().<span class="pl-c1">then</span>(() <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">server</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">http.Server</span>((<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> Add assetPrefix support based on the hostname</span>
    <span class="pl-k">if</span> (<span class="pl-smi">req</span>.<span class="pl-c1">headers</span>.<span class="pl-c1">host</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>my-app.com<span class="pl-pds">'</span></span>) {
      <span class="pl-smi">app</span>.<span class="pl-en">setAssetPrefix</span>(<span class="pl-s"><span class="pl-pds">'</span>http://cdn.com/myapp<span class="pl-pds">'</span></span>)
    } <span class="pl-k">else</span> {
      <span class="pl-smi">app</span>.<span class="pl-en">setAssetPrefix</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>)
    }

    <span class="pl-en">handleNextRequests</span>(req, res)
  })

  <span class="pl-smi">server</span>.<span class="pl-en">listen</span>(port, <span class="pl-smi">err</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-k">if</span> (err) {
      <span class="pl-k">throw</span> err
    }

    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">\`</span>&gt; Ready on http://localhost:<span class="pl-s1"><span class="pl-pse">\\\${</span>port<span class="pl-pse">}</span></span><span class="pl-pds">\`</span></span>)
  })
})</pre></div>
<h3><a id="user-content-dynamic-import" class="anchor" aria-hidden="true" href="#dynamic-import"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dynamic Import</h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-dynamic-import">With Dynamic Import</a></li>
  </ul>
</details>
<p>Next.js supports TC39 <a href="https://github.com/tc39/proposal-dynamic-import">dynamic import proposal</a> for JavaScript.
With that, you could import JavaScript modules (inc. React Components) dynamically and work with them.</p>
<p>You can think dynamic imports as another way to split your code into manageable chunks.
Since Next.js supports dynamic imports with SSR, you could do amazing things with it.</p>
<p>Here are a few ways to use dynamic imports.</p>
<h4><a id="user-content-basic-usage-also-does-ssr" class="anchor" aria-hidden="true" href="#basic-usage-also-does-ssr"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage (Also does SSR)</h4>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">dynamic</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/dynamic<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-smi">DynamicComponent</span> <span class="pl-k">=</span> <span class="pl-en">dynamic</span>(() <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">'</span>../components/hello<span class="pl-pds">'</span></span>))

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">Header</span> /&gt;
      &lt;<span class="pl-ent">DynamicComponent</span> /&gt;
      &lt;<span class="pl-ent">p</span>&gt;HOME PAGE is here!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<h4><a id="user-content-with-named-exports" class="anchor" aria-hidden="true" href="#with-named-exports"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With named exports</h4>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> components/hello.js</span>
<span class="pl-k">export</span> <span class="pl-k">function</span> <span class="pl-en">Hello</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">p</span>&gt;Hello!&lt;/<span class="pl-ent">p</span>&gt;
}</pre></div>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">dynamic</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/dynamic<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-smi">DynamicComponent</span> <span class="pl-k">=</span> <span class="pl-en">dynamic</span>(() <span class="pl-k">=&gt;</span>
  <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">'</span>../components/hello<span class="pl-pds">'</span></span>)<span class="pl-k">.</span><span class="pl-en">then</span>(<span class="pl-smi">mod</span> <span class="pl-k">=&gt;</span> <span class="pl-smi"><span class="pl-smi">mod</span></span><span class="pl-k">.</span><span class="pl-smi">Hello</span>)
)

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">Header</span> /&gt;
      &lt;<span class="pl-ent">DynamicComponent</span> /&gt;
      &lt;<span class="pl-ent">p</span>&gt;HOME PAGE is here!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<h4><a id="user-content-with-custom-loading-component" class="anchor" aria-hidden="true" href="#with-custom-loading-component"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With Custom Loading Component</h4>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">dynamic</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/dynamic<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-smi">DynamicComponentWithCustomLoading</span> <span class="pl-k">=</span> <span class="pl-en">dynamic</span>(
  () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">'</span>../components/hello2<span class="pl-pds">'</span></span>),
  {
    <span class="pl-en"><span class="pl-s">loading</span></span>: () <span class="pl-k">=&gt;</span> &lt;p&gt;...&lt;/p&gt;
  }
)

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">Header</span> /&gt;
      &lt;<span class="pl-ent">DynamicComponentWithCustomLoading</span> /&gt;
      &lt;<span class="pl-ent">p</span>&gt;HOME PAGE is here!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<h4><a id="user-content-with-no-ssr" class="anchor" aria-hidden="true" href="#with-no-ssr"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With No SSR</h4>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">dynamic</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/dynamic<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-smi">DynamicComponentWithNoSSR</span> <span class="pl-k">=</span> <span class="pl-en">dynamic</span>(
  () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">'</span>../components/hello3<span class="pl-pds">'</span></span>),
  {
    <span class="pl-c1"><span class="pl-s">ssr</span>:</span> <span class="pl-c1">false</span>
  }
)

<span class="pl-k">function</span> <span class="pl-en">Home</span>() {
  <span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">Header</span> /&gt;
      &lt;<span class="pl-ent">DynamicComponentWithNoSSR</span> /&gt;
      &lt;<span class="pl-ent">p</span>&gt;HOME PAGE is here!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Home</span></pre></div>
<h4><a id="user-content-with-multiple-modules-at-once" class="anchor" aria-hidden="true" href="#with-multiple-modules-at-once"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With Multiple Modules At Once</h4>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">dynamic</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/dynamic<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-smi">HelloBundle</span> <span class="pl-k">=</span> <span class="pl-en">dynamic</span>({
  <span class="pl-en"><span class="pl-s">modules</span></span>: () <span class="pl-k">=&gt;</span> {
    <span class="pl-k">const</span> <span class="pl-smi">components</span> <span class="pl-k">=</span> {
      <span class="pl-en"><span class="pl-s">Hello1</span></span>: () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">'</span>../components/hello1<span class="pl-pds">'</span></span>),
      <span class="pl-en"><span class="pl-s">Hello2</span></span>: () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">'</span>../components/hello2<span class="pl-pds">'</span></span>)
    }

    <span class="pl-k">return</span> <span class="pl-smi">components</span>
  },
  <span class="pl-en"><span class="pl-s">render</span></span>: (<span class="pl-smi">props</span>, { <span class="pl-smi">Hello1</span>, <span class="pl-smi">Hello2</span> }) <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-smi"><span class="pl-smi">props</span></span><span class="pl-k">.</span><span class="pl-smi">title</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
      &lt;<span class="pl-ent">Hello1</span> /&gt;
      &lt;<span class="pl-ent">Hello2</span> /&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
  )
})

<span class="pl-k">function</span> <span class="pl-en">DynamicBundle</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">HelloBundle</span> <span class="pl-e">title</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Dynamic Bundle<span class="pl-pds">"</span></span> /&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">DynamicBundle</span></pre></div>
<h3><a id="user-content-custom-app" class="anchor" aria-hidden="true" href="#custom-app"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom <code>&lt;App&gt;</code></h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-app-layout">Using \`_app.js\` for layout</a></li>
    <li><a href="/examples/with-componentdidcatch">Using \`_app.js\` to override \`componentDidCatch\`</a></li>
  </ul>
</details>
<p>Next.js uses the <code>App</code> component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:</p>
<ul>
<li>Persisting layout between page changes</li>
<li>Keeping state when navigating pages</li>
<li>Custom error handling using <code>componentDidCatch</code></li>
<li>Inject additional data into pages (for example by processing GraphQL queries)</li>
</ul>
<p>To override, create the <code>./pages/_app.js</code> file and override the App class as shown below:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">App</span>, { <span class="pl-smi">Container</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/app<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">MyApp</span> <span class="pl-k">extends</span> <span class="pl-e">App</span> {
  <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en">getInitialProps</span>({ Component, ctx }) {
    <span class="pl-k">let</span> pageProps <span class="pl-k">=</span> {}

    <span class="pl-k">if</span> (<span class="pl-smi">Component</span>.<span class="pl-smi">getInitialProps</span>) {
      pageProps <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">Component</span>.<span class="pl-en">getInitialProps</span>(ctx)
    }

    <span class="pl-k">return</span> { pageProps }
  }

  <span class="pl-en">render</span>() {
    <span class="pl-k">const</span> { <span class="pl-c1">Component</span>, <span class="pl-c1">pageProps</span> } <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">props</span>

    <span class="pl-k">return</span> (
      <span class="pl-k">&lt;</span>Container<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span>Component {<span class="pl-k">...</span>pageProps} <span class="pl-k">/</span><span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span><span class="pl-k">/</span>Container<span class="pl-k">&gt;</span>
    )
  }
}

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">MyApp</span></pre></div>
<h3><a id="user-content-custom-document" class="anchor" aria-hidden="true" href="#custom-document"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom <code>&lt;Document&gt;</code></h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-styled-components">Styled components custom document</a></li>
    <li><a href="/examples/with-amp">Google AMP</a></li>
  </ul>
</details>
<ul>
<li>Is rendered on the server side</li>
<li>Is used to change the initial server side rendered document markup</li>
<li>Commonly used to implement server side rendering for css-in-js libraries like <a href="/examples/with-styled-components">styled-components</a> or <a href="/examples/with-emotion">emotion</a>. <a href="https://github.com/zeit/styled-jsx">styled-jsx</a> is included with Next.js by default.</li>
</ul>
<p>Pages in <code>Next.js</code> skip the definition of the surrounding document's markup. For example, you never include <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, etc. To override that default behavior, you must create a file at <code>./pages/_document.js</code>, where you can extend the <code>Document</code> class:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> _document is only rendered on the server side and not on the client side</span>
<span class="pl-c"><span class="pl-c">//</span> Event handlers like onClick can't be added to this file</span>

<span class="pl-c"><span class="pl-c">//</span> ./pages/_document.js</span>
<span class="pl-k">import</span> <span class="pl-smi">Document</span>, { <span class="pl-smi">Html</span>, <span class="pl-smi">Head</span>, <span class="pl-smi">Main</span>, <span class="pl-smi">NextScript</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/document<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">MyDocument</span> <span class="pl-k">extends</span> <span class="pl-smi">Document</span> {
  <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en"><span class="pl-s">getInitialProps</span></span>(<span class="pl-smi">ctx</span>) {
    <span class="pl-k">const</span> <span class="pl-smi">initialProps</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">Document</span><span class="pl-k">.</span><span class="pl-en">getInitialProps</span>(<span class="pl-smi">ctx</span>)
    <span class="pl-k">return</span> { <span class="pl-k">...</span><span class="pl-smi">initialProps</span> }
  }

  <span class="pl-en"><span class="pl-s">render</span></span>() {
    <span class="pl-k">return</span> (
      &lt;<span class="pl-ent">Html</span>&gt;
        &lt;<span class="pl-ent">Head</span>&gt;
          &lt;<span class="pl-ent">style</span>&gt;<span class="pl-pse">{</span><span class="pl-k">\`</span><span class="pl-s">body { margin: 0 } /* custom! */</span><span class="pl-k">\`</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">style</span>&gt;
        &lt;/<span class="pl-ent">Head</span>&gt;
        &lt;<span class="pl-ent">body</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>custom_class<span class="pl-pds">"</span></span>&gt;
          &lt;<span class="pl-ent">Main</span> /&gt;
          &lt;<span class="pl-ent">NextScript</span> /&gt;
        &lt;/<span class="pl-ent">body</span>&gt;
      &lt;/<span class="pl-ent">Html</span>&gt;
    )
  }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">MyDocument</span></pre></div>
<p>All of <code>&lt;Head /&gt;</code>, <code>&lt;Main /&gt;</code> and <code>&lt;NextScript /&gt;</code> are required for page to be properly rendered.</p>
<p><strong>Note: React-components outside of <code>&lt;Main /&gt;</code> will not be initialised by the browser. Do <em>not</em> add application logic here. If you need shared components in all your pages (like a menu or a toolbar), take a look at the <code>App</code> component instead.</strong></p>
<p>The <code>ctx</code> object is equivalent to the one received in all <a href="#fetching-data-and-component-lifecycle"><code>getInitialProps</code></a> hooks, with one addition:</p>
<ul>
<li><code>renderPage</code> (<code>Function</code>) a callback that executes the actual React rendering logic (synchronously). It's useful to decorate this function in order to support server-rendering wrappers like Aphrodite's <a href="https://github.com/Khan/aphrodite#server-side-rendering"><code>renderStatic</code></a></li>
</ul>
<h4><a id="user-content-customizing-renderpage" class="anchor" aria-hidden="true" href="#customizing-renderpage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customizing <code>renderPage</code></h4>
<p><g-emoji class="g-emoji" alias="construction" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png">🚧</g-emoji> It should be noted that the only reason you should be customizing <code>renderPage</code> is for usage with css-in-js libraries
that need to wrap the application to properly work with server-rendering. <g-emoji class="g-emoji" alias="construction" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png">🚧</g-emoji></p>
<ul>
<li>It takes as argument an options object for further customization</li>
</ul>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">Document</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/document<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">MyDocument</span> <span class="pl-k">extends</span> <span class="pl-e">Document</span> {
  <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en">getInitialProps</span>(<span class="pl-smi">ctx</span>) {
    <span class="pl-k">const</span> <span class="pl-c1">originalRenderPage</span> <span class="pl-k">=</span> <span class="pl-smi">ctx</span>.<span class="pl-smi">renderPage</span>

    <span class="pl-smi">ctx</span>.<span class="pl-en">renderPage</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span>
      <span class="pl-en">originalRenderPage</span>({
        <span class="pl-c"><span class="pl-c">//</span> useful for wrapping the whole react tree</span>
        <span class="pl-en">enhanceApp</span><span class="pl-k">:</span> <span class="pl-smi">App</span> <span class="pl-k">=&gt;</span> App,
        <span class="pl-c"><span class="pl-c">//</span> useful for wrapping in a per-page basis</span>
        <span class="pl-en">enhanceComponent</span><span class="pl-k">:</span> <span class="pl-smi">Component</span> <span class="pl-k">=&gt;</span> Component
      })

    <span class="pl-c"><span class="pl-c">//</span> Run the parent \`getInitialProps\` using \`ctx\` that now includes our custom \`renderPage\`</span>
    <span class="pl-k">const</span> <span class="pl-c1">initialProps</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Document</span>.<span class="pl-en">getInitialProps</span>(ctx)

    <span class="pl-k">return</span> initialProps
  }
}

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">MyDocument</span></pre></div>
<h3><a id="user-content-custom-error-handling" class="anchor" aria-hidden="true" href="#custom-error-handling"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom error handling</h3>
<p>404 or 500 errors are handled both client and server side by a default component <code>error.js</code>. If you wish to override it, define a <code>_error.js</code> in the pages folder:</p>
<p><g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji> The <code>pages/_error.js</code> component is only used in production. In development you get an error with call stack to know where the error originated from. <g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji></p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">Error</span> <span class="pl-k">extends</span> <span class="pl-smi">React</span><span class="pl-k">.</span><span class="pl-smi">Component</span> {
  <span class="pl-k">static</span> <span class="pl-en"><span class="pl-s">getInitialProps</span></span>({ <span class="pl-smi">res</span>, <span class="pl-smi">err</span> }) {
    <span class="pl-k">const</span> <span class="pl-smi">statusCode</span> <span class="pl-k">=</span> <span class="pl-smi">res</span> <span class="pl-k">?</span> <span class="pl-smi"><span class="pl-smi">res</span></span><span class="pl-k">.</span><span class="pl-smi">statusCode</span> : <span class="pl-smi">err</span> <span class="pl-k">?</span> <span class="pl-smi"><span class="pl-smi">err</span></span><span class="pl-k">.</span><span class="pl-smi">statusCode</span> : <span class="pl-c1">null</span>
    <span class="pl-k">return</span> { <span class="pl-smi">statusCode</span> }
  }

  <span class="pl-en"><span class="pl-s">render</span></span>() {
    <span class="pl-k">return</span> (
      &lt;<span class="pl-ent">p</span>&gt;
        <span class="pl-pse">{</span><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">statusCode</span>
          <span class="pl-k">?</span> <span class="pl-k">\`</span><span class="pl-s">An error </span><span class="pl-k">\\\${</span><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">statusCode</span><span class="pl-k">}</span><span class="pl-s"> occurred on server</span><span class="pl-k">\`</span>
          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>An error occurred on client<span class="pl-pds">'</span></span><span class="pl-pse">}</span>
      &lt;/<span class="pl-ent">p</span>&gt;
    )
  }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-c1">Error</span></pre></div>
<h3><a id="user-content-reusing-the-built-in-error-page" class="anchor" aria-hidden="true" href="#reusing-the-built-in-error-page"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reusing the built-in error page</h3>
<p>If you want to render the built-in error page you can by using <code>next/error</code>:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-c1">Error</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/error<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">fetch</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>isomorphic-unfetch<span class="pl-pds">'</span></span>

<span class="pl-k">class</span> <span class="pl-en">Page</span> <span class="pl-k">extends</span> <span class="pl-smi">React</span><span class="pl-k">.</span><span class="pl-smi">Component</span> {
  <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en"><span class="pl-s">getInitialProps</span></span>() {
    <span class="pl-k">const</span> <span class="pl-smi">res</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">fetch</span>(<span class="pl-s"><span class="pl-pds">'</span>https://api.github.com/repos/zeit/next.js<span class="pl-pds">'</span></span>)
    <span class="pl-k">const</span> <span class="pl-smi">errorCode</span> <span class="pl-k">=</span> <span class="pl-smi"><span class="pl-smi">res</span></span><span class="pl-k">.</span><span class="pl-smi">statusCode</span> <span class="pl-k">&gt;</span> <span class="pl-c1">200</span> <span class="pl-k">?</span> <span class="pl-smi"><span class="pl-smi">res</span></span><span class="pl-k">.</span><span class="pl-smi">statusCode</span> : <span class="pl-c1">false</span>
    <span class="pl-k">const</span> <span class="pl-smi">json</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi"><span class="pl-smi">res</span></span><span class="pl-k">.</span><span class="pl-en">json</span>()

    <span class="pl-k">return</span> { <span class="pl-smi">errorCode</span>, <span class="pl-c1"><span class="pl-s">stars</span>:</span> <span class="pl-smi"><span class="pl-smi">json</span></span><span class="pl-k">.</span><span class="pl-smi">stargazers_count</span> }
  }

  <span class="pl-en"><span class="pl-s">render</span></span>() {
    <span class="pl-k">if</span> (<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">errorCode</span>) {
      <span class="pl-k">return</span> &lt;<span class="pl-ent">Error</span> <span class="pl-e">statusCode</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">errorCode</span><span class="pl-pse">}</span> /&gt;
    }

    <span class="pl-k">return</span> &lt;<span class="pl-ent">div</span>&gt;Next stars: <span class="pl-pse">{</span><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">stars</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
  }
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Page</span></pre></div>
<blockquote>
<p>If you have created a custom error page you have to import your own <code>_error</code> component from <code>./_error</code> instead of <code>next/error</code></p>
</blockquote>
<h3><a id="user-content-custom-configuration" class="anchor" aria-hidden="true" href="#custom-configuration"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom configuration</h3>
<p>For custom advanced behavior of Next.js, you can create a <code>next.config.js</code> in the root of your project directory (next to <code>pages/</code> and <code>package.json</code>).</p>
<p>Note: <code>next.config.js</code> is a regular Node.js module, not a JSON file. It gets used by the Next server and build phases, and not included in the browser build.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  <span class="pl-c"><span class="pl-c">/*</span> config options here <span class="pl-c">*/</span></span>
}</pre></div>
<p>Or use a function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> (<span class="pl-smi">phase</span>, { defaultConfig }) <span class="pl-k">=&gt;</span> {
  <span class="pl-k">return</span> {
    <span class="pl-c"><span class="pl-c">/*</span> config options here <span class="pl-c">*/</span></span>
  }
}</pre></div>
<p><code>phase</code> is the current context in which the configuration is loaded. You can see all phases here: <a href="/packages/next-server/lib/constants.js">constants</a>
Phases can be imported from <code>next/constants</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> { <span class="pl-c1">PHASE_DEVELOPMENT_SERVER</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>next/constants<span class="pl-pds">'</span></span>)
<span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> (<span class="pl-smi">phase</span>, { defaultConfig }) <span class="pl-k">=&gt;</span> {
  <span class="pl-k">if</span> (phase <span class="pl-k">===</span> <span class="pl-c1">PHASE_DEVELOPMENT_SERVER</span>) {
    <span class="pl-k">return</span> {
      <span class="pl-c"><span class="pl-c">/*</span> development only config options here <span class="pl-c">*/</span></span>
    }
  }

  <span class="pl-k">return</span> {
    <span class="pl-c"><span class="pl-c">/*</span> config options for all phases except development here <span class="pl-c">*/</span></span>
  }
}</pre></div>
<h4><a id="user-content-setting-a-custom-build-directory" class="anchor" aria-hidden="true" href="#setting-a-custom-build-directory"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting a custom build directory</h4>
<p>You can specify a name to use for a custom build directory. For example, the following config will create a <code>build</code> folder instead of a <code>.next</code> folder. If no configuration is specified then next will create a <code>.next</code> folder.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  distDir<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>build<span class="pl-pds">'</span></span>
}</pre></div>
<h4><a id="user-content-disabling-etag-generation" class="anchor" aria-hidden="true" href="#disabling-etag-generation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disabling etag generation</h4>
<p>You can disable etag generation for HTML pages depending on your cache strategy. If no configuration is specified then Next will generate etags for every page.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  generateEtags<span class="pl-k">:</span> <span class="pl-c1">false</span>
}</pre></div>
<h4><a id="user-content-configuring-the-ondemandentries" class="anchor" aria-hidden="true" href="#configuring-the-ondemandentries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring the onDemandEntries</h4>
<p>Next exposes some options that give you some control over how the server will dispose or keep in memories pages built:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  onDemandEntries<span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> period (in ms) where the server will keep pages in the buffer</span>
    maxInactiveAge<span class="pl-k">:</span> <span class="pl-c1">25</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>,
    <span class="pl-c"><span class="pl-c">//</span> number of pages that should be kept simultaneously without being disposed</span>
    pagesBufferLength<span class="pl-k">:</span> <span class="pl-c1">2</span>
  }
}</pre></div>
<p>This is development-only feature. If you want to cache SSR pages in production, please see <a href="https://github.com/zeit/next.js/tree/canary/examples/ssr-caching">SSR-caching</a> example.</p>
<h4><a id="user-content-configuring-extensions-looked-for-when-resolving-pages-in-pages" class="anchor" aria-hidden="true" href="#configuring-extensions-looked-for-when-resolving-pages-in-pages"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring extensions looked for when resolving pages in <code>pages</code></h4>
<p>Aimed at modules like <a href="https://github.com/zeit/next-plugins/tree/master/packages/next-typescript"><code>@zeit/next-typescript</code></a>, that add support for pages ending in <code>.ts</code>. <code>pageExtensions</code> allows you to configure the extensions looked for in the <code>pages</code> directory when resolving pages.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  pageExtensions<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>jsx<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>js<span class="pl-pds">'</span></span>]
}</pre></div>
<h4><a id="user-content-configuring-the-build-id" class="anchor" aria-hidden="true" href="#configuring-the-build-id"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring the build ID</h4>
<p>Next.js uses a constant generated at build time to identify which version of your application is being served. This can cause problems in multi-server deployments when <code>next build</code> is ran on every server. In order to keep a static build id between builds you can provide the <code>generateBuildId</code> function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  generateBuildId<span class="pl-k">:</span> <span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> For example get the latest git commit hash here</span>
    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">'</span>my-build-id<span class="pl-pds">'</span></span>
  }
}</pre></div>
<p>To fall back to the default of generating a unique id return <code>null</code> from the function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  generateBuildId<span class="pl-k">:</span> <span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> When process.env.YOUR_BUILD_ID is undefined we fall back to the default</span>
    <span class="pl-k">if</span> (<span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">YOUR_BUILD_ID</span>) {
      <span class="pl-k">return</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">YOUR_BUILD_ID</span>
    }

    <span class="pl-k">return</span> <span class="pl-c1">null</span>
  }
}</pre></div>
<h4><a id="user-content-configuring-next-process-script" class="anchor" aria-hidden="true" href="#configuring-next-process-script"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring next process script</h4>
<p>You can pass any node arguments to <code>next</code> CLI command.</p>
<div class="highlight highlight-source-shell"><pre>NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>--throw-deprecation<span class="pl-pds">"</span></span> next
NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>-r esm<span class="pl-pds">"</span></span> next
NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>--inspect<span class="pl-pds">"</span></span> next</pre></div>
<h3><a id="user-content-customizing-webpack-config" class="anchor" aria-hidden="true" href="#customizing-webpack-config"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customizing webpack config</h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-webpack-bundle-analyzer">Custom webpack bundle analyzer</a></li>
  </ul>
</details>
<p>Some commonly asked for features are available as modules:</p>
<ul>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-css">@zeit/next-css</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-sass">@zeit/next-sass</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-less">@zeit/next-less</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-preact">@zeit/next-preact</a></li>
<li><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-typescript">@zeit/next-typescript</a></li>
</ul>
<blockquote>
<p><strong>Warning:</strong> The <code>webpack</code> function is executed twice, once for the server and once for the client. This allows you to distinguish between client and server configuration using the <code>isServer</code> property</p>
</blockquote>
<p>Multiple configurations can be combined together with function composition. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">withTypescript</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>@zeit/next-typescript<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> <span class="pl-c1">withSass</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>@zeit/next-sass<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">withTypescript</span>(
  <span class="pl-en">withSass</span>({
    <span class="pl-en">webpack</span>(<span class="pl-smi">config</span>, <span class="pl-smi">options</span>) {
      <span class="pl-c"><span class="pl-c">//</span> Further custom configuration here</span>
      <span class="pl-k">return</span> config
    }
  })
)</pre></div>
<p>In order to extend our usage of <code>webpack</code>, you can define a function that extends its config via <code>next.config.js</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.</span>

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  <span class="pl-en">webpack</span><span class="pl-k">:</span> (<span class="pl-smi">config</span>, { buildId, dev, isServer, defaultLoaders, webpack }) <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> Note: we provide webpack above so you should not \`require\` it</span>
    <span class="pl-c"><span class="pl-c">//</span> Perform customizations to webpack config</span>
    <span class="pl-c"><span class="pl-c">//</span> Important: return the modified config</span>

    <span class="pl-c"><span class="pl-c">//</span> Example using webpack option</span>
    <span class="pl-smi">config</span>.<span class="pl-c1">plugins</span>.<span class="pl-c1">push</span>(
      <span class="pl-k">new</span> <span class="pl-en">webpack.IgnorePlugin</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\/</span>__tests__<span class="pl-cce">\\/</span><span class="pl-pds">/</span></span>),
    )
    <span class="pl-k">return</span> config
  },
  <span class="pl-en">webpackDevMiddleware</span><span class="pl-k">:</span> <span class="pl-smi">config</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> Perform customizations to webpack dev middleware config</span>
    <span class="pl-c"><span class="pl-c">//</span> Important: return the modified config</span>
    <span class="pl-k">return</span> config
  }
}</pre></div>
<p>The second argument to <code>webpack</code> is an object containing properties useful when customizing its configuration:</p>
<ul>
<li><code>buildId</code> - <code>String</code> the build id used as a unique identifier between builds</li>
<li><code>dev</code> - <code>Boolean</code> shows if the compilation is done in development mode</li>
<li><code>isServer</code> - <code>Boolean</code> shows if the resulting configuration will be used for server side (<code>true</code>), or client size compilation (<code>false</code>).</li>
<li><code>defaultLoaders</code> - <code>Object</code> Holds loader objects Next.js uses internally, so that you can use them in custom configuration
<ul>
<li><code>babel</code> - <code>Object</code> the <code>babel-loader</code> configuration for Next.js.</li>
<li><code>hotSelfAccept</code> - <code>Object</code> the <code>hot-self-accept-loader</code> configuration. This loader should only be used for advanced use cases. For example <a href="https://github.com/zeit/next-plugins/tree/master/packages/next-typescript"><code>@zeit/next-typescript</code></a> adds it for top-level typescript pages.</li>
</ul>
</li>
</ul>
<p>Example usage of <code>defaultLoaders.babel</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Example next.config.js for adding a loader that depends on babel-loader</span>
<span class="pl-c"><span class="pl-c">//</span> This source was taken from the @zeit/next-mdx plugin source:</span>
<span class="pl-c"><span class="pl-c">//</span> https://github.com/zeit/next-plugins/blob/master/packages/next-mdx</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  <span class="pl-en">webpack</span><span class="pl-k">:</span> (<span class="pl-smi">config</span>, <span class="pl-smi">options</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-smi">config</span>.<span class="pl-smi">module</span>.<span class="pl-c1">rules</span>.<span class="pl-c1">push</span>({
      test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\\.</span>mdx<span class="pl-pds">/</span></span>,
      use<span class="pl-k">:</span> [
        <span class="pl-smi">options</span>.<span class="pl-smi">defaultLoaders</span>.<span class="pl-smi">babel</span>,
        {
          loader<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>@mdx-js/loader<span class="pl-pds">'</span></span>,
          options<span class="pl-k">:</span> <span class="pl-smi">pluginOptions</span>.<span class="pl-c1">options</span>
        }
      ]
    })

    <span class="pl-k">return</span> config
  }
}</pre></div>
<h3><a id="user-content-customizing-babel-config" class="anchor" aria-hidden="true" href="#customizing-babel-config"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customizing babel config</h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-custom-babel-config">Custom babel configuration</a></li>
  </ul>
</details>
<p>In order to extend our usage of <code>babel</code>, you can simply define a <code>.babelrc</code> file at the root of your app. This file is optional.</p>
<p>If found, we're going to consider it the <em>source of truth</em>, therefore it needs to define what next needs as well, which is the <code>next/babel</code> preset.</p>
<p>This is designed so that you are not surprised by modifications we could make to the babel configurations.</p>
<p>Here's an example <code>.babelrc</code> file:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>presets<span class="pl-pds">"</span></span>: [<span class="pl-s"><span class="pl-pds">"</span>next/babel<span class="pl-pds">"</span></span>],
  <span class="pl-s"><span class="pl-pds">"</span>plugins<span class="pl-pds">"</span></span>: []
}</pre></div>
<p>The <code>next/babel</code> preset includes everything needed to transpile React applications. This includes:</p>
<ul>
<li>preset-env</li>
<li>preset-react</li>
<li>plugin-proposal-class-properties</li>
<li>plugin-proposal-object-rest-spread</li>
<li>plugin-transform-runtime</li>
<li>styled-jsx</li>
</ul>
<p>These presets / plugins <strong>should not</strong> be added to your custom <code>.babelrc</code>. Instead, you can configure them on the <code>next/babel</code> preset:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>presets<span class="pl-pds">"</span></span>: [
    [
      <span class="pl-s"><span class="pl-pds">"</span>next/babel<span class="pl-pds">"</span></span>,
      {
        <span class="pl-s"><span class="pl-pds">"</span>preset-env<span class="pl-pds">"</span></span>: {},
        <span class="pl-s"><span class="pl-pds">"</span>transform-runtime<span class="pl-pds">"</span></span>: {},
        <span class="pl-s"><span class="pl-pds">"</span>styled-jsx<span class="pl-pds">"</span></span>: {},
        <span class="pl-s"><span class="pl-pds">"</span>class-properties<span class="pl-pds">"</span></span>: {}
      }
    ]
  ],
  <span class="pl-s"><span class="pl-pds">"</span>plugins<span class="pl-pds">"</span></span>: []
}</pre></div>
<p>The <code>modules</code> option on <code>"preset-env"</code> should be kept to <code>false</code> otherwise webpack code splitting is disabled.</p>
<h3><a id="user-content-exposing-configuration-to-the-server--client-side" class="anchor" aria-hidden="true" href="#exposing-configuration-to-the-server--client-side"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exposing configuration to the server / client side</h3>
<p>There is a common need in applications to provide configuration values.</p>
<p>Next.js supports 2 ways of providing configuration:</p>
<ul>
<li>Build-time configuration</li>
<li>Runtime configuration</li>
</ul>
<h4><a id="user-content-build-time-configuration" class="anchor" aria-hidden="true" href="#build-time-configuration"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build time configuration</h4>
<p>The way build-time configuration works is by inlining the provided values into the Javascript bundle.</p>
<p>You can add the <code>env</code> key in <code>next.config.js</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  env<span class="pl-k">:</span> {
    customKey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>value<span class="pl-pds">'</span></span>
  }
}</pre></div>
<p>This will allow you to use <code>process.env.customKey</code> in your code. For example:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> pages/index.js</span>
<span class="pl-k">function</span> <span class="pl-en">Index</span>() {
  <span class="pl-k">return</span> &lt;<span class="pl-ent">h1</span>&gt;The value of customKey is: <span class="pl-pse">{</span><span class="pl-c1">process</span><span class="pl-k">.</span><span class="pl-c1">env</span><span class="pl-k">.</span><span class="pl-smi">customKey</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
}

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">Index</span></pre></div>
<blockquote>
<p><strong>Warning:</strong> Note that it is not possible to destructure process.env variables due to the webpack <code>DefinePlugin</code> replacing process.env.XXXX inline at build time</p>
</blockquote>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Will not work</span>
<span class="pl-k">const</span> { <span class="pl-c1">CUSTOM_KEY</span>, <span class="pl-c1">CUSTOM_SECRET</span> } <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>;
<span class="pl-en">AuthMethod</span>({ key<span class="pl-k">:</span> <span class="pl-c1">CUSTOM_KEY</span>, secret<span class="pl-k">:</span> <span class="pl-c1">CUSTOM_SECRET</span> });

<span class="pl-c"><span class="pl-c">//</span> Will work as replaced inline</span>
<span class="pl-en">AuthMethod</span>({ key<span class="pl-k">:</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">CUSTOM_KEY</span>, secret<span class="pl-k">:</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">CUSTOM_SECRET</span> });</pre></div>
<h4><a id="user-content-runtime-configuration" class="anchor" aria-hidden="true" href="#runtime-configuration"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Runtime configuration</h4>
<blockquote>
<p><strong>Warning:</strong> Note that this option is not available when using <code>target: 'serverless'</code></p>
</blockquote>
<blockquote>
<p><strong>Warning:</strong> Generally you want to use build-time configuration to provide your configuration.
The reason for this is that runtime configuration adds a small rendering / initialization overhead.</p>
</blockquote>
<p>The <code>next/config</code> module gives your app access to the <code>publicRuntimeConfig</code> and <code>serverRuntimeConfig</code> stored in your <code>next.config.js</code>.</p>
<p>Place any server-only runtime config under a <code>serverRuntimeConfig</code> property.</p>
<p>Anything accessible to both client and server-side code should be under <code>publicRuntimeConfig</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  serverRuntimeConfig<span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> Will only be available on the server side</span>
    mySecret<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>secret<span class="pl-pds">'</span></span>,
    secondSecret<span class="pl-k">:</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">SECOND_SECRET</span> <span class="pl-c"><span class="pl-c">//</span> Pass through env variables</span>
  },
  publicRuntimeConfig<span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> Will be available on both server and client</span>
    staticFolder<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/static<span class="pl-pds">'</span></span>
  }
}</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> pages/index.js</span>
<span class="pl-k">import</span> <span class="pl-smi">getConfig</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/config<span class="pl-pds">'</span></span>
<span class="pl-c"><span class="pl-c">//</span> Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.</span>
<span class="pl-k">const</span> { <span class="pl-c1">serverRuntimeConfig</span>, <span class="pl-c1">publicRuntimeConfig</span> } <span class="pl-k">=</span> <span class="pl-en">getConfig</span>()

<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">serverRuntimeConfig</span>.<span class="pl-smi">mySecret</span>) <span class="pl-c"><span class="pl-c">//</span> Will only be available on the server side</span>
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">publicRuntimeConfig</span>.<span class="pl-smi">staticFolder</span>) <span class="pl-c"><span class="pl-c">//</span> Will be available on both server and client</span>

<span class="pl-k">function</span> <span class="pl-en">MyImage</span>() {
  <span class="pl-k">return</span> (
    <span class="pl-k">&lt;</span>div<span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span>img src<span class="pl-k">=</span>{<span class="pl-s"><span class="pl-pds">\`</span><span class="pl-s1"><span class="pl-pse">\${</span><span class="pl-smi">publicRuntimeConfig</span>.<span class="pl-smi">staticFolder</span><span class="pl-pse">}</span></span>/logo.png<span class="pl-pds">\`</span></span>} alt<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>logo<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span>
    <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
  )
}

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">MyImage</span></pre></div>
<h3><a id="user-content-starting-the-server-on-alternative-hostname" class="anchor" aria-hidden="true" href="#starting-the-server-on-alternative-hostname"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starting the server on alternative hostname</h3>
<p>To start the development server using a different default hostname you can use <code>--hostname hostname_here</code> or <code>-H hostname_here</code> option with next dev. This will start a TCP server listening for connections on the provided host.</p>
<h3><a id="user-content-cdn-support-with-asset-prefix" class="anchor" aria-hidden="true" href="#cdn-support-with-asset-prefix"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CDN support with Asset Prefix</h3>
<p>To set up a CDN, you can set up the <code>assetPrefix</code> setting and configure your CDN's origin to resolve to the domain that Next.js is hosted on.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">isProd</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">NODE_ENV</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>production<span class="pl-pds">'</span></span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  <span class="pl-c"><span class="pl-c">//</span> You may only need to add assetPrefix in the production.</span>
  assetPrefix<span class="pl-k">:</span> isProd <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">'</span>https://cdn.mydomain.com<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>
}</pre></div>
<p>Note: Next.js will automatically use that prefix in the scripts it loads, but this has no effect whatsoever on <code>/static</code>. If you want to serve those assets over the CDN, you'll have to introduce the prefix yourself. One way of introducing a prefix that works inside your components and varies by environment is documented <a href="https://github.com/zeit/next.js/tree/master/examples/with-universal-configuration-build-time">in this example</a>.</p>
<p>If your CDN is on a separate domain and you would like assets to be requested using a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes" rel="nofollow">CORS aware request</a> you can set a config option for that.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  crossOrigin<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>anonymous<span class="pl-pds">'</span></span>
}</pre></div>
<h2><a id="user-content-production-deployment" class="anchor" aria-hidden="true" href="#production-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Production deployment</h2>
<p>To deploy, instead of running <code>next</code>, you want to build for production usage ahead of time. Therefore, building and starting are separate commands:</p>
<div class="highlight highlight-source-shell"><pre>next build
next start</pre></div>
<p>To deploy Next.js with <a href="https://zeit.co/now" rel="nofollow">ZEIT Now</a> see the <a href="https://zeit.co/guides/deploying-nextjs-with-now/" rel="nofollow">ZEIT Guide for Deploying Next.js with Now</a>.</p>
<p>Next.js can be deployed to other hosting solutions too. Please have a look at the <a href="https://github.com/zeit/next.js/wiki/Deployment">'Deployment'</a> section of the wiki.</p>
<p>Note: <code>NODE_ENV</code> is properly configured by the <code>next</code> subcommands, if absent, to maximize performance. if you’re using Next.js <a href="#custom-server-and-routing">programmatically</a>, it’s your responsibility to set <code>NODE_ENV=production</code> manually!</p>
<p>Note: we recommend putting <code>.next</code>, or your <a href="https://github.com/zeit/next.js#custom-configuration">custom dist folder</a>, in <code>.gitignore</code> or <code>.npmignore</code>. Otherwise, use <code>files</code> or <code>now.files</code> to opt-into a whitelist of files you want to deploy, excluding <code>.next</code> or your custom dist folder.</p>
<h3><a id="user-content-serverless-deployment" class="anchor" aria-hidden="true" href="#serverless-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Serverless deployment</h3>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="https://github.com/zeit/now-examples/tree/master/nextjs">now.sh</a></li>
    <li><a href="https://github.com/TejasQ/anna-artemov.now.sh">anna-artemov.now.sh</a></li>
    <li>We encourage contributing more examples to this section</li>
  </ul>
</details>
<p>Serverless deployment dramatically improves reliability and scalability by splitting your application into smaller parts (also called <a href="https://zeit.co/docs/v2/deployments/concepts/lambdas/" rel="nofollow"><strong>lambdas</strong></a>). In the case of Next.js, each page in the <code>pages</code> directory becomes a serverless lambda.</p>
<p>There are <a href="https://zeit.co/blog/serverless-express-js-lambdas-with-now-2#benefits-of-serverless-express" rel="nofollow">a number of benefits</a> to serverless. The referenced link talks about some of them in the context of Express, but the principles apply universally: serverless allows for distributed points of failure, infinite scalability, and is incredibly affordable with a "pay for what you use" model.</p>
<p>To enable <strong>serverless mode</strong> in Next.js, add the <code>serverless</code> build <code>target</code> in <code>next.config.js</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  target<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>serverless<span class="pl-pds">'</span></span>
}</pre></div>
<p>The <code>serverless</code> target will output a single lambda per page. This file is completely standalone and doesn't require any dependencies to run:</p>
<ul>
<li><code>pages/index.js</code> =&gt; <code>.next/serverless/pages/index.js</code></li>
<li><code>pages/about.js</code> =&gt; <code>.next/serverless/pages/about.js</code></li>
</ul>
<p>The signature of the Next.js Serverless function is similar to the Node.js HTTP server callback:</p>
<div class="highlight highlight-source-ts"><pre><span class="pl-k">export</span> <span class="pl-k">function</span> render(<span class="pl-v">req</span><span class="pl-k">:</span> <span class="pl-en">http</span>.<span class="pl-en">IncomingMessage</span>, <span class="pl-v">res</span><span class="pl-k">:</span> <span class="pl-en">http</span>.<span class="pl-en">ServerResponse</span>) =&gt; void</pre></div>
<ul>
<li><a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage" rel="nofollow">http.IncomingMessage</a></li>
<li><a href="https://nodejs.org/api/http.html#http_class_http_serverresponse" rel="nofollow">http.ServerResponse</a></li>
<li><code>void</code> refers to the function not having a return value and is equivalent to JavaScript's <code>undefined</code>. Calling the function will finish the request.</li>
</ul>
<p>Using the serverless target, you can deploy Next.js to <a href="https://zeit.co/now" rel="nofollow">ZEIT Now</a> with all of the benefits and added ease of control like for example; <a href="https://zeit.co/guides/custom-next-js-server-to-routes/" rel="nofollow">custom routes</a> and caching headers. See the <a href="https://zeit.co/guides/deploying-nextjs-with-now/" rel="nofollow">ZEIT Guide for Deploying Next.js with Now</a> for more information.</p>
<h4><a id="user-content-one-level-lower" class="anchor" aria-hidden="true" href="#one-level-lower"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>One Level Lower</h4>
<p>Next.js provides low-level APIs for serverless deployments as hosting platforms have different function signatures. In general you will want to wrap the output of a Next.js serverless build with a compatibility layer.</p>
<p>For example if the platform supports the Node.js <a href="https://nodejs.org/api/http.html#http_class_http_server" rel="nofollow"><code>http.Server</code></a> class:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">http</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>http<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./.next/serverless/pages/about.js<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> <span class="pl-c1">server</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">http.Server</span>((<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">page</span>.<span class="pl-en">render</span>(req, res))
<span class="pl-smi">server</span>.<span class="pl-en">listen</span>(<span class="pl-c1">3000</span>, () <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Listening on http://localhost:3000<span class="pl-pds">'</span></span>))</pre></div>
<p>For specific platform examples see <a href="#serverless-deployment">the examples section above</a>.</p>
<h4><a id="user-content-summary" class="anchor" aria-hidden="true" href="#summary"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Summary</h4>
<ul>
<li>Low-level API for implementing serverless deployment</li>
<li>Every page in the <code>pages</code> directory becomes a serverless function (lambda)</li>
<li>Creates the smallest possible serverless function (50Kb base zip size)</li>
<li>Optimized for fast <a href="https://zeit.co/blog/serverless-ssr#cold-start" rel="nofollow">cold start</a> of the function</li>
<li>The serverless function has 0 dependencies (they are included in the function bundle)</li>
<li>Uses the <a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage" rel="nofollow">http.IncomingMessage</a> and <a href="https://nodejs.org/api/http.html#http_class_http_serverresponse" rel="nofollow">http.ServerResponse</a> from Node.js</li>
<li>opt-in using <code>target: 'serverless'</code> in <code>next.config.js</code></li>
<li>Does not load <code>next.config.js</code> when executing the function, note that this means <code>publicRuntimeConfig</code> / <code>serverRuntimeConfig</code> are not supported</li>
</ul>
<h2><a id="user-content-browser-support" class="anchor" aria-hidden="true" href="#browser-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Browser support</h2>
<p>Next.js supports IE11 and all modern browsers out of the box using <a href="https://new.babeljs.io/docs/en/next/babel-preset-env.html" rel="nofollow"><code>@babel/preset-env</code></a>. In order to support IE11 Next.js adds a global <code>Promise</code> polyfill. In cases where your own code or any external NPM dependencies you are using requires features not supported by your target browsers you will need to implement polyfills.</p>
<p>The <a href="https://github.com/zeit/next.js/tree/canary/examples/with-polyfills">polyfills</a> example demonstrates the recommended approach to implement polyfills.</p>
<h2><a id="user-content-amp-support" class="anchor" aria-hidden="true" href="#amp-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AMP Support</h2>
<h3><a id="user-content-enabling-amp-support" class="anchor" aria-hidden="true" href="#enabling-amp-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling AMP Support</h3>
<p>To enable AMP support for a page, first enable experimental AMP support in your <code>next.config.js</code> and then import <code>withAmp</code> from <code>next/amp</code> and wrap your page's component in it.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> pages/about.js</span>
<span class="pl-k">import</span> { <span class="pl-smi">withAmp</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/amp<span class="pl-pds">'</span></span>

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">withAmp</span>(<span class="pl-k">function</span> <span class="pl-en">AboutPage</span>(<span class="pl-smi">props</span>) {
  <span class="pl-k">return</span> (
    <span class="pl-k">&lt;</span>h3<span class="pl-k">&gt;</span>My <span class="pl-c1">AMP</span> About Page<span class="pl-k">!</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>h3<span class="pl-k">&gt;</span>
  )
})</pre></div>
<h3><a id="user-content-amp-page-modes" class="anchor" aria-hidden="true" href="#amp-page-modes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AMP Page Modes</h3>
<p>AMP pages can specify two modes:</p>
<ul>
<li>AMP-only (default)
<ul>
<li>Pages have no Next.js or React client-side runtime</li>
<li>Pages are automatically optimized with <a href="https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer">AMP Optimizer</a>, an optimizer that applies the same transformations as AMP caches (improves performance by up to 42%)</li>
<li>Pages have a user-accessible (optimized) version of the page and a search-engine indexable (unoptimized) version of the page</li>
<li>Opt-in via <code>withAmp(Component)</code></li>
</ul>
</li>
<li>Hybrid
<ul>
<li>Pages are able to be rendered as traditional HTML (default) and AMP HTML (by adding <code>?amp=1</code> to the URL)</li>
<li>The AMP version of the page is not optimized with AMP Optimizer so that it is indexable by search-engines</li>
<li>Opt-in via <code>withAmp(Component, { hybrid: true })</code></li>
</ul>
</li>
</ul>
<p>Both of these page modes provide a consistently fast experience for users accessing pages through search engines.</p>
<h3><a id="user-content-amp-behavior-with-next-export" class="anchor" aria-hidden="true" href="#amp-behavior-with-next-export"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AMP Behavior with <code>next export</code></h3>
<p>When using <code>next export</code> to statically pre-render pages Next.js will detect if the page supports AMP and change the exporting behavior based on that.</p>
<p>Hybrid AMP (<code>pages/about.js</code>) would output:</p>
<ul>
<li><code>out/about/index.html</code> - with client-side React runtime</li>
<li><code>out/about.amp/index.html</code> - AMP page</li>
</ul>
<p>AMP-only (<code>pages/about.js</code>) would output:</p>
<ul>
<li><code>out/about/index.html</code> - Optimized AMP page</li>
<li><code>out/about.amp/index.html</code> - AMP page</li>
</ul>
<p>During export Next.js automatically detects if a page is AMP-only and apply dirty/clean optimizations. The dirty version will be output to <code>page/index.html</code> and the clean version will be output to <code>page.amp/index.html</code>. We also automatically insert the <code>&lt;link rel="amphtml" href="/page.amp" /&gt;</code> and <code>&lt;link rel="canonical" href="/" /&gt;</code> tags for you.</p>
<h3><a id="user-content-adding-amp-components" class="anchor" aria-hidden="true" href="#adding-amp-components"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding AMP Components</h3>
<p>The AMP community provides <a href="https://amp.dev/documentation/components/" rel="nofollow">many components</a> to make AMP pages more interactive. You can add these components to your page by using <code>next/head</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> pages/hello.js</span>
<span class="pl-k">import</span> <span class="pl-smi">Head</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/head<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> { <span class="pl-smi">withAmp</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>next/amp<span class="pl-pds">'</span></span>

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">withAmp</span>(<span class="pl-k">function</span> <span class="pl-en">MyAmpPage</span>() {
  <span class="pl-k">return</span> (
    <span class="pl-k">&lt;</span>div<span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span>Head<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span>script
          <span class="pl-k">async</span>
          key<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>amp-timeago<span class="pl-pds">"</span></span>
          custom<span class="pl-k">-</span>element<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>amp-timeago<span class="pl-pds">"</span></span>
          src<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>https://cdn.ampproject.org/v0/amp-timeago-0.1.js<span class="pl-pds">"</span></span>
        <span class="pl-k">/</span><span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span><span class="pl-k">/</span>Head<span class="pl-k">&gt;</span>

      <span class="pl-k">&lt;</span>p<span class="pl-k">&gt;</span>Some time<span class="pl-k">:</span> {<span class="pl-smi">date</span>.<span class="pl-en">toJSON</span>()}<span class="pl-k">&lt;</span><span class="pl-k">/</span>p<span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span>amp<span class="pl-k">-</span>timeago
        width<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>0<span class="pl-pds">"</span></span>
        height<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>15<span class="pl-pds">"</span></span>
        datetime<span class="pl-k">=</span>{<span class="pl-smi">date</span>.<span class="pl-en">toJSON</span>()}
        layout<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>responsive<span class="pl-pds">"</span></span>
      <span class="pl-k">&gt;</span>
        .
      <span class="pl-k">&lt;</span><span class="pl-k">/</span>amp<span class="pl-k">-</span>timeago<span class="pl-k">&gt;</span>
    <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
  )
})</pre></div>
<h3><a id="user-content-amp-validation" class="anchor" aria-hidden="true" href="#amp-validation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AMP Validation</h3>
<p>AMP pages are automatically validated with <a href="https://www.npmjs.com/package/amphtml-validator" rel="nofollow">amphtml-validator</a> during development. Errors and warnings will appear in the terminal where you started Next.js.</p>
<p>Pages are also validated during <code>next export</code> and any warnings / errors will be printed to the terminal.
Any AMP errors will cause <code>next export</code> to exit with status code <code>1</code> because the export is not valid AMP.</p>
<h2><a id="user-content-static-html-export" class="anchor" aria-hidden="true" href="#static-html-export"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Static HTML export</h2>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-static-export">Static export</a></li>
  </ul>
</details>
<p><code>next export</code> is a way to run your Next.js app as a standalone static app without the need for a Node.js server.
The exported app supports almost every feature of Next.js, including dynamic urls, prefetching, preloading and dynamic imports.</p>
<p>The way <code>next export</code> works is by pre-rendering all pages possible to HTML. It does so based on a mapping of <code>pathname</code> key to page object. This mapping is called the <code>exportPathMap</code>.</p>
<p>The page object has 2 values:</p>
<ul>
<li><code>page</code> - <code>String</code> the page inside the <code>pages</code> directory to render</li>
<li><code>query</code> - <code>Object</code> the <code>query</code> object passed to <code>getInitialProps</code> when pre-rendering. Defaults to <code>{}</code></li>
</ul>
<h3><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>
<p>Simply develop your app as you normally do with Next.js. Then run:</p>
<pre><code>next build
next export
</code></pre>
<p>By default <code>next export</code> doesn't require any configuration. It will generate a default <code>exportPathMap</code> containing the routes to pages inside the <code>pages</code> directory. This default mapping is available as <code>defaultPathMap</code> in the example below.</p>
<p>If your application has dynamic routes you can add a dynamic <code>exportPathMap</code> in <code>next.config.js</code>.
This function is asynchronous and gets the default <code>exportPathMap</code> as a parameter.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  <span class="pl-en">exportPathMap</span><span class="pl-k">:</span> <span class="pl-k">async</span> <span class="pl-k">function</span>(<span class="pl-smi">defaultPathMap</span>) {
    <span class="pl-k">return</span> {
      <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span><span class="pl-k">:</span> { page<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span> },
      <span class="pl-s"><span class="pl-pds">'</span>/about<span class="pl-pds">'</span></span><span class="pl-k">:</span> { page<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/about<span class="pl-pds">'</span></span> },
      <span class="pl-s"><span class="pl-pds">'</span>/readme.md<span class="pl-pds">'</span></span><span class="pl-k">:</span> { page<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/readme<span class="pl-pds">'</span></span> },
      <span class="pl-s"><span class="pl-pds">'</span>/p/hello-nextjs<span class="pl-pds">'</span></span><span class="pl-k">:</span> { page<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/post<span class="pl-pds">'</span></span>, query<span class="pl-k">:</span> { title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>hello-nextjs<span class="pl-pds">'</span></span> } },
      <span class="pl-s"><span class="pl-pds">'</span>/p/learn-nextjs<span class="pl-pds">'</span></span><span class="pl-k">:</span> { page<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/post<span class="pl-pds">'</span></span>, query<span class="pl-k">:</span> { title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>learn-nextjs<span class="pl-pds">'</span></span> } },
      <span class="pl-s"><span class="pl-pds">'</span>/p/deploy-nextjs<span class="pl-pds">'</span></span><span class="pl-k">:</span> { page<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/post<span class="pl-pds">'</span></span>, query<span class="pl-k">:</span> { title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>deploy-nextjs<span class="pl-pds">'</span></span> } }
    }
  }
}</pre></div>
<blockquote>
<p>Note that if the path ends with a directory, it will be exported as <code>/dir-name/index.html</code>, but if it ends with an extension, it will be exported as the specified filename, e.g. <code>/readme.md</code> above. If you use a file extension other than <code>.html</code>, you may need to set the <code>Content-Type</code> header to <code>text/html</code> when serving this content.</p>
</blockquote>
<p>Then simply run these commands:</p>
<div class="highlight highlight-source-shell"><pre>next build
next <span class="pl-k">export</span></pre></div>
<p>For that you may need to add a NPM script to <code>package.json</code> like this:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>build<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next build<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>export<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>npm run build &amp;&amp; next export<span class="pl-pds">"</span></span>
  }
}</pre></div>
<p>And run it at once with:</p>
<div class="highlight highlight-source-shell"><pre>npm run <span class="pl-k">export</span></pre></div>
<p>Then you have a static version of your app in the <code>out</code> directory.</p>
<blockquote>
<p>You can also customize the output directory. For that run <code>next export -h</code> for the help.</p>
</blockquote>
<p>Now you can deploy the <code>out</code> directory to any static hosting service. Note that there is an additional step for deploying to GitHub Pages, <a href="https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages">documented here</a>.</p>
<p>For an example, simply visit the <code>out</code> directory and run following command to deploy your app to <a href="https://zeit.co/now" rel="nofollow">ZEIT Now</a>.</p>
<div class="highlight highlight-source-shell"><pre>now</pre></div>
<h3><a id="user-content-copying-custom-files" class="anchor" aria-hidden="true" href="#copying-custom-files"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Copying custom files</h3>
<p>In case you have to copy custom files like a robots.txt or generate a sitemap.xml you can do this inside of <code>exportPathMap</code>.
<code>exportPathMap</code> gets a few contextual parameter to aid you with creating/copying files:</p>
<ul>
<li><code>dev</code> - <code>true</code> when <code>exportPathMap</code> is being called in development. <code>false</code> when running <code>next export</code>. In development <code>exportPathMap</code> is used to define routes and behavior like copying files is not required.</li>
<li><code>dir</code> - Absolute path to the project directory</li>
<li><code>outDir</code> - Absolute path to the <code>out</code> directory (configurable with <code>-o</code> or <code>--outdir</code>). When <code>dev</code> is <code>true</code> the value of <code>outDir</code> will be <code>null</code>.</li>
<li><code>distDir</code> - Absolute path to the <code>.next</code> directory (configurable using the <code>distDir</code> config key)</li>
<li><code>buildId</code> - The buildId the export is running for</li>
</ul>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> next.config.js</span>
<span class="pl-k">const</span> <span class="pl-c1">fs</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>fs<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> { <span class="pl-c1">join</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> { <span class="pl-c1">promisify</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>util<span class="pl-pds">'</span></span>)
<span class="pl-k">const</span> <span class="pl-c1">copyFile</span> <span class="pl-k">=</span> <span class="pl-en">promisify</span>(<span class="pl-smi">fs</span>.<span class="pl-smi">copyFile</span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  <span class="pl-en">exportPathMap</span><span class="pl-k">:</span> <span class="pl-k">async</span> <span class="pl-k">function</span>(
    <span class="pl-smi">defaultPathMap</span>,
    { dev, dir, outDir, distDir, buildId }
  ) {
    <span class="pl-k">if</span> (dev) {
      <span class="pl-k">return</span> defaultPathMap
    }
    <span class="pl-c"><span class="pl-c">//</span> This will copy robots.txt from your project root into the out directory</span>
    <span class="pl-k">await</span> <span class="pl-en">copyFile</span>(<span class="pl-en">join</span>(dir, <span class="pl-s"><span class="pl-pds">'</span>robots.txt<span class="pl-pds">'</span></span>), <span class="pl-en">join</span>(outDir, <span class="pl-s"><span class="pl-pds">'</span>robots.txt<span class="pl-pds">'</span></span>))
    <span class="pl-k">return</span> defaultPathMap
  }
}</pre></div>
<h3><a id="user-content-limitation" class="anchor" aria-hidden="true" href="#limitation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Limitation</h3>
<p>With <code>next export</code>, we build a HTML version of your app. At export time we will run <code>getInitialProps</code> of your pages.</p>
<p>The <code>req</code> and <code>res</code> fields of the <code>context</code> object passed to <code>getInitialProps</code> are not available as there is no server running.</p>
<blockquote>
<p>You won't be able to render HTML dynamically when static exporting, as we pre-build the HTML files. If you want to do dynamic rendering use <code>next start</code> or the custom server API</p>
</blockquote>
<h2><a id="user-content-multi-zones" class="anchor" aria-hidden="true" href="#multi-zones"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multi Zones</h2>
<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/with-zones">With Zones</a></li>
  </ul>
</details>
<p>A zone is a single deployment of a Next.js app. Just like that, you can have multiple zones. Then you can merge them as a single app.</p>
<p>For an example, you can have two zones like this:</p>
<ul>
<li><a href="https://docs.my-app.com" rel="nofollow">https://docs.my-app.com</a> for serving <code>/docs/**</code></li>
<li><a href="https://ui.my-app.com" rel="nofollow">https://ui.my-app.com</a> for serving all other pages</li>
</ul>
<p>With multi zones support, you can merge both these apps into a single one. Which allows your customers to browse it using a single URL. But you can develop and deploy both apps independently.</p>
<blockquote>
<p>This is exactly the same concept as microservices, but for frontend apps.</p>
</blockquote>
<h3><a id="user-content-how-to-define-a-zone" class="anchor" aria-hidden="true" href="#how-to-define-a-zone"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to define a zone</h3>
<p>There are no special zones related APIs. You only need to do following things:</p>
<ul>
<li>Make sure to keep only the pages you need in your app. (For an example, <a href="https://ui.my-app.com" rel="nofollow">https://ui.my-app.com</a> should not contain pages for <code>/docs/**</code>)</li>
<li>Make sure your app has an <a href="https://github.com/zeit/next.js#cdn-support-with-asset-prefix">assetPrefix</a>. (You can also define the assetPrefix <a href="https://github.com/zeit/next.js#dynamic-assetprefix">dynamically</a>.)</li>
</ul>
<h3><a id="user-content-how-to-merge-them" class="anchor" aria-hidden="true" href="#how-to-merge-them"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to merge them</h3>
<p>You can merge zones using any HTTP proxy.</p>
<p>You can use <a href="https://github.com/zeit/micro-proxy">micro proxy</a> as your local proxy server. It allows you to easily define routing rules like below:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>rules<span class="pl-pds">"</span></span>: [
    {
      <span class="pl-s"><span class="pl-pds">"</span>pathname<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/docs**<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>method<span class="pl-pds">"</span></span>: [<span class="pl-s"><span class="pl-pds">"</span>GET<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>POST<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>OPTIONS<span class="pl-pds">"</span></span>],
      <span class="pl-s"><span class="pl-pds">"</span>dest<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>https://docs.my-app.com<span class="pl-pds">"</span></span>
    },
    { <span class="pl-s"><span class="pl-pds">"</span>pathname<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/**<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>dest<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>https://ui.my-app.com<span class="pl-pds">"</span></span> }
  ]
}</pre></div>
<p>For the production deployment, you can use the <a href="https://zeit.co/docs/features/path-aliases" rel="nofollow">path alias</a> feature if you are using <a href="https://zeit.co/now" rel="nofollow">ZEIT now</a>. Otherwise, you can configure your existing proxy server to route HTML pages using a set of rules as shown above.</p>
<h2><a id="user-content-recipes" class="anchor" aria-hidden="true" href="#recipes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Recipes</h2>
<ul>
<li><a href="https://www.raygesualdo.com/posts/301-redirects-with-nextjs/" rel="nofollow">Setting up 301 redirects</a></li>
<li><a href="https://arunoda.me/blog/ssr-and-server-only-modules" rel="nofollow">Dealing with SSR and server only modules</a></li>
<li><a href="https://github.com/builderbook/builderbook">Building with React-Material-UI-Next-Express-Mongoose-Mongodb</a></li>
<li><a href="https://github.com/async-labs/saas">Build a SaaS Product with React-Material-UI-Next-MobX-Express-Mongoose-MongoDB-TypeScript</a></li>
</ul>
<h2><a id="user-content-faq" class="anchor" aria-hidden="true" href="#faq"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>
<details>
  <summary>Is this production ready?</summary>
  Next.js has been powering <a href="https://zeit.co" rel="nofollow">https://zeit.co</a> since its inception.
<p>We’re ecstatic about both the developer experience and end-user performance, so we decided to share it with the community.</p>
</details>
<details>
  <summary>How big is it?</summary>
<p>The client side bundle size should be measured in a per-app basis.
A small Next main bundle is around 65kb gzipped.</p>
</details>
<details>
  <summary>Is this like \`create-react-app\`?</summary>
<p>Yes and No.</p>
<p>Yes in that both make your life easier.</p>
<p>No in that it enforces a <em>structure</em> so that we can do more advanced things like:</p>
<ul>
<li>Server side rendering</li>
<li>Automatic code splitting</li>
</ul>
<p>In addition, Next.js provides two built-in features that are critical for every single website:</p>
<ul>
<li>Routing with lazy component loading: <code>&lt;Link&gt;</code> (by importing <code>next/link</code>)</li>
<li>A way for components to alter <code>&lt;head&gt;</code>: <code>&lt;Head&gt;</code> (by importing <code>next/head</code>)</li>
</ul>
<p>If you want to create re-usable React components that you can embed in your Next.js app or other React applications, using <code>create-react-app</code> is a great idea. You can later <code>import</code> it and keep your codebase clean!</p>
</details>
<details>
  <summary>How do I use CSS-in-JS solutions?</summary>
<p>Next.js bundles <a href="https://github.com/zeit/styled-jsx">styled-jsx</a> supporting scoped css. However you can use any CSS-in-JS solution in your Next app by just including your favorite library <a href="#css-in-js">as mentioned before</a> in the document.</p>
</details>
<details>
  <summary>What syntactic features are transpiled? How do I change them?</summary>
<p>We track V8. Since V8 has wide support for ES6 and <code>async</code> and <code>await</code>, we transpile those. Since V8 doesn’t support class decorators, we don’t transpile those.</p>
<p>See the documentation about <a href="#customizing-babel-config">customizing the babel config</a> and <a href="/packages/next/build/babel/preset.js">next/preset</a> for more information.</p>
</details>
<details>
  <summary>Why a new Router?</summary>
<p>Next.js is special in that:</p>
<ul>
<li>Routes don’t need to be known ahead of time</li>
<li>Routes are always lazy-loadable</li>
<li>Top-level components can define <code>getInitialProps</code> that should <em>block</em> the loading of the route (either when server-rendering or lazy-loading)</li>
</ul>
<p>As a result, we were able to introduce a very simple approach to routing that consists of two pieces:</p>
<ul>
<li>Every top level component receives a <code>url</code> object to inspect the url or perform modifications to the history</li>
<li>A <code>&lt;Link /&gt;</code> component is used to wrap elements like anchors (<code>&lt;a/&gt;</code>) to perform client-side transitions</li>
</ul>
</details>
<details>
<summary>How do I define a custom fancy route?</summary>
<p>We <a href="#custom-server-and-routing">added</a> the ability to map between an arbitrary URL and any component by supplying a request handler.</p>
<p>On the client side, we have a parameter call <code>as</code> on <code>&lt;Link&gt;</code> that <em>decorates</em> the URL differently from the URL it <em>fetches</em>.</p>
</details>
<details>
<summary>How do I fetch data?</summary>
<p>It’s up to you. <code>getInitialProps</code> is an <code>async</code> function (or a regular function that returns a <code>Promise</code>). It can retrieve data from anywhere.</p>
</details>
<details>
  <summary>Can I use it with GraphQL?</summary>
<p>Yes! Here's an example with <a href="/examples/with-apollo">Apollo</a>.</p>
</details>
<details>
<summary>Can I use it with Redux and thunk?</summary>
<p>Yes! Here's an <a href="/examples/with-redux-thunk">example</a></p>
</details>
<details>
<summary>Can I use it with Redux?</summary>
<p>Yes! Here's an <a href="/examples/with-redux">example</a></p>
</details>
<details>
<summary>Can I use Next with my favorite Javascript library or toolkit?</summary>
<p>Since our first release we've had <strong>many</strong> example contributions, you can check them out in the <a href="/examples">examples</a> directory</p>
</details>
<details>
<summary>What is this inspired by?</summary>
<p>Many of the goals we set out to accomplish were the ones listed in <a href="http://rauchg.com/2014/7-principles-of-rich-web-applications/" rel="nofollow">The 7 principles of Rich Web Applications</a> by Guillermo Rauch.</p>
<p>The ease-of-use of PHP is a great inspiration. We feel Next.js is a suitable replacement for many scenarios where you otherwise would use PHP to output HTML.</p>
<p>Unlike PHP, we benefit from the ES6 module system and every file exports a <strong>component or function</strong> that can be easily imported for lazy evaluation or testing.</p>
<p>As we were researching options for server-rendering React that didn’t involve a large number of steps, we came across <a href="https://github.com/facebookarchive/react-page">react-page</a> (now deprecated), a similar approach to Next.js by the creator of React Jordan Walke.</p>
</details>
<h2><a id="user-content-contributing" class="anchor" aria-hidden="true" href="#contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>
<p>Please see our <a href="/contributing.md">contributing.md</a></p>
<h2><a id="user-content-authors" class="anchor" aria-hidden="true" href="#authors"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authors</h2>
<ul>
<li>Arunoda Susiripala (<a href="https://twitter.com/arunoda" rel="nofollow">@arunoda</a>) – <a href="https://zeit.co" rel="nofollow">ZEIT</a></li>
<li>Tim Neutkens (<a href="https://twitter.com/timneutkens" rel="nofollow">@timneutkens</a>) – <a href="https://zeit.co" rel="nofollow">ZEIT</a></li>
<li>Naoyuki Kanezawa (<a href="https://twitter.com/nkzawa" rel="nofollow">@nkzawa</a>) – <a href="https://zeit.co" rel="nofollow">ZEIT</a></li>
<li>Tony Kovanen (<a href="https://twitter.com/tonykovanen" rel="nofollow">@tonykovanen</a>) – <a href="https://zeit.co" rel="nofollow">ZEIT</a></li>
<li>Guillermo Rauch (<a href="https://twitter.com/rauchg" rel="nofollow">@rauchg</a>) – <a href="https://zeit.co" rel="nofollow">ZEIT</a></li>
<li>Dan Zajdband (<a href="https://twitter.com/impronunciable" rel="nofollow">@impronunciable</a>) – Knight-Mozilla / Coral Project</li>
</ul>
</article></div>`;
const regexp = /(href)="(\.\/|\/)/gim;
const regexp2 = /(src)="(\.\/|\/)/gim;
const user = 'zeit';
const repo = 'next.js';
const parsed1 = parsedMarkdownExample1.replace(
  regexp,
  `$1="https://github.com/${user}/${repo}/tree/master/`
);
const parsedMarkdownExample = parsed1.replace(
  regexp2,
  `$1="https://raw.githubusercontent.com/${user}/${repo}/master/`
);

const RepoPage = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange: TabChangeHandler = (_e, val) => {
    setValue(val);
  };
  useEffect(() => {
    const bodyEl =
      document.documentElement || document.body.parentNode || document.body;
    const hashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const el = document.getElementById(`user-content-${hash.substring(1)}`);
        if (el) {
          // to compensate painting time onload
          setTimeout(() => {
            bodyEl.scrollTop = el.offsetTop - 70;
          }, 10);
        }
      }
    };
    window.addEventListener('load', hashChange);
    window.addEventListener('hashchange', hashChange);

    return () => {
      window.removeEventListener('hashchange', hashChange);
      window.removeEventListener('load', hashChange);
    };
  }, []);
  return (
    <Wrapper>
      <RepoPageGrid>
        <div>
          <Typography variant="h1" fontWeight={400}>
            react-testing-library
          </Typography>
          <Typography variant="p" color="#646464">
            Simple and complete React DOM testing utilities that encourage good
            testing practices.
          </Typography>
          <Tabs value={value} onChange={handleChange}>
            <Tab>Overview</Tab>
            <Tab>Readme</Tab>
            <Tab>GitHub Stats</Tab>
            <Tab>NPM Stats</Tab>
          </Tabs>
          <div>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: parsedMarkdownExample }}
            />
          </div>
        </div>
        <div>this is our sidebar</div>
      </RepoPageGrid>
    </Wrapper>
  );
};

export default RepoPage;
