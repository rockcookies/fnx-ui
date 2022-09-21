const n={},s=`<h1 id="notify-xiao-xi-tong-zhi" tabindex="-1">Notify \u6D88\u606F\u901A\u77E5</h1>
<p>\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p>
<h2 id="han-shu-diao-yong" tabindex="-1">\u51FD\u6570\u8C03\u7528</h2>
<p><code v-pre>Notify</code> \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u76F8\u5E94\u7684\u6D88\u606F\u63D0\u793A\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Message'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zu-jian-diao-yong" tabindex="-1">\u7EC4\u4EF6\u8C03\u7528</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tong-zhi-lei-xing" tabindex="-1">\u901A\u77E5\u7C7B\u578B</h2>
<p>\u652F\u6301 <code v-pre>primary</code>\u3001<code v-pre>success</code>\u3001<code v-pre>warning</code>\u3001<code v-pre>danger</code> \u56DB\u79CD\u901A\u77E5\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code v-pre>danger</code>\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Message'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-tong-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u901A\u77E5</h2>
<p>\u81EA\u5B9A\u4E49\u6D88\u606F\u901A\u77E5\u7684\u989C\u8272\u548C\u5C55\u793A\u65F6\u957F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span>
          duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#ad0000'</span><span class="token punctuation">,</span>
          background<span class="token operator">:</span> <span class="token string">'#ffe1e1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dong-tai-geng-xin-ti-shi" tabindex="-1">\u52A8\u6001\u66F4\u65B0\u63D0\u793A</h2>
<p>\u6267\u884C <code v-pre>Notify</code> \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 <code v-pre>Notify</code> \u5B9E\u4F8B\uFF0C\u901A\u8FC7<code v-pre>update</code>\u65B9\u6CD5\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 <code v-pre>message</code> \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> notify <span class="token operator">=</span> Notify<span class="token punctuation">.</span><span class="token function">useToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> clearCountdown <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> loading <span class="token operator">=</span> notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    second<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      loading<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">clearCountdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      loading<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="notifyprops-api" tabindex="-1">NotifyProps API</h2>
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
<td>type</td>
<td>\u7C7B\u578B</td>
<td><code v-pre>'primary' | 'success' | 'warning' | 'danger'</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>message</td>
<td>\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7<code v-pre>\\n</code>\u6362\u884C</td>
<td><code v-pre>string</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>duration</td>
<td>\u7C7B\u578B</td>
<td><code v-pre>number</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>color</td>
<td>\u7C7B\u578B</td>
<td><code v-pre>string</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>background</td>
<td>\u7C7B\u578B</td>
<td><code v-pre>string</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>visible</td>
<td>\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>round</td>
<td>\u662F\u5426\u5C55\u793A\u5706\u89D2</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>position</td>
<td>\u4F4D\u7F6E</td>
<td><code v-pre>top\` | \`bottom\` | \`middle </code></td>
<td><code v-pre>middle</code></td>
</tr>
<tr>
<td>overlay</td>
<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>\u906E\u7F69\u5C42\u7C7B\u540D</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>overlayStyle</td>
<td>\u906E\u7F69\u5C42\u6837\u5F0F</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>overlayCloseable</td>
<td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>renderOnShow</td>
<td>\u662F\u5426\u6E32\u67D3\u52A0\u8F7D</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>\u662F\u5426\u5173\u95ED\u9500\u6BC1</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>mountTo</td>
<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9</td>
<td><code v-pre>boolean | element | ()=&gt;element </code></td>
<td>-</td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u8FC7\u6E21\u52A8\u753B</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>transitionName</td>
<td>\u8FC7\u6E21\u52A8\u753B\u7C7B\u540D</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>lockScroll</td>
<td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>\u662F\u5426\u5F00\u542F\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1"><Notify /> \u4E8B\u4EF6</h2>
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
<td>onShow</td>
<td>\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onOverlayClick</td>
<td>\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>(\u906E\u7F69\u5C42\u53EF\u70B9\u51FB\u65F6)\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>\u51FA\u573A\u52A8\u753B\u524D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onHide</td>
<td>\u51FA\u573A\u52A8\u753B\u4E2D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onAfterHide</td>
<td>\u51FA\u573A\u52A8\u753B\u540E\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>\u8FDB\u573A\u52A8\u753B\u524D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>\u8FDB\u573A\u52A8\u753B\u4E2D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onAfterShow</td>
<td>\u8FDB\u573A\u52A8\u753B\u540E\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="notify-fang-fa" tabindex="-1">Notify \u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
<th>\u8FD4\u56DE\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toast.show</td>
<td>\u5C55\u793A\u52A0\u8F7D\u63D0\u793A</td>
<td><code v-pre>(message: string | NotifyProps, container?: HTMLElement)</code></td>
<td><code v-pre>toast \u5B9E\u4F8B</code></td>
</tr>
<tr>
<td>Toast.clearAll</td>
<td>\u5173\u95ED\u63D0\u793A</td>
<td>-</td>
<td><code v-pre>void</code></td>
</tr>
<tr>
<td>Toast.allowMultiple</td>
<td>\u5141\u8BB8\u540C\u65F6\u5B58\u5728\u591A\u4E2A <code v-pre>Toast</code></td>
<td><code v-pre>(allow: boolean)</code></td>
<td><code v-pre>void</code></td>
</tr>
</tbody>
</table>
<h3 id="notify-shi-li-fang-fa" tabindex="-1">Notify \u5B9E\u4F8B\u65B9\u6CD5</h3>
<pre><code v-pre>const notify = Notify.useNotify();
const loading=notify.show()
loading.update();
loading.clear();

</code></pre>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
<th>\u8FD4\u56DE\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toast.update()</td>
<td>\u66F4\u65B0\u5C55\u793A\u63D0\u793A</td>
<td><code v-pre>ToastProps</code></td>
<td>toast \u5B9E\u4F8B</td>
</tr>
<tr>
<td>Toast.clear()</td>
<td>\u9500\u6BC1 <code v-pre>Toast</code> \u5B9E\u4F8B</td>
<td>-</td>
<td>toast \u5B9E\u4F8B</td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
