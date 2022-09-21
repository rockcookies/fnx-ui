const n={},a=`<h1 id="form-biao-dan" tabindex="-1">Form \u8868\u5355</h1>
<p>\u9AD8\u6027\u80FD\u8868\u5355\u63A7\u4EF6\uFF0C\u81EA\u5E26\u6570\u636E\u57DF\u7BA1\u7406\u3002\u5305\u542B\u6570\u636E\u5F55\u5165\u3001\u6821\u9A8C\u4EE5\u53CA\u5BF9\u5E94\u6837\u5F0F\u3002</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h2>
<p>\u57FA\u672C\u7684\u8868\u5355\u6570\u636E\u57DF\u63A7\u5236\u5C55\u793A\uFF0C\u5305\u542B\u5E03\u5C40\u3001\u521D\u59CB\u5316\u3001\u9A8C\u8BC1\u3001\u63D0\u4EA4\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'Username is required'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'Password is required'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">block</span><span class="token punctuation">></span></span><span class="token plain-text">
        Submit
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xiao-yan-gui-ze" tabindex="-1">\u6821\u9A8C\u89C4\u5219</h2>
<p>\u901A\u8FC7 <code v-pre>rules</code> \u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u89C4\u5219\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onFinishFailed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pattern<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            pattern<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{6}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'please enter six number'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      &lt;Form.Item
        label="Validator"
        name="validator"
        rules=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{6}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'please enter six number'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">
      >
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Validator<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      &lt;Form.Item
        label="AsyncValidator"
        name="asyncValidator"
        validateTrigger="onBlur"
        rules=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setValidating</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token function">setValidating</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{6}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
                    <span class="token operator">?</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{6}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token operator">:</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'please enter six number'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">
      >
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AsyncValidator<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">block</span><span class="token punctuation">></span></span><span class="token plain-text">
        Submit
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="dong-tai-zeng-jian-biao-dan-xiang" tabindex="-1">\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879</h2>
<p>\u52A8\u6001\u589E\u52A0\u3001\u51CF\u5C11\u8868\u5355\u9879\u3002<code v-pre>add</code> \u65B9\u6CD5\u53C2\u6570\u53EF\u7528\u4E8E\u8BBE\u7F6E\u521D\u59CB\u503C\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onFinishFailed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.List</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token punctuation">(</span>
          fields<span class="token operator">:</span> FormListField<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> add<span class="token punctuation">,</span> remove <span class="token punctuation">}</span><span class="token operator">:</span> FormListOperations<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token operator">:</span> ReactNode <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>fields<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">map</span><span class="token generic class-name"><span class="token operator">&lt;</span>ReactNode<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>restFields <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
                  <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>restFields<span class="token punctuation">}</span></span>
                  <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span>
                  <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token string">'username'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
                  <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      message<span class="token operator">:</span> <span class="token string">'Username is required'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                  <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cross<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">remove</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
                <span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">bem</span><span class="token punctuation">(</span><span class="token string">'actions'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
                <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
                <span class="token attr-name">block</span>
                <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fields<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">}</span></span>
                <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                Add Field
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">block</span><span class="token punctuation">></span></span><span class="token plain-text">
                Submit
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="form-props" tabindex="-1">Form Props</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>colon</td>
<td>\u914D\u7F6E Form.Item \u7684 <code v-pre>colon</code> \u7684\u9ED8\u8BA4\u503C\u3002\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>component</td>
<td>\u8BBE\u7F6E Form \u6E32\u67D3\u5143\u7D20\uFF0C\u4E3A <code v-pre>false</code> \u5219\u4E0D\u521B\u5EFA DOM \u8282\u70B9</td>
<td><code v-pre>false</code> | <code v-pre>string</code> | <code v-pre>React.FC&lt;any&gt;</code> | <code v-pre>React.ComponentClass&lt;any&gt;</code></td>
<td><code v-pre>'form'</code></td>
<td></td>
</tr>
<tr>
<td>form</td>
<td>\u7ECF <code v-pre>Form.useForm()</code> \u521B\u5EFA\u7684 form \u63A7\u5236\u5B9E\u4F8B\uFF0C\u4E0D\u63D0\u4F9B\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA</td>
<td><code v-pre>FormInstance</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>initialValues</td>
<td>\u8868\u5355\u9ED8\u8BA4\u503C\uFF0C\u53EA\u6709\u521D\u59CB\u5316\u4EE5\u53CA\u91CD\u7F6E\u65F6\u751F\u6548</td>
<td><code v-pre>object</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>labelAlign</td>
<td>label \u6807\u7B7E\u7684\u5BF9\u9F50\u65B9\u5F0F</td>
<td><code v-pre>'left'</code> | <code v-pre>'center'</code> | <code v-pre>'right'</code></td>
<td><code v-pre>'left'</code></td>
<td></td>
</tr>
<tr>
<td>labelWidth</td>
<td>label \u6807\u7B7E\u7684\u7684\u5BBD\u5EA6</td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td><code v-pre>'6.2em'</code></td>
<td></td>
</tr>
<tr>
<td>preserve</td>
<td>\u5F53\u5B57\u6BB5\u88AB\u5220\u9664\u65F6\u4FDD\u7559\u5B57\u6BB5\u503C</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>requiredMark</td>
<td>\u5FC5\u9009\u6837\u5F0F\uFF0C\u53EF\u4EE5\u5207\u6362\u4E3A\u5FC5\u9009\u6216\u8005\u53EF\u9009\u5C55\u793A\u6837\u5F0F</td>
<td><code v-pre>boolean</code> | <code v-pre>'auto'</code></td>
<td><code v-pre>'auto'</code></td>
<td></td>
</tr>
<tr>
<td>validateMessages</td>
<td>\u9A8C\u8BC1\u63D0\u793A\u6A21\u677F</td>
<td><code v-pre>FormValidateMessages</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>validateTrigger</td>
<td>\u7EDF\u4E00\u8BBE\u7F6E\u5B57\u6BB5\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A</td>
<td><code v-pre>string</code> | <code v-pre>string\\[]</code></td>
<td><code v-pre>'onChange'</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="formvalidatemessages" tabindex="-1">FormValidateMessages</h3>
<p>Form \u4E3A\u9A8C\u8BC1\u63D0\u4F9B\u4E86<a href="https://github.com/react-component/field-form/blob/master/src/utils/messages.ts">\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</a>\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code v-pre>validateMessages</code> \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">const</span> validateMessages <span class="token operator">=</span> <span class="token punctuation">{</span>
  required<span class="token operator">:</span> <span class="token string">"'\${name}' \u662F\u5FC5\u9009\u5B57\u6BB5"</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">validateMessages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>validateMessages<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
</code></pre>
<h3 id="form-shi-jian" tabindex="-1">Form \u4E8B\u4EF6</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onFieldsChange</td>
<td>\u5B57\u6BB5\u66F4\u65B0\u65F6\u89E6\u53D1\u56DE\u8C03\u4E8B\u4EF6</td>
<td><code v-pre>function(changedFields, allFields) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onFinish</td>
<td>\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6</td>
<td><code v-pre>function(values) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onFinishFailed</td>
<td>\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u5931\u8D25\u540E\u56DE\u8C03\u4E8B\u4EF6</td>
<td><code v-pre>function({ values, errorFields, outOfDate }) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onValuesChange</td>
<td>\u5B57\u6BB5\u503C\u66F4\u65B0\u65F6\u89E6\u53D1\u56DE\u8C03\u4E8B\u4EF6</td>
<td><code v-pre>function(changedValues, allValues) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="form.item-props" tabindex="-1">Form.Item Props</h3>
<p>Form.Item \u7EE7\u627F\u7C7B\u578B <a href="#/zh-CN/components/field"><code v-pre>FieldProps</code></a>\uFF0C\u5E76\u65B0\u589E\u4E86\u5982\u4E0B\u5C5E\u6027\uFF1A</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>colon</td>
<td>\u914D\u5408 <code v-pre>label</code> \u5C5E\u6027\u4F7F\u7528\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A <code v-pre>label</code> \u540E\u9762\u7684\u5192\u53F7</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>requiredMark</td>
<td>\u5FC5\u9009\u6837\u5F0F\uFF0C\u53EF\u4EE5\u5207\u6362\u4E3A\u5FC5\u9009\u6216\u8005\u53EF\u9009\u5C55\u793A\u6837\u5F0F</td>
<td><code v-pre>boolean</code> | <code v-pre>'auto'</code></td>
<td><code v-pre>'auto'</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>plain</td>
<td>\u4E3A <code v-pre>true</code> \u65F6\u4E0D\u5E26\u6837\u5F0F\uFF0C\u4F5C\u4E3A\u7EAF\u5B57\u6BB5\u63A7\u4EF6\u4F7F\u7528</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
</tbody>
</table>
<p>\u8BE6\u7EC6\u5C5E\u6027\u8BF7\u53C2\u8003 <a href="https://ant.design/components/form-cn/#Form.Item">Antd - Form.Item</a>\u3002</p>
<h3 id="form.list-props" tabindex="-1">Form.List Props</h3>
<p>\u4E3A\u5B57\u6BB5\u63D0\u4F9B\u6570\u7EC4\u5316\u7BA1\u7406\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>children</td>
<td>\u6E32\u67D3\u51FD\u6570</td>
<td><code v-pre>(fields: Field[], operation: { add, remove, move }, meta: { errors }) =&gt; React.ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>initialValue</td>
<td>\u8BBE\u7F6E\u5B50\u5143\u7D20\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0E Form \u7684 <code v-pre>initialValues</code> \u51B2\u7A81\u5219\u4EE5 Form \u4E3A\u51C6</td>
<td><code v-pre>any[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>\u5B57\u6BB5\u540D\uFF0C\u652F\u6301\u6570\u7EC4</td>
<td><code v-pre>NamePath</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
