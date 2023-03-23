const n={},a=`<h1 id="configprovider" tabindex="-1">ConfigProvider</h1>
<p>ConfigProvider provides a uniform configuration support for components.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
<p>This component provides a configuration to all React components underneath itself via the <a href="https://facebook.github.io/react/docs/context.html">context API</a>. In the render tree all components will have access to the provided config.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">transitionDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="locale" tabindex="-1">Locale</h2>
<p>Use ConfigProvider config locale.</p>
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
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>locale</td>
<td>Language package setting, you can find the packages in <a href="https://unpkg.com/browse/fnx-ui/lib/locale">fnx-ui/lib/locale</a></td>
<td><code v-pre>object</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>safeAreaInsetBottom</td>
<td>Whether to enable bottom safe area adaptation</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>Animation transition duration</td>
<td><code v-pre>number</code></td>
<td><code v-pre>300</code></td>
<td></td>
</tr>
<tr>
<td>mountTo</td>
<td>To set the container of the popup element. The default is to create a <code v-pre>div</code> element in <code v-pre>body</code></td>
<td></td>
<td><code v-pre>() =&gt; HTMLElement</code></td>
<td><code v-pre>() =&gt; document.body</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
