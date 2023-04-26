const n={},t=`<h1 id="dialog" tabindex="-1">Dialog</h1>
<p>The map is pop-up, which is often used for message prompts, messages confirm, or complete specific interactions within the current page.</p>
<p>The pop-up frame component support function calls and components call two ways.</p>
<h2 id="function-call" tabindex="-1">Function Call</h2>
<p><code v-pre>Dialog.show</code> as a function, the corresponding modal frame is popped up directly to the page.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Dialog'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Dialog Content'</span><span class="token punctuation">,</span>
  messageAlign<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
  confirmText<span class="token operator">:</span> <span class="token string">'Confirm'</span><span class="token punctuation">,</span>
  cancelText<span class="token operator">:</span> <span class="token string">'Cancel'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
<h2 id="component-call" tabindex="-1">Component Call</h2>
<p>When you call the <code v-pre>Dialog by the component, you can display hidden via</code> Visible\` control.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="asynchronous-close" tabindex="-1">Asynchronous close</h2>
<p>Through <code v-pre>onConfirm</code>,<code v-pre>onCancel</code> property can be passed into a callback function, you need to perform it to turn it off, and return to <code v-pre>false</code>.</p>
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
<h2 id="customize" tabindex="-1">Customize</h2>
<p><code v-pre>Children</code> type is <code v-pre>ReactNode</code>, accept custom content.</p>
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
<h2 id="dynamically-loading" tabindex="-1">Dynamically Loading</h2>
<p>The corresponding <code v-pre>Dialog</code> instance will be returned when performing a <code v-pre>Dialog</code> method, modify the <code v-pre>message</code> attribute on the instance via the<code v-pre> update</code> method to realize the effect of dynamic update prompts.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dialog <span class="token operator">=</span> Dialog<span class="token punctuation">.</span><span class="token function">useDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//DialogContext</span>

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
<p><code v-pre>Buttonprops</code> Type Reference<code v-pre> Button</code> components.</p>
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
<td>title</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>Footage</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td>width</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>content</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>messageAlign</td>
<td>Content alignment</td>
<td><code v-pre>'left' | 'right'</code></td>
<td><code v-pre>center</code></td>
</tr>
<tr>
<td>confirmButton</td>
<td>Confirm button</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmText</td>
<td>Confirm button</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmLoading</td>
<td>Click to confirm if the load icon is displayed.</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>confirmButtonProps</td>
<td>Confirm button properties</td>
<td><code v-pre>ButtonProps</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>cancelButton</td>
<td>Cancel button</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelText</td>
<td>Cancel button</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelLoading</td>
<td>Confirm that the load is completed</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>Cancel button properties</td>
<td><code v-pre>ButtonProps</code></td>
<td><code v-pre>{}</code></td>
</tr>
<tr>
<td>bodyProps</td>
<td>Content package layer properties</td>
<td><code v-pre>HTMLAttributes</code></td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>Whether it is displayed</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>round</td>
<td>Whether to show the fillet</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>position</td>
<td>Location</td>
<td><code v-pre>top\` | \`bottom\` | \`middle</code></td>
<td><code v-pre>middle</code></td>
</tr>
<tr>
<td>overlay</td>
<td>Whether to display a mask layer</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>fill</code></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>Mask layer class name</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>overlayStyle</td>
<td>Mask layer style</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>overlayCloseable</td>
<td>Whether to click the mask layer close</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>renderOnShow</td>
<td>Whether to render load</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>Whether to close the destruction</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>mountTo</td>
<td>Specify a mounted node</td>
<td><code v-pre>boolean | element | ()=&gt;element </code></td>
<td>-</td>
</tr>
<tr>
<td>transitionDuration</td>
<td>Transition animation</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>transitionName</td>
<td>Transition animation name</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>lockScroll</td>
<td>Whether it is forbidden to scroll</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>Do you open the bottom security area adaptation</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1"><Dialog /> Events</h2>
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
<td>onConfirm</td>
<td>Confirm callback</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>Cancel</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>Trigger when opening the pop-up layer</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onOverlayClick</td>
<td>Click on the mask layer trigger</td>
<td><code v-pre>(e: React.MouseEvent&lt;HTMLElement, MouseEvent&gt;)</code></td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>Mask layer can click on the mask layer to trigger</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>Executive trigger before the animation</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onHide</td>
<td>Executive trigger in the animation</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onAfterHide</td>
<td>Executive trigger after the animation</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>Execute trigger before entering the field</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>Implementing triggers in the input animation</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onAfterShow</td>
<td>Imported animation</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="dialog-method" tabindex="-1">Dialog Method</h2>
<p><code v-pre>Dialogprops</code> Type as component API.</p>
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
<td>Dialog.show()</td>
<td>Display pop-up window</td>
<td><code v-pre>DialogProps</code></td>
<td>Dialog Instance</td>
</tr>
<tr>
<td>Dialog.clearAll()</td>
<td>Destroy pop-up example</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="dialog-instance-method" tabindex="-1">Dialog Instance Method</h3>
<pre><code v-pre>const useDialog = Dialog.useDialog();
const dialog=useDialog.show()
dialog.update();
dialog.clear();

</code></pre>
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
<td>dialog.update()</td>
<td>Update display prompt</td>
<td><code v-pre>({ visible: boolean | undefined, ...props }) </code></td>
<td>toast instance</td>
</tr>
<tr>
<td>dialog.clear()</td>
<td>Destruction example</td>
<td>-</td>
<td>toast instance</td>
</tr>
</tbody>
</table>
`;export{n as attributes,t as html};
