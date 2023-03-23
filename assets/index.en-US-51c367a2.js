const n={},s=`<h1 id="popup" tabindex="-1">Popup</h1>
<p>Used to display popup windows, information prompts, etc., and supports multiple popup layers to display.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
<p>Use <code v-pre>visible</code> property to control the popup layer is displayed.</p>
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
<h2 id="position" tabindex="-1">Position</h2>
<p>Use <code v-pre>position</code> property to set popup position, which can be set to <code v-pre>top</code>, <code v-pre>bottom</code>,<code v-pre>left</code>,<code v-pre>right</code> or <code v-pre>center</code>.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'30%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="round" tabindex="-1">Round</h2>
<p>Use <code v-pre>round</code> property to set popup rounded style, The popup will add different rounded patterns based on the popup position.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">round</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="mountto" tabindex="-1">MountTo</h2>
<p>Use <code v-pre>mountTo</code> property to specified mount dom node.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span>body<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="use-with-popup.select" tabindex="-1">Use with Popup.Select</h2>
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
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>visible</td>
<td>Whether to show popup</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>renderOnShow</td>
<td>Whether to render util appeared</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>Whether to unmount child components on hide</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>mountTo</td>
<td>Specifies a target element where Popup will be mounted</td>
<td><code v-pre>HTMLElement</code> | <code v-pre>() =&gt; HTMLElement</code> | <code v-pre>false</code></td>
<td><code v-pre>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>Transition duration, unit millisecond</td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
<td></td>
</tr>
<tr>
<td>transitionName</td>
<td>Transition class name</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>lockScroll</td>
<td>Whether to lock background scroll</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>Popup position</td>
<td><code v-pre>'top' </code> | <code v-pre>'bottom'</code> | <code v-pre>'left'</code> | <code v-pre>'right'</code> | <code v-pre>'center'</code></td>
<td><code v-pre>'center'</code></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>Whether to show round corner</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>Whether to enable bottom safe area adaptation</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>overlay</td>
<td>Whether to show overlay</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>Custom overlay class</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>Custom overlay style</td>
<td><code v-pre>CSSProperties</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayCloseable</td>
<td>Whether to close when overlay is clicked</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>The state of Popup will be preserved at it’s component lifecycle by default, if you wish to open it with a brand new state every time, set <code v-pre>destroyOnClose</code> on it.</strong></p>
<h3 id="popup-events" tabindex="-1">Popup Events</h3>
<table>
<thead>
<tr>
<th>Event name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>onOverlayClick</td>
<td>Emitted when overlay is clicked</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>Emitted when Popup is closing</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>Emitted when before the hide animation</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onHide</td>
<td>Emitted when popup hiding</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onAfterHide</td>
<td>Emitted when after the hide animation</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>Emitted when before the show animation</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onShow</td>
<td>Execute when popup showing</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onAfterShow</td>
<td>Emitted when after the show animation</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="popup.select-props" tabindex="-1">Popup.Select Props</h3>
<p>Popup.Select extends Popup props and add the following props:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>Is it disabled?</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>Option value</td>
<td><code v-pre>any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>Default option value</td>
<td><code v-pre>any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>popup layer content</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>selectDefaultValuePropName</td>
<td>Default name</td>
<td><code v-pre>string</code></td>
<td><code v-pre>defaultValue</code></td>
<td></td>
</tr>
<tr>
<td>selectConfirmTrigger</td>
<td>Confirm button name</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onConfirm</code></td>
<td></td>
</tr>
<tr>
<td>selectCancelTrigger</td>
<td>Cancel button name</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onCancel</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>Trigger behavior</td>
<td><code v-pre>string</code></td>
<td><code v-pre>onClick</code></td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>Child element</td>
<td><code v-pre>ReactNode</code> | <code v-pre>(value?: any) =&gt; ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="popup.select-events" tabindex="-1">Popup.Select Events</h3>
<p>Popup.Select extends Popup events and add the following events:</p>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>Triggered when the <code v-pre>value</code> changes</td>
<td><code v-pre>(value: any) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
