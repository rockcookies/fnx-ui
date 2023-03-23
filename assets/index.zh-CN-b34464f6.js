const n={},a=`<h1 id="image-tu-pian" tabindex="-1">Image 图片</h1>
<p>增强版的 <code v-pre>img</code> 标签，提供多种图片填充模式、加载中提示、加载失败提示。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>基础用法与原生 <code v-pre>img</code> 标签一致，可以设置 <code v-pre>src</code>、<code v-pre>width</code>、<code v-pre>height</code>、<code v-pre>alt</code> 等原生属性。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tian-chong-mo-shi" tabindex="-1">填充模式</h2>
<p>通过 <code v-pre>position</code> 属性可以设置图片位置，结合<code v-pre>fit</code>属性使用，可选值见下方表格，同<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position"><code v-pre>object-position</code></a>属性。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yuan-xing-tu-pian" tabindex="-1">圆形图片</h2>
<p>通过 <code v-pre>round</code> 属性可以设置图片变圆，注意当图片宽高不相等或 <code v-pre>fit</code> 为 <code v-pre>contain</code> 或 <code v-pre>scale-down</code> 时，将无法填充一个完整的圆形。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="yuan-jiao" tabindex="-1">圆角</h2>
<p>通过 <code v-pre>radius</code> 属性可以设置图片圆角。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tu-pian-lan-jia-zai" tabindex="-1">图片懒加载</h2>
<p>通过 <code v-pre>lazy</code> 属性来开启图片懒加载。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">lazy</span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jia-zai-zhong-ti-shi" tabindex="-1">加载中提示</h2>
<p>Image 提供了默认的加载中提示，支持通过 <code v-pre>indicator.loading</code> 自定义加载中内容。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://dummyimage.com/100x100/000/fff.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        loading<span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jia-zai-shi-bai-ti-shi" tabindex="-1">加载失败提示</h2>
<p>Image 提供了默认的加载失败提示，支持通过 <code v-pre>slots.error</code> 自定义加载失败内容。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10rem<span class="token punctuation">"</span></span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contain<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>illegal src<span class="token punctuation">"</span></span>
      <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        error<span class="token operator">:</span> <span class="token string">'Error'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="image-props" tabindex="-1">Image Props</h3>
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
<td>src</td>
<td>图片链接</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>图片填充模式</td>
<td><code v-pre>'contain'</code> | <code v-pre>'cover'</code> | <code v-pre>'fill'</code> | <code v-pre>'none'</code> | <code v-pre>'scale-down'</code></td>
<td><code v-pre>'fill'</code></td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>图片位置，可选值为 <code v-pre>center</code> <code v-pre>top</code> <code v-pre>right</code> <code v-pre>bottom</code> <code v-pre>left</code> 或 <code v-pre>string</code>( 同<code v-pre>object-position</code> )</td>
<td><code v-pre>string</code></td>
<td><code v-pre>center</code></td>
<td>0.0.11</td>
</tr>
<tr>
<td>alt</td>
<td>替代文本</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>宽度，默认单位为<code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>高度，默认单位为<code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>圆角大小，默认单位为<code v-pre>px</code></td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>是否显示为圆形</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>lazy</td>
<td>是否开启图片懒加载</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>0.0.10</td>
</tr>
<tr>
<td>slots</td>
<td>图片插槽</td>
<td><code v-pre>ImageSlots</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="imageslots" tabindex="-1">ImageSlots</h3>
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
<td>loading</td>
<td>自定义加载中的提示内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>error</td>
<td>自定义加载失败时的提示内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="tu-pian-tian-chong-mo-shi" tabindex="-1">图片填充模式</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>contain</td>
<td>保持宽高缩放图片，使图片的长边能完全显示出来</td>
</tr>
<tr>
<td>cover</td>
<td>保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边</td>
</tr>
<tr>
<td>fill</td>
<td>拉伸图片，使图片填满元素</td>
</tr>
<tr>
<td>none</td>
<td>保持图片原有尺寸</td>
</tr>
<tr>
<td>scale-down</td>
<td>取 <code v-pre>none</code> 或 <code v-pre>contain</code> 中较小的一个</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
