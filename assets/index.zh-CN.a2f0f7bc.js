const n={},a=`<h1 id="datepicker-shi-jian-xuan-ze-qi" tabindex="-1">DatePicker \u65F6\u95F4\u9009\u62E9\u5668</h1>
<p>\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u652F\u6301\u65E5\u671F\u3001\u5E74\u6708\u3001\u65F6\u5206\u7B49\u7EF4\u5EA6\uFF0C\u901A\u5E38\u4E0E <a href="#/zh-CN/components/popup">\u5F39\u51FA\u5C42</a> \u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p>
<h2 id="xuan-ze-nian-yue-ri" tabindex="-1">\u9009\u62E9\u5E74\u6708\u65E5</h2>
<p>DatePicker \u901A\u8FC7 <code v-pre>columnsLayout</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u9700\u8981\u9009\u62E9\u7684\u65F6\u95F4\u7C7B\u578B\uFF0C<code v-pre>columnsLayout</code> \u4E3A <code v-pre>year,month,day</code> \u8868\u793A\u9009\u62E9\u5E74\u6708\u65E5\u3002\u901A\u8FC7 <code v-pre>maxDate</code> \u548C <code v-pre>minDate</code> \u5C5E\u6027\u53EF\u4EE5\u786E\u5B9A\u53EF\u9009\u7684\u65F6\u95F4\u8303\u56F4\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>
      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day<span class="token punctuation">"</span></span>
      <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2050</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2010</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-ze-nian-yue" tabindex="-1">\u9009\u62E9\u5E74\u6708</h2>
<p>\u5C06 <code v-pre>columnsLayout</code> \u8BBE\u7F6E\u4E3A <code v-pre>year,month</code> \u5373\u53EF\u9009\u62E9\u5E74\u4EFD\u548C\u6708\u4EFD\u3002\u901A\u8FC7\u4F20\u5165 <code v-pre>formatter</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6587\u5B57\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'year'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">'year'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'month'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">'month'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">'day'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>
      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day<span class="token punctuation">"</span></span>
      <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatter<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-ze-shi-jian" tabindex="-1">\u9009\u62E9\u65F6\u95F4</h2>
<p>\u4F7F\u7528 TimePicker \u5373\u53EF\u9009\u62E9\u65F6\u95F4\uFF08\u5C0F\u65F6\u548C\u5206\u949F\uFF09\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-ze-wan-zheng-shi-jian" tabindex="-1">\u9009\u62E9\u5B8C\u6574\u65F6\u95F4</h2>
<p>\u5C06 <code v-pre>columnsLayout</code> \u8BBE\u7F6E\u4E3A <code v-pre>year,month,day,hour,minute</code> \u5373\u53EF\u9009\u62E9\u5B8C\u6574\u65F6\u95F4\uFF0C\u5305\u62EC\u5E74\u3001\u6708\u3001\u65E5\u548C\u5C0F\u65F6\u3001\u5206\u949F\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>
      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day,hour,minute<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>

  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="xuan-xiang-guo-lu-qi" tabindex="-1">\u9009\u9879\u8FC7\u6EE4\u5668</h2>
<p>\u901A\u8FC7\u4F20\u5165 <code v-pre>filter</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6570\u7EC4\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u65F6\u95F4\u95F4\u9694\u3002</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> values<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'minute'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> values<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> values<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>

  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-lie-pai-xu" tabindex="-1">\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'year'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">'year'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'month'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">'month'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">'day'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>
        <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minute,hour,day,month,year<span class="token punctuation">"</span></span>
        <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatter<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span><span class="token plain-text">
   </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3>
<p>DatePicker \u7EE7\u627F\u7C7B\u578B <a href="#/zh-CN/components/popup"><code v-pre>PickerBaseProps</code></a>\uFF0C\u5E76\u65B0\u589E\u4E86\u5982\u4E0B\u5C5E\u6027\uFF1A</p>
<p>\u7C7B\u578B <code v-pre>DatePickerField</code> \u7684\u503C\u53EF\u4EE5\u662F <code v-pre>'year'</code> | <code v-pre>'month'</code> | <code v-pre>'day'</code> | <code v-pre>'hour'</code> | <code v-pre>'minute'</code>\u3002</p>
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
<td>columnsLayout</td>
<td>\u81EA\u5B9A\u4E49\u65F6\u95F4\u7C7B\u578B</td>
<td><code v-pre>string</code></td>
<td><code v-pre>'year,month,day'</code></td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u521D\u59CB\u5316\u65E5\u671F</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minDate</td>
<td>\u53EF\u9009\u7684\u6700\u5C0F\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>\u5341\u5E74\u524D</td>
<td></td>
</tr>
<tr>
<td>maxDate</td>
<td>\u53EF\u9009\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>\u5341\u5E74\u540E</td>
<td></td>
</tr>
<tr>
<td>filter</td>
<td>\u9009\u9879\u8FC7\u6EE4\u5668\u51FD\u6570</td>
<td><code v-pre>(type: DatePickerField, value: number[]) =&gt; number[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570</td>
<td><code v-pre>(type: DatePickerField, value: string) =&gt; string</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="datepicker-shi-jian" tabindex="-1">DatePicker \u4E8B\u4EF6</h2>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>
<td><code v-pre>(value: Date) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onConfirm</td>
<td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>
<td><code v-pre>(value: Date) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="datepicker-shi-li-fang-fa" tabindex="-1">DatePicker \u5B9E\u4F8B\u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u9009\u9879\u503C</td>
<td><code v-pre>() =&gt; Date</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="timepicker-props" tabindex="-1">TimePicker Props</h2>
<p>TimePicker \u7EE7\u627F\u7C7B\u578B <a href="#/zh-CN/components/popup"><code v-pre>PickerBaseProps</code></a>\uFF0C\u5E76\u65B0\u589E\u4E86\u5982\u4E0B\u5C5E\u6027\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>\u521D\u59CB\u5316\u65E5\u671F</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minHour</td>
<td>\u53EF\u9009\u7684\u6700\u5C0F\u5C0F\u65F6</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>maxHour</td>
<td>\u53EF\u9009\u7684\u6700\u5927\u5C0F\u65F6</td>
<td><code v-pre>number</code></td>
<td><code v-pre>23</code></td>
<td></td>
</tr>
<tr>
<td>minMinute</td>
<td>\u53EF\u9009\u7684\u6700\u5C0F\u5206\u949F</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>maxMinute</td>
<td>\u53EF\u9009\u7684\u6700\u5927\u5206\u949F</td>
<td><code v-pre>number</code></td>
<td><code v-pre>59</code></td>
<td></td>
</tr>
<tr>
<td>filter</td>
<td>\u9009\u9879\u8FC7\u6EE4\u5668\u51FD\u6570</td>
<td><code v-pre>(type: 'hour' | 'minute', value: number[]) =&gt; number[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570</td>
<td><code v-pre>(type: 'hour' | 'minute', value: string) =&gt; string</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="timepicker-shi-jian" tabindex="-1">TimePicker \u4E8B\u4EF6</h2>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>
<td><code v-pre>(value: string) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onConfirm</td>
<td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>
<td><code v-pre>(value: string) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="timepicker-shi-li-fang-fa" tabindex="-1">TimePicker \u5B9E\u4F8B\u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u9009\u9879\u503C</td>
<td><code v-pre>() =&gt; string</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
