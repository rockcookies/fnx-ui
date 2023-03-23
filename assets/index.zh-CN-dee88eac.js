const n={},a=`<h1 id="skeleton-gu-jia-ping" tabindex="-1">Skeleton 骨架屏</h1>
<p>用于在内容加载过程中展示一组占位图形。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>通过 <code v-pre>title</code> 属性显示标题占位图，通过 <code v-pre>rows</code> 属性配置占位段落行数。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Children
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xian-shi-tou-xiang" tabindex="-1">显示头像</h2>
<p>通过 <code v-pre>avatar</code> 属性显示头像占位图。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">avatar</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Children
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zhan-shi-zi-zu-jian" tabindex="-1">展示子组件</h2>
<p>将 <code v-pre>loading</code> 属性设置成 <code v-pre>false</code> 表示内容加载完成，此时会隐藏占位图，并显示 <code v-pre>Skeleton</code> 的子组件。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">avatar</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Children
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>rows</td>
<td>段落占位图行数 段落占位图行数</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>rowWidth</td>
<td>段落占位图宽度，可传数组来设置每一行的宽度</td>
<td><code v-pre>number | string | string[] | number[]</code></td>
<td><code v-pre>100%</code></td>
</tr>
<tr>
<td>title</td>
<td>是否显示标题占位图</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>titleWidth</td>
<td>标题占位图宽度</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>avatar</td>
<td>是否显示头像占位图</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>loading</td>
<td>是否显示骨架屏，传 <code v-pre>false</code> 时会展示子组件内容</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>animate</td>
<td>是否开启动画</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>titleWidth</td>
<td>标题占位图宽度</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>40%</code></td>
</tr>
<tr>
<td>avatarSize</td>
<td>头像占位图大小.单位默认 <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>32</code></td>
</tr>
<tr>
<td>avatarShape</td>
<td>头像占位图形状</td>
<td><code v-pre>'round' | 'square'</code></td>
<td><code v-pre>'round'</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
