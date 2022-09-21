const n={},a=`<h1 id="configprovider-quan-ju-hua-pei-zhi" tabindex="-1">ConfigProvider \u5168\u5C40\u5316\u914D\u7F6E</h1>
<p>\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>ConfigProvider \u4F7F\u7528 React \u7684 <a href="https://facebook.github.io/react/docs/context.html">context</a> \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">transitionDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="guo-ji-hua" tabindex="-1">\u56FD\u9645\u5316</h2>
<p>\u4F7F\u7528 ConfigProvider \u8BBE\u7F6E\u8BED\u8A00\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'fnx-ui/lib/locale/zh-CN'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="configprovider-props" tabindex="-1">ConfigProvider Props</h3>
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
<td>locale</td>
<td>\u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 <a href="https://unpkg.com/browse/fnx-ui/lib/locale">fnx-ui/lib/locale</a> \u76EE\u5F55\u4E0B\u5BFB\u627E</td>
<td><code v-pre>object</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>\u662F\u5426\u5F00\u542F\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u52A8\u753B\u65F6\u957F</td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
<td></td>
</tr>
<tr>
<td>mountTo</td>
<td>\u5F39\u51FA\u6846\uFF08Popup, Toast, Dialog \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A</td>
<td><code v-pre>() =&gt; HTMLElement</code></td>
<td><code v-pre>() =&gt; document.body</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
