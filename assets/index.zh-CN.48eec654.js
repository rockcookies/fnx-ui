const n={},a=`<h1 id="skeleton-gu-jia-ping" tabindex="-1">Skeleton \u9AA8\u67B6\u5C4F</h1>
<p>\u7528\u4E8E\u5728\u5185\u5BB9\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u5C55\u793A\u4E00\u7EC4\u5360\u4F4D\u56FE\u5F62\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u901A\u8FC7 <code v-pre>title</code> \u5C5E\u6027\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE\uFF0C\u901A\u8FC7 <code v-pre>rows</code> \u5C5E\u6027\u914D\u7F6E\u5360\u4F4D\u6BB5\u843D\u884C\u6570\u3002</p>
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
<h2 id="xian-shi-tou-xiang" tabindex="-1">\u663E\u793A\u5934\u50CF</h2>
<p>\u901A\u8FC7 <code v-pre>avatar</code> \u5C5E\u6027\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE\u3002</p>
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
<h2 id="zhan-shi-zi-zu-jian" tabindex="-1">\u5C55\u793A\u5B50\u7EC4\u4EF6</h2>
<p>\u5C06 <code v-pre>loading</code> \u5C5E\u6027\u8BBE\u7F6E\u6210 <code v-pre>false</code> \u8868\u793A\u5185\u5BB9\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6B64\u65F6\u4F1A\u9690\u85CF\u5360\u4F4D\u56FE\uFF0C\u5E76\u663E\u793A <code v-pre>Skeleton</code> \u7684\u5B50\u7EC4\u4EF6\u3002</p>
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
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>rows</td>
<td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570 \u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>rowWidth</td>
<td>\u6BB5\u843D\u5360\u4F4D\u56FE\u5BBD\u5EA6\uFF0C\u53EF\u4F20\u6570\u7EC4\u6765\u8BBE\u7F6E\u6BCF\u4E00\u884C\u7684\u5BBD\u5EA6</td>
<td><code v-pre>number | string | string[] | number[]</code></td>
<td><code v-pre>100%</code></td>
</tr>
<tr>
<td>title</td>
<td>\u662F\u5426\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>titleWidth</td>
<td>\u6807\u9898\u5360\u4F4D\u56FE\u5BBD\u5EA6</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>avatar</td>
<td>\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>loading</td>
<td>\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5C4F\uFF0C\u4F20 <code v-pre>false</code> \u65F6\u4F1A\u5C55\u793A\u5B50\u7EC4\u4EF6\u5185\u5BB9</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>animate</td>
<td>\u662F\u5426\u5F00\u542F\u52A8\u753B</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>titleWidth</td>
<td>\u6807\u9898\u5360\u4F4D\u56FE\u5BBD\u5EA6</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>40%</code></td>
</tr>
<tr>
<td>avatarSize</td>
<td>\u5934\u50CF\u5360\u4F4D\u56FE\u5927\u5C0F.\u5355\u4F4D\u9ED8\u8BA4 <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>32</code></td>
</tr>
<tr>
<td>avatarShape</td>
<td>\u5934\u50CF\u5360\u4F4D\u56FE\u5F62\u72B6</td>
<td><code v-pre>'round' | 'square'</code></td>
<td><code v-pre>'round'</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
