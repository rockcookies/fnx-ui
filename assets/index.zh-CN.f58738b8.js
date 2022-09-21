const n={},a=`<h1 id="tabs-biao-qian-ye" tabindex="-1">Tabs \u6807\u7B7E\u9875</h1>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u901A\u8FC7 <code v-pre>activeKey</code> \u7ED1\u5B9A\u5F53\u524D\u6FC0\u6D3B\u6807\u7B7E\u5BF9\u5E94\u7684\u7D22\u5F15\u503C\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u542F\u7528\u7B2C\u4E00\u4E2A\u6807\u7B7E\u3002</p>
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
<h2 id="tong-guo-ming-cheng-pi-pei" tabindex="-1">\u901A\u8FC7\u540D\u79F0\u5339\u914D</h2>
<p>\u5728\u6807\u7B7E\u6307\u5B9A <code v-pre>name</code> \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C<code v-pre>activeKey</code> \u7684\u503C\u4E3A\u5F53\u524D\u6807\u7B7E\u7684 <code v-pre>name</code>\uFF08\u6B64\u65F6\u65E0\u6CD5\u901A\u8FC7\u7D22\u5F15\u503C\u6765\u5339\u914D\u6807\u7B7E\uFF09\u3002</p>
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
<h2 id="biao-qian-lan-gun-dong" tabindex="-1">\u6807\u7B7E\u680F\u6EDA\u52A8</h2>
<p>\u9ED8\u8BA4\u6807\u7B7E\u6570\u91CF\u8D85\u8FC7 4 \u4E2A\u65F6\uFF0C\u6807\u7B7E\u680F\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u6EDA\u52A8\uFF0C\u5207\u6362\u65F6\u4F1A\u81EA\u52A8\u5C06\u5F53\u524D\u6807\u7B7E\u5C45\u4E2D\u3002</p>
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
<h2 id="jin-yong-biao-qian" tabindex="-1">\u7981\u7528\u6807\u7B7E</h2>
<p>\u8BBE\u7F6E <code v-pre>disabled</code> \u5C5E\u6027\u5373\u53EF\u7981\u7528\u6807\u7B7E\u3002</p>
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
<h2 id="dian-ji-shi-jian" tabindex="-1">\u70B9\u51FB\u4E8B\u4EF6</h2>
<p>\u53EF\u4EE5\u5728 <code v-pre>&lt;Tabs&gt;&lt;/Tabs&gt;</code> \u4E0A\u7ED1\u5B9A <code v-pre>onTabClick</code> \u4E8B\u4EF6\u3002</p>
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
<h2 id="nian-xing-bu-ju" tabindex="-1">\u7C98\u6027\u5E03\u5C40</h2>
<p>\u901A\u8FC7 <code v-pre>sticky</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u7C98\u6027\u5E03\u5C40\uFF0C\u7C98\u6027\u5E03\u5C40\u4E0B\uFF0C\u6807\u7B7E\u9875\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u4F1A\u81EA\u52A8\u5438\u9876\u3002</p>
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
<h2 id="zi-ding-yi-biao-qian" tabindex="-1">\u81EA\u5B9A\u4E49\u6807\u7B7E</h2>
<p>\u901A\u8FC7 <code v-pre>title</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9\u3002</p>
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
<h2 id="qie-huan-dong-hua" tabindex="-1">\u5207\u6362\u52A8\u753B</h2>
<p>\u901A\u8FC7 <code v-pre>animated</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B\u3002</p>
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
<h2 id="hua-dong-qie-huan" tabindex="-1">\u6ED1\u52A8\u5207\u6362</h2>
<p>\u901A\u8FC7 <code v-pre>swipeable</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6ED1\u52A8\u5207\u6362\u6807\u7B7E\u9875\u3002</p>
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
<h2 id="gun-dong-dao-hang" tabindex="-1">\u6EDA\u52A8\u5BFC\u822A</h2>
<p>\u901A\u8FC7 <code v-pre>tabSwipeThreshold</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6EDA\u52A8\u5BFC\u822A\u6A21\u5F0F\uFF0C\u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u5185\u5BB9\u5C06\u4F1A\u5E73\u94FA\u5C55\u793A\u3002</p>
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
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>activeKey</td>
<td>\u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u6807\u8BC6\u7B26</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>defaultActiveKey</td>
<td>\u9ED8\u8BA4\u9009\u4E2D\u6807\u7B7E\u7684\u6807\u8BC6\u7B26</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>animated</td>
<td>\u662F\u5426\u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>background</td>
<td>\u6807\u7B7E\u680F\u80CC\u666F\u8272</td>
<td><code v-pre>string</code></td>
<td><code v-pre>white</code></td>
</tr>
<tr>
<td>transitionDuration</td>
<td>\u52A8\u753B\u65F6\u95F4\uFF0C\u5355\u4F4D <code v-pre>ms</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>300</code></td>
</tr>
<tr>
<td>trackWidth</td>
<td>\u5E95\u90E8\u6761\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>40</code></td>
</tr>
<tr>
<td>trackColor</td>
<td>\u5E95\u90E8\u6761\u989C\u8272</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>trackHeight</td>
<td>\u5E95\u90E8\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D <code v-pre>px</code></td>
<td><code v-pre>number | string</code></td>
<td><code v-pre>3</code></td>
</tr>
<tr>
<td>border</td>
<td>\u662F\u5426\u663E\u793A\u6807\u7B7E\u680F\u5916\u8FB9\u6846</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>ellipsis</td>
<td>\u662F\u5426\u7701\u7565\u8FC7\u957F\u7684\u6807\u9898\u6587\u5B57</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>sticky</td>
<td>\u662F\u5426\u4F7F\u7528\u7C98\u6027\u5B9A\u4F4D\u5E03\u5C40</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>stickyProps</td>
<td>\u81EA\u5B9A\u4E49\u7C98\u6027\u5B9A\u4F4D\u5E03\u5C40</td>
<td><code v-pre>StickyProps</code></td>
<td>-</td>
</tr>
<tr>
<td>swipeable</td>
<td>\u662F\u5426\u5F00\u542F\u6ED1\u52A8\u5207\u6362</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>slots</td>
<td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td>
<td><code v-pre>TabsSlots</code></td>
<td>-</td>
</tr>
<tr>
<td>tabSwipeThreshold</td>
<td>\u6EDA\u52A8\u9608\u503C\uFF0C\u6807\u7B7E\u6570\u91CF\u8D85\u8FC7\u9608\u503C\u4E14\u603B\u5BBD\u5EA6\u8D85\u8FC7\u6807\u7B7E\u680F\u5BBD\u5EA6\u65F6\u5F00\u59CB\u6A2A\u5411\u6EDA\u52A8</td>
<td><code v-pre>number</code></td>
<td><code v-pre>5</code></td>
</tr>
</tbody>
</table>
<h2 id="tabspanel-api" tabindex="-1">TabsPanel API</h2>
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
<td>title</td>
<td>\u6807\u9898</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>forceRender</td>
<td>\u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="shi-jian" tabindex="-1">\u4E8B\u4EF6</h2>
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
<td>\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u6539\u53D8\u65F6\u89E6\u53D1</td>
<td><code v-pre>(key: string)</code></td>
</tr>
<tr>
<td>onTabClick</td>
<td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1</td>
<td><code v-pre>(e: MouseEvent&lt;HTMLDivElement&gt;, option:{disabled:boolean;key:string; index:number })</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-shu-ju-jie-gou" tabindex="-1">slots \u6570\u636E\u7ED3\u6784</h3>
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
<td>navLeft</td>
<td>\u6807\u7B7E\u5DE6\u4FA7\u5360\u4F4D\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>navRight</td>
<td>\u6807\u7B7E\u53F3\u4FA7\u5360\u4F4D\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>navBottom</td>
<td>\u6807\u7B7E\u5E95\u90E8\u5360\u4F4D\u5185\u5BB9</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="stickyprops-shu-ju-jie-gou" tabindex="-1">stickyProps \u6570\u636E\u7ED3\u6784</h3>
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
<td>zIndex</td>
<td>\u5438\u9876\u65F6\u7684 z-index</td>
<td><code v-pre>string | number</code></td>
<td>-</td>
</tr>
<tr>
<td>container</td>
<td>\u5BB9\u5668\u5BF9\u5E94\u7684 HTML \u8282\u70B9</td>
<td><code v-pre>Element | (() =&gt; Element undefined null) | null</code></td>
<td>-</td>
</tr>
<tr>
<td>offsetTop</td>
<td>\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>offsetBottom</td>
<td>\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td>position</td>
<td>\u5438\u9644\u4F4D\u7F6E</td>
<td><code v-pre>'top' | 'bottom'</code></td>
<td><code v-pre>top</code></td>
</tr>
</tbody>
</table>
<h3 id="stickyprops-shi-jian" tabindex="-1">stickyProps \u4E8B\u4EF6</h3>
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
<td>\u5F53\u5438\u9876\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td>
<td><code v-pre>option: { fixed: boolean }</code></td>
</tr>
<tr>
<td>onScroll</td>
<td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td>
<td><code v-pre>option: { fixed: boolean; scrollTop: number }</code></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
