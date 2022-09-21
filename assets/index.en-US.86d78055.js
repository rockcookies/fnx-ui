const n={},a=`<h1 id="picker" tabindex="-1">Picker</h1>
<p>Create a mask layer to emphasize a specific page element and prevent the user from making other operations.</p>
<h3 id="option-configuration" tabindex="-1">Option Configuration</h3>
<p><code v-pre>Picker</code> component via<code v-pre> Data</code> property configuration option data, <code v-pre>data</code> is an object array or a character array.</p>
<h3 id="top-column" tabindex="-1">Top Column</h3>
<p>Set the <code v-pre>toolbar</code> property, will display the top operation bar, confirm the button, and the cancel button, click the confirm button to trigger the <code v-pre>onConfirm</code> Event, click the Cancel button to trigger the <code v-pre>onCancel</code> event.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
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
<h2 id="defaultvalue" tabindex="-1">DefaultValue</h2>
<p>Single column selection\uFF0CYou can set the index of the initial selection from the <code v-pre>defaultvalue</code> property setting\u3002</p>
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
<h2 id="multi" tabindex="-1">Multi</h2>
<p><code v-pre>Picker.multi</code> You can configure multiple columns,</p>
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
<h2 id="cascade-selection" tabindex="-1">Cascade Selection</h2>
<p><code v-pre>Picker.Multi</code> You can configure multiple columns options\uFF0C</p>
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
<h2 id="disabled" tabindex="-1">Disabled</h2>
<p>The option can be an object structure and disable this option by setting the <code v-pre>disabled</code></p>
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
<h2 id="custom-data-strucsture" tabindex="-1">Custom data Strucsture</h2>
<p>The option can be an object structure and disable this option by setting the <code v-pre>disabled</code></p>
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
<h2 id="loading" tabindex="-1">Loading</h2>
<p>If the selector data is available asynchronously, the load prompt can be displayed via the <code v-pre>loading</code> property.</p>
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
<h2 id="popup-and-picker" tabindex="-1">Popup and Picker</h2>
<p>In actual scenes, <code v-pre>picker</code> usually acts as an auxiliary form, you can match the <code v-pre>popup</code> and <code v-pre>field</code> to achieve this effect.</p>
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
<p>Type<code v-pre>PickerProps</code> Inherited Types <code v-pre>PickerBaseProps</code>,<code v-pre>PickerBaseProps</code> is the type of component base.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>Default selection item</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>All data</td>
<td><code v-pre>PickerOption[] | string | numbe</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events</h2>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Callback Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>onConfirm</td>
<td>All options are selected after completion</td>
<td><code v-pre>value: T | undefined</code></td>
</tr>
<tr>
<td>onCancel</td>
<td>Trigger when you click close icon</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>Trigger when selecting item changes</td>
<td><code v-pre>value: T | undefined</code></td>
</tr>
</tbody>
</table>
<h3 id="pickercascade-api" tabindex="-1">PickerCascade API</h3>
<p>Type<code v-pre>Pickercascade</code> Inherited Type <code v-pre>PickerBaseProps</code>.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>Default selection item</td>
<td><code v-pre>Array&lt;string | number | undefined&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>All data</td>
<td><code v-pre>PickerOption[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="pickermulti-api" tabindex="-1">PickerMulti API</h3>
<p>Type<code v-pre>Pickermulti</code> Inherited Type<code v-pre>PickerBaseProps</code>.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>Default selection item</td>
<td><code v-pre>string[] | number[]</code></td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>All data</td>
<td><code v-pre>Array&lt;PickerOption[] | string[] | number[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="pickerbaseprops-api" tabindex="-1">PickerBaseProps API</h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>Custom top bar title</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>optionHeight</td>
<td>Option height, default <code v-pre>px</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>44</code></td>
</tr>
<tr>
<td>visibleOptionsCount</td>
<td>Visible options</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>transitionDuration</td>
<td>Animation time, unit <code v-pre>ms</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>toolbar</td>
<td>Custom top column</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>toolbarPosition</td>
<td>Custom top bar location</td>
<td><code v-pre>'top' | 'bottom'</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>confirmButton</td>
<td>Confirm button</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>Confirm</code></td>
</tr>
<tr>
<td>cancelButton</td>
<td>Cancel button</td>
<td><code v-pre>ReactNode</code></td>
<td><code v-pre>Cancel</code></td>
</tr>
<tr>
<td>loading</td>
<td>Whether it is displayed as a load status</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>dataNames</td>
<td>Customized <code v-pre>dsata</code></td>
<td><code v-pre>PickerDataNames</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="data-data-structure" tabindex="-1">Data Data Structure</h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>Option text</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>Option selection</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>Option disable</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>Option children</td>
<td><code v-pre>PickerOption[]</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="datanames-sata-structure" tabindex="-1">DataNames Sata Structure</h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>Option text</td>
<td><code v-pre>string | string[] </code></td>
<td><code v-pre>'label'</code></td>
</tr>
<tr>
<td>value</td>
<td>Option selection</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'value'</code></td>
</tr>
<tr>
<td>children</td>
<td>Option sub-elements</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'children'</code></td>
</tr>
<tr>
<td>disabled</td>
<td>Option disable</td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>'disabled'</code></td>
</tr>
</tbody>
</table>
<h3 id="pickermultiref-and-pickercascaderef-instance-method" tabindex="-1">PickerMultiRef and PickerCascadeRef Instance Method</h3>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
<th>Parameter</th>
<th>Return Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>getValue()</td>
<td>Get the currently selected value in the component</td>
<td>-</td>
<td><code v-pre>PickerValue[]</code></td>
</tr>
<tr>
<td>getOptions()</td>
<td>Get the currently selected value in the component</td>
<td>-</td>
<td><code v-pre>PickerOptionOrValue[]</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
