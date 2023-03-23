const n={},a=`<h1 id="internationalization" tabindex="-1">Internationalization</h1>
<p>FNX UI provide <code v-pre>&lt;ConfigProvider /&gt;</code> to customize the internationalization. By default, all components are in English.</p>
<h2 id="configprovider" tabindex="-1">ConfigProvider</h2>
<p>Use <code v-pre>&lt;ConfigProvider /&gt;</code> for configuring FNX UI locale text globally.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'fnx-ui/lib/locale/zh-CN'</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Note：<code v-pre>zh_CN</code> is the filename, the following table also follows the same rules.</p>
<p>Supported languages：</p>
<table>
<thead>
<tr>
<th>Language</th>
<th>Filename</th>
</tr>
</thead>
<tbody>
<tr>
<td>English</td>
<td>en_US</td>
</tr>
<tr>
<td>Chinese (Simplified)</td>
<td>zh_CN</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
