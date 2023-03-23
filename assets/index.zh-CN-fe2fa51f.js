const n={},a=`<h1 id="tabs-biao-qian-ye" tabindex="-1">Tabs 标签页</h1>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>通过 <code v-pre>activeKey</code> 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Life is like all kinds of chocolate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="tong-guo-ming-cheng-pi-pei" tabindex="-1">通过名称匹配</h2>
<p>在标签指定 <code v-pre>name</code> 属性的情况下，<code v-pre>activeKey</code> 的值为当前标签的 <code v-pre>name</code>（此时无法通过索引值来匹配标签）。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">const</span> <span class="token punctuation">[</span>activeKey<span class="token punctuation">,</span> setActiveKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'key2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onActiveKeyChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setActiveKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">activeKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>activeKey<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onActiveKeyChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        1
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        2
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        3
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="biao-qian-lan-gun-dong" tabindex="-1">标签栏滚动</h2>
<p>默认标签数量超过 4 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-biao-qian" tabindex="-1">禁用标签</h2>
<p>设置 <code v-pre>disabled</code> 属性即可禁用标签。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">
        2
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dian-ji-shi-jian" tabindex="-1">点击事件</h2>
<p>可以在 <code v-pre>&lt;Tabs&gt;&lt;/Tabs&gt;</code> 上绑定 <code v-pre>onTabClick</code> 事件。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">const</span> <span class="token function-variable function">onTabClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">onTabClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onTabClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="nian-xing-bu-ju" tabindex="-1">粘性布局</h2>
<p>通过 <code v-pre>sticky</code> 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">sticky</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-biao-qian" tabindex="-1">自定义标签</h2>
<p>通过 <code v-pre>title</code> 插槽可以自定义标签内容。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Title 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="qie-huan-dong-hua" tabindex="-1">切换动画</h2>
<p>通过 <code v-pre>animated</code> 属性可以开启切换标签内容时的转场动画。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">animated</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="hua-dong-qie-huan" tabindex="-1">滑动切换</h2>
<p>通过 <code v-pre>swipeable</code> 属性可以开启滑动切换标签页。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">swipeable</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="gun-dong-dao-hang" tabindex="-1">滚动导航</h2>
<p>通过 <code v-pre>tabSwipeThreshold</code> 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">tabSwipeThreshold</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">sticky</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Panel</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title 4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Panel</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>activeKey</td>
<td>绑定当前选中标签的标识符</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>defaultActiveKey</td>
<td>默认选中标签的标识符</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>animated</td>
<td>是否开启切换标签内容时的转场动画</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>background</td>
<td>标签栏背景色</td>
<td><code v-pre>string</code></td>
<td><code v-pre>white</code></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>动画时间，单位 <code v-pre>ms</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>300</code></td>
</tr>
<tr>
<td>trackWidth</td>
<td>底部条宽度，默认单位 <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>40</code></td>
</tr>
<tr>
<td>trackColor</td>
<td>底部条颜色</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>trackHeight</td>
<td>底部条高度，默认单位 <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>3</code></td>
</tr>
<tr>
<td>border</td>
<td>是否显示标签栏外边框</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>ellipsis</td>
<td>是否省略过长的标题文字</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>sticky</td>
<td>是否使用粘性定位布局</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>stickyProps</td>
<td>自定义粘性定位布局</td>
<td><code v-pre>StickyProps</code></td>
<td>-</td>
</tr>
<tr>
<td>swipeable</td>
<td>是否开启滑动切换</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>slots</td>
<td>自定义内容</td>
<td><code v-pre>TabsSlots</code></td>
<td>-</td>
</tr>
<tr>
<td>tabSwipeThreshold</td>
<td>滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动</td>
<td><code v-pre>number</code></td>
<td><code v-pre>5</code></td>
</tr>
</tbody>
</table>
<h2 id="tabspanel-api" tabindex="-1">TabsPanel API</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>标题</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>forceRender</td>
<td>被隐藏时是否渲染 DOM 结构</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1">事件</h2>
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
<td>onChange</td>
<td>当前激活的标签改变时触发</td>
<td><code v-pre>(key: string)</code></td>
</tr>
<tr>
<td>onTabClick</td>
<td>点击标签时触发</td>
<td><code v-pre>(e: MouseEvent&lt;HTMLDivElement&gt;, option:{disabled:boolean;key:string; index:number })</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-shu-ju-jie-gou" tabindex="-1">slots 数据结构</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>navLeft</td>
<td>标签左侧占位内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>navRight</td>
<td>标签右侧占位内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>navBottom</td>
<td>标签底部占位内容</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="stickyprops-shu-ju-jie-gou" tabindex="-1">stickyProps 数据结构</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>zIndex</td>
<td>吸顶时的 z-index</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>container</td>
<td>容器对应的 HTML 节点</td>
<td><code v-pre>Element | (() =&gt; Element undefined null) | null</code></td>
<td>-</td>
</tr>
<tr>
<td>offsetTop</td>
<td>吸顶时与顶部的距离</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>offsetBottom</td>
<td>吸底时与底部的距离</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>position</td>
<td>吸附位置</td>
<td><code v-pre>'top' | 'bottom'</code></td>
<td><code v-pre>top</code></td>
</tr>
</tbody>
</table>
<h3 id="stickyprops-shi-jian" tabindex="-1">stickyProps 事件</h3>
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
<td>onChange</td>
<td>当吸顶状态改变时触发</td>
<td><code v-pre>option: { fixed: boolean }</code></td>
</tr>
<tr>
<td>onScroll</td>
<td>滚动时触发</td>
<td><code v-pre>option: { fixed: boolean; scrollTop: number }</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
