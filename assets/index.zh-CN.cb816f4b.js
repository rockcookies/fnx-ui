const n={},a=`<h1 id="switch-kai-guan" tabindex="-1">Switch \u5F00\u5173</h1>
<p>\u7528\u4E8E\u5728\u6253\u5F00\u548C\u5173\u95ED\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u901A\u8FC7 <code v-pre>checked</code> \u7ED1\u5B9A\u5F00\u5173\u7684\u9009\u4E2D\u72B6\u6001\uFF0C<code v-pre>true</code> \u8868\u793A\u5F00\uFF0C<code v-pre>false</code> \u8868\u793A\u5173\u3002<code v-pre>defaultChecked</code>\u8868\u793A\u5F00\u5173\u9ED8\u8BA4\u7684\u72B6\u6001\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">defaultChecked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h2>
<p>\u901A\u8FC7 <code v-pre>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u5F00\u5173\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h2>
<p>\u901A\u8FC7 <code v-pre>loading</code> \u5C5E\u6027\u8BBE\u7F6E\u5F00\u5173\u4E3A\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u5927\u5C0F</h2>
<p>\u901A\u8FC7 <code v-pre>size</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u5927\u5C0F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h2>
<p><code v-pre>activeColor</code> \u5C5E\u6027\u8868\u793A\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272\uFF0C<code v-pre>inactiveColor</code> \u8868\u793A\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">activeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ee0a24<span class="token punctuation">"</span></span> <span class="token attr-name">inactiveColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#0000ff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="wen-zi-yu-tu-biao" tabindex="-1">\u6587\u5B57\u4E0E\u56FE\u6807</h2>
<p>\u8BBE\u7F6E\u6587\u5B57\u4E0E\u56FE\u6807</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>NO<span class="token punctuation">"</span></span> <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>OFF<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yi-bu-kong-zhi" tabindex="-1">\u5F02\u6B65\u63A7\u5236</h2>
<p>\u9700\u8981\u5F02\u6B65\u63A7\u5236\u5F00\u5173\u65F6\u53EF\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u624B\u52A8\u5904\u7406\u5F00\u5173\u72B6\u6001\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>syncChecked<span class="token punctuation">,</span> setSyncChecked<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleSyncChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setSyncChecked</span><span class="token punctuation">(</span><span class="token operator">!</span>syncChecked<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>syncChecked<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSyncChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSyncChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>size</td>
<td>\u5F00\u5173\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code v-pre>px</code></td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>30</code></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>checked</td>
<td>\u5F00\u5173\u9009\u4E2D\u72B6\u6001</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>defaultChecked</td>
<td>\u662F\u5426\u9ED8\u8BA4\u9009\u4E2D</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>loading</td>
<td>\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>checkedColor</td>
<td>\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>unCheckedColor</td>
<td>\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>checkedChildren</td>
<td>\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>unCheckedChildren</td>
<td>\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
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
<td>onClick</td>
<td>\u70B9\u51FB\u5F00\u5173\u65F6\u89E6\u53D1</td>
<td><code v-pre>(checked: boolean)</code></td>
</tr>
<tr>
<td>onChange</td>
<td>\u5F00\u5173\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1</td>
<td><code v-pre>(checked: boolean, event: MouseEvent&lt;HTMLDivElement&gt;)</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
