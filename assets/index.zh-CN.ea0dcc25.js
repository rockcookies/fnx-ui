const n={},a=`<h1 id="cascader-ji-lian-xuan-ze" tabindex="-1">Cascader \u7EA7\u8054\u9009\u62E9</h1>
<p>\u7EA7\u8054\u9009\u62E9\u6846\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u7EA7\u8054\u9009\u62E9\u7EC4\u4EF6\u53EF\u4EE5\u642D\u914D Field \u548C Popup \u7EC4\u4EF6\u4F7F\u7528\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Hubei'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'420000'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Wuhan'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'420100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Yichang'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'420500'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Jiangxi'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'360000'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Nanchang'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'360100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Jingdezhen'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'360200'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fields<span class="token punctuation">,</span> setFields<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup.Select</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Area<span class="token punctuation">"</span></span>
          <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">setFields</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' / '</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Area<span class="token punctuation">"</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">readOnly</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Area<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fields<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h2>
<p>\u901A\u8FC7 <code v-pre>activeColor</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Hubei'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'420000'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Wuhan'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'420100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Yichang'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'420500'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Jiangxi'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'360000'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Nanchang'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'360100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Jingdezhen'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'360200'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Area<span class="token punctuation">"</span></span> <span class="token attr-name">activeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1989fa<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yi-bu-jia-zai-xuan-xiang" tabindex="-1">\u5F02\u6B65\u52A0\u8F7D\u9009\u9879</h2>
<p>\u53EF\u4EE5\u76D1\u542C <code v-pre>onLoadData</code> \u4E8B\u4EF6\u5E76\u52A8\u6001\u8BBE\u7F6E <code v-pre>options</code>\uFF0C\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cascader<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Hubei'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'420000'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Wuhan'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'420100'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'JiangAn'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'420102'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'QiaoKou'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'420104'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Yichang'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'420500'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'XiLing'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'420502'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'YiLing'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'420506'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Jiangxi'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'360000'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Nanchang'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'360100'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'DongHu'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'360102'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'XiHu'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'360103'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Jingdezhen'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'360200'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'ChangJiang'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'360202'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'ZhuShan'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'360203'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fields<span class="token punctuation">,</span> setFields<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>asyncData<span class="token punctuation">,</span> setAsyncData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>CascaderOption<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> item<span class="token punctuation">.</span>label<span class="token punctuation">,</span> value<span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> findOption <span class="token operator">=</span> <span class="token punctuation">(</span>
    tree<span class="token operator">:</span> CascaderOption<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> CascaderOption <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> tree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> item<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token function">findOption</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> option<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Popup<span class="token punctuation">.</span>Select
      round
      select<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>Cascader
          data<span class="token operator">=</span><span class="token punctuation">{</span>asyncData<span class="token punctuation">}</span>
          title<span class="token operator">=</span><span class="token string">"Select Area"</span>
          onLoadData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> option <span class="token operator">=</span> options<span class="token punctuation">[</span>options<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            option<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token function">setAsyncData</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prev<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">findOption</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> option<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>

              option<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
              option<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children<span class="token operator">?.</span><span class="token generic-function"><span class="token function">map</span><span class="token generic class-name"><span class="token operator">&lt;</span>CascaderOption<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
                label<span class="token operator">:</span> o<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
                value<span class="token operator">:</span> o<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                children<span class="token operator">:</span> o<span class="token punctuation">.</span>children <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token function">setAsyncData</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prev<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
          onConfirm<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">setFields</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' / '</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Area<span class="token punctuation">"</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">readOnly</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Area<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fields<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-zi-duan-ming" tabindex="-1">\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D</h2>
<p>\u901A\u8FC7 <code v-pre>dataNames</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code v-pre>options</code> \u91CC\u7684\u5B57\u6BB5\u540D\u79F0\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">'Hubei'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'420000'</span><span class="token punctuation">,</span>
    list<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Wuhan'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'420100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Yichang'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'420500'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">'Jiangxi'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'360000'</span><span class="token punctuation">,</span>
    list<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Nanchang'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'360100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Jingdezhen'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'360200'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Area<span class="token punctuation">"</span></span>
      <span class="token attr-name">dataNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'text'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token string">'list'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="cascader-props" tabindex="-1">Cascader Props</h3>
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
<td>\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u503C</td>
<td><code v-pre>number[]</code> | <code v-pre>string[]</code></td>
<td><code v-pre>[]</code></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td>
<td><code v-pre>CascaderOption[]</code></td>
<td><code v-pre>[]</code></td>
<td></td>
</tr>
<tr>
<td>dataNames</td>
<td>\u81EA\u5B9A\u4E49 data \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td>
<td><code v-pre>CascaderDataNames</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u9876\u90E8\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u672A\u9009\u4E2D\u65F6\u7684\u63D0\u793A\u6587\u6848</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>\u8BF7\u9009\u62E9</code></td>
<td></td>
</tr>
<tr>
<td>activeColor</td>
<td>\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272</td>
<td><code v-pre>string</code></td>
<td><code v-pre>#2196F3</code></td>
<td></td>
</tr>
<tr>
<td>swipeable</td>
<td>\u662F\u5426\u5F00\u542F\u624B\u52BF\u5DE6\u53F3\u6ED1\u52A8\u5207\u6362</td>
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
<td>slots</td>
<td>\u7EC4\u4EF6\u63D2\u69FD</td>
<td><code v-pre>CascaderSlots</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cascaderdatanames" tabindex="-1">CascaderDataNames</h3>
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
<td>label</td>
<td>\u9009\u9879\u5C55\u793A\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>\u9009\u9879\u5BF9\u5E94\u7684\u503C</td>
<td><code v-pre>CascaderValue</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>\u662F\u5426\u52A0\u8F7D</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>\u5B50\u5143\u7D20(\u7C7B\u578B\u540C data)</td>
<td><code v-pre>CascaderOption[]</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cascaderslots" tabindex="-1">CascaderSlots</h3>
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
<td>option</td>
<td>\u81EA\u5B9A\u4E49\u9009\u9879\u6587\u5B57</td>
<td><code v-pre>(option: T, state: { selected: boolean }) =&gt; ReactNode</code></td>
<td></td>
</tr>
<tr>
<td>optionsTop</td>
<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u7684\u5185\u5BB9</td>
<td><code v-pre>(tabIndex: number) =&gt; ReactNode</code></td>
<td></td>
</tr>
<tr>
<td>optionsBottom</td>
<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u7684\u5185\u5BB9</td>
<td><code v-pre>(tabIndex: number) =&gt; ReactNode</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cascader-events" tabindex="-1">Cascader Events</h3>
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
<td>onLoadData</td>
<td>\u5F02\u6B65\u52A0\u8F7D\u65F6\u89E6\u53D1</td>
<td><code v-pre>(options: CascaderOption[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onConfirm</td>
<td>\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1</td>
<td><code v-pre>(value: string[] | number[], options: CascaderOption[]) =&gt; void</code></td>
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
<td><code v-pre>(value: string[] | number[], options: CascaderOption[]) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
