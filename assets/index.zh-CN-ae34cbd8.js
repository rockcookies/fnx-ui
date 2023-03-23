const n={},s=`<h1 id="toast-qing-ti-shi" tabindex="-1">Toast 轻提示</h1>
<p>在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jia-zai-ti-shi" tabindex="-1">加载提示</h2>
<p>使用 <code v-pre>Toast.loading</code> 方法展示加载提示，通过 <code v-pre>forbidClick</code> 属性可以禁用背景点击。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">'Message'</span><span class="token punctuation">,</span>
  forbidClick<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="cheng-gong-shi-bai-ti-shi" tabindex="-1">成功/失败提示</h2>
<p>使用 <code v-pre>Toast.success</code> 方法展示成功提示，使用 <code v-pre>Toast.fail</code> 方法展示失败提示。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'Failed'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h2>
<p>通过 <code v-pre>icon</code> 选项可以自定义图标。</p>
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
<h2 id="zi-ding-yi-wei-zhi" tabindex="-1">自定义位置</h2>
<p>Toast 默认渲染在屏幕正中位置，通过 <code v-pre>position</code> 属性可以控制 Toast 展示的位置。</p>
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
<h2 id="dong-tai-geng-xin-ti-shi" tabindex="-1">动态更新提示</h2>
<p>执行 Toast 中方法时会返回对应的 Toast 实例，通过修改 <code v-pre>update</code> 方法实例上的 <code v-pre>message</code> 属性可以实现动态更新提示的效果。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toast <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'倒计时 3 秒'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  second<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    toast<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">倒计时 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 秒</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    toast<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dan-li-mo-shi" tabindex="-1">单例模式</h2>
<p>Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

Toast<span class="token punctuation">.</span><span class="token function">allowMultiple</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toast1 <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'First Toast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toast2 <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Second Toast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

toast1<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
toast2<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="toast-props" tabindex="-1">Toast Props</h3>
<p>Toast 继承了 <a href="#/zh-CN/components/popup">Popup</a> 的属性并新增了如下属性：</p>
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
<td>position</td>
<td>展示位置</td>
<td><code v-pre>'top'</code> | <code v-pre>'bottom'</code> | <code v-pre>'middle'</code></td>
<td><code v-pre>'middle'</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>文本内容，支持通过 <code v-pre>\\n</code> 换行</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>duration</td>
<td>展示时长(ms)，值为 0 时，Toast 不会消失</td>
<td><code v-pre>number</code></td>
<td><code v-pre>2000</code></td>
<td></td>
</tr>
<tr>
<td>forbidClick</td>
<td>是否禁止背景点击</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>clickCloseable</td>
<td>是否在点击后关闭</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="toast-quan-ju-fang-fa" tabindex="-1">Toast 全局方法</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toast.show</td>
<td>展示提示</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.loading</td>
<td>展示加载提示</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.success</td>
<td>展示成功提示</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.fail</td>
<td>展示失败提示</td>
<td><code v-pre>(props: string | ToastProps) =&gt; ToastInstance</code></td>
<td></td>
</tr>
<tr>
<td>Toast.clearAll</td>
<td>关闭所有提示</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>Toast.allowMultiple</td>
<td>是否在页面中允许同时存在多个 Toast</td>
<td><code v-pre>(allow: boolean) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="toast-shi-li-fang-fa" tabindex="-1">Toast 实例方法</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>update</td>
<td>更新展示提示</td>
<td><code v-pre>(props: ToastProps) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>clear</td>
<td>销毁 Toast 实例</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
