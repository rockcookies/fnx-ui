const n={},a=`<h1 id="image-tu-pian" tabindex="-1">Image \u56FE\u7247</h1>
<p>\u589E\u5F3A\u7248\u7684 <code v-pre>img</code> \u6807\u7B7E\uFF0C\u63D0\u4F9B\u591A\u79CD\u56FE\u7247\u586B\u5145\u6A21\u5F0F\u3001\u52A0\u8F7D\u4E2D\u63D0\u793A\u3001\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u57FA\u7840\u7528\u6CD5\u4E0E\u539F\u751F <code v-pre>img</code> \u6807\u7B7E\u4E00\u81F4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code v-pre>src</code>\u3001<code v-pre>width</code>\u3001<code v-pre>height</code>\u3001<code v-pre>alt</code> \u7B49\u539F\u751F\u5C5E\u6027\u3002</p>
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
<h2 id="tian-chong-mo-shi" tabindex="-1">\u586B\u5145\u6A21\u5F0F</h2>
<p>\u901A\u8FC7 <code v-pre>position</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u4F4D\u7F6E\uFF0C\u7ED3\u5408<code v-pre>fit</code>\u5C5E\u6027\u4F7F\u7528\uFF0C\u53EF\u9009\u503C\u89C1\u4E0B\u65B9\u8868\u683C\uFF0C\u540C<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position"><code v-pre>object-position</code></a>\u5C5E\u6027\u3002</p>
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
<h2 id="yuan-xing-tu-pian" tabindex="-1">\u5706\u5F62\u56FE\u7247</h2>
<p>\u901A\u8FC7 <code v-pre>round</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u53D8\u5706\uFF0C\u6CE8\u610F\u5F53\u56FE\u7247\u5BBD\u9AD8\u4E0D\u76F8\u7B49\u6216 <code v-pre>fit</code> \u4E3A <code v-pre>contain</code> \u6216 <code v-pre>scale-down</code> \u65F6\uFF0C\u5C06\u65E0\u6CD5\u586B\u5145\u4E00\u4E2A\u5B8C\u6574\u7684\u5706\u5F62\u3002</p>
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
<h2 id="yuan-jiao" tabindex="-1">\u5706\u89D2</h2>
<p>\u901A\u8FC7 <code v-pre>radius</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u5706\u89D2\u3002</p>
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
<h2 id="tu-pian-lan-jia-zai" tabindex="-1">\u56FE\u7247\u61D2\u52A0\u8F7D</h2>
<p>\u901A\u8FC7 <code v-pre>lazy</code> \u5C5E\u6027\u6765\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\u3002</p>
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
<h2 id="jia-zai-zhong-ti-shi" tabindex="-1">\u52A0\u8F7D\u4E2D\u63D0\u793A</h2>
<p>Image \u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u4E2D\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 <code v-pre>indicator.loading</code> \u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u5185\u5BB9\u3002</p>
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
<h2 id="jia-zai-shi-bai-ti-shi" tabindex="-1">\u52A0\u8F7D\u5931\u8D25\u63D0\u793A</h2>
<p>Image \u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 <code v-pre>slots.error</code> \u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u5185\u5BB9\u3002</p>
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
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>\u56FE\u7247\u94FE\u63A5</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>\u56FE\u7247\u586B\u5145\u6A21\u5F0F</td>
<td><code v-pre>'contain'</code> | <code v-pre>'cover'</code> | <code v-pre>'fill'</code> | <code v-pre>'none'</code> | <code v-pre>'scale-down'</code></td>
<td><code v-pre>'fill'</code></td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>\u56FE\u7247\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code v-pre>center</code> <code v-pre>top</code> <code v-pre>right</code> <code v-pre>bottom</code> <code v-pre>left</code> \u6216 <code v-pre>string</code>( \u540C<code v-pre>object-position</code> )</td>
<td><code v-pre>string</code></td>
<td><code v-pre>center</code></td>
<td>0.0.11</td>
</tr>
<tr>
<td>alt</td>
<td>\u66FF\u4EE3\u6587\u672C</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>\u5706\u89D2\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>lazy</td>
<td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>0.0.10</td>
</tr>
<tr>
<td>slots</td>
<td>\u56FE\u7247\u63D2\u69FD</td>
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
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u7684\u63D0\u793A\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>error</td>
<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="tu-pian-tian-chong-mo-shi" tabindex="-1">\u56FE\u7247\u586B\u5145\u6A21\u5F0F</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>contain</td>
<td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765</td>
</tr>
<tr>
<td>cover</td>
<td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\uFF0C\u88C1\u526A\u957F\u8FB9</td>
</tr>
<tr>
<td>fill</td>
<td>\u62C9\u4F38\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u586B\u6EE1\u5143\u7D20</td>
</tr>
<tr>
<td>none</td>
<td>\u4FDD\u6301\u56FE\u7247\u539F\u6709\u5C3A\u5BF8</td>
</tr>
<tr>
<td>scale-down</td>
<td>\u53D6 <code v-pre>none</code> \u6216 <code v-pre>contain</code> \u4E2D\u8F83\u5C0F\u7684\u4E00\u4E2A</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
