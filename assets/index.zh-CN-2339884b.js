const n={},s=`<h1 id="circle-huan-xing-jin-du-tiao" tabindex="-1">Circle 环形进度条</h1>
<p>圆环形的进度条组件，支持进度渐变动画。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p><code v-pre>progress</code> 属性表示动画过程中的实时进度。当 <code v-pre>progress</code> 发生变化时会以 <code v-pre>speed</code> 的速度变化到新的值。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="kuan-du-ding-zhi" tabindex="-1">宽度定制</h2>
<p>通过 <code v-pre>strokeWidth</code> 属性来控制进度条宽度。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token attr-name">strokeWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yan-se-ding-zhi" tabindex="-1">颜色定制</h2>
<p>通过 <code v-pre>strokeColor</code> 属性来控制进度条颜色， <code v-pre>trailColor</code> 属性来控制轨道颜色。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token attr-name">trailColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff0000<span class="token punctuation">"</span></span> <span class="token attr-name">strokeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffc0cb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Content
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jian-bian-se" tabindex="-1">渐变色</h2>
<p><code v-pre>strokeColor</code> 属性支持传入对象格式来定义渐变色。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span>
      <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">strokeColor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token string-property property">'0%'</span><span class="token operator">:</span> <span class="token string">'#3fecff'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'100%'</span><span class="token operator">:</span> <span class="token string">'#6149f6'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="ni-shi-zhen-fang-xiang" tabindex="-1">逆时针方向</h2>
<p>将 <code v-pre>clockwise</code> 设置为 <code v-pre>false</code>，进度会从逆时针方向开始。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">clockwise</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="da-xiao-ding-zhi" tabindex="-1">大小定制</h2>
<p>通过 <code v-pre>size</code> 属性设置圆环直径。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
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
<td>progress</td>
<td>当前进度</td>
<td><code v-pre>number</code></td>
<td><code v-pre>100</code></td>
</tr>
<tr>
<td>size</td>
<td>圆环直径，默认单位为 px</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>100px</code></td>
</tr>
<tr>
<td>strokeColor</td>
<td>进度条颜色，传入对象格式可以定义渐变色</td>
<td><code v-pre>string | object</code></td>
<td><code v-pre>#1989fa</code></td>
</tr>
<tr>
<td>strokeLinecap</td>
<td>进度条端点的形状</td>
<td><code v-pre>'butt' | 'round' | 'square'</code></td>
<td><code v-pre>round</code></td>
</tr>
<tr>
<td>trailColor</td>
<td>轨道颜色</td>
<td><code v-pre>string</code></td>
<td><code v-pre>-</code></td>
</tr>
<tr>
<td>fill</td>
<td>填充颜色</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>speed</td>
<td>动画速度</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>-</code></td>
</tr>
<tr>
<td>strokeWidth</td>
<td>进度条宽度</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>5</code></td>
</tr>
<tr>
<td>clockWise</td>
<td>是否顺时针增加</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>gapDegree</td>
<td>进度条缺口角度</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>gapPosition</td>
<td>进度条缺口位置</td>
<td><code v-pre>'top' |'right' | 'bottom' | 'left'</code></td>
<td><code v-pre>top</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
