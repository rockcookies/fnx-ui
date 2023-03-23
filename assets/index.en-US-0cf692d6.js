const n={},a=`<h1 id="image" tabindex="-1">Image</h1>
<p>Enhanced <code v-pre>img</code> tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.</p>
<h2 id="basic-usages" tabindex="-1">Basic Usages</h2>
<p>The basic usage is consistent with the native <code v-pre>img</code> tag. You can set <code v-pre>src</code>, <code v-pre>width</code>, <code v-pre>height</code>, <code v-pre>alt</code> and other native attributes.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="fit-mode" tabindex="-1">Fit Mode</h2>
<p>You can set the picture filling mode through the <code v-pre>fit</code> and <code v-pre>position</code> attribute.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="round" tabindex="-1">Round</h2>
<p>Through the <code v-pre>round</code> attribute, you can set the picture to round. Note that when the width and height of the picture are unequal or the <code v-pre>fit</code> is <code v-pre>contain</code> or <code v-pre>scale-down</code>, a complete circle cannot be filled.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="radius" tabindex="-1">Radius</h2>
<p>You can set the fillet of the picture through the <code v-pre>radius</code> attribute.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="lazyload" tabindex="-1">LazyLoad</h2>
<p>Use <code v-pre>lazy</code> prop to enable lazy load.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">lazy</span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="loading" tabindex="-1">Loading</h2>
<p>Image provides the default loading prompt, and supports customizing the loading content through <code v-pre>indicator.loading</code>.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        loading<span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="error" tabindex="-1">Error</h2>
<p>Image provides the default loading failure prompt, and supports custom loading failure content through <code v-pre>slots.error</code>.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>illegal src<span class="token punctuation">"</span></span>
      <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        error<span class="token operator">:</span> <span class="token string">'Error'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="image-props" tabindex="-1">Image Props</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>Image src</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>Fill mode</td>
<td><code v-pre>'contain'</code> | <code v-pre>'cover'</code> | <code v-pre>'fill'</code> | <code v-pre>'none'</code> | <code v-pre>'scale-down'</code></td>
<td><code v-pre>'fill'</code></td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>Position, can be set to <code v-pre>center</code> <code v-pre>top</code> <code v-pre>right</code> <code v-pre>bottom</code> <code v-pre>left</code> or <code v-pre>string</code> ( same as values of <code v-pre>object-position</code> )</td>
<td><code v-pre>string</code></td>
<td><code v-pre>center</code></td>
<td>0.0.11</td>
</tr>
<tr>
<td>alt</td>
<td>Alternate text</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>Width, default unit <code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>Height, default unit <code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>Fillet size, default unit is <code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>Whether to be round</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to enable lazy load</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>0.0.10</td>
</tr>
<tr>
<td>slots</td>
<td>Image slots</td>
<td><code v-pre>ImageSlots</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="imageslots" tabindex="-1">ImageSlots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>Custom loading placeholder</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>error</td>
<td>Custom error placeholder</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="image-fill-mode" tabindex="-1">Image Fill Mode</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>contain</td>
<td>Keep the width and height of the zoom image so that the long edge of the image can be fully displayed</td>
</tr>
<tr>
<td>cover</td>
<td>Keep the width and height to zoom the picture, so that the short edge of the picture can be fully displayed, and cut the long edge</td>
</tr>
<tr>
<td>fill</td>
<td>Stretch the picture to fill it with yuan</td>
</tr>
<tr>
<td>none</td>
<td>Keep the original size of the picture</td>
</tr>
<tr>
<td>scale-down</td>
<td>Take the smaller of <code v-pre>none</code> or <code v-pre>contain</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
