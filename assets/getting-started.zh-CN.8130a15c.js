const n={},s=`<h1 id="kuai-su-shang-shou" tabindex="-1">\u5FEB\u901F\u4E0A\u624B</h1>
<p>\u8FD9\u7BC7\u6307\u5357\u5047\u8BBE\u4F60\u5DF2\u4E86\u89E3\u5173\u4E8E HTML\u3001CSS \u548C JavaScript \u7684\u4E2D\u7EA7\u77E5\u8BC6\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u5B8C\u5168\u638C\u63E1\u4E86 React \u5168\u5BB6\u6876\u7684\u6B63\u786E\u5F00\u53D1\u65B9\u5F0F\u3002\u5982\u679C\u4F60\u521A\u5F00\u59CB\u5B66\u4E60\u524D\u7AEF\u6216\u8005 React\uFF0C\u5C06 UI \u6846\u67B6\u4F5C\u4E3A\u4F60\u7684\u7B2C\u4E00\u6B65\u53EF\u80FD\u4E0D\u662F\u6700\u597D\u7684\u4E3B\u610F\u3002</p>
<h2 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h2>
<p>\u4F7F\u7528 npm \u6216 yarn \u8FDB\u884C\u5B89\u88C5\u3002</p>
<pre class="language-bash"><code class="language-bash" v-pre><span class="token comment"># npm</span>
$ <span class="token function">npm</span> i fnx-ui <span class="token parameter variable">-S</span>

<span class="token comment"># yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> fnx-ui
</code></pre>
<h2 id="shi-yong" tabindex="-1">\u4F7F\u7528</h2>
<p>\u8FD0\u884C\u9879\u76EE\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'fnx-ui/lib/locale/zh-CN'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">'fnx-ui/dist/fnx.css'</span><span class="token punctuation">;</span>

<span class="token comment">// light mode</span>
<span class="token keyword">import</span> <span class="token string">'fnx-ui/dist/fnx-theme-light.css'</span><span class="token punctuation">;</span>

<span class="token comment">// dark mode</span>
<span class="token comment">// import 'fnx-ui/dist/fnx-theme-dark.css';</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token operator">:</span> <span class="token string">'100px auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello World!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
`;export{n as attributes,s as html};
