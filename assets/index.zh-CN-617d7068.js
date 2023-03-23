const n={},s=`<h1 id="icon-tu-biao" tabindex="-1">Icon 图标</h1>
<p>语义化的矢量图标。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>使用 <code v-pre>name</code> 属性设置图标名称。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tu-biao-yan-se" tabindex="-1">图标颜色</h2>
<p>使用 <code v-pre>color</code> 属性设置图标颜色。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1989fa<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fail<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ee0a24<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tu-biao-chi-cun" tabindex="-1">图标尺寸</h2>
<p>使用 <code v-pre>size</code> 属性设置图标尺寸。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-left<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3rem<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-zhuan-dong-hua" tabindex="-1">旋转动画</h2>
<p>使用 <code v-pre>spin</code> 属性展示旋转动画。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">spin</span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="icon.spinner" tabindex="-1">Icon.Spinner</h2>
<p>使用 <code v-pre>Icon.Spinner</code> 组件展示加载中状态。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon.Spinner</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-font-tu-biao" tabindex="-1">自定义 font 图标</h2>
<p>我们提供了一个 <code v-pre>createFromIconfontCN</code> 方法，方便开发者调用在 <a href="http://iconfont.cn/">iconfont.cn</a> 上自行管理的图标。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> MyIcon <span class="token operator">=</span> Icon<span class="token punctuation">.</span><span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span>
  <span class="token string">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyIcon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-example<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountedNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-svg-tu-biao" tabindex="-1">自定义 SVG 图标</h2>
<p>如果使用 <code v-pre>webpack</code>，可以通过配置 <a href="https://www.npmjs.com/package/@svgr/webpack">@svgr/webpack</a> 来将 <code v-pre>svg</code> 图标作为 <code v-pre>React</code> 组件导入。<code v-pre>@svgr/webpack</code> 的 <code v-pre>options</code> 选项请参阅 <a href="https://github.com/smooth-code/svgr#options">svgr 文档</a>。</p>
<pre class="language-ts"><code class="language-ts" v-pre><span class="token comment">// webpack.config.js</span>
<span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      loader<span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      loader<span class="token operator">:</span> <span class="token string">'@svgr/webpack'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        babel<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MessageSvg <span class="token keyword">from</span> <span class="token string">'path/to/message.svg'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>MessageSvg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="icon-props" tabindex="-1">Icon Props</h3>
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
<td>name</td>
<td>图标名称</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>图标大小，如 <code v-pre>20px</code> <code v-pre>2em</code>，默认单位为 <code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spin</td>
<td>是否有旋转动画</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>component</td>
<td>控制如何渲染图标，通常是一个渲染根标签为 <code v-pre>&lt;svg&gt;</code> 的 React 组件</td>
<td><code v-pre>ComponentType&lt;SVGProps&lt;SVGElement&gt;&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>viewBox</td>
<td>SVG viewBox</td>
<td><code v-pre>string</code></td>
<td><code v-pre>'0 0 1024 1024'</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="icon.spinner-props" tabindex="-1">Icon.Spinner Props</h3>
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
<td>size</td>
<td>图标大小，如 <code v-pre>20px</code> <code v-pre>2em</code>，默认单位为 <code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="zi-ding-yi-svg-tu-biao-1" tabindex="-1">自定义 SVG 图标</h3>
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
<td>scriptUrl</td>
<td>自定义字体图标地址</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>为 SVG 图标<code v-pre>&lt;icon/&gt;</code>组件设置附加属性</td>
<td><code v-pre>SVGAttributes&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
