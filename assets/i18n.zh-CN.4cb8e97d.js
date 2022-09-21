const n={},a=`<h1 id="guo-ji-hua" tabindex="-1">\u56FD\u9645\u5316</h1>
<p>FNX UI \u901A\u8FC7\u4F7F\u7528 <code v-pre>&lt;ConfigProvider /&gt;</code> \u8C03\u6574\u8BED\u8A00\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u7EC4\u4EF6\u5747\u4E3A\u82F1\u8BED\u3002</p>
<h2 id="configprovider" tabindex="-1">ConfigProvider</h2>
<p>\u4F7F\u7528 <code v-pre>&lt;ConfigProvider /&gt;</code> \u914D\u7F6E\u8BED\u8A00\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'fnx-ui/lib/locale/zh-CN'</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>\u6CE8\u610F\uFF1A<code v-pre>zh_CN</code> \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002</p>
<p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A</p>
<table>
<thead>
<tr>
<th>\u8BED\u8A00</th>
<th>\u6587\u4EF6\u540D</th>
</tr>
</thead>
<tbody>
<tr>
<td>\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09</td>
<td>en_US</td>
</tr>
<tr>
<td>\u7B80\u4F53\u4E2D\u6587</td>
<td>zh_CN</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
