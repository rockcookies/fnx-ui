const n={},a=`<h1 id="cascader-ji-lian-xuan-ze" tabindex="-1">Cascader 级联选择</h1>
<p>级联选择框，用于多层级数据的选择，典型场景为省市区选择。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>级联选择组件可以搭配 Field 和 Popup 组件使用。</p>
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
<h2 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h2>
<p>通过 <code v-pre>activeColor</code> 属性来设置选中状态的高亮颜色。</p>
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
<h2 id="yi-bu-jia-zai-xuan-xiang" tabindex="-1">异步加载选项</h2>
<p>可以监听 <code v-pre>onLoadData</code> 事件并动态设置 <code v-pre>options</code>，实现异步加载选项。</p>
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
<h2 id="zi-ding-yi-zi-duan-ming" tabindex="-1">自定义字段名</h2>
<p>通过 <code v-pre>dataNames</code> 属性可以自定义 <code v-pre>options</code> 里的字段名称。</p>
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
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>默认选中项的值</td>
<td><code v-pre>number[]</code> | <code v-pre>string[]</code></td>
<td><code v-pre>[]</code></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>可选项数据源</td>
<td><code v-pre>CascaderOption[]</code></td>
<td><code v-pre>[]</code></td>
<td></td>
</tr>
<tr>
<td>dataNames</td>
<td>自定义 data 结构中的字段</td>
<td><code v-pre>CascaderDataNames</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>顶部标题</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>未选中时的提示文案</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>请选择</code></td>
<td></td>
</tr>
<tr>
<td>activeColor</td>
<td>选中状态的高亮颜色</td>
<td><code v-pre>string</code></td>
<td><code v-pre>#2196F3</code></td>
<td></td>
</tr>
<tr>
<td>swipeable</td>
<td>是否开启手势左右滑动切换</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>closeIcon</td>
<td>自定义关闭图标</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>slots</td>
<td>组件插槽</td>
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
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>选项展示内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>选项对应的值</td>
<td><code v-pre>CascaderValue</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>是否加载</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>子元素(类型同 data)</td>
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
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>option</td>
<td>自定义选项文字</td>
<td><code v-pre>(option: T, state: { selected: boolean }) =&gt; ReactNode</code></td>
<td></td>
</tr>
<tr>
<td>optionsTop</td>
<td>自定义选项上方的内容</td>
<td><code v-pre>(tabIndex: number) =&gt; ReactNode</code></td>
<td></td>
</tr>
<tr>
<td>optionsBottom</td>
<td>自定义选项下方的内容</td>
<td><code v-pre>(tabIndex: number) =&gt; ReactNode</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cascader-events" tabindex="-1">Cascader Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLoadData</td>
<td>异步加载时触发</td>
<td><code v-pre>(options: CascaderOption[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onConfirm</td>
<td>全部选项选择完成后触发</td>
<td><code v-pre>(value: string[] | number[], options: CascaderOption[]) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>点击关闭图标时触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onChange</td>
<td>选中项变化时触发</td>
<td><code v-pre>(value: string[] | number[], options: CascaderOption[]) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
