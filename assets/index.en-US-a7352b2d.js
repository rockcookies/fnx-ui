const n={},a=`<h1 id="datepicker" tabindex="-1">DatePicker</h1>
<p>Used to select time, support date and time dimensions, usually used with the <a href="#/en-US/components/popup">Popup</a> component.</p>
<h2 id="choose-date" tabindex="-1">Choose Date</h2>
<p>Use <code v-pre>columnsLayout</code> prop to set select-type, Set <code v-pre>columnsLayout</code> to <code v-pre>year,month,day</code> to select date.</p>
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
<h2 id="choose-year-month" tabindex="-1">Choose Year-Month</h2>
<p>Set <code v-pre>columnsLayout</code> prop to <code v-pre>year,month</code> to select Year-Month. Use <code v-pre>formatter</code> prop to format options.</p>
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
<h2 id="choose-time" tabindex="-1">Choose Time</h2>
<p>Use TimePicker to select time.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="choose-datetime" tabindex="-1">Choose DateTime</h2>
<p>Set <code v-pre>columnsLayout</code> to <code v-pre>year,month,day,hour,minute</code> to choose DateTime.</p>
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
<h2 id="option-filter" tabindex="-1">Option Filter</h2>
<p>Use <code v-pre>filter</code> prop to filter options.</p>
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
<h2 id="custom-columns-layout" tabindex="-1">Custom columns layout</h2>
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
<p>DatePicker extends <a href="#/en-US/components/popup"><code v-pre>PickerBaseProps</code></a>, and add the following props:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>columnsLayout</td>
<td>Columns layout</td>
<td><code v-pre>string</code></td>
<td><code v-pre>'year,month,day'</code></td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>Default value</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minDate</td>
<td>Min date</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>Ten years ago on January 1</td>
<td></td>
</tr>
<tr>
<td>maxDate</td>
<td>Max date</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>Ten years later on December 31</td>
<td></td>
</tr>
<tr>
<td>filter</td>
<td>Option filter</td>
<td><code v-pre>(type: DatePickerField, value: number[]) =&gt; number[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>Option text formatter</td>
<td><code v-pre>(type: DatePickerField, value: string) =&gt; string</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="datepicker-events" tabindex="-1">DatePicker Events</h2>
<table>
<thead>
<tr>
<th>Event name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>Emitted when value changed</td>
<td><code v-pre>(value: Date) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onConfirm</td>
<td>Emitted when the confirm button is clicked</td>
<td><code v-pre>(value: Date) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>Emitted when the cancel button is clicked</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="datepicker-instance" tabindex="-1">DatePicker Instance</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>getValue</td>
<td>Get current value</td>
<td><code v-pre>() =&gt; Date</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="timepicker-props" tabindex="-1">TimePicker Props</h2>
<p>TimePicker extends <a href="#/en-US/components/popup"><code v-pre>PickerBaseProps</code></a>, and add the following props:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultValue</td>
<td>Default value</td>
<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minHour</td>
<td>Min hour</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>maxHour</td>
<td>Max hour</td>
<td><code v-pre>number</code></td>
<td><code v-pre>23</code></td>
<td></td>
</tr>
<tr>
<td>minMinute</td>
<td>Min minute</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
<td></td>
</tr>
<tr>
<td>maxMinute</td>
<td>Max minute</td>
<td><code v-pre>number</code></td>
<td><code v-pre>59</code></td>
<td></td>
</tr>
<tr>
<td>filter</td>
<td>Option filter</td>
<td><code v-pre>(type: 'hour' | 'minute', value: number[]) =&gt; number[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>Option text formatter</td>
<td><code v-pre>(type: 'hour' | 'minute', value: string) =&gt; string</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="timepicker-events" tabindex="-1">TimePicker Events</h2>
<table>
<thead>
<tr>
<th>Event name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>Emitted when value changed</td>
<td><code v-pre>(value: string) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onConfirm</td>
<td>Emitted when the confirm button is clicked</td>
<td><code v-pre>(value: string) =&gt; void</code></td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>Emitted when the cancel button is clicked</td>
<td><code v-pre>() =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="timepicker-instance" tabindex="-1">TimePicker Instance</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>getValue</td>
<td>Get current value</td>
<td><code v-pre>() =&gt; string</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
