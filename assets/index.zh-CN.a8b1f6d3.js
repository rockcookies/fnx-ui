const n={},s=`<h1 id="collapse-zhe-die-mian-ban" tabindex="-1">Collapse \u6298\u53E0\u9762\u677F</h1>
<p>\u5C06\u4E00\u7EC4\u5185\u5BB9\u653E\u7F6E\u5728\u591A\u4E2A\u6298\u53E0\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u9762\u677F\u7684\u6807\u9898\u53EF\u4EE5\u5C55\u5F00\u6216\u6536\u7F29\u5176\u5185\u5BB9\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u901A\u8FC7 <code v-pre>defaultActiveKey</code> \u8868\u793A\u9ED8\u8BA4\u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="shou-feng-qin" tabindex="-1">\u624B\u98CE\u7434</h2>
<p>\u901A\u8FC7 <code v-pre>accordion</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6700\u591A\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span> <span class="token attr-name">accordion</span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="you-ling-mo-shi" tabindex="-1">\u5E7D\u7075\u6A21\u5F0F</h2>
<p>\u901A\u8FC7\u63A7\u5236\u5C5E\u6027 <code v-pre>ghost</code> \u5B9E\u73B0\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span> <span class="token attr-name">ghost</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h2>
<p>\u901A\u8FC7 <code v-pre>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u5355\u4E2A\u9762\u677F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h2>
<p><code v-pre>title</code> \u662F <code v-pre>ReactNode</code> \u7C7B\u578B\uFF0C<code v-pre>headerProps</code> \u5C5E\u6027\u91CC\u9762\u7684 <code v-pre>leftIcon</code> \u548C <code v-pre>content</code> \u4E5F\u662F <code v-pre>ReactNode</code> \u7C7B\u578B\uFF0C<code v-pre>leftIcon</code> \u8868\u793A\u662F\u5DE6\u4FA7\u56FE\u6807\uFF0C<code v-pre>content</code> \u662F\u9ED8\u8BA4\u53F3\u4FA7\u7684\u5185\u5BB9\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span>
        <span class="token attr-name">headerProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> leftIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        Content
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse.Item</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span>
        <span class="token attr-name">headerProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          leftIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          content<span class="token operator">:</span> <span class="token string">'Content'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        Content
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>ghost</td>
<td>\u5B9E\u73B0\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>accordion</td>
<td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>defaultActiveKey</td>
<td>\u521D\u59CB\u5316\u9009\u4E2D\u9762\u677F\u7684 <code v-pre>key</code></td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>[]</code></td>
</tr>
<tr>
<td>activeKey</td>
<td>\u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u7684 <code v-pre>key</code></td>
<td><code v-pre>string | string[]</code></td>
<td><code v-pre>[]</code></td>
</tr>
</tbody>
</table>
<h2 id="collapseitem-api" tabindex="-1">CollapseItem API</h2>
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
<td>title</td>
<td>\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>titleProps</td>
<td>\u5B9E\u73B0\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td>
<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td>headerProps</td>
<td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td>
<td><code v-pre>CellProps</code></td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528\u5355\u4E2A\u9762\u677F</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>ghost</td>
<td>\u5B9E\u73B0\u662F\u5426\u5355\u4E2A\u663E\u793A\u5185\u8FB9\u6846</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u8FC7\u6E21\u52A8\u753B\u65F6\u95F4\uFF0C\u5355\u4F4D\u9ED8\u8BA4 <code v-pre>ms</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1">\u4E8B\u4EF6</h2>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td>
<td><code v-pre>(key: string[])</code></td>
</tr>
</tbody>
</table>
<h3 id="headerprops-shu-ju-jie-gou" tabindex="-1">headerProps \u6570\u636E\u7ED3\u6784</h3>
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
<td>title</td>
<td>\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>titleProps</td>
<td>\u6807\u9898\u5C5E\u6027</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>content</td>
<td>\u53F3\u4FA7\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>contentProps</td>
<td>\u53F3\u4FA7\u5185\u5BB9\u5C5E\u6027</td>
<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>descriptionProps</td>
<td>\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F\u5C5E\u6027</td>
<td><code v-pre>HTMLAttributes&lt;HTMLDivElement</code></td>
<td>-</td>
</tr>
<tr>
<td>leftIcon</td>
<td>\u5DE6\u4FA7\u81EA\u5B9A\u4E49\u56FE\u6807</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>leftIconProps</td>
<td>\u5DE6\u4FA7\u81EA\u5B9A\u4E49\u56FE\u6807\u5C5E\u6027</td>
<td><code v-pre>HTMLAttributes&lt;HTMLSpanElement&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td>rightIcon</td>
<td>\u53F3\u4FA7\u81EA\u5B9A\u4E49\u56FE\u6807</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>rightIconProps</td>
<td>\u53F3\u4FA7\u81EA\u5B9A\u4E49\u56FE\u6807\u5C5E\u6027</td>
<td><code v-pre>HTMLAttributes&lt;HTMLSpanElement&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td>border</td>
<td><code v-pre>Cell</code> \u8FB9\u6846</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>itemsAlign</td>
<td>\u5BF9\u9F50\u65B9\u5F0F</td>
<td><code v-pre>'top' | 'middle' | 'bottom'</code></td>
<td>-</td>
</tr>
<tr>
<td>clickable</td>
<td>\u662F\u5426\u53EF\u70B9\u51FB</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
