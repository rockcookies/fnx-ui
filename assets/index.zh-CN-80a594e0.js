const n={},s=`<h1 id="list-lie-biao" tabindex="-1">List 列表</h1>
<p>瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>List 组件通过 <code v-pre>status</code> 控制加载状态，当组件滚动到底部时，会触发 <code v-pre>onLoad</code> 事件。此时可以发起异步操作并更新数据，数据更新完毕后，将 <code v-pre>status</code> 设置成 <code v-pre>default</code> 即可。若数据已全部加载完毕，则直接将 <code v-pre>status</code> 设置成 <code v-pre>finished</code> 即可。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ListStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui/es/list'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listStatus<span class="token punctuation">,</span> setListStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>ListStatus<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 异步更新数据</span>
  <span class="token comment">// setTimeout 仅做示例，真实场景中一般为 ajax 请求</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">setList</span><span class="token punctuation">(</span>newList<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'finished'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 数据全部加载完成</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setListStatus</span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加载状态结束</span>
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
<h2 id="cuo-wu-ti-shi" tabindex="-1">错误提示</h2>
<p>若列表数据加载失败，将 <code v-pre>status</code> 设置成 <code v-pre>error</code> 即可显示错误提示，用户点击错误提示后会重新触发 <code v-pre>onLoad</code> 事件。</p>
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
        error<span class="token operator">:</span> <span class="token operator">&lt;</span>span onClick<span class="token operator">=</span><span class="token punctuation">{</span>onLoad<span class="token punctuation">}</span><span class="token operator">></span>请求失败，点击重新加载<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span>
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
<h2 id="xia-la-shua-xin" tabindex="-1">下拉刷新</h2>
<p>List 组件可以与 <code v-pre>&lt;PullRefresh /&gt;</code> 组件结合使用，实现下拉刷新的效果。</p>
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
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>列表状态</td>
<td><code v-pre>'default' | 'loading' | 'finished' | 'error'</code></td>
<td><code v-pre>'default'</code></td>
</tr>
<tr>
<td>offset</td>
<td>滚动条与底部距离小于 <code v-pre>offset</code> 时触发 <code v-pre>onLoad</code> 事件</td>
<td><code v-pre>number</code></td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>slots</td>
<td>列表插槽</td>
<td><code v-pre>ListSlots</code></td>
<td>-</td>
</tr>
<tr>
<td>direction</td>
<td>滚动触发加载的方向</td>
<td><code v-pre>'up' | 'down'</code></td>
<td><code v-pre>'down'</code></td>
</tr>
<tr>
<td>immediateCheck</td>
<td>是否在初始化时立即执行滚动位置检查</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>scrollListenTo</td>
<td>触发监听滚动的元素</td>
<td><code v-pre>HTMLElement | Window | (() =&gt; HTMLElement | Window) | null</code></td>
<td><code v-pre>null</code></td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events</h2>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLoad</td>
<td>滚动条与底部距离小于 <code v-pre>offset</code> 时触发</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="listslots-cha-cao" tabindex="-1">ListSlots 插槽</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>列表内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>loading</td>
<td>自定义底部加载中提示</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>finished</td>
<td>自定义加载完成后的提示文案</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>error</td>
<td>自定义加载失败后的提示文案</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="listref-shi-li-fang-fa" tabindex="-1">ListRef 实例方法</h3>
<p>通过 <code v-pre>ref</code> 可以获取到 List 实例并调用实例方法。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>参数</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>check()</td>
<td>检查当前的滚动位置，若已滚动至底部，则会触发 <code v-pre>onLoad</code> 事件</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,s as html};
