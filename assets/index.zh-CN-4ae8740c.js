const n={},t=`<h1 id="dialog-dui-hua-kuang" tabindex="-1">Dialog 对话框</h1>
<p>弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。</p>
<p>弹出框组件支持函数调用和组件调用两种方式。</p>
<h2 id="han-shu-diao-yong" tabindex="-1">函数调用</h2>
<p><code v-pre>Dialog.show</code> 作为函数，调用后会直接在页面中弹出相应的模态框。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'Left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>；

</code></pre>
<h2 id="zu-jian-diao-yong" tabindex="-1">组件调用</h2>
<p>通过组件调用 <code v-pre>Dialog</code> 时，可以通过 <code v-pre>visible</code> 控制显示隐藏。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yi-bu-guan-bi" tabindex="-1">异步关闭</h2>
<p>通过 <code v-pre>onConfirm</code> ，<code v-pre>onCancel</code> 属性可以传入一个回调函数，需要执行完才会关闭，不关闭则返回 <code v-pre>false</code>。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span>timeoutsMs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeoutsMs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'Left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Stopped!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h2>
<p><code v-pre>children</code> 类型是 <code v-pre>ReactNode</code>，接受自定义内容。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'Left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dong-tai-jia-zai" tabindex="-1">动态加载</h2>
<p>执行 <code v-pre>Dialog</code> 方法时会返回对应的 <code v-pre>Dialog</code> 实例，通过 <code v-pre>update</code> 方法修改实例上的 <code v-pre>message</code> 属性可以实现动态更新提示的效果。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dialog <span class="token operator">=</span> Dialog<span class="token punctuation">.</span><span class="token function">useDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> timerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>NodeJS<span class="token punctuation">.</span>Timeout<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> toast <span class="token operator">=</span> dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Now it is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    second<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      toast<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Now it is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      toast<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Dynamic Loading</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<p><code v-pre>ButtonProps</code> 类型参考 <code v-pre>Button</code> 组件。</p>
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
<td>标题</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>页脚</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>messageAlign</td>
<td>内容对齐方式</td>
<td><code v-pre>'left' | 'right'</code></td>
<td><code v-pre>center</code></td>
</tr>
<tr>
<td>confirmButton</td>
<td>确认按钮</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmText</td>
<td>确认按钮文案</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmLoading</td>
<td>点击确认是否显示加载图标</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmButtonProps</td>
<td>确认按钮属性</td>
<td><code v-pre>ButtonProps</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>cancelButton</td>
<td>取消按钮</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelText</td>
<td>取消按钮文案</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelLoading</td>
<td>确认加载完毕</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>取消按钮属性</td>
<td><code v-pre>ButtonProps</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>bodyProps</td>
<td>内容包裹层属性</td>
<td><code v-pre>HTMLAttributes</code></td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示弹出层</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>round</td>
<td>是否展示圆角</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>position</td>
<td>位置</td>
<td><code v-pre>top\` | \`bottom\` | \`middle</code></td>
<td><code v-pre>middle</code></td>
</tr>
<tr>
<td>overlay</td>
<td>是否显示遮罩层</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>fill</code></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>遮罩层类名</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>overlayStyle</td>
<td>遮罩层样式</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>overlayCloseable</td>
<td>是否点击遮罩层关闭</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>renderOnShow</td>
<td>是否渲染加载</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>是否关闭销毁</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>mountTo</td>
<td>指定挂载的节点</td>
<td><code v-pre>boolean | element | ()=&gt;element </code></td>
<td>-</td>
</tr>
<tr>
<td>transitionDuration</td>
<td>过渡动画</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>transitionName</td>
<td>过渡动画类名</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>lockScroll</td>
<td>是否禁止滚动</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>是否开启底部安全区适配</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1"><Dialog /> 事件</h2>
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
<td>onConfirm</td>
<td>确认回调</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>取消回调</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>打开弹出层时触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onOverlayClick</td>
<td>点击遮罩层触发</td>
<td><code v-pre>(e: React.MouseEvent&lt;HTMLElement, MouseEvent&gt;)</code></td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>遮罩层可点击时点击遮罩层触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>出场动画前执行触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onHide</td>
<td>出场动画中执行触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onAfterHide</td>
<td>出场动画后执行触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>进场动画前执行触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>进场动画中执行触发</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onAfterShow</td>
<td>进场动画后执行触发</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="dialog-fang-fa" tabindex="-1">Dialog 方法</h2>
<p><code v-pre>DialogProps</code>类型为组件 API。</p>
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
<td>Dialog.show()</td>
<td>展示弹窗</td>
<td><code v-pre>DialogProps</code></td>
<td>弹窗示例</td>
</tr>
<tr>
<td>Dialog.clearAll()</td>
<td>销毁弹窗实例</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="dialog-shi-li-fang-fa" tabindex="-1">Dialog 实例方法</h3>
<pre><code v-pre>const useDialog = Dialog.useDialog();
const dialog=useDialog.show()
dialog.update();
dialog.clear();

</code></pre>
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
<td>dialog.update()</td>
<td>更新展示提示</td>
<td><code v-pre>({ visible: boolean | undefined, ...props }) </code></td>
<td>toast 实例</td>
</tr>
<tr>
<td>dialog.clear()</td>
<td>销毁实例</td>
<td>-</td>
<td>toast 实例</td>
</tr>
</tbody>
</table>
`;export{n as attributes,t as html};
