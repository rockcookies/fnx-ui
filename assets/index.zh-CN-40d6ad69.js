const n={},a=`<h1 id="form-biao-dan" tabindex="-1">Form 表单</h1>
<p>高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。</p>
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
<h2 id="xiao-yan-gui-ze" tabindex="-1">校验规则</h2>
<p>通过 <code v-pre>rules</code> 定义表单校验规则。</p>
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
<h2 id="dong-tai-zeng-jian-biao-dan-xiang" tabindex="-1">动态增减表单项</h2>
<p>动态增加、减少表单项。<code v-pre>add</code> 方法参数可用于设置初始值。</p>
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
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>colon</td>
<td>配置 Form.Item 的 <code v-pre>colon</code> 的默认值。表示是否显示 label 后面的冒号</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>component</td>
<td>设置 Form 渲染元素，为 <code v-pre>false</code> 则不创建 DOM 节点</td>
<td><code v-pre>false</code> | <code v-pre>string</code> | <code v-pre>React.FC&lt;any&gt;</code> | <code v-pre>React.ComponentClass&lt;any&gt;</code></td>
<td><code v-pre>'form'</code></td>
<td></td>
</tr>
<tr>
<td>form</td>
<td>经 <code v-pre>Form.useForm()</code> 创建的 form 控制实例，不提供时会自动创建</td>
<td><code v-pre>FormInstance</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>initialValues</td>
<td>表单默认值，只有初始化以及重置时生效</td>
<td><code v-pre>object</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>labelAlign</td>
<td>label 标签的对齐方式</td>
<td><code v-pre>'left'</code> | <code v-pre>'center'</code> | <code v-pre>'right'</code></td>
<td><code v-pre>'left'</code></td>
<td></td>
</tr>
<tr>
<td>labelWidth</td>
<td>label 标签的的宽度</td>
<td><code v-pre>number</code> | <code v-pre>string</code></td>
<td><code v-pre>'6.2em'</code></td>
<td></td>
</tr>
<tr>
<td>preserve</td>
<td>当字段被删除时保留字段值</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>requiredMark</td>
<td>必选样式，可以切换为必选或者可选展示样式</td>
<td><code v-pre>boolean</code> | <code v-pre>'auto'</code></td>
<td><code v-pre>'auto'</code></td>
<td></td>
</tr>
<tr>
<td>validateMessages</td>
<td>验证提示模板</td>
<td><code v-pre>FormValidateMessages</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>validateTrigger</td>
<td>统一设置字段触发验证的时机</td>
<td><code v-pre>string</code> | <code v-pre>string\\[]</code></td>
<td><code v-pre>'onChange'</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="formvalidatemessages" tabindex="-1">FormValidateMessages</h3>
<p>Form 为验证提供了<a href="https://github.com/react-component/field-form/blob/master/src/utils/messages.ts">默认的错误提示信息</a>，你可以通过配置 <code v-pre>validateMessages</code> 属性，修改对应的提示模板。一种常见的使用方式，是配置国际化提示信息：</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">const</span> validateMessages <span class="token operator">=</span> <span class="token punctuation">{</span>
  required<span class="token operator">:</span> <span class="token string">"'\${name}' 是必选字段"</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">validateMessages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>validateMessages<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
</code></pre>
<h3 id="form-shi-jian" tabindex="-1">Form 事件</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>onFieldsChange</td>
<td>字段更新时触发回调事件</td>
<td><code v-pre>function(changedFields, allFields) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onFinish</td>
<td>提交表单且数据验证成功后回调事件</td>
<td><code v-pre>function(values) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onFinishFailed</td>
<td>提交表单且数据验证失败后回调事件</td>
<td><code v-pre>function({ values, errorFields, outOfDate }) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onValuesChange</td>
<td>字段值更新时触发回调事件</td>
<td><code v-pre>function(changedValues, allValues) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="form.item-props" tabindex="-1">Form.Item Props</h3>
<p>Form.Item 继承类型 <a href="#/zh-CN/components/field"><code v-pre>FieldProps</code></a>，并新增了如下属性：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>colon</td>
<td>配合 <code v-pre>label</code> 属性使用，表示是否显示 <code v-pre>label</code> 后面的冒号</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
<tr>
<td>requiredMark</td>
<td>必选样式，可以切换为必选或者可选展示样式</td>
<td><code v-pre>boolean</code> | <code v-pre>'auto'</code></td>
<td><code v-pre>'auto'</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>plain</td>
<td>为 <code v-pre>true</code> 时不带样式，作为纯字段控件使用</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
</tbody>
</table>
<p>详细属性请参考 <a href="https://ant.design/components/form-cn/#Form.Item">Antd - Form.Item</a>。</p>
<h3 id="form.list-props" tabindex="-1">Form.List Props</h3>
<p>为字段提供数组化管理。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>children</td>
<td>渲染函数</td>
<td><code v-pre>(fields: Field[], operation: { add, remove, move }, meta: { errors }) =&gt; React.ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>initialValue</td>
<td>设置子元素默认值，如果与 Form 的 <code v-pre>initialValues</code> 冲突则以 Form 为准</td>
<td><code v-pre>any[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>字段名，支持数组</td>
<td><code v-pre>NamePath</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
