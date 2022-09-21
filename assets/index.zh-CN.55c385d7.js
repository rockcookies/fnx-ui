const n={},s=`<h1 id="stepper-bu-jin-qi" tabindex="-1">Stepper \u6B65\u8FDB\u5668</h1>
<p>\u6B65\u8FDB\u5668\u7531\u589E\u52A0\u6309\u94AE\u3001\u51CF\u5C11\u6309\u94AE\u548C\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u7528\u4E8E\u5728\u4E00\u5B9A\u8303\u56F4\u5185\u8F93\u5165\u3001\u8C03\u6574\u6570\u5B57\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jian-ting-shi-jian" tabindex="-1">\u76D1\u542C\u4E8B\u4EF6</h2>
<p>\u53EF\u4EE5\u901A\u8FC7 <code v-pre>onChange</code> \u4E8B\u4EF6\u76D1\u542C\u5230\u8F93\u5165\u503C\u7684\u53D8\u5316\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setValue</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="bu-chang-she-zhi" tabindex="-1">\u6B65\u957F\u8BBE\u7F6E</h2>
<p>\u901A\u8FC7 <code v-pre>step</code> \u5C5E\u6027\u8BBE\u7F6E\u6BCF\u6B21\u70B9\u51FB\u589E\u52A0\u6216\u51CF\u5C11\u6309\u94AE\u65F6\u53D8\u5316\u7684\u503C\uFF0C\u9ED8\u8BA4\u4E3A <code v-pre>1</code>\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xian-zhi-shu-ru-fan-wei" tabindex="-1">\u9650\u5236\u8F93\u5165\u8303\u56F4</h2>
<p>\u901A\u8FC7 <code v-pre>min</code> \u548C <code v-pre>max</code> \u5C5E\u6027\u9650\u5236\u8F93\u5165\u503C\u7684\u8303\u56F4\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xian-zhi-shu-ru-zheng-shu" tabindex="-1">\u9650\u5236\u8F93\u5165\u6574\u6570</h2>
<p>\u8BBE\u7F6E <code v-pre>integer</code> \u5C5E\u6027\u540E\uFF0C\u8F93\u5165\u6846\u5C06\u9650\u5236\u53EA\u80FD\u8F93\u5165\u6574\u6570\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">integer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h2>
<p>\u901A\u8FC7\u8BBE\u7F6E <code v-pre>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u6B65\u8FDB\u5668\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u65E0\u6CD5\u70B9\u51FB\u6309\u94AE\u6216\u4FEE\u6539\u8F93\u5165\u6846\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-shu-ru-kuang" tabindex="-1">\u7981\u7528\u8F93\u5165\u6846</h2>
<p>\u901A\u8FC7\u8BBE\u7F6E <code v-pre>disableInput</code> \u5C5E\u6027\u6765\u7981\u7528\u8F93\u5165\u6846\uFF0C\u6B64\u65F6\u6309\u94AE\u4ECD\u7136\u53EF\u4EE5\u70B9\u51FB\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">disableInput</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="gu-ding-xiao-shu-wei-shu" tabindex="-1">\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570</h2>
<p>\u901A\u8FC7\u8BBE\u7F6E <code v-pre>precision</code> \u5C5E\u6027\u53EF\u4EE5\u4FDD\u7559\u56FA\u5B9A\u7684\u5C0F\u6570\u4F4D\u6570\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u5927\u5C0F</h2>
<p>\u901A\u8FC7 <code v-pre>inputWidth</code> \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u5BBD\u5EA6\uFF0C\u901A\u8FC7 <code v-pre>buttonSize</code> \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\u548C\u8F93\u5165\u6846\u9AD8\u5EA6\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">inputWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> <span class="token attr-name">buttonSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yuan-jiao-feng-ge" tabindex="-1">\u5706\u89D2\u98CE\u683C</h2>
<p>\u5C06 <code v-pre>theme</code> \u8BBE\u7F6E\u4E3A <code v-pre>round</code> \u6765\u5C55\u793A\u5706\u89D2\u98CE\u683C\u7684\u6B65\u8FDB\u5668\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>min</td>
<td>\u6700\u5C0F\u503C</td>
<td><code v-pre>number | string | null</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>max</td>
<td>\u6700\u5927\u503C</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u521D\u59CB\u503C</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>value</td>
<td>\u5F53\u524D\u503C</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>mode</td>
<td>\u8BA1\u6B65\u5668\u6A21\u5F0F\uFF0C\u7C7B\u578B\u662F\u5B57\u7B26\u4E32</td>
<td><code v-pre>'number' | 'string'</code></td>
<td><code v-pre>'string'</code></td>
</tr>
<tr>
<td>step</td>
<td>\u6B65\u957F\uFF0C\u6BCF\u6B21\u70B9\u51FB\u65F6\u6539\u53D8\u7684\u503C</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>inputWidth</td>
<td>\u8F93\u5165\u6846\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>32px</code></td>
</tr>
<tr>
<td>buttonSize</td>
<td>\u6309\u94AE\u5927\u5C0F\u4EE5\u53CA\u8F93\u5165\u6846\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>28</code></td>
</tr>
<tr>
<td>precision</td>
<td>\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528\u6B65\u8FDB\u5668</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>disablePlus</td>
<td>\u662F\u5426\u7981\u7528\u589E\u52A0\u6309\u94AE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>disableMinus</td>
<td>\u662F\u5426\u7981\u7528\u51CF\u5C11\u6309\u94AE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>disableInput</td>
<td>\u662F\u5426\u7981\u7528\u8F93\u5165\u6846</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>showPlus</td>
<td>\u662F\u5426\u663E\u793A\u589E\u52A0\u6309\u94AE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>showMinus</td>
<td>\u662F\u5426\u663E\u793A\u51CF\u5C11\u6309\u94AE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>allowEmpty</td>
<td>\u662F\u5426\u5141\u8BB8\u8F93\u5165\u7684\u503C\u4E3A\u7A7A</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>longPress</td>
<td>\u662F\u5426\u5F00\u542F\u957F\u6309\u624B\u52BF</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>showInput</td>
<td>\u662F\u5426\u663E\u793A\u8F93\u5165\u6846</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
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
<td>\u76D1\u542C\u8F93\u5165\u503C\u7684\u53D8\u5316</td>
<td><code v-pre>(value: string | number | null)</code></td>
</tr>
<tr>
<td>onStep</td>
<td>\u70B9\u51FB\u52A0\u51CF\u6309\u94AE\u7684\u56DE\u8C03</td>
<td><code v-pre>(value: T,info: { offset: StepperValue; type: 'minus' | 'plus' })</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
