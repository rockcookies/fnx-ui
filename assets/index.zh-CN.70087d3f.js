const n={},s=`<h1 id="list-lie-biao" tabindex="-1">List \u5217\u8868</h1>
<p>\u7011\u5E03\u6D41\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u7528\u4E8E\u5C55\u793A\u957F\u5217\u8868\uFF0C\u5F53\u5217\u8868\u5373\u5C06\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u5E76\u52A0\u8F7D\u66F4\u591A\u5217\u8868\u9879\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>List \u7EC4\u4EF6\u901A\u8FC7 <code v-pre>status</code> \u63A7\u5236\u52A0\u8F7D\u72B6\u6001\uFF0C\u5F53\u7EC4\u4EF6\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code v-pre>onLoad</code> \u4E8B\u4EF6\u3002\u6B64\u65F6\u53EF\u4EE5\u53D1\u8D77\u5F02\u6B65\u64CD\u4F5C\u5E76\u66F4\u65B0\u6570\u636E\uFF0C\u6570\u636E\u66F4\u65B0\u5B8C\u6BD5\u540E\uFF0C\u5C06 <code v-pre>status</code> \u8BBE\u7F6E\u6210 <code v-pre>default</code> \u5373\u53EF\u3002\u82E5\u6570\u636E\u5DF2\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u5219\u76F4\u63A5\u5C06 <code v-pre>status</code> \u8BBE\u7F6E\u6210 <code v-pre>finished</code> \u5373\u53EF\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ListStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui/es/list'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listStatus<span class="token punctuation">,</span> setListStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>ListStatus<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span>
  <span class="token comment">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">setList</span><span class="token punctuation">(</span>newList<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'finished'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u8F7D\u72B6\u6001\u7ED3\u675F</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoad<span class="token punctuation">}</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>listStatus<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="cuo-wu-ti-shi" tabindex="-1">\u9519\u8BEF\u63D0\u793A</h2>
<p>\u82E5\u5217\u8868\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF0C\u5C06 <code v-pre>status</code> \u8BBE\u7F6E\u6210 <code v-pre>error</code> \u5373\u53EF\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u7528\u6237\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u540E\u4F1A\u91CD\u65B0\u89E6\u53D1 <code v-pre>onLoad</code> \u4E8B\u4EF6\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ListStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui/es/list'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listStatus<span class="token punctuation">,</span> setListStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>ListStatus<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token generic-function"><span class="token function">i</span> <span class="token generic class-name"><span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">setList</span><span class="token punctuation">(</span>newList<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>List
      onLoad<span class="token operator">=</span><span class="token punctuation">{</span>onLoad<span class="token punctuation">}</span>
      status<span class="token operator">=</span><span class="token punctuation">{</span>listStatus<span class="token punctuation">}</span>
      slots<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        error<span class="token operator">:</span> <span class="token operator">&lt;</span>span onClick<span class="token operator">=</span><span class="token punctuation">{</span>onLoad<span class="token punctuation">}</span><span class="token operator">></span>\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span></span></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xia-la-shua-xin" tabindex="-1">\u4E0B\u62C9\u5237\u65B0</h2>
<p>List \u7EC4\u4EF6\u53EF\u4EE5\u4E0E <code v-pre>&lt;PullRefresh /&gt;</code> \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PullRefresh <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ListStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui/es/list'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listStatus<span class="token punctuation">,</span> setListStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>ListStatus<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listRefreshing<span class="token punctuation">,</span> setListRefreshing<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span>refreshing<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>refreshing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setListRefreshing</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>listStatus <span class="token operator">===</span> <span class="token string">'loading'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">(</span>refreshing <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">setList</span><span class="token punctuation">(</span>newList<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setListRefreshing</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'finished'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PullRefresh</span></span> <span class="token attr-name">refreshing</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>listRefreshing<span class="token punctuation">}</span></span> <span class="token attr-name">onRefresh</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>listStatus<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PullRefresh</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="props" tabindex="-1">Props</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>\u5217\u8868\u72B6\u6001</td>
<td><code v-pre>'default' | 'loading' | 'finished' | 'error'</code></td>
<td><code v-pre>'default'</code></td>
</tr>
<tr>
<td>offset</td>
<td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E <code v-pre>offset</code> \u65F6\u89E6\u53D1 <code v-pre>onLoad</code> \u4E8B\u4EF6</td>
<td><code v-pre>number</code></td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>slots</td>
<td>\u5217\u8868\u63D2\u69FD</td>
<td><code v-pre>ListSlots</code></td>
<td>-</td>
</tr>
<tr>
<td>direction</td>
<td>\u6EDA\u52A8\u89E6\u53D1\u52A0\u8F7D\u7684\u65B9\u5411</td>
<td><code v-pre>'up' | 'down'</code></td>
<td><code v-pre>'down'</code></td>
</tr>
<tr>
<td>immediateCheck</td>
<td>\u662F\u5426\u5728\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u6267\u884C\u6EDA\u52A8\u4F4D\u7F6E\u68C0\u67E5</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>scrollListenTo</td>
<td>\u89E6\u53D1\u76D1\u542C\u6EDA\u52A8\u7684\u5143\u7D20</td>
<td><code v-pre>HTMLElement | Window | (() =&gt; HTMLElement | Window) | null</code></td>
<td><code v-pre>null</code></td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events</h2>
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
<td>onLoad</td>
<td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E <code v-pre>offset</code> \u65F6\u89E6\u53D1</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="listslots-cha-cao" tabindex="-1">ListSlots \u63D2\u69FD</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>\u5217\u8868\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>loading</td>
<td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u52A0\u8F7D\u4E2D\u63D0\u793A</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>finished</td>
<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>error</td>
<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="listref-shi-li-fang-fa" tabindex="-1">ListRef \u5B9E\u4F8B\u65B9\u6CD5</h3>
<p>\u901A\u8FC7 <code v-pre>ref</code> \u53EF\u4EE5\u83B7\u53D6\u5230 List \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
<th>\u8FD4\u56DE\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>check()</td>
<td>\u68C0\u67E5\u5F53\u524D\u7684\u6EDA\u52A8\u4F4D\u7F6E\uFF0C\u82E5\u5DF2\u6EDA\u52A8\u81F3\u5E95\u90E8\uFF0C\u5219\u4F1A\u89E6\u53D1 <code v-pre>onLoad</code> \u4E8B\u4EF6</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
