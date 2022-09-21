const n={},s=`<h1 id="an-xu-yin-ru" tabindex="-1">\u6309\u9700\u5F15\u5165</h1>
<p>FNX UI \u652F\u6301 tree shaking\uFF0C\u7EC4\u4EF6\u3001\u8BED\u8A00\u3001\u5747\u53EF tree-shaking\u3002</p>
<p>\u9ED8\u8BA4\u60C5\u51B5\u7EC4\u4EF6\u8BED\u8A00\u4E3A\u82F1\u6587\uFF0C\u65E0\u9700\u989D\u5916\u5BFC\u5165\u3002</p>
<h2 id="an-xu-yin-ru-less-css" tabindex="-1">\u6309\u9700\u5F15\u5165 LESS/CSS</h2>
<p><a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> \u662F\u4E00\u6B3E babel \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C06 import \u8BED\u53E5\u81EA\u52A8\u8F6C\u6362\u4E3A\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F\u3002</p>
<pre class="language-bash"><code class="language-bash" v-pre><span class="token comment"># \u5B89\u88C5\u63D2\u4EF6</span>
$ <span class="token function">npm</span> i babel-plugin-import <span class="token parameter variable">-D</span>
</code></pre>
<p>\u5728.babelrc \u6216 babel.config.js \u4E2D\u6DFB\u52A0\u914D\u7F6E\u3002</p>
<pre class="language-json"><code class="language-json" v-pre><span class="token punctuation">{</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"import"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"fnx-ui"</span><span class="token punctuation">,</span>
        <span class="token property">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>
        <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u63A5\u7740\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u5F15\u5165 FNX UI \u7EC4\u4EF6\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5C06\u4EE3\u7801\u8F6C\u5316\u4E3A\u6309\u9700\u5F15\u5165\u7684\u5F62\u5F0F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token comment">// \u539F\u59CB\u4EE3\u7801</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token comment">// \u7F16\u8BD1\u540E\u4EE3\u7801</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'fnx-ui/es/button'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'fnx-ui/es/button/style'</span><span class="token punctuation">;</span>
</code></pre>
`;export{n as attributes,s as html};
