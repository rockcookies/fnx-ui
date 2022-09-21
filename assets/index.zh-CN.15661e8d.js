const n={},a=`<h1 id="overlay-zhe-zhao-ceng" tabindex="-1">Overlay \u906E\u7F69\u5C42</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Overlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Overlay</span></span> <span class="token attr-name">visible</span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="qian-ru-nei-rong" tabindex="-1">\u5D4C\u5165\u5185\u5BB9</h2>
<p>\u53EF\u4EE5\u5728\u906E\u7F69\u5C42\u4E0A\u5D4C\u5165\u4EFB\u610F\u5185\u5BB9\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Overlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Overlay</span></span> <span class="token attr-name">visible</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Overlay</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>visible</td>
<td>\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>zIndex</td>
<td>z-index \u5C42\u7EA7</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>lockScroll</td>
<td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8\uFF0C\u9501\u5B9A\u65F6\u8499\u5C42\u91CC\u7684\u5185\u5BB9\u4E5F\u5C06\u65E0\u6CD5\u6EDA\u52A8</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>300</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
