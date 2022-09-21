const n={},a=`<h1 id="picker-xuan-ze-qi" tabindex="-1">Picker \u9009\u62E9\u5668</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p>
<h3 id="xuan-xiang-pei-zhi" tabindex="-1">\u9009\u9879\u914D\u7F6E</h3>
<p><code v-pre>Picker</code> \u7EC4\u4EF6\u901A\u8FC7 <code v-pre>data</code> \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u6570\u636E\uFF0C<code v-pre>data</code> \u662F\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\u6216\u8005\u5B57\u7B26\u6570\u7EC4\u3002</p>
<h3 id="ding-bu-lan" tabindex="-1">\u9876\u90E8\u680F</h3>
<p>\u8BBE\u7F6E <code v-pre>toolbar</code> \u5C5E\u6027\u540E\u4F1A\u5C55\u793A\u9876\u90E8\u64CD\u4F5C\u680F\uFF0C\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1 <code v-pre>onConfirm</code> \u4E8B\u4EF6\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u89E6\u53D1 <code v-pre>onCancel</code> \u4E8B\u4EF6\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pickerData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'China'</span><span class="token punctuation">,</span>
  <span class="token string">'United States'</span><span class="token punctuation">,</span>
  <span class="token string">'United Kingdom'</span><span class="token punctuation">,</span>
  <span class="token string">'Germany'</span><span class="token punctuation">,</span>
  <span class="token string">'France'</span><span class="token punctuation">,</span>
  <span class="token string">'Italy'</span><span class="token punctuation">,</span>
  <span class="token string">'Japan'</span><span class="token punctuation">,</span>
  <span class="token string">'Spain'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span> <span class="token attr-name">toolbar</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pickerData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="mo-ren-xuan-zhong-xiang" tabindex="-1">\u9ED8\u8BA4\u9009\u4E2D\u9879</h2>
<p>\u5355\u5217\u9009\u62E9\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code v-pre>defaultValue</code> \u5C5E\u6027\u8BBE\u7F6E\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'China'</span><span class="token punctuation">,</span>
  <span class="token string">'United States'</span><span class="token punctuation">,</span>
  <span class="token string">'United Kingdom'</span><span class="token punctuation">,</span>
  <span class="token string">'Germany'</span><span class="token punctuation">,</span>
  <span class="token string">'France'</span><span class="token punctuation">,</span>
  <span class="token string">'Italy'</span><span class="token punctuation">,</span>
  <span class="token string">'Japan'</span><span class="token punctuation">,</span>
  <span class="token string">'Spain'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span> <span class="token attr-name">data</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="duo-lie-xuan-ze" tabindex="-1">\u591A\u5217\u9009\u62E9</h2>
<p><code v-pre>Picker.Multi</code> \u53EF\u4EE5\u914D\u7F6E\u591A\u5217\u9009\u62E9\uFF0C</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'Monday'</span><span class="token punctuation">,</span>
    <span class="token string">'Tuesday'</span><span class="token punctuation">,</span>
    <span class="token string">'Wednesday'</span><span class="token punctuation">,</span>
    <span class="token string">'Thursday'</span><span class="token punctuation">,</span>
    <span class="token string">'Friday'</span><span class="token punctuation">,</span>
    <span class="token string">'Saturday'</span><span class="token punctuation">,</span>
    <span class="token string">'Sunday'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'Morning'</span><span class="token punctuation">,</span> <span class="token string">'Afternoon'</span><span class="token punctuation">,</span> <span class="token string">'Evening'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker.Multi</span></span> <span class="token attr-name">data</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Multi<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="ji-lian-xuan-ze" tabindex="-1">\u7EA7\u8054\u9009\u62E9</h2>
<p><code v-pre>Picker.Multi</code> \u53EF\u4EE5\u914D\u7F6E\u591A\u5217\u9009\u62E9\uFF0C</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'China'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Beijing'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Haidian'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Chaoyang'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Shanghai'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Zhabei'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Jingan'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'United State'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'New York'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Manhattan'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Brooklyn'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'California'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Los Angeles'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'San Francisco'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker.Cascade</span></span>
      <span class="token attr-name">data</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cascade<span class="token punctuation">"</span></span>
      <span class="token attr-name">dataNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token string">'child'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-xuan-xiang" tabindex="-1">\u7981\u7528\u9009\u9879</h2>
<p>\u9009\u9879\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code v-pre>disabled</code> \u6765\u7981\u7528\u8BE5\u9009\u9879\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'Monday'</span><span class="token punctuation">,</span>
    <span class="token string">'Tuesday'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Wednesday'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'Wednesday'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'Thursday'</span><span class="token punctuation">,</span>
    <span class="token string">'Friday'</span><span class="token punctuation">,</span>
    <span class="token string">'Saturday'</span><span class="token punctuation">,</span>
    <span class="token string">'Sunday'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'Morning'</span><span class="token punctuation">,</span> <span class="token string">'Afternoon'</span><span class="token punctuation">,</span> <span class="token string">'Evening'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker.Multi</span></span> <span class="token attr-name">data</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Multi<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>

  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-data-jie-gou" tabindex="-1">\u81EA\u5B9A\u4E49 data \u7ED3\u6784</h2>
<p>\u9009\u9879\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code v-pre>disabled</code> \u6765\u7981\u7528\u8BE5\u9009\u9879\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'China'</span><span class="token punctuation">,</span>
    child<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Beijing'</span><span class="token punctuation">,</span>
        child<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Haidian'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Chaoyang'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Shanghai'</span><span class="token punctuation">,</span>
        child<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Zhabei'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Jingan'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'United State'</span><span class="token punctuation">,</span>
    child<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'New York'</span><span class="token punctuation">,</span>
        child<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Manhattan'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Brooklyn'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'California'</span><span class="token punctuation">,</span>
        child<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Los Angeles'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'San Francisco'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker.Cascade</span></span>
      <span class="token attr-name">data</span>
      <span class="token attr-name">cascadeSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Custom Structure<span class="token punctuation">"</span></span>
      <span class="token attr-name">dataNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token string">'child'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h2>
<p>\u82E5\u9009\u62E9\u5668\u6570\u636E\u662F\u5F02\u6B65\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code v-pre>loading</code> \u5C5E\u6027\u663E\u793A\u52A0\u8F7D\u63D0\u793A\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pickerData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'Monday'</span><span class="token punctuation">,</span>
    <span class="token string">'Tuesday'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Wednesday'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'Wednesday'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'Thursday'</span><span class="token punctuation">,</span>
    <span class="token string">'Friday'</span><span class="token punctuation">,</span>
    <span class="token string">'Saturday'</span><span class="token punctuation">,</span>
    <span class="token string">'Sunday'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'Morning'</span><span class="token punctuation">,</span> <span class="token string">'Afternoon'</span><span class="token punctuation">,</span> <span class="token string">'Evening'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker.Multi</span></span>
      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pickerData<span class="token punctuation">}</span></span>
      <span class="token attr-name">loading</span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>pickerData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pickerData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Multi<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="da-pei-dan-chu-ceng-shi-yong" tabindex="-1">\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528</h2>
<p>\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0C<code v-pre>Picker</code> \u901A\u5E38\u4F5C\u4E3A\u7528\u4E8E\u8F85\u52A9\u8868\u5355\u586B\u5199\uFF0C\u53EF\u4EE5\u642D\u914D <code v-pre>Popup</code> \u548C <code v-pre>Field</code> \u5B9E\u73B0\u8BE5\u6548\u679C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Picker<span class="token punctuation">,</span> Popup<span class="token punctuation">,</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pickerData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'Monday'</span><span class="token punctuation">,</span>
    <span class="token string">'Tuesday'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Wednesday'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'Wednesday'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'Thursday'</span><span class="token punctuation">,</span>
    <span class="token string">'Friday'</span><span class="token punctuation">,</span>
    <span class="token string">'Saturday'</span><span class="token punctuation">,</span>
    <span class="token string">'Sunday'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'Morning'</span><span class="token punctuation">,</span> <span class="token string">'Afternoon'</span><span class="token punctuation">,</span> <span class="token string">'Evening'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span> <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pickerData<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">readOnly</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">||</span> <span class="token string">'Please Select !'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="pickerprops-api" tabindex="-1">PickerProps API</h2>
<p>\u7C7B\u578B <code v-pre>PickerProps</code> \u7EE7\u627F\u7C7B\u578B <code v-pre>PickerBaseProps</code> \uFF0C<code v-pre>PickerBaseProps</code> \u662F\u7EC4\u4EF6\u57FA\u7840\u7684\u7C7B\u578B\u3002</p>
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
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>\u6240\u6709\u7684\u6570\u636E</td>
<td><code v-pre>PickerOption[] | string | numbe</code></td>
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
<td>onConfirm</td>
<td>\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1</td>
<td><code v-pre>value: T | undefined</code></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td>
<td><code v-pre>value: T | undefined</code></td>
</tr>
</tbody>
</table>
<h3 id="pickercascade-api" tabindex="-1">PickerCascade API</h3>
<p>\u7C7B\u578B <code v-pre>PickerCascade</code> \u7EE7\u627F\u7C7B\u578B <code v-pre>PickerBaseProps</code>\u3002</p>
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
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td>
<td><code v-pre>string[] | number[]</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>\u6240\u6709\u7684\u6570\u636E</td>
<td><code v-pre>PickerOption[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="pickermulti-api" tabindex="-1">PickerMulti API</h3>
<p>\u7C7B\u578B <code v-pre>PickerMulti</code> \u7EE7\u627F\u7C7B\u578B <code v-pre>PickerBaseProps</code>\u3002</p>
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
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td>
<td><code v-pre>string[] | number[]</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>\u6240\u6709\u7684\u6570\u636E</td>
<td><code v-pre>Array&lt;PickerOption[] | string[] | number[]&gt;</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="pickerbaseprops-api" tabindex="-1">PickerBaseProps API</h3>
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
<td>\u81EA\u5B9A\u4E49\u9876\u90E8\u680F\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>optionHeight</td>
<td>\u9009\u9879\u9AD8\u5EA6,\u9ED8\u8BA4 <code v-pre>px</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>44</code></td>
</tr>
<tr>
<td>visibleOptionsCount</td>
<td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D <code v-pre>ms</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>toolbar</td>
<td>\u81EA\u5B9A\u4E49\u9876\u90E8\u680F</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>toolbarPosition</td>
<td>\u81EA\u5B9A\u4E49\u9876\u90E8\u680F\u4F4D\u7F6E</td>
<td><code v-pre>'top' | 'bottom'</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>confirmButton</td>
<td>\u786E\u8BA4\u6309\u94AE</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>Confirm</code></td>
</tr>
<tr>
<td>cancelButton</td>
<td>\u53D6\u6D88\u6309\u94AE</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>Cancel</code></td>
</tr>
<tr>
<td>loading</td>
<td>\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>dataNames</td>
<td>\u81EA\u5B9A\u4E49 <code v-pre>data</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td>
<td><code v-pre>PickerDataNames</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="data-shu-ju-jie-gou" tabindex="-1">data \u6570\u636E\u7ED3\u6784</h3>
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
<td>label</td>
<td>\u9009\u9879\u6587\u672C</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>\u9009\u62E9\u9009\u62E9</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>\u9009\u9879\u7981\u7528</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>\u9009\u9879\u5B50\u5143\u7D20</td>
<td><code v-pre>PickerOption[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="datanames-shu-ju-jie-gou" tabindex="-1">dataNames \u6570\u636E\u7ED3\u6784</h3>
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
<td>label</td>
<td>\u9009\u9879\u6587\u5B57</td>
<td><code v-pre>string | string[] </code></td>
<td><code v-pre>'label'</code></td>
</tr>
<tr>
<td>value</td>
<td>\u9009\u9879\u9009\u4E2D\u5185\u5BB9</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'value'</code></td>
</tr>
<tr>
<td>children</td>
<td>\u9009\u9879\u5B50\u5143\u7D20</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'children'</code></td>
</tr>
<tr>
<td>disabled</td>
<td>\u9009\u9879\u7981\u7528</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'disabled'</code></td>
</tr>
</tbody>
</table>
<h3 id="pickermultiref-he-pickercascaderef-shi-li-fang-fa" tabindex="-1">PickerMultiRef \u548C PickerCascadeRef \u5B9E\u4F8B\u65B9\u6CD5</h3>
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
<td>getValue()</td>
<td>\u83B7\u53D6\u7EC4\u4EF6\u5F53\u524D\u9009\u4E2D\u7684\u503C</td>
<td>-</td>
<td><code v-pre>PickerValue[]</code></td>
</tr>
<tr>
<td>getOptions()</td>
<td>\u83B7\u53D6\u7EC4\u4EF6\u5F53\u524D\u9009\u4E2D\u7684\u503C</td>
<td>-</td>
<td><code v-pre>PickerOptionOrValue[]</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
