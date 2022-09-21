const n={},a=`<h1 id="notice-bar-tong-zhi-lan" tabindex="-1">notice-bar \u901A\u77E5\u680F</h1>
<p>\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u5C55\u793A\u4E00\u7EC4\u6D88\u606F\u901A\u77E5\uFF0C\u9ED8\u8BA4\u4E0D\u5FAA\u73AF\u64AD\u653E\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u901A\u8FC7\u5B50\u5143\u7D20\u8BBE\u7F6E\u901A\u77E5\u680F\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7 <code v-pre>leftIcon</code> \u5C5E\u6027\u8BBE\u7F6E\u901A\u77E5\u680F\u5DE6\u4FA7\u7684\u56FE\u6807\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20px<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>photo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="gun-dong-bo-fang" tabindex="-1">\u6EDA\u52A8\u64AD\u653E</h2>
<p><code v-pre>marquee</code> \u4E3A <code v-pre>'auto'</code> \u901A\u77E5\u680F\u7684\u5185\u5BB9\u957F\u5EA6\u6EA2\u51FA\u65F6\u4F1A\u81EA\u52A8\u5F00\u542F\u6EDA\u52A8\u64AD\u653E\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">marquee</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">marquee</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="duo-xing-zhan-shi" tabindex="-1">\u591A\u884C\u5C55\u793A</h2>
<p>\u9ED8\u8BA4\u591A\u884C\u5C55\u793A\uFF0C\u6587\u5B57\u8F83\u957F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code v-pre>ellipsis</code> \u5C5E\u6027\u5728\u4E00\u884C\u663E\u793A\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">ellipsis</span><span class="token punctuation">></span></span><span class="token plain-text">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h2>
<p>\u901A\u8FC7 <code v-pre>color</code> \u5C5E\u6027\u8BBE\u7F6E\u6587\u672C\u989C\u8272\uFF0C\u901A\u8FC7 <code v-pre>background</code> \u5C5E\u6027\u8BBE\u7F6E\u80CC\u666F\u8272\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1989fa<span class="token punctuation">"</span></span> <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ecf9ff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="chui-zhi-gun-dong" tabindex="-1">\u5782\u76F4\u6EDA\u52A8</h2>
<p>\u642D\u914D <code v-pre>NoticeBar</code> \u548C <code v-pre>Swipe</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5782\u76F4\u6EDA\u52A8\u7684\u6548\u679C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span> lineHeight<span class="token operator">:</span> <span class="token string">'40px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20px<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>photo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20px<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swipe</span></span>
        <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span> lineHeight<span class="token operator">:</span> <span class="token string">'40px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">vertical</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swipe.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swipe.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swipe.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swipe.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swipe.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swipe.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swipe</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>color</td>
<td>\u901A\u77E5\u6587\u672C\u989C\u8272</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>\u6EDA\u52A8\u6761\u80CC\u666F</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>leftIcon</td>
<td>\u5DE6\u4FA7\u56FE\u6807</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>rightIcon</td>
<td>\u53F3\u4FA7\u56FE\u6807</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>marqueeDelay</td>
<td>\u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4 (ms)</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1000</code></td>
</tr>
<tr>
<td>marqueeSpeed</td>
<td>\u6EDA\u52A8\u901F\u7387 (px/ms)</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0.06</code></td>
</tr>
<tr>
<td>marquee</td>
<td>\u662F\u5426\u5F00\u542F\u6EDA\u52A8\u64AD\u653E</td>
<td><code v-pre>boolean | 'auto'</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>ellipsis</td>
<td>\u662F\u5426\u5F00\u542F\u6587\u672C\u6362\u884C</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="noticebarref-shi-li-fang-fa" tabindex="-1">NoticeBarRef \u5B9E\u4F8B\u65B9\u6CD5</h3>
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
<td>reset()</td>
<td>\u6BCF\u5F53\u6EDA\u52A8\u680F\u91CD\u65B0\u5F00\u59CB\u6EDA\u52A8\u65F6\u89E6\u53D1</td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
