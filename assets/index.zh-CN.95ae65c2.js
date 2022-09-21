const n={},a=`<h1 id="pagination-fen-ye" tabindex="-1">Pagination \u5206\u9875</h1>
<p>\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5C06\u6570\u636E\u5206\u9694\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u57FA\u7840\u7FFB\u9875\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jian-dan-mo-shi" tabindex="-1">\u7B80\u5355\u6A21\u5F0F</h2>
<p>\u5C06 <code v-pre>mode</code> \u8BBE\u7F6E\u4E3A <code v-pre>simple</code> \u6765\u5207\u6362\u5230\u7B80\u5355\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5206\u9875\u5668\u4E0D\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u9875\u7801\u6309\u94AE\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xian-shi-sheng-lue-hao" tabindex="-1">\u663E\u793A\u7701\u7565\u53F7</h2>
<p>\u9ED8\u8BA4\u72B6\u6001\u4E0B\u5F53\u9875\u6570\u8D85\u51FA\uFF0C\u8BBE\u7F6E <code v-pre>forceEllipses</code> \u540E\u4F1A\u5C55\u793A\u7701\u7565\u53F7\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u3002</p>
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
<h2 id="zi-ding-yi-an-niu" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE</h2>
<p>\u901A\u8FC7 <code v-pre>prev</code>\u3001<code v-pre>next</code> \u7B49\u6765\u81EA\u5B9A\u4E49\u5206\u9875\u6309\u94AE\u7684\u5185\u5BB9\u3002</p>
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
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultCurrent</td>
<td>\u9ED8\u8BA4\u9009\u4E2D\u9875\u7801</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>current</td>
<td>\u5F53\u524D\u9875\u7801</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>mode</td>
<td>\u663E\u793A\u6A21\u5F0F</td>
<td><code v-pre>'multi' | 'simple'</code></td>
<td><code v-pre>'multi'</code></td>
</tr>
<tr>
<td>slots</td>
<td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\uFF0C\u4E0B\u4E00\u9875\u6309\u94AE\u5185\u5BB9</td>
<td><code v-pre>PaginationSlots</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>total</td>
<td>\u603B\u8BB0\u5F55\u6570</td>
<td><code v-pre>number</code></td>
<td><code v-pre>82</code></td>
</tr>
<tr>
<td>pageSize</td>
<td>\u6BCF\u9875\u8BB0\u5F55\u6570</td>
<td><code v-pre>number</code></td>
<td><code v-pre>10</code></td>
</tr>
<tr>
<td>pageItemCount</td>
<td>\u663E\u793A\u7684\u9875\u7801\u4E2A\u6570</td>
<td><code v-pre>number</code></td>
<td><code v-pre>5</code></td>
</tr>
<tr>
<td>forceEllipses</td>
<td>\u662F\u5426\u663E\u793A\u7701\u7565\u53F7</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>hideOnSinglePage</td>
<td>\u53EA\u6709\u4E00\u9875\u65F6\uFF0C\u662F\u5426\u9690\u85CF</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1">\u4E8B\u4EF6</h2>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1</td>
<td><code v-pre>(current: number, pageSize: number)</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-shu-ju-jie-gou-paginationslots" tabindex="-1">slots \u6570\u636E\u7ED3\u6784(PaginationSlots)</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>prev</td>
<td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>next</td>
<td>\u81EA\u5B9A\u4E49\u4E0B\u4E00\u9875\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
