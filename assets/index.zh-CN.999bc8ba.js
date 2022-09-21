const n={},a=`<h1 id="uploader-wen-jian-shang-chuan" tabindex="-1">Uploader \u6587\u4EF6\u4E0A\u4F20</h1>
<p>\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\uFF0C\u5E76\u5728\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u5C55\u793A\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u8FDB\u5EA6\u3002</p>
<h2 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="wen-jian-yu-lan" tabindex="-1">\u6587\u4EF6\u9884\u89C8</h2>
<p>\u901A\u8FC7 <code v-pre>value</code> \u53EF\u4EE5\u7ED1\u5B9A\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868,\u5E76\u5C55\u793A\u6587\u4EF6\u5217\u8868\u7684\u9884\u89C8\u56FE\u3002<code v-pre>showFileList</code> \u4E3A <code v-pre>false</code> \u9690\u85CF\u9884\u89C8\u56FE\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> statusValue <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>statusValue<span class="token punctuation">}</span></span> <span class="token attr-name">showFileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="shang-chuan-zhuang-tai" tabindex="-1">\u4E0A\u4F20\u72B6\u6001</h2>
<p>\u901A\u8FC7 <code v-pre>status</code> \u5C5E\u6027\u53EF\u4EE5\u6807\u8BC6\u4E0A\u4F20\u72B6\u6001\uFF0C<code v-pre>uploading</code> \u8868\u793A\u4E0A\u4F20\u4E2D\uFF0C<code v-pre>failed</code> \u8868\u793A\u4E0A\u4F20\u5931\u8D25\uFF0C<code v-pre>done</code> \u8868\u793A\u4E0A\u4F20\u5B8C\u6210\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> statusValue<span class="token operator">:</span> detailFileProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'uploading'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>statusValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xian-zhi-shang-chuan-shu-liang" tabindex="-1">\u9650\u5236\u4E0A\u4F20\u6570\u91CF</h2>
<p>\u901A\u8FC7 <code v-pre>maxCount</code> \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u6570\u91CF\uFF0C\u4E0A\u4F20\u6570\u91CF\u8FBE\u5230\u9650\u5236\u540E\uFF0C\u4F1A\u81EA\u52A8\u9690\u85CF\u4E0A\u4F20\u533A\u57DF\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-shang-chuan-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F</h2>
<p>\u901A\u8FC7\u5B50\u5143\u7D20\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u533A\u57DF\u7684\u6837\u5F0F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span><span class="token punctuation">></span></span><span class="token plain-text">Custom Upload</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Uploader</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-yu-lan-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F</h2>
<p>\u901A\u8FC7 <code v-pre>slots</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8986\u76D6\u5728\u9884\u89C8\u533A\u57DF\u4E0A\u65B9\u7684\u5185\u5BB9\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> statusValue <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>statusValue<span class="token punctuation">}</span></span>
      <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token function-variable function">filePreviewCover</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> file <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>file <span class="token operator">&amp;&amp;</span> file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        fileList<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Custom Upload</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="shang-chuan-qian-zhi-chu-li" tabindex="-1">\u4E0A\u4F20\u524D\u7F6E\u5904\u7406</h2>
<p>\u901A\u8FC7\u4F20\u5165 <code v-pre>onRead</code> \u51FD\u6570\u53EF\u4EE5\u5728\u4E0A\u4F20\u524D\u8FDB\u884C\u6821\u9A8C\u548C\u5904\u7406\uFF0C\u8FD4\u56DE <code v-pre>file[]</code> \u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0C\u8FD4\u56DE <code v-pre>[]</code> \u8868\u793A\u6821\u9A8C\u5931\u8D25\u3002\u652F\u6301\u8FD4\u56DE <code v-pre>Promise</code> \u5BF9 <code v-pre>file</code> \u5BF9\u8C61\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u4F8B\u5982\u538B\u7F29\u56FE\u7247\uFF0C\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\u662F\u5426\u7B26\u5408\u8981\u6C42\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultValue <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg'</span><span class="token punctuation">,</span>
    status<span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleBeforeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fileList<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> file <span class="token operator">=</span> e<span class="token punctuation">.</span>file<span class="token punctuation">;</span>
  file<span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
  <span class="token function">setChange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>change<span class="token punctuation">,</span> e<span class="token punctuation">.</span>file<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">onRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleBeforeChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<p>\u7EC4\u4EF6<code v-pre>&lt;Uploader/&gt;</code> \u7C7B\u578B\u662F<code v-pre>UploaderProps</code>\uFF0C\u7EE7\u627F <code v-pre>UploaderFile</code>\u3002</p>
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
<td>accept</td>
<td>\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B</td>
<td><code v-pre>string |string[]</code></td>
<td>-</td>
</tr>
<tr>
<td>multiple</td>
<td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>showFileList</td>
<td>\u662F\u5426\u652F\u6301\u9884\u89C8\u56FE</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>maxCount</td>
<td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>\u6587\u4EF6\u5217\u8868</td>
<td><code v-pre>T[]</code></td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u6587\u4EF6\u5217\u8868</td>
<td><code v-pre>T[]</code></td>
<td>-</td>
</tr>
<tr>
<td>capture</td>
<td>\u56FE\u7247\u9009\u53D6\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code v-pre>camera</code> (\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934)</td>
<td><code v-pre>string | boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>slots</td>
<td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879</td>
<td><code v-pre>UploaderSlots</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1">\u4E8B\u4EF6</h2>
<p>\u7C7B\u578B <code v-pre>UploaderFileItem</code> \u7EE7\u627F <code v-pre>UploaderFile</code> \u4E14\u9664\u53BB <code v-pre>uid</code> \u5C5E\u6027\u3002
\u7C7B\u578B <code v-pre>UploaderMarkedFile</code> \u7EE7\u627F <code v-pre>UploaderFile</code> \u4E14\u9664\u53BB <code v-pre>uid</code>\uFF0C<code v-pre>file</code> \u5C5E\u6027\u3002</p>
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
<td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u89E6\u53D1</td>
<td><code v-pre>(e:UploaderMarkedFile)</code></td>
</tr>
<tr>
<td>onRead</td>
<td>\u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6\u65F6\u89E6\u53D1(\u5DF2\u83B7\u53D6\u6587\u4EF6)</td>
<td><code v-pre>(e:UploaderFileItem)</code></td>
</tr>
<tr>
<td>onUpload</td>
<td>\u4E0A\u4F20\u6587\u4EF6\u65F6\u89E6\u53D1(\u5DF2\u4E0A\u4F20)</td>
<td><code v-pre>(e:UploaderFileItem)</code></td>
</tr>
<tr>
<td>onPreview</td>
<td>\u70B9\u51FB\u9884\u89C8\u56FE\u65F6\u89E6\u53D1</td>
<td><code v-pre>(e:UploaderMarkedFile)</code></td>
</tr>
<tr>
<td>onRemove</td>
<td>\u5220\u9664\u6587\u4EF6\u9884\u89C8\u65F6\u89E6\u53D1</td>
<td><code v-pre>(e:UploaderMarkedFile)</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-shu-ju-jie-gou" tabindex="-1">Slots \u6570\u636E\u7ED3\u6784</h3>
<p>\u7C7B\u578B <code v-pre>UploaderSlots</code> \u7EE7\u627F <code v-pre>UploaderFile\u3002</code></p>
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
<td>filePreviewCover</td>
<td>\u9884\u89C8\u6587\u4EF6\u5907\u6CE8</td>
<td><code v-pre>(item: UploaderMarkedFile&lt;T&gt;) =&gt; ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>fileList</td>
<td>\u9884\u89C8\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="uploaderfile-shu-ju-jie-gou" tabindex="-1">UploaderFile \u6570\u636E\u7ED3\u6784</h3>
<p>\u7C7B\u578B <code v-pre>UploaderFileStatus</code> \u4E2D <code v-pre>uploading</code> \u8868\u793A\u4E0A\u4F20\u4E2D\uFF0C<code v-pre>failed</code> \u8868\u793A\u4E0A\u4F20\u5931\u8D25\uFF0C<code v-pre>done</code> \u8868\u793A\u4E0A\u4F20\u5B8C\u6210\u3002</p>
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
<td>uid</td>
<td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>\u6587\u4EF6\u540D</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>\u6587\u4EF6\u5927\u5C0F</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>\u6587\u4EF6\u7C7B\u578B</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>lastModified</td>
<td>\u6587\u4EF6\u6700\u540E\u4FEE\u6539</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>removable</td>
<td>\u662F\u5426\u53EF\u79FB\u9664</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>content</td>
<td>\u5185\u5BB9</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>\u6587\u4EF6\u72B6\u6001</td>
<td><code v-pre>UploaderFileStatus</code></td>
<td>-</td>
</tr>
<tr>
<td>thumbnail</td>
<td>\u7F29\u7565\u56FE\u5730\u5740</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>\u4FE1\u606F</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>file</td>
<td>\u6587\u4EF6</td>
<td><code v-pre>File</code></td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>\u4E0B\u8F7D\u5730\u5740</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
