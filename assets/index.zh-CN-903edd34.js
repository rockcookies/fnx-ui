const n={},a=`<h1 id="configprovider-quan-ju-hua-pei-zhi" tabindex="-1">ConfigProvider 全局化配置</h1>
<p>为组件提供统一的全局化配置。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>ConfigProvider 使用 React 的 <a href="https://facebook.github.io/react/docs/context.html">context</a> 特性，只需在应用外围包裹一次即可全局生效。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">transitionDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="guo-ji-hua" tabindex="-1">国际化</h2>
<p>使用 ConfigProvider 设置语言。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'fnx-ui/lib/locale/zh-CN'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="configprovider-props" tabindex="-1">ConfigProvider Props</h3>
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
<td>locale</td>
<td>语言包配置，语言包可到 <a href="https://unpkg.com/browse/fnx-ui/lib/locale">fnx-ui/lib/locale</a> 目录下寻找</td>
<td><code v-pre>object</code></td>
<td>-</td>
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
<td>transitionDuration</td>
<td>动画时长</td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
<td></td>
</tr>
<tr>
<td>mountTo</td>
<td>弹出框（Popup, Toast, Dialog 等等）渲染父节点，默认渲染到 body 上</td>
<td><code v-pre>() =&gt; HTMLElement</code></td>
<td><code v-pre>() =&gt; document.body</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
