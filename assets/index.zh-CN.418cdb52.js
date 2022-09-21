const n={},a=`<h1 id="popup-dan-chu-ceng" tabindex="-1">Popup \u5F39\u51FA\u5C42</h1>
<p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u901A\u8FC7 <code v-pre>visible</code> \u63A7\u5236\u5F39\u51FA\u5C42\u662F\u5426\u663E\u793A\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPopupVisible<span class="token punctuation">,</span> setIsPopupVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">showPopup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsPopupVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsPopupVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Open Popup<span class="token punctuation">"</span></span>
        <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showPopup<span class="token punctuation">}</span></span>
        <span class="token attr-name">clickable</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPopupVisible<span class="token punctuation">}</span></span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Content
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dan-chu-wei-zhi" tabindex="-1">\u5F39\u51FA\u4F4D\u7F6E</h2>
<p>\u901A\u8FC7 <code v-pre>position</code> \u5C5E\u6027\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5F39\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code v-pre>top</code>\u3001<code v-pre>bottom</code>\u3001<code v-pre>left</code>\u3001<code v-pre>right</code> \u6216 <code v-pre>center</code>\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'30%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yuan-jiao-dan-chuang" tabindex="-1">\u5706\u89D2\u5F39\u7A97</h2>
<p>\u8BBE\u7F6E <code v-pre>round</code> \u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u6839\u636E\u5F39\u51FA\u4F4D\u7F6E\u6DFB\u52A0\u4E0D\u540C\u7684\u5706\u89D2\u6837\u5F0F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">round</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'30%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zhi-ding-gua-zai-wei-zhi" tabindex="-1">\u6307\u5B9A\u6302\u8F7D\u4F4D\u7F6E</h2>
<p>\u5F39\u51FA\u5C42\u53EF\u4EE5\u901A\u8FC7 <code v-pre>mountTo</code> \u5C5E\u6027\u6307\u5B9A\u6302\u8F7D\u4F4D\u7F6E\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span>body<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="shi-yong-popup.select" tabindex="-1">\u4F7F\u7528 Popup.Select</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'Monday'</span><span class="token punctuation">,</span>
  <span class="token string">'Tuesday'</span><span class="token punctuation">,</span>
  <span class="token string">'Wednesday'</span><span class="token punctuation">,</span>
  <span class="token string">'Thursday'</span><span class="token punctuation">,</span>
  <span class="token string">'Friday'</span><span class="token punctuation">,</span>
  <span class="token string">'Saturday'</span><span class="token punctuation">,</span>
  <span class="token string">'Sunday'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    &lt;Popup.Select&lt;string>
      select=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select date<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">
    >
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">||</span> <span class="token string">'Select date'</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="popup-props" tabindex="-1">Popup Props</h3>
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
<td>visible</td>
<td>\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>renderOnShow</td>
<td>\u662F\u5426\u5728\u663E\u793A\u5F39\u5C42\u65F6\u624D\u6E32\u67D3\u8282\u70B9</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>\u662F\u5426\u5728\u5173\u95ED\u5F39\u5C42\u65F6\u9500\u6BC1\u8282\u70B9</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>mountTo</td>
<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9</td>
<td><code v-pre>HTMLElement</code> | <code v-pre>() =&gt; HTMLElement</code> | <code v-pre>false</code></td>
<td><code v-pre>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u8FC7\u6E21\u52A8\u753B\u65F6\u5E38\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
<td></td>
</tr>
<tr>
<td>transitionName</td>
<td>\u8FC7\u6E21\u52A8\u753B\u7C7B\u540D</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>lockScroll</td>
<td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>\u906E\u7F69\u5C42\u4F4D\u7F6E</td>
<td><code v-pre>'top'</code> | <code v-pre>'bottom'</code> | <code v-pre>'left'</code> | <code v-pre>'right'</code> | <code v-pre>'center'</code></td>
<td><code v-pre>'center'</code></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>\u662F\u5426\u5C55\u793A\u5706\u89D2</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
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
<td>overlay</td>
<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>\u906E\u7F69\u5C42 Class \u7C7B\u540D</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>\u906E\u7F69\u5C42\u6837\u5F0F</td>
<td><code v-pre>CSSProperties</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayCloseable</td>
<td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Popup \u9ED8\u8BA4\u5173\u95ED\u540E\u72B6\u6001\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7A7A, \u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u5185\u5BB9\uFF0C\u8BF7\u8BBE\u7F6E <code v-pre>destroyOnHide</code>\u3002</strong></p>
<h3 id="popup-events" tabindex="-1">Popup Events</h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onOverlayClick</td>
<td>\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>\u5173\u95ED\u4E8B\u4EF6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>\u5173\u95ED\u52A8\u753B\u4E4B\u524D\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onHide</td>
<td>\u5173\u95ED\u52A8\u753B\u65F6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onAfterHide</td>
<td>\u5173\u95ED\u52A8\u753B\u540E\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>\u663E\u793A\u52A8\u753B\u524D\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onShow</td>
<td>\u663E\u793A\u52A8\u753B\u4E2D\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onAfterShow</td>
<td>\u663E\u793A\u52A8\u753B\u540E\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="popup.select-props" tabindex="-1">Popup.Select Props</h3>
<p>Popup.Select \u7EE7\u627F\u4E86 Popup \u7684\u5C5E\u6027\u5E76\u65B0\u589E\u4E86\u5982\u4E0B\u5C5E\u6027\uFF1A</p>
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
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>\u9009\u9879\u503C</td>
<td><code v-pre>any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u9009\u9879\u503C</td>
<td><code v-pre>any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>\u5F39\u51FA\u5C42\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>selectDefaultValuePropName</td>
<td>\u9ED8\u8BA4\u503C\u540D\u5B57</td>
<td><code v-pre>string</code></td>
<td><code v-pre>defaultValue</code></td>
<td></td>
</tr>
<tr>
<td>selectConfirmTrigger</td>
<td>\u786E\u8BA4\u4E8B\u4EF6\u56DE\u8C03\u540D\u79F0</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onConfirm</code></td>
<td></td>
</tr>
<tr>
<td>selectCancelTrigger</td>
<td>\u53D6\u6D88\u4E8B\u4EF6\u56DE\u8C03\u540D\u79F0</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onCancel</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>\u5B50\u5143\u7D20\u89E6\u53D1\u4E8B\u4EF6\u540D\u79F0</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onClick</code></td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>\u5B50\u5143\u7D20</td>
<td><code v-pre>ReactNode</code> | <code v-pre>(value?: any) =&gt; ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="popup.select-events" tabindex="-1">Popup.Select Events</h3>
<p>Popup.Select \u7EE7\u627F\u4E86 Popup \u7684\u4E8B\u4EF6\u5E76\u65B0\u589E\u4E86\u5982\u4E0B\u4E8B\u4EF6\uFF1A</p>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td><code v-pre>value</code> \u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td>
<td><code v-pre>(value: any) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
