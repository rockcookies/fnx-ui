const n={},a=`<h1 id="uploader" tabindex="-1">Uploader</h1>
<p>Used to upload local images or files and present the preview map and upload progress during the upload process.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="file-preview" tabindex="-1">File Preview</h2>
<p>Through <code v-pre>value</code>, you can bind a list of files that have been uploaded, and the preview of the list of files will be displayed. <code v-pre>showfilelist</code> For<code v-pre> false</code> hide preview.</p>
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
<h2 id="upload-state" tabindex="-1">Upload State</h2>
<p>Through the <code v-pre>status</code> property, you can identify the upload state,<code v-pre> uploading</code> indicating upload, <code v-pre>failed</code> indicating upload failure,<code v-pre> done</code> indicating upload completion.</p>
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
<h2 id="maxcount" tabindex="-1">MaxCount</h2>
<p>The <code v-pre>maxCount</code> attribute can limit the number of uploaded files. After the upload number reaches the limit, the upload area is automatically hidden.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="custom-uploading" tabindex="-1">Custom Uploading</h2>
<p>The pattern of the upload area can be customized by sub-elements.</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span><span class="token punctuation">></span></span><span class="token plain-text">Custom Upload</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Uploader</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="custom-preview" tabindex="-1">Custom Preview</h2>
<p>Customizing the content over the preview area via a <code v-pre>slots</code> slot.</p>
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
<h2 id="before-onread" tabindex="-1">Before onRead</h2>
<p>By passing the <code v-pre>onread</code> function, check and process before uploading, return to<code v-pre>file []</code>Representation verification, return to<code v-pre>[]</code>indicates that the verification failed. Support to return to <code v-pre>promise</code> to customize the<code v-pre> File</code> object, such as compressing pictures, and determine if the file type meets the requirements.</p>
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
<p>Component <code v-pre>&lt;uploader /&gt;</code> type is <code v-pre>UploaderProps</code>, inheritance <code v-pre>Uploaderfile</code>.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>accept</td>
<td>Allow upload file types</td>
<td><code v-pre>string |string[]</code></td>
<td>-</td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to open a picture, some Android type does not support</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable file upload</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>showFileList</td>
<td>Do you support a preview map</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>maxCount</td>
<td>File upload quantity limit</td>
<td><code v-pre>number | string</code></td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>document list</td>
<td><code v-pre>T[]</code></td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>Default file list</td>
<td><code v-pre>T[]</code></td>
<td>-</td>
</tr>
<tr>
<td>slots</td>
<td>Customized upload list item</td>
<td><code v-pre>UploaderSlots</code></td>
<td>-</td>
</tr>
<tr>
<td>capture</td>
<td>Picture selection mode, optional value is <code v-pre>Camera</code> (directly toned camera)</td>
<td><code v-pre>string | boolean</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events</h2>
<p>Type<code v-pre> UploaderfileItem</code> Inherits <code v-pre>Uploaderfile</code> and remove the<code v-pre> uid</code> attribute.
Type<code v-pre> Uploadermarkedfile</code> Inherited <code v-pre>Uploaderfile</code> and remove<code v-pre> Uid</code>,<code v-pre> file</code> attribute.</p>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Callback Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>Trigger before the file is uploaded</td>
<td><code v-pre>(e:UploaderMarkedFile)</code></td>
</tr>
<tr>
<td>onRead</td>
<td>Trigger when you click on the upload file (available)</td>
<td><code v-pre>(e:UploaderFileItem)</code></td>
</tr>
<tr>
<td>onUpload</td>
<td>Trigger when uploading (uploaded)</td>
<td><code v-pre>(e:UploaderFileItem)</code></td>
</tr>
<tr>
<td>onPreview</td>
<td>Trigger when you click on the preview map</td>
<td><code v-pre>(e:UploaderMarkedFile)</code></td>
</tr>
<tr>
<td>onRemove</td>
<td>Trigger when deleting file preview</td>
<td><code v-pre>(e:UploaderMarkedFile)</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-data-structure" tabindex="-1">Slots Data Structure</h3>
<p>Type <code v-pre>Uploaderslots</code> Inherits <code v-pre>Uploaderfile</code>.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>filePreviewCover</td>
<td>Preview file note</td>
<td><code v-pre>(item: UploaderMarkedFile&lt;T&gt;) =&gt; ReactNode</code></td>
<td>-</td>
</tr>
<tr>
<td>fileList</td>
<td>Preview</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="uploaderfile-data-structure" tabindex="-1">UploaderFile Data Structure</h3>
<p>Type <code v-pre>UploaderFileStatus</code>] UPLoading<code v-pre>, is uploaded,</code> failed<code v-pre>indicating upload failed,</code>done\` indicating upload completion.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>uid</td>
<td>The unique identifier is automatically generated when it is not set.</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>file name</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>File size</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>file type</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>lastModified</td>
<td>Final modification</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td>removable</td>
<td>Is it removable?</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>content</td>
<td>content</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>File status</td>
<td><code v-pre>UploaderFileStatus</code></td>
<td>-</td>
</tr>
<tr>
<td>thumbnail</td>
<td>Thumbnail address</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>information</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>file</td>
<td>document</td>
<td><code v-pre>File</code></td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>download link</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};
