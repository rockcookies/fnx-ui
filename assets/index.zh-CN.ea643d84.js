const n={},s=`<h1 id="sticky-nian-xing-bu-ju" tabindex="-1">Sticky \u7C98\u6027\u5E03\u5C40</h1>
<p><code v-pre>Sticky</code> \u7EC4\u4EF6\u4E0E CSS \u4E2D position: sticky \u5C5E\u6027\u5B9E\u73B0\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u5F53\u7EC4\u4EF6\u5728\u5C4F\u5E55\u8303\u56F4\u5185\u65F6\uFF0C\u4F1A\u6309\u7167\u6B63\u5E38\u7684\u5E03\u5C40\u6392\u5217\uFF0C\u5F53\u7EC4\u4EF6\u6EDA\u51FA\u5C4F\u5E55\u8303\u56F4\u65F6\uFF0C\u59CB\u7EC8\u4F1A\u56FA\u5B9A\u5728\u5C4F\u5E55\u9876\u90E8\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u5C06\u5185\u5BB9\u5305\u88F9\u5728 <code v-pre>Sticky</code> \u7EC4\u4EF6\u5185\u5373\u53EF\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Success</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xi-ding-ju-chi" tabindex="-1">\u5438\u9876\u8DDD\u79BB</h2>
<p>\u901A\u8FC7 <code v-pre>offsetTop</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zhi-ding-rong-qi" tabindex="-1">\u6307\u5B9A\u5BB9\u5668</h2>
<p>\u901A\u8FC7 <code v-pre>containerRef</code> \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u7EC4\u4EF6\u7684\u5BB9\u5668\uFF0C\u9875\u9762\u6EDA\u52A8\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u8303\u56F4\u5185\uFF0C\u5F53\u7EC4\u4EF6\u5373\u5C06\u8D85\u51FA\u5BB9\u5668\u5E95\u90E8\u65F6\uFF0C\u4F1A\u56FA\u5B9A\u5728\u5BB9\u5668\u7684\u5E95\u90E8\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'150px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">containerRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> containerRef<span class="token punctuation">.</span>current<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Bottom</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="di-duan-pian-yi" tabindex="-1">\u5E95\u7AEF\u504F\u79FB</h2>
<p>\u901A\u8FC7 <code v-pre>offsetBottom</code> \u5C5E\u6027\u8BBE\u7F6E\u5E95\u7AEF\u504F\u79FB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Bottom</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>zIndex</td>
<td>\u5438\u9876\u65F6\u7684 z-index</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>container</td>
<td>\u5BB9\u5668\u5BF9\u5E94\u7684 HTML \u8282\u70B9</td>
<td><code v-pre>Element | (() =&gt; Element undefined null) | null</code></td>
<td>-</td>
</tr>
<tr>
<td>offsetTop</td>
<td>\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>offsetBottom</td>
<td>\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>position</td>
<td>\u5438\u9644\u4F4D\u7F6E</td>
<td><code v-pre>'top' | 'bottom'</code></td>
<td><code v-pre>top</code></td>
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
<td>\u5F53\u5438\u9876\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td>
<td><code v-pre>option: { fixed: boolean }</code></td>
</tr>
<tr>
<td>onScroll</td>
<td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td>
<td><code v-pre>option: { fixed: boolean; scrollTop: number }</code></td>
</tr>
</tbody>
</table>
<h3 id="stickyref-shi-li-fang-fa" tabindex="-1">stickyRef \u5B9E\u4F8B\u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
<th>\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>isFixed()</td>
<td>\u8FD4\u56DE\u7EC4\u4EF6\u7684\u72B6\u6001</td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
