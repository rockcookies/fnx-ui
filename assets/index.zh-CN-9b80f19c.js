const n={},a=`<h1 id="popup-dan-chu-ceng" tabindex="-1">Popup 弹出层</h1>
<p>弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>通过 <code v-pre>visible</code> 控制弹出层是否显示。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPopupVisible<span class="token punctuation">,</span> setIsPopupVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">showPopup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsPopupVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsPopupVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Open Popup<span class="token punctuation">"</span></span>
        <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showPopup<span class="token punctuation">}</span></span>
        <span class="token attr-name">clickable</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPopupVisible<span class="token punctuation">}</span></span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Content
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dan-chu-wei-zhi" tabindex="-1">弹出位置</h2>
<p>通过 <code v-pre>position</code> 属性设置弹出位置，默认居中弹出，可以设置为 <code v-pre>top</code>、<code v-pre>bottom</code>、<code v-pre>left</code>、<code v-pre>right</code> 或 <code v-pre>center</code>。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'30%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yuan-jiao-dan-chuang" tabindex="-1">圆角弹窗</h2>
<p>设置 <code v-pre>round</code> 属性后，弹窗会根据弹出位置添加不同的圆角样式。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">round</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'30%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zhi-ding-gua-zai-wei-zhi" tabindex="-1">指定挂载位置</h2>
<p>弹出层可以通过 <code v-pre>mountTo</code> 属性指定挂载位置。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span>body<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="shi-yong-popup.select" tabindex="-1">使用 Popup.Select</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'Monday'</span><span class="token punctuation">,</span>
  <span class="token string">'Tuesday'</span><span class="token punctuation">,</span>
  <span class="token string">'Wednesday'</span><span class="token punctuation">,</span>
  <span class="token string">'Thursday'</span><span class="token punctuation">,</span>
  <span class="token string">'Friday'</span><span class="token punctuation">,</span>
  <span class="token string">'Saturday'</span><span class="token punctuation">,</span>
  <span class="token string">'Sunday'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    &lt;Popup.Select&lt;string>
      select=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select date<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">
    >
      </span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
          <span class="token attr-name">clickable</span>
          <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">||</span> <span class="token string">'Select date'</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="popup-props" tabindex="-1">Popup Props</h3>
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
<td>visible</td>
<td>是否显示弹出层</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>renderOnShow</td>
<td>是否在显示弹层时才渲染节点</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>是否在关闭弹层时销毁节点</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>mountTo</td>
<td>指定挂载的节点</td>
<td><code v-pre>HTMLElement</code> | <code v-pre>() =&gt; HTMLElement</code> | <code v-pre>false</code></td>
<td><code v-pre>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>过渡动画时常，单位毫秒</td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
<td></td>
</tr>
<tr>
<td>transitionName</td>
<td>过渡动画类名</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>lockScroll</td>
<td>是否锁定背景滚动</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>遮罩层位置</td>
<td><code v-pre>'top'</code> | <code v-pre>'bottom'</code> | <code v-pre>'left'</code> | <code v-pre>'right'</code> | <code v-pre>'center'</code></td>
<td><code v-pre>'center'</code></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>是否展示圆角</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>是否开启底部安全区适配</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>overlay</td>
<td>是否显示遮罩层</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>遮罩层 Class 类名</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>遮罩层样式</td>
<td><code v-pre>CSSProperties</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayCloseable</td>
<td>是否点击遮罩层关闭</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Popup 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 <code v-pre>destroyOnHide</code>。</strong></p>
<h3 id="popup-events" tabindex="-1">Popup Events</h3>
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
<td>onOverlayClick</td>
<td>点击遮罩层触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>关闭事件触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>关闭动画之前触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onHide</td>
<td>关闭动画时触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onAfterHide</td>
<td>关闭动画后触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>显示动画前触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onShow</td>
<td>显示动画中触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onAfterShow</td>
<td>显示动画后触发</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="popup.select-props" tabindex="-1">Popup.Select Props</h3>
<p>Popup.Select 继承了 Popup 的属性并新增了如下属性：</p>
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
<td>disabled</td>
<td>是否禁用</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>选项值</td>
<td><code v-pre>any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认选项值</td>
<td><code v-pre>any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>弹出层内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>selectDefaultValuePropName</td>
<td>默认值名字</td>
<td><code v-pre>string</code></td>
<td><code v-pre>defaultValue</code></td>
<td></td>
</tr>
<tr>
<td>selectConfirmTrigger</td>
<td>确认事件回调名称</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onConfirm</code></td>
<td></td>
</tr>
<tr>
<td>selectCancelTrigger</td>
<td>取消事件回调名称</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onCancel</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>子元素触发事件名称</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onClick</code></td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>子元素</td>
<td><code v-pre>ReactNode</code> | <code v-pre>(value?: any) =&gt; ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="popup.select-events" tabindex="-1">Popup.Select Events</h3>
<p>Popup.Select 继承了 Popup 的事件并新增了如下事件：</p>
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
<td>onChange</td>
<td><code v-pre>value</code> 发生改变时触发</td>
<td><code v-pre>(value: any) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
