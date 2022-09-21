const n={},a=`<h1 id="calendar-ri-li" tabindex="-1">Calendar \u65E5\u5386</h1>
<p>\u65E5\u5386\u7EC4\u4EF6\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u533A\u95F4\u3002</p>
<h2 id="xuan-ze-dan-ge-ri-qi" tabindex="-1">\u9009\u62E9\u5355\u4E2A\u65E5\u671F</h2>
<p>\u65E5\u5386\u7EC4\u4EF6\u53EF\u4EE5\u642D\u914D Cell \u548C Popup \u7EC4\u4EF6\u4F7F\u7528\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span> <span class="token attr-name">round</span> <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
            value
              <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
              <span class="token operator">:</span> <span class="token string">'Please Select'</span>
          <span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-ze-duo-ge-ri-qi" tabindex="-1">\u9009\u62E9\u591A\u4E2A\u65E5\u671F</h2>
<p>Calendar.Multi \u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u65E5\u671F\uFF0C\u6B64\u65F6 <code v-pre>value</code> \u4E3A\u6570\u7EC4\u7ED3\u6784\uFF0C\u6570\u7EC4\u5305\u542B\u82E5\u5E72\u4E2A\u9009\u4E2D\u7684\u65E5\u671F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span> <span class="token attr-name">round</span> <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar.Multi</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> dates selected</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">'Please Select'</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-ze-ri-qi-qu-jian" tabindex="-1">\u9009\u62E9\u65E5\u671F\u533A\u95F4</h2>
<p>Calendar.Range \u53EF\u4EE5\u9009\u62E9\u65E5\u671F\u533A\u95F4\uFF0C\u6B64\u65F6 <code v-pre>value</code> \u4E3A\u6570\u7EC4\u7ED3\u6784\uFF0C\u6570\u7EC4\u7B2C\u4E00\u9879\u4E3A\u5F00\u59CB\u65E5\u671F\uFF0C\u7B2C\u4E8C\u9879\u4E3A\u7ED3\u675F\u65E5\u671F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">formatDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span> <span class="token attr-name">round</span> <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar.Range</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
            value
              <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatDate</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatDate</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
              <span class="token operator">:</span> <span class="token string">'Please Select'</span>
          <span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65E5\u671F\u533A\u95F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E0D\u80FD\u4E3A\u540C\u4E00\u5929\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code v-pre>allowSameDay</code> \u5C5E\u6027\u6765\u5141\u8BB8\u9009\u62E9\u540C\u4E00\u5929\u3002</strong></p>
<h2 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h2>
<p>\u901A\u8FC7 <code v-pre>color</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u5386\u7684\u989C\u8272\uFF0C\u5BF9\u9009\u4E2D\u65E5\u671F\u548C\u5E95\u90E8\u6309\u94AE\u751F\u6548\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span> <span class="token attr-name">round</span> <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--fnx-success-color)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please Select<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">&amp;&amp;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-an-niu-wen-zi" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57</h2>
<p>\u901A\u8FC7 <code v-pre>confirmText</code> \u8BBE\u7F6E\u6309\u94AE\u6587\u5B57\uFF0C\u901A\u8FC7 <code v-pre>confirmDisabledText</code> \u8BBE\u7F6E\u6309\u94AE\u7981\u7528\u65F6\u7684\u6587\u5B57\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">formatDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar.Range</span></span>
          <span class="token attr-name">confirmText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>OK<span class="token punctuation">"</span></span>
          <span class="token attr-name">confirmDisabledText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select End Date<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
            value
              <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatDate</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatDate</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
              <span class="token operator">:</span> <span class="token string">'Please Select'</span>
          <span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-ri-qi-fan-wei" tabindex="-1">\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4</h2>
<p>\u901A\u8FC7 <code v-pre>minDate</code> \u548C <code v-pre>maxDate</code> \u5B9A\u4E49\u65E5\u5386\u7684\u8303\u56F4\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span>
          <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2021/9/1'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2021/10/31'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please Select<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">&amp;&amp;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-ri-qi-yuan-su" tabindex="-1">\u81EA\u5B9A\u4E49\u65E5\u671F\u5143\u7D20</h2>
<p>\u901A\u8FC7\u4F20\u5165 <code v-pre>slots</code> \u5BF9\u8C61\u6765\u5BF9\u65E5\u5386\u7684\u5143\u7D20\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">dayFormatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  day <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>day <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> month <span class="token operator">=</span> day<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> date <span class="token operator">=</span> day<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>month <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      day<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'disabled'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      day<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'multiple-selected'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      day<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'middle'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    &lt;Popup.Select
      round
      select=</span><span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span>
          <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2021/10/01'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2021/11/01'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2021/10/01'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token function-variable function">day</span><span class="token operator">:</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar.Day</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">dayFormatter</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            <span class="token function-variable function">subTitle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'SubTitle'</span><span class="token punctuation">,</span>
            footer<span class="token operator">:</span> <span class="token string">'Footer'</span><span class="token punctuation">,</span>
            monthMark<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            monthTitle<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">}</span><span class="token plain-text">
    >
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please Select<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">&amp;&amp;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="ri-qi-qu-jian-zui-da-fan-wei" tabindex="-1">\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4</h2>
<p>\u4F7F\u7528 Calendar.Range \u6216 Calendar.Multi \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code v-pre>maxSize</code> \u5C5E\u6027\u6765\u6307\u5B9A\u6700\u591A\u53EF\u9009\u5929\u6570\uFF0C\u9009\u62E9\u7684\u8303\u56F4\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\uFF0C\u53EF\u4EE5\u5F39\u51FA\u76F8\u5E94\u7684\u63D0\u793A\u6587\u6848\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Popup<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">formatDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar.Range</span></span>
          <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">onMaxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Choose no more than 3 days'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
            value
              <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatDate</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatDate</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
              <span class="token operator">:</span> <span class="token string">'Please Select'</span>
          <span class="token punctuation">}</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<p>\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u4E09\u79CD\u5F62\u5F0F\u3002</p>
<ul>
<li>Calendar</li>
<li>Calendar.Multi</li>
<li>Calendar.Range</li>
</ul>
<h3 id="gong-tong-de-props" tabindex="-1">\u5171\u540C\u7684 Props</h3>
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
<td>title</td>
<td>\u65E5\u5386\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>'\u65E5\u671F\u9009\u62E9'</code></td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>\u4E3B\u9898\u8272\uFF0C\u5BF9\u5E95\u90E8\u6309\u94AE\u548C\u9009\u4E2D\u65E5\u671F\u751F\u6548</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minDate</td>
<td>\u53EF\u9009\u62E9\u7684\u6700\u5C0F\u65E5\u671F</td>
<td><code v-pre>Date</code> | <code v-pre>string</code> | <code v-pre>number</code></td>
<td>\u5F53\u524D\u65E5\u671F</td>
<td></td>
</tr>
<tr>
<td>maxDate</td>
<td>\u53EF\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F</td>
<td><code v-pre>Date</code> | <code v-pre>string</code> | <code v-pre>number</code></td>
<td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td>
<td></td>
</tr>
<tr>
<td>dayHeight</td>
<td>\u65E5\u671F\u884C\u9AD8</td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td><code v-pre>64</code></td>
<td></td>
</tr>
<tr>
<td>readonly</td>
<td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u4E0D\u80FD\u9009\u62E9\u65E5\u671F</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>closeIcon</td>
<td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>firstDayOfWeek</td>
<td>\u8BBE\u7F6E\u5468\u8D77\u59CB\u65E5</td>
<td><code v-pre>0-6</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>slots</td>
<td>\u65E5\u671F\u63D2\u69FD</td>
<td><code v-pre>CalendarSlots</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>confirmText</td>
<td>\u786E\u8BA4\u6309\u94AE\u6587\u672C</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>'\u786E\u5B9A'</code></td>
<td></td>
</tr>
<tr>
<td>confirmDisabledText</td>
<td>\u786E\u8BA4\u6309\u94AE\u5904\u4E8E\u7981\u7528\u72B6\u6001\u65F6\u7684\u6587\u5B57</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>'\u786E\u5B9A'</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendarslots" tabindex="-1">CalendarSlots</h3>
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
<td>day</td>
<td>\u5355\u4E2A\u65E5\u671F\u8BBE\u7F6E</td>
<td><code v-pre>(day: CalendarDayComponentProps) =&gt; ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>subTitle</td>
<td>\u81EA\u5B9A\u4E49\u5934\u90E8\u65E5\u671F\u533A\u57DF\u5185\u5BB9</td>
<td><code v-pre> boolean</code> | <code v-pre>((date: Date) =&gt; ReactNode)</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>monthMark</td>
<td>\u662F\u5426\u663E\u793A\u6708\u4EFD\u80CC\u666F\u6C34\u5370</td>
<td><code v-pre>boolean</code> | <code v-pre>((date: Date) =&gt; ReactNode)</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>monthTitle</td>
<td>\u6708\u4EFD\u6807\u9898</td>
<td><code v-pre>boolean</code> | <code v-pre>((date: Date) =&gt; ReactNode)</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar-props" tabindex="-1">Calendar Props</h3>
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
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F</td>
<td><code v-pre>Date</code> | <code v-pre>string</code> | <code v-pre>number</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar-shi-jian" tabindex="-1">Calendar \u4E8B\u4EF6</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onConfirm</td>
<td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1</td>
<td><code v-pre>(value: Date) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onChange</td>
<td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td>
<td><code v-pre>(value: Date) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar.multi-props" tabindex="-1">Calendar.Multi Props</h3>
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
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F</td>
<td><code v-pre>Array&lt;Date | string | number&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxSize</td>
<td>\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F\u4E2A\u6570</td>
<td><code v-pre>number</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar.multi-shi-jian" tabindex="-1">Calendar.Multi \u4E8B\u4EF6</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onConfirm</td>
<td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1</td>
<td><code v-pre>(value: Date[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onChange</td>
<td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td>
<td><code v-pre>(value: Date[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onMaxSize</td>
<td>\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar.range-props" tabindex="-1">Calendar.Range Props</h3>
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
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F\u533A\u95F4</td>
<td><code v-pre>Array&lt;Date | string | number&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>allowSameDay</td>
<td>\u662F\u5426\u53EF\u4EE5\u9009\u5B9A\u5F00\u59CB\u548C\u7ED3\u675F\u662F\u540C\u4E00\u5929</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>maxSize</td>
<td>\u65E5\u671F\u533A\u95F4\u6700\u591A\u53EF\u9009\u5929\u6570</td>
<td><code v-pre>number</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar.range-shi-jian" tabindex="-1">Calendar.Range \u4E8B\u4EF6</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onConfirm</td>
<td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1</td>
<td><code v-pre>(value: Date[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onChange</td>
<td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td>
<td><code v-pre>(value: Date[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onMaxSize</td>
<td>\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u89E6\u53D1</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="calendar-shi-li-fang-fa" tabindex="-1">Calendar \u5B9E\u4F8B\u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>reset</td>
<td>\u91CD\u7F6E\u7EC4\u4EF6</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
