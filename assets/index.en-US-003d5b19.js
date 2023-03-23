const n={},s=`<h1 id="toast" tabindex="-1">Toast</h1>
<p>Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="loading" tabindex="-1">Loading</h2>
<p>Use the <code v-pre>Toast.loading</code> method to display the loading toast, you can disable the background click via <code v-pre>forbidClick</code> property.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span>
  forbidClick<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="success-fail" tabindex="-1">Success / Fail</h2>
<p>Use the <code v-pre>Toast.success</code> method to show success toast or the <code v-pre>Toast.fail</code> method to show failed toast.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'Failed'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="custom-icon" tabindex="-1">Custom Icon</h2>
<p>Use <code v-pre>icon</code> property to custom icon style.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Custom Icon'</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>star<span class="token punctuation">"</span></span> <span class="token attr-name">spin</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Custom Icon.Spinner'</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon.Spinner</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="custom-position" tabindex="-1">Custom Position</h2>
<p>Use the <code v-pre>position</code> property to set the position of the toast display.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Display on top'</span><span class="token punctuation">,</span>
  position<span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Display on bottom'</span><span class="token punctuation">,</span>
  position<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="update-message" tabindex="-1">Update Message</h2>
<p>Call the Toast function will return a Toast Instance, You can call the <code v-pre>update</code> of the Toast Instance to update toast.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toast <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'3 seconds'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  second<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    toast<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> seconds</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    toast<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="toast-props" tabindex="-1">Toast Props</h3>
<p>Toast extends <a href="#/en-US/components/popup">Popup</a> props and add the following props:</p>
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
<td>position</td>
<td>Toast location</td>
<td><code v-pre>'top'</code> | <code v-pre>'bottom'</code> | <code v-pre>'middle'</code></td>
<td><code v-pre>'middle'</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>Text content, support passing <code v-pre>\\n</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>Custom icon</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>duration</td>
<td>Toast duration(ms), won’t disappear if value is 0</td>
<td><code v-pre>number</code></td>
<td><code v-pre>2000</code></td>
<td></td>
</tr>
<tr>
<td>forbidClick</td>
<td>Whether to forbid click background</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>clickCloseable</td>
<td>Whether to close when click</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="toast-method" tabindex="-1">Toast Method</h3>
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
<td>Toast.show</td>
<td>Display toast</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.loading</td>
<td>Display loading toast</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.success</td>
<td>Display success toast</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.fail</td>
<td>Display failed toast</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.clearAll</td>
<td>Close toast</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>Toast.allowMultiple</td>
<td>Allow multiple toast at the same time</td>
<td><code v-pre>(allow: boolean) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="toast-instance-methods" tabindex="-1">Toast Instance Methods</h3>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>update</td>
<td>Update toast instance</td>
<td><code v-pre>(props: ToastProps) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>clear</td>
<td>Destroy toast instance</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
