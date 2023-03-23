const n={},a=`<h1 id="pagination" tabindex="-1">Pagination</h1>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="simple" tabindex="-1">Simple</h2>
<p>Set the <code v-pre>mode</code> Set to <code v-pre>simple</code> to switch to simple mode, at which point the paging device does not show the specific page number button.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="forceellipses" tabindex="-1">ForceEllipses</h2>
<p>Set up <code v-pre>forcellipses</code>, you will show the omitted button, click to quickly jump.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>
      <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">125</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">forceEllipses</span>
      <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">pageItemCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="custom-button" tabindex="-1">Custom Button</h2>
<p>Content from the paging button via <code v-pre>prev</code>,<code v-pre>next</code>, etc…</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>
      <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        prev<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        next<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultCurrent</td>
<td>Default selection page number</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>current</td>
<td>Current page number</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>mode</td>
<td>Display mode</td>
<td><code v-pre>'multi' | 'simple'</code></td>
<td><code v-pre>'multi'</code></td>
</tr>
<tr>
<td>slots</td>
<td>Customized Previous, next page button content</td>
<td><code v-pre>PaginationSlots</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>total</td>
<td>total</td>
<td><code v-pre>number</code></td>
<td><code v-pre>82</code></td>
</tr>
<tr>
<td>pageSize</td>
<td>Number of records per page</td>
<td><code v-pre>number</code></td>
<td><code v-pre>10</code></td>
</tr>
<tr>
<td>pageItemCount</td>
<td>Displayed page number</td>
<td><code v-pre>number</code></td>
<td><code v-pre>5</code></td>
</tr>
<tr>
<td>forceEllipses</td>
<td>Do you show an omitted number?</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>hideOnSinglePage</td>
<td>Is there only one page, is it hidden?</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events</h2>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Callback Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>Trigger when the page number changes</td>
<td><code v-pre>(current: number, pageSize: number)</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-data-structure-paginationslots" tabindex="-1">Slots Data Structure(PaginationSlots)</h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>prev</td>
<td>Customized Previous</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>next</td>
<td>Customize the next page</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
