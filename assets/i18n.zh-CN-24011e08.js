const n={},a=`<h1 id="guo-ji-hua" tabindex="-1">国际化</h1>
<p>FNX UI 通过使用 <code v-pre>&lt;ConfigProvider /&gt;</code> 调整语言，默认情况下所有组件均为英语。</p>
<h2 id="configprovider" tabindex="-1">ConfigProvider</h2>
<p>使用 <code v-pre>&lt;ConfigProvider /&gt;</code> 配置语言。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'fnx-ui/lib/locale/zh-CN'</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>注意：<code v-pre>zh_CN</code> 是文件名，以下表格也遵循同样的规则。</p>
<p>目前支持以下语言：</p>
<table>
<thead>
<tr>
<th>语言</th>
<th>文件名</th>
</tr>
</thead>
<tbody>
<tr>
<td>英语（美式）</td>
<td>en_US</td>
</tr>
<tr>
<td>简体中文</td>
<td>zh_CN</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
