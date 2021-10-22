System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1>Notify</h1>\n<p>In the top of the page, the message prompt is displayed, support function calls, and component calls.</p>\n<h2 id="function-call" tabindex="-1">Function call</h2>\n<p><code>Notify</code> is a function that will pop up the corresponding message prompt after calling.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">\'Message\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="component-call" tabindex="-1">Component call</h2>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="notification-type" tabindex="-1">Notification Type</h2>\n<p>Support <code>primary</code>, <code>sucssess</code>,<code> warning</code>, <code>danger</code>, default to<code> danger</code>.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">\'Message\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">\'Message\'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">\'primary\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custom-notice" tabindex="-1">Custom Notice</h2>\n<p>Customize the color and presentation of the call notification.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token operator">:</span> <span class="token string">\'Message\'</span><span class="token punctuation">,</span>\n          duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n          color<span class="token operator">:</span> <span class="token string">\'#ad0000\'</span><span class="token punctuation">,</span>\n          background<span class="token operator">:</span> <span class="token string">\'#ffe1e1\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="dynamic-tips" tabindex="-1">Dynamic Tips</h2>\n<p>When the <code>Notify</code> method, the corresponding <code>Notify</code> instance is returned, and the <code>message</code> property to modify the instance via the <code>update</code> method You can realize the effect of dynamic update prompts.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> notify <span class="token operator">=</span> Notify<span class="token punctuation">.</span><span class="token function">useToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> clearCountdown <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> loading <span class="token operator">=</span> notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    second<span class="token operator">--</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      loading<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">clearCountdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      loading<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="notifyprops-api" tabindex="-1">NotifyProps API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>type</td>\n<td><code>\'primary\' | \'success\' | \'warning\' | \'danger\'</code></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>message</td>\n<td>Text content, support passing <code>\\ n</code></td>\n<td><code>string</code></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Animation</td>\n<td><code>number</code></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>colour</td>\n<td><code>string</code></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>background color</td>\n<td><code>string</code></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>Whether it is displayed</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show the fillet</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Location</td>\n<td><code>top` | `bottom` | `middle </code></td>\n<td><code>middle</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to display a mask layer</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>overlayClassName</td>\n<td>Mask layer class name</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td>Mask layer style</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayCloseable</td>\n<td>Whether to click the mask layer close</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>renderOnShow</td>\n<td>Whether to render load</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>destroyOnHide</td>\n<td>Whether to close the destruction</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>mountTo</td>\n<td>Specify a mounted node</td>\n<td><code>boolean | element | ()=&gt;element </code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>Transition animation</td>\n<td><code>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionName</td>\n<td>Transition animation name</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>Whether it is forbidden to scroll</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safeAreaInsetBottom</td>\n<td>Do you open the bottom security area adaptation</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="events" tabindex="-1"><Notify /> Events</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Description</th>\n<th>Callback Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onShow</td>\n<td>Trigger when opening the pop-up layer</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onOverlayClick</td>\n<td>Click on the mask layer trigger</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>(Mask layer can be clicked) Click the mask layer trigger</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeHide</td>\n<td>Executive trigger before the animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onHide</td>\n<td>Executive trigger in the animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterHide</td>\n<td>Executive trigger after the animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeShow</td>\n<td>Execute trigger before entering the field</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>Implementing triggers in the input animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterShow</td>\n<td>Imported animation</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="notify-method" tabindex="-1">Notify Method</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Method Name</th>\n<th>Description</th>\n<th>Parameter</th>\n<th>Return Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Toast.show</td>\n<td>Display loading prompt</td>\n<td><code>(message: string | NotifyProps, container?: HTMLElement)</code></td>\n<td><code>toast 实例</code></td>\n</tr>\n<tr>\n<td>Toast.clearAll</td>\n<td>Close prompt</td>\n<td>-</td>\n<td><code>void</code></td>\n</tr>\n<tr>\n<td>Toast.allowMultiple</td>\n<td>Allows multiple <code>Toast</code></td>\n<td><code>(allow: boolean)</code></td>\n<td><code>void</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="notify-instance-method" tabindex="-1">Notify Instance Method</h3>\n<pre><code>const notify = Notify.useNotify();\nconst loading=notify.show()\nloading.update();\nloading.clear();\n\n</code></pre>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Method Name</th>\n<th>Description</th>\n<th>Parameter</th>\n<th>Return Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Toast.update()</td>\n<td>Update display prompt</td>\n<td><code>ToastProps</code></td>\n<td>toast instance</td>\n</tr>\n<tr>\n<td>Toast.clear()</td>\n<td>Destroy <code>toast</code></td>\n<td>-</td>\n<td>toast instance</td>\n</tr>\n</tbody>\n</table>\n</div>')}}}));