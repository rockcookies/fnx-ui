const n={},s=`<h1 id="circle-huan-xing-jin-du-tiao" tabindex="-1">Circle \u73AF\u5F62\u8FDB\u5EA6\u6761</h1>
<p>\u5706\u73AF\u5F62\u7684\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDB\u5EA6\u6E10\u53D8\u52A8\u753B\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p><code v-pre>progress</code> \u5C5E\u6027\u8868\u793A\u52A8\u753B\u8FC7\u7A0B\u4E2D\u7684\u5B9E\u65F6\u8FDB\u5EA6\u3002\u5F53 <code v-pre>progress</code> \u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u4EE5 <code v-pre>speed</code> \u7684\u901F\u5EA6\u53D8\u5316\u5230\u65B0\u7684\u503C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="kuan-du-ding-zhi" tabindex="-1">\u5BBD\u5EA6\u5B9A\u5236</h2>
<p>\u901A\u8FC7 <code v-pre>strokeWidth</code> \u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token attr-name">strokeWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yan-se-ding-zhi" tabindex="-1">\u989C\u8272\u5B9A\u5236</h2>
<p>\u901A\u8FC7 <code v-pre>strokeColor</code> \u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C <code v-pre>trailColor</code> \u5C5E\u6027\u6765\u63A7\u5236\u8F68\u9053\u989C\u8272\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token attr-name">trailColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff0000<span class="token punctuation">"</span></span> <span class="token attr-name">strokeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffc0cb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jian-bian-se" tabindex="-1">\u6E10\u53D8\u8272</h2>
<p><code v-pre>strokeColor</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u5B9A\u4E49\u6E10\u53D8\u8272\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span>
      <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">strokeColor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token string-property property">'0%'</span><span class="token operator">:</span> <span class="token string">'#3fecff'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'100%'</span><span class="token operator">:</span> <span class="token string">'#6149f6'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="ni-shi-zhen-fang-xiang" tabindex="-1">\u9006\u65F6\u9488\u65B9\u5411</h2>
<p>\u5C06 <code v-pre>clockwise</code> \u8BBE\u7F6E\u4E3A <code v-pre>false</code>\uFF0C\u8FDB\u5EA6\u4F1A\u4ECE\u9006\u65F6\u9488\u65B9\u5411\u5F00\u59CB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">clockwise</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="da-xiao-ding-zhi" tabindex="-1">\u5927\u5C0F\u5B9A\u5236</h2>
<p>\u901A\u8FC7 <code v-pre>size</code> \u5C5E\u6027\u8BBE\u7F6E\u5706\u73AF\u76F4\u5F84\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>progress</td>
<td>\u5F53\u524D\u8FDB\u5EA6</td>
<td><code v-pre>number</code></td>
<td><code v-pre>100</code></td>
</tr>
<tr>
<td>size</td>
<td>\u5706\u73AF\u76F4\u5F84\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A px</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>100px</code></td>
</tr>
<tr>
<td>strokeColor</td>
<td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u53EF\u4EE5\u5B9A\u4E49\u6E10\u53D8\u8272</td>
<td><code v-pre>string | object</code></td>
<td><code v-pre>#1989fa</code></td>
</tr>
<tr>
<td>strokeLinecap</td>
<td>\u8FDB\u5EA6\u6761\u7AEF\u70B9\u7684\u5F62\u72B6</td>
<td><code v-pre>'butt' | 'round' | 'square'</code></td>
<td><code v-pre>round</code></td>
</tr>
<tr>
<td>trailColor</td>
<td>\u8F68\u9053\u989C\u8272</td>
<td><code v-pre>string</code></td>
<td><code v-pre>-</code></td>
</tr>
<tr>
<td>fill</td>
<td>\u586B\u5145\u989C\u8272</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>speed</td>
<td>\u52A8\u753B\u901F\u5EA6</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>-</code></td>
</tr>
<tr>
<td>strokeWidth</td>
<td>\u8FDB\u5EA6\u6761\u5BBD\u5EA6</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>5</code></td>
</tr>
<tr>
<td>clockWise</td>
<td>\u662F\u5426\u987A\u65F6\u9488\u589E\u52A0</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>gapDegree</td>
<td>\u8FDB\u5EA6\u6761\u7F3A\u53E3\u89D2\u5EA6</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>gapPosition</td>
<td>\u8FDB\u5EA6\u6761\u7F3A\u53E3\u4F4D\u7F6E</td>
<td><code v-pre>'top' |'right' | 'bottom' | 'left'</code></td>
<td><code v-pre>top</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
