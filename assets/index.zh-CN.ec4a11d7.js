const n={},t=`<h1 id="dialog-dui-hua-kuang" tabindex="-1">Dialog \u5BF9\u8BDD\u6846</h1>
<p>\u5F39\u51FA\u6A21\u6001\u6846\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p>
<p>\u5F39\u51FA\u6846\u7EC4\u4EF6\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p>
<h2 id="han-shu-diao-yong" tabindex="-1">\u51FD\u6570\u8C03\u7528</h2>
<p><code v-pre>Dialog.show</code> \u4F5C\u4E3A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u76F8\u5E94\u7684\u6A21\u6001\u6846\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'Left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>\uFF1B

</code></pre>
<h2 id="zu-jian-diao-yong" tabindex="-1">\u7EC4\u4EF6\u8C03\u7528</h2>
<p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code v-pre>Dialog</code> \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code v-pre>visible</code> \u63A7\u5236\u663E\u793A\u9690\u85CF\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yi-bu-guan-bi" tabindex="-1">\u5F02\u6B65\u5173\u95ED</h2>
<p>\u901A\u8FC7 <code v-pre>onConfirm</code> \uFF0C<code v-pre>onCancel</code> \u5C5E\u6027\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u9700\u8981\u6267\u884C\u5B8C\u624D\u4F1A\u5173\u95ED\uFF0C\u4E0D\u5173\u95ED\u5219\u8FD4\u56DE <code v-pre>false</code>\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span>timeoutsMs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeoutsMs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'Left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Stopped!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h2>
<p><code v-pre>children</code> \u7C7B\u578B\u662F <code v-pre>ReactNode</code>\uFF0C\u63A5\u53D7\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'Left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dong-tai-jia-zai" tabindex="-1">\u52A8\u6001\u52A0\u8F7D</h2>
<p>\u6267\u884C <code v-pre>Dialog</code> \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 <code v-pre>Dialog</code> \u5B9E\u4F8B\uFF0C\u901A\u8FC7 <code v-pre>update</code> \u65B9\u6CD5\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 <code v-pre>message</code> \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dialog <span class="token operator">=</span> Dialog<span class="token punctuation">.</span><span class="token function">useDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> timerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>NodeJS<span class="token punctuation">.</span>Timeout<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> toast <span class="token operator">=</span> dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Now it is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    second<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      toast<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Now it is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      toast<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Dynamic Loading</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<p><code v-pre>ButtonProps</code> \u7C7B\u578B\u53C2\u8003 <code v-pre>Button</code> \u7EC4\u4EF6\u3002</p>
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
<td>title</td>
<td>\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>\u9875\u811A</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td>\u5BBD\u5EA6</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>messageAlign</td>
<td>\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F</td>
<td><code v-pre>'left' | 'right'</code></td>
<td><code v-pre>center</code></td>
</tr>
<tr>
<td>confirmButton</td>
<td>\u786E\u8BA4\u6309\u94AE</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmText</td>
<td>\u786E\u8BA4\u6309\u94AE\u6587\u6848</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmLoading</td>
<td>\u70B9\u51FB\u786E\u8BA4\u662F\u5426\u663E\u793A\u52A0\u8F7D\u56FE\u6807</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmButtonProps</td>
<td>\u786E\u8BA4\u6309\u94AE\u5C5E\u6027</td>
<td><code v-pre>ButtonProps</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>cancelButton</td>
<td>\u53D6\u6D88\u6309\u94AE</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelText</td>
<td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelLoading</td>
<td>\u786E\u8BA4\u52A0\u8F7D\u5B8C\u6BD5</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>\u53D6\u6D88\u6309\u94AE\u5C5E\u6027</td>
<td><code v-pre>ButtonProps</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>bodyProps</td>
<td>\u5185\u5BB9\u5305\u88F9\u5C42\u5C5E\u6027</td>
<td><code v-pre>HTMLAttributes</code></td>
<td>-</td>
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
<td><code v-pre>top\` | \`bottom\` | \`middle</code></td>
<td><code v-pre>middle</code></td>
</tr>
<tr>
<td>overlay</td>
<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>fill</code></td>
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
<h2 id="shi-jian" tabindex="-1"><Dialog /> \u4E8B\u4EF6</h2>
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
<td>onConfirm</td>
<td>\u786E\u8BA4\u56DE\u8C03</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>\u53D6\u6D88\u56DE\u8C03</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onOverlayClick</td>
<td>\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1</td>
<td><code v-pre>(e: React.MouseEvent&lt;HTMLElement, MouseEvent&gt;)</code></td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>\u906E\u7F69\u5C42\u53EF\u70B9\u51FB\u65F6\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>\u51FA\u573A\u52A8\u753B\u524D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onHide</td>
<td>\u51FA\u573A\u52A8\u753B\u4E2D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onAfterHide</td>
<td>\u51FA\u573A\u52A8\u753B\u540E\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>\u8FDB\u573A\u52A8\u753B\u524D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>\u8FDB\u573A\u52A8\u753B\u4E2D\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onAfterShow</td>
<td>\u8FDB\u573A\u52A8\u753B\u540E\u6267\u884C\u89E6\u53D1</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="dialog-fang-fa" tabindex="-1">Dialog \u65B9\u6CD5</h2>
<p><code v-pre>DialogProps</code>\u7C7B\u578B\u4E3A\u7EC4\u4EF6 API\u3002</p>
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
<td>Dialog.show()</td>
<td>\u5C55\u793A\u5F39\u7A97</td>
<td><code v-pre>DialogProps</code></td>
<td>\u5F39\u7A97\u793A\u4F8B</td>
</tr>
<tr>
<td>Dialog.clearAll()</td>
<td>\u9500\u6BC1\u5F39\u7A97\u5B9E\u4F8B</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="dialog-shi-li-fang-fa" tabindex="-1">Dialog \u5B9E\u4F8B\u65B9\u6CD5</h3>
<pre><code v-pre>const useDialog = Dialog.useDialog();
const dialog=useDialog.show()
dialog.update();
dialog.clear();

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
<td>dialog.update()</td>
<td>\u66F4\u65B0\u5C55\u793A\u63D0\u793A</td>
<td><code v-pre>({ visible: boolean | undefined, ...props }) </code></td>
<td>toast \u5B9E\u4F8B</td>
</tr>
<tr>
<td>dialog.clear()</td>
<td>\u9500\u6BC1\u5B9E\u4F8B</td>
<td>-</td>
<td>toast \u5B9E\u4F8B</td>
</tr>
</tbody>
</table>
`;export{n as attributes,t as html};
