const n={},a=`<h1 id="skeleton" tabindex="-1">Skeleton</h1>
<p>Used to display a set of placebound graphics during the content loading process.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
<p>Show title placement via <code v-pre>title</code> attribute, configure the number of banks through <code v-pre>rows</code> attribute.</p>
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
<h2 id="avatar" tabindex="-1">Avatar</h2>
<p>Show avatar occupying graphs via <code v-pre>avatar</code> attribute.</p>
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
<h2 id="display-subcomponent" tabindex="-1">Display Subcomponent</h2>
<p>Set the <code v-pre>loading</code> property to <code v-pre>false</code> indicates that the content loading is complete, and the placeholder map is hidden and the subcomponents of the <code v-pre>Skeleton</code></p>
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
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>rows</td>
<td>Paragraph occupying the number of paragraphs</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>rowWidth</td>
<td>Paragraph occupying the width, the number of can be used to set the width of each line</td>
<td><code v-pre>number | string | string[] | number[]</code></td>
<td><code v-pre>100%</code></td>
</tr>
<tr>
<td>title</td>
<td>Whether to display title placement</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>titleWidth</td>
<td>Title occupying graph width</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>avatar</td>
<td>Whether to display a avatar placement map</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>loading</td>
<td>Whether to show the backbone screen, the subcomponent content will be displayed when the <code v-pre>false</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>animate</td>
<td>Whether to open an animation</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>titleWidth</td>
<td>Title occupying graph width</td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>40%</code></td>
</tr>
<tr>
<td>avatarSize</td>
<td>Avatar placeholder map size. Unit default <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>32</code></td>
</tr>
<tr>
<td>avatarShape</td>
<td>Avatar placeholder pattern</td>
<td><code v-pre>'round' | 'square'</code></td>
<td><code v-pre>'round'</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
