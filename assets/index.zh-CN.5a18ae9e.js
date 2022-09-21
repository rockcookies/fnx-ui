const n={},s=`<h1 id="toast-qing-ti-shi" tabindex="-1">Toast \u8F7B\u63D0\u793A</h1>
<p>\u5728\u9875\u9762\u4E2D\u95F4\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jia-zai-ti-shi" tabindex="-1">\u52A0\u8F7D\u63D0\u793A</h2>
<p>\u4F7F\u7528 <code v-pre>Toast.loading</code> \u65B9\u6CD5\u5C55\u793A\u52A0\u8F7D\u63D0\u793A\uFF0C\u901A\u8FC7 <code v-pre>forbidClick</code> \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u80CC\u666F\u70B9\u51FB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span>
  forbidClick<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="cheng-gong-shi-bai-ti-shi" tabindex="-1">\u6210\u529F/\u5931\u8D25\u63D0\u793A</h2>
<p>\u4F7F\u7528 <code v-pre>Toast.success</code> \u65B9\u6CD5\u5C55\u793A\u6210\u529F\u63D0\u793A\uFF0C\u4F7F\u7528 <code v-pre>Toast.fail</code> \u65B9\u6CD5\u5C55\u793A\u5931\u8D25\u63D0\u793A\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'Failed'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h2>
<p>\u901A\u8FC7 <code v-pre>icon</code> \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Custom Icon'</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>star<span class="token punctuation">"</span></span> <span class="token attr-name">spin</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Custom Icon.Spinner'</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon.Spinner</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-wei-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u4F4D\u7F6E</h2>
<p>Toast \u9ED8\u8BA4\u6E32\u67D3\u5728\u5C4F\u5E55\u6B63\u4E2D\u4F4D\u7F6E\uFF0C\u901A\u8FC7 <code v-pre>position</code> \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236 Toast \u5C55\u793A\u7684\u4F4D\u7F6E\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Display on top'</span><span class="token punctuation">,</span>
  position<span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Display on bottom'</span><span class="token punctuation">,</span>
  position<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dong-tai-geng-xin-ti-shi" tabindex="-1">\u52A8\u6001\u66F4\u65B0\u63D0\u793A</h2>
<p>\u6267\u884C Toast \u4E2D\u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Toast \u5B9E\u4F8B\uFF0C\u901A\u8FC7\u4FEE\u6539 <code v-pre>update</code> \u65B9\u6CD5\u5B9E\u4F8B\u4E0A\u7684 <code v-pre>message</code> \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toast <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'\u5012\u8BA1\u65F6 3 \u79D2'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  second<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    toast<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5012\u8BA1\u65F6 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u79D2</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    toast<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dan-li-mo-shi" tabindex="-1">\u5355\u4F8B\u6A21\u5F0F</h2>
<p>Toast \u9ED8\u8BA4\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A Toast\uFF0C\u5982\u679C\u9700\u8981\u5728\u540C\u4E00\u65F6\u95F4\u5F39\u51FA\u591A\u4E2A Toast\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">allowMultiple</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toast1 <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'First Toast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toast2 <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Second Toast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

toast1<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
toast2<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="toast-props" tabindex="-1">Toast Props</h3>
<p>Toast \u7EE7\u627F\u4E86 <a href="#/zh-CN/components/popup">Popup</a> \u7684\u5C5E\u6027\u5E76\u65B0\u589E\u4E86\u5982\u4E0B\u5C5E\u6027\uFF1A</p>
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
<td>position</td>
<td>\u5C55\u793A\u4F4D\u7F6E</td>
<td><code v-pre>'top'</code> | <code v-pre>'bottom'</code> | <code v-pre>'middle'</code></td>
<td><code v-pre>'middle'</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7 <code v-pre>\\n</code> \u6362\u884C</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>duration</td>
<td>\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0CToast \u4E0D\u4F1A\u6D88\u5931</td>
<td><code v-pre>number</code></td>
<td><code v-pre>2000</code></td>
<td></td>
</tr>
<tr>
<td>forbidClick</td>
<td>\u662F\u5426\u7981\u6B62\u80CC\u666F\u70B9\u51FB</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>clickCloseable</td>
<td>\u662F\u5426\u5728\u70B9\u51FB\u540E\u5173\u95ED</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="toast-quan-ju-fang-fa" tabindex="-1">Toast \u5168\u5C40\u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toast.show</td>
<td>\u5C55\u793A\u63D0\u793A</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.loading</td>
<td>\u5C55\u793A\u52A0\u8F7D\u63D0\u793A</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.success</td>
<td>\u5C55\u793A\u6210\u529F\u63D0\u793A</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.fail</td>
<td>\u5C55\u793A\u5931\u8D25\u63D0\u793A</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.clearAll</td>
<td>\u5173\u95ED\u6240\u6709\u63D0\u793A</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>Toast.allowMultiple</td>
<td>\u662F\u5426\u5728\u9875\u9762\u4E2D\u5141\u8BB8\u540C\u65F6\u5B58\u5728\u591A\u4E2A Toast</td>
<td><code v-pre>(allow: boolean) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="toast-shi-li-fang-fa" tabindex="-1">Toast \u5B9E\u4F8B\u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>update</td>
<td>\u66F4\u65B0\u5C55\u793A\u63D0\u793A</td>
<td><code v-pre>(props: ToastProps) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>clear</td>
<td>\u9500\u6BC1 Toast \u5B9E\u4F8B</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
