const n={},a=`<h1 id="picker-xuan-ze-qi" tabindex="-1">Picker 选择器</h1>
<p>创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。</p>
<h3 id="xuan-xiang-pei-zhi" tabindex="-1">选项配置</h3>
<p><code v-pre>Picker</code> 组件通过 <code v-pre>data</code> 属性配置选项数据，<code v-pre>data</code> 是一个对象数组或者字符数组。</p>
<h3 id="ding-bu-lan" tabindex="-1">顶部栏</h3>
<p>设置 <code v-pre>toolbar</code> 属性后会展示顶部操作栏，确认按钮和取消按钮，点击确认按钮触发 <code v-pre>onConfirm</code> 事件，点击取消按钮触发 <code v-pre>onCancel</code> 事件。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
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
<h2 id="mo-ren-xuan-zhong-xiang" tabindex="-1">默认选中项</h2>
<p>单列选择时，可以通过 <code v-pre>defaultValue</code> 属性设置初始选中项的索引。</p>
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
<h2 id="duo-lie-xuan-ze" tabindex="-1">多列选择</h2>
<p><code v-pre>Picker.Multi</code> 可以配置多列选择，</p>
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
<h2 id="ji-lian-xuan-ze" tabindex="-1">级联选择</h2>
<p><code v-pre>Picker.Multi</code> 可以配置多列选择，</p>
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
<h2 id="jin-yong-xuan-xiang" tabindex="-1">禁用选项</h2>
<p>选项可以为对象结构，通过设置 <code v-pre>disabled</code> 来禁用该选项。</p>
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
<h2 id="zi-ding-yi-data-jie-gou" tabindex="-1">自定义 data 结构</h2>
<p>选项可以为对象结构，通过设置 <code v-pre>disabled</code> 来禁用该选项。</p>
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
<h2 id="jia-zai-zhuang-tai" tabindex="-1">加载状态</h2>
<p>若选择器数据是异步获取的，可以通过 <code v-pre>loading</code> 属性显示加载提示。</p>
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
<h2 id="da-pei-dan-chu-ceng-shi-yong" tabindex="-1">搭配弹出层使用</h2>
<p>在实际场景中，<code v-pre>Picker</code> 通常作为用于辅助表单填写，可以搭配 <code v-pre>Popup</code> 和 <code v-pre>Field</code> 实现该效果。</p>
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
<p>类型 <code v-pre>PickerProps</code> 继承类型 <code v-pre>PickerBaseProps</code> ，<code v-pre>PickerBaseProps</code> 是组件基础的类型。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>默认的选中项</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>所有的数据</td>
<td><code v-pre>PickerOption[] | string | numbe</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1">事件</h2>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>onConfirm</td>
<td>全部选项选择完成后触发</td>
<td><code v-pre>value: T | undefined</code></td>
</tr>
<tr>
<td>onCancel</td>
<td>点击关闭图标时触发</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>选中项变化时触发</td>
<td><code v-pre>value: T | undefined</code></td>
</tr>
</tbody>
</table>
<h3 id="pickercascade-api" tabindex="-1">PickerCascade API</h3>
<p>类型 <code v-pre>PickerCascade</code> 继承类型 <code v-pre>PickerBaseProps</code>。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>默认的选中项</td>
<td><code v-pre>string[] | number[]</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>所有的数据</td>
<td><code v-pre>PickerOption[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="pickermulti-api" tabindex="-1">PickerMulti API</h3>
<p>类型 <code v-pre>PickerMulti</code> 继承类型 <code v-pre>PickerBaseProps</code>。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>默认的选中项</td>
<td><code v-pre>string[] | number[]</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>所有的数据</td>
<td><code v-pre>Array&lt;PickerOption[] | string[] | number[]&gt;</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="pickerbaseprops-api" tabindex="-1">PickerBaseProps API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>自定义顶部栏标题</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>optionHeight</td>
<td>选项高度,默认 <code v-pre>px</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>44</code></td>
</tr>
<tr>
<td>visibleOptionsCount</td>
<td>可见的选项个数</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>transitionDuration</td>
<td>动画时长，单位 <code v-pre>ms</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>toolbar</td>
<td>自定义顶部栏</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>toolbarPosition</td>
<td>自定义顶部栏位置</td>
<td><code v-pre>'top' | 'bottom'</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>confirmButton</td>
<td>确认按钮</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>Confirm</code></td>
</tr>
<tr>
<td>cancelButton</td>
<td>取消按钮</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>Cancel</code></td>
</tr>
<tr>
<td>loading</td>
<td>是否显示为加载状态</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>dataNames</td>
<td>自定义 <code v-pre>data</code> 结构中的字段</td>
<td><code v-pre>PickerDataNames</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="data-shu-ju-jie-gou" tabindex="-1">data 数据结构</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>选项文本</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>选择选择</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>选项禁用</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>选项子元素</td>
<td><code v-pre>PickerOption[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="datanames-shu-ju-jie-gou" tabindex="-1">dataNames 数据结构</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>选项文字</td>
<td><code v-pre>string | string[] </code></td>
<td><code v-pre>'label'</code></td>
</tr>
<tr>
<td>value</td>
<td>选项选中内容</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'value'</code></td>
</tr>
<tr>
<td>children</td>
<td>选项子元素</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'children'</code></td>
</tr>
<tr>
<td>disabled</td>
<td>选项禁用</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'disabled'</code></td>
</tr>
</tbody>
</table>
<h3 id="pickermultiref-he-pickercascaderef-shi-li-fang-fa" tabindex="-1">PickerMultiRef 和 PickerCascadeRef 实例方法</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>getValue()</td>
<td>获取组件当前选中的值</td>
<td>-</td>
<td><code v-pre>PickerValue[]</code></td>
</tr>
<tr>
<td>getOptions()</td>
<td>获取组件当前选中的值</td>
<td>-</td>
<td><code v-pre>PickerOptionOrValue[]</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
