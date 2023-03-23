const n={},s=`<h1 id="notify-xiao-xi-tong-zhi" tabindex="-1">Notify 消息通知</h1>
<p>在页面顶部展示消息提示，支持函数调用和组件调用两种方式。</p>
<h2 id="han-shu-diao-yong" tabindex="-1">函数调用</h2>
<p><code v-pre>Notify</code> 是一个函数，调用后会直接在页面中弹出相应的消息提示。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Message'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zu-jian-diao-yong" tabindex="-1">组件调用</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tong-zhi-lei-xing" tabindex="-1">通知类型</h2>
<p>支持 <code v-pre>primary</code>、<code v-pre>success</code>、<code v-pre>warning</code>、<code v-pre>danger</code> 四种通知类型，默认为 <code v-pre>danger</code>。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Message'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-tong-zhi" tabindex="-1">自定义通知</h2>
<p>自定义消息通知的颜色和展示时长。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span>
          duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#ad0000'</span><span class="token punctuation">,</span>
          background<span class="token operator">:</span> <span class="token string">'#ffe1e1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dong-tai-geng-xin-ti-shi" tabindex="-1">动态更新提示</h2>
<p>执行 <code v-pre>Notify</code> 方法时会返回对应的 <code v-pre>Notify</code> 实例，通过<code v-pre>update</code>方法修改实例上的 <code v-pre>message</code> 属性可以实现动态更新提示的效果。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> notify <span class="token operator">=</span> Notify<span class="token punctuation">.</span><span class="token function">useToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> clearCountdown <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> loading <span class="token operator">=</span> notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    second<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      loading<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">clearCountdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      loading<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="notifyprops-api" tabindex="-1">NotifyProps API</h2>
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
<td>type</td>
<td>类型</td>
<td><code v-pre>'primary' | 'success' | 'warning' | 'danger'</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>message</td>
<td>文本内容，支持通过<code v-pre>\\n</code>换行</td>
<td><code v-pre>string</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>duration</td>
<td>类型</td>
<td><code v-pre>number</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>color</td>
<td>类型</td>
<td><code v-pre>string</code></td>
<td><code v-pre>danger</code></td>
</tr>
<tr>
<td>background</td>
<td>类型</td>
<td><code v-pre>string</code></td>
<td><code v-pre>danger</code></td>
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
<td><code v-pre>top\` | \`bottom\` | \`middle </code></td>
<td><code v-pre>middle</code></td>
</tr>
<tr>
<td>overlay</td>
<td>是否显示遮罩层</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
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
<h2 id="shi-jian" tabindex="-1"><Notify /> 事件</h2>
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
<td>onShow</td>
<td>打开弹出层时触发</td>
<td>-</td>
</tr>
<tr>
<td>onOverlayClick</td>
<td>点击遮罩层触发</td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>(遮罩层可点击时)点击遮罩层触发</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeHide</td>
<td>出场动画前执行触发</td>
<td>-</td>
</tr>
<tr>
<td>onHide</td>
<td>出场动画中执行触发</td>
<td>-</td>
</tr>
<tr>
<td>onAfterHide</td>
<td>出场动画后执行触发</td>
<td>-</td>
</tr>
<tr>
<td>onBeforeShow</td>
<td>进场动画前执行触发</td>
<td>-</td>
</tr>
<tr>
<td>onShow</td>
<td>进场动画中执行触发</td>
<td>-</td>
</tr>
<tr>
<td>onAfterShow</td>
<td>进场动画后执行触发</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="notify-fang-fa" tabindex="-1">Notify 方法</h3>
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
<td>Toast.show</td>
<td>展示加载提示</td>
<td><code v-pre>(message: string | NotifyProps, container?: HTMLElement)</code></td>
<td><code v-pre>toast 实例</code></td>
</tr>
<tr>
<td>Toast.clearAll</td>
<td>关闭提示</td>
<td>-</td>
<td><code v-pre>void</code></td>
</tr>
<tr>
<td>Toast.allowMultiple</td>
<td>允许同时存在多个 <code v-pre>Toast</code></td>
<td><code v-pre>(allow: boolean)</code></td>
<td><code v-pre>void</code></td>
</tr>
</tbody>
</table>
<h3 id="notify-shi-li-fang-fa" tabindex="-1">Notify 实例方法</h3>
<pre><code v-pre>const notify = Notify.useNotify();
const loading=notify.show()
loading.update();
loading.clear();

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
<td>Toast.update()</td>
<td>更新展示提示</td>
<td><code v-pre>ToastProps</code></td>
<td>toast 实例</td>
</tr>
<tr>
<td>Toast.clear()</td>
<td>销毁 <code v-pre>Toast</code> 实例</td>
<td>-</td>
<td>toast 实例</td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
