import{_ as t,c as e,o as a,a5 as o}from"./chunks/framework.D-ihIdkc.js";const i="/obsidian-tabs/assets/padding.BBDytQfc.png",x=JSON.parse('{"title":"设置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/usage/settings.md","filePath":"zh/usage/settings.md"}'),l={name:"zh/usage/settings.md"},n=o('<h1 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h1><h2 id="基础设置" tabindex="-1">基础设置 <a class="header-anchor" href="#基础设置" aria-label="Permalink to &quot;基础设置&quot;">​</a></h2><h3 id="seperator-分隔符" tabindex="-1">Seperator 分隔符 <a class="header-anchor" href="#seperator-分隔符" aria-label="Permalink to &quot;Seperator 分隔符&quot;">​</a></h3><p>分隔符用于标识每个 tab，默认为 <code>tab: </code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你可以将其修改为 <code>## </code>，这样你就可以直接选中正文后，借助命令 <a href="./commands.html#tabs-convert-selected-text-to-tabs">convert-selected-text-to-tabs</a> 直接将正文转换为 Tabs 组件，无需修改正文。</p></div><h3 id="default-tab-title-content" tabindex="-1">Default tab title/content <a class="header-anchor" href="#default-tab-title-content" aria-label="Permalink to &quot;Default tab title/content&quot;">​</a></h3><p>新建 tab 时，默认的标题 title 和正文 content。</p><blockquote><p>使用 <a href="./menu.html">Paste tab</a> 命令时，如果剪切板内容不以分隔符开头，新建的 tab 的 title 为默认 title 使用功能键（Action button 设置为 Add new tab）新建 tab 时默认的 title 和 content。</p></blockquote><h3 id="action-button-功能键" tabindex="-1">Action button 功能键 <a class="header-anchor" href="#action-button-功能键" aria-label="Permalink to &quot;Action button 功能键&quot;">​</a></h3><p>导航栏 Nav 末尾的功能键，可以设*为</p><ul><li><em>none</em>：隐藏功能键</li><li><em>Add new tab</em>：新建 tab</li><li><em>Edit tab</em>：编辑当前 tab</li></ul><h3 id="ignore-notice" tabindex="-1">Ignore notice <a class="header-anchor" href="#ignore-notice" aria-label="Permalink to &quot;Ignore notice&quot;">​</a></h3><p>隐藏 Tabs 组件相关的通知，例如删除、粘贴、新建 tab 时右上角的通知</p><h3 id="autorefresh-markdown-view" tabindex="-1">Autorefresh markdown view <a class="header-anchor" href="#autorefresh-markdown-view" aria-label="Permalink to &quot;Autorefresh markdown view&quot;">​</a></h3><ul><li>当启用时，当你修改了 Tabs 相关的设置，<strong>关闭设置面板时</strong>会自动刷新<strong>所有已打开</strong>的 markdown 页面，目的是为了刷新所有 Tabs 组件</li><li>当禁用时，当你修改了 Tabs 相关的设置，你需要手动重新让 Tabs 组件渲染。方法有很多，例如光标移入再移出、重新打开当前标签页等</li></ul><div class="tip custom-block"><p class="custom-block-title">通过代码块渲染的组件，它的各项属性在渲染的那一刻已经确定了</p><p>举个例子，你有一个已经在默认 top 布局下渲染好了的 Tabs 组件，此时你在设置中将默认布局修改为 left，这个布局并不会在这个已经渲染好了的组件上生效，新的设置只对修改了设置以后渲染的组件生效。</p><blockquote><p>这是 obsidian 对于代码块渲染的逻辑，并非 Tabs 插件特地写的逻辑。</p></blockquote></div><h3 id="drag-and-drop" tabindex="-1">Drag and drop <a class="header-anchor" href="#drag-and-drop" aria-label="Permalink to &quot;Drag and drop&quot;">​</a></h3><p>是否启用<a href="./dnd.html">拖拽</a>功能</p><h2 id="编辑器设置" tabindex="-1">编辑器设置 <a class="header-anchor" href="#编辑器设置" aria-label="Permalink to &quot;编辑器设置&quot;">​</a></h2><h3 id="double-click-to-edit" tabindex="-1">Double click to edit <a class="header-anchor" href="#double-click-to-edit" aria-label="Permalink to &quot;Double click to edit&quot;">​</a></h3><p>启用时，可以通过双击 content 快速编辑当前 tab</p><h3 id="show-toolbar" tabindex="-1">Show toolbar <a class="header-anchor" href="#show-toolbar" aria-label="Permalink to &quot;Show toolbar&quot;">​</a></h3><p>启用时，Tabs 编辑器上方会提供一个工具栏方便编辑</p><h3 id="tab-size" tabindex="-1">Tab size <a class="header-anchor" href="#tab-size" aria-label="Permalink to &quot;Tab size&quot;">​</a></h3><p>在 Tabs 编辑器中按下 <code>Tab</code> 键时缩进的空格数，默认为 4</p><h3 id="auto-save-interval" tabindex="-1">Auto save interval <a class="header-anchor" href="#auto-save-interval" aria-label="Permalink to &quot;Auto save interval&quot;">​</a></h3><p>Tabs 编辑器会在你有修改内容时自动保存内容，你可以设置自动保存的间隔，单位为毫秒。默认为 5000，代表当你修改了内容，过了 5s 后编辑器会自动将内容保存至 markdown 文件中。</p><h2 id="外观设置" tabindex="-1">外观设置 <a class="header-anchor" href="#外观设置" aria-label="Permalink to &quot;外观设置&quot;">​</a></h2><p>在设置的 Appearance 区域提供了一个示例 Tabs 组件，你可以在修改设置的同时通过这个组件的最后一个 tab: Lorem ipsum 查看效果</p><h3 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;Tabs&quot;">​</a></h3><h4 id="tabs-border" tabindex="-1">Tabs border <a class="header-anchor" href="#tabs-border" aria-label="Permalink to &quot;Tabs border&quot;">​</a></h4><p>Tabs 组件的边框</p><ul><li><em>None</em>: 隐藏边框</li><li><em>Hover</em>: 鼠标悬浮时出现边框</li><li><em>Always</em>: 始终显示边框</li></ul><h4 id="tabs-border-color" tabindex="-1">Tabs border color <a class="header-anchor" href="#tabs-border-color" aria-label="Permalink to &quot;Tabs border color&quot;">​</a></h4><p>Tabs 组件边框的颜色</p><h4 id="hide-tabs-code-block-edit-block-button" tabindex="-1">Hide tabs code block edit block button <a class="header-anchor" href="#hide-tabs-code-block-edit-block-button" aria-label="Permalink to &quot;Hide tabs code block edit block button&quot;">​</a></h4><p>一般情况下（不被主题和 css 影响的情况下），鼠标移动到代码块上时，右上角会有一个表示编辑的按钮，点击后可以编辑这个代码块。这个选项用于隐藏这个按钮。</p><h3 id="tabs-nav" tabindex="-1">Tabs nav <a class="header-anchor" href="#tabs-nav" aria-label="Permalink to &quot;Tabs nav&quot;">​</a></h3><h4 id="nav-default-position" tabindex="-1">Nav default position <a class="header-anchor" href="#nav-default-position" aria-label="Permalink to &quot;Nav default position&quot;">​</a></h4><p>导航栏 Nav 的默认位置，可选值有 Top, Left, bottom, right，可被<a href="./customization.html">自定义配置</a>覆盖。</p><h4 id="nav-line-clamp" tabindex="-1">Nav line clamp <a class="header-anchor" href="#nav-line-clamp" aria-label="Permalink to &quot;Nav line clamp&quot;">​</a></h4><p>导航栏中的 title 过多时的排列方式（只对 top 和 bottom 布局有效）</p><ul><li><em>One line</em>：所有 title 置于一行，超出部分按住 shift 后可横向滚动</li><li><em>Multiple lines</em>: 溢出的 title 将换行放置</li></ul><h4 id="limit-tab-title-width" tabindex="-1">Limit tab title width <a class="header-anchor" href="#limit-tab-title-width" aria-label="Permalink to &quot;Limit tab title width&quot;">​</a></h4><p>限制单个 tab 的标题的宽度</p><p>obsidian 的标签页有个最大宽度，如果希望和 obsidian 默认的样式保持一致可以开启这个选项。开启后如果标题过长，则会以 ... 省略</p><h3 id="tabs-contents" tabindex="-1">Tabs contents <a class="header-anchor" href="#tabs-contents" aria-label="Permalink to &quot;Tabs contents&quot;">​</a></h3><h4 id="contents-padding" tabindex="-1">Contents padding <a class="header-anchor" href="#contents-padding" aria-label="Permalink to &quot;Contents padding&quot;">​</a></h4><p>正文的内边距，即正文到四周的距离（图中红橙框线之间的距离）</p><p><img src="'+i+'" alt="padding"></p><p>取值规则与 css 中 padding 的取值一致，你可以输入 1-4 个值，不同个数的输入值代表设置不同位置的内边距，值与值之间用空格分隔</p><table tabindex="0"><thead><tr><th style="text-align:center;">个数</th><th style="text-align:center;">作用位置</th><th style="text-align:center;">示例</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;"><code>a b c d</code></td><td style="text-align:center;"><code>10px</code></td><td style="text-align:center;">a = b = c = d = 10 像素</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;"><code>a c</code>, <code>b d</code></td><td style="text-align:center;"><code>10px 5px</code></td><td style="text-align:center;">a = c = 10 像素，b = d = 5 像素</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;"><code>a</code>, <code>b d</code>, <code>c</code></td><td style="text-align:center;"><code>5px 10px 20px</code></td><td style="text-align:center;">a = 5 像素，b = d = 10 像素，c = 20 像素</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;"><code>a</code> <code>b</code> <code>c</code> <code>d</code></td><td style="text-align:center;"><code>5px 6px 7px 8px</code></td><td style="text-align:center;">a = 5 像素，b = 6 像素，c = 7 像素，d = 8 像素</td></tr></tbody></table><p>取值单位和 css 一致，例如</p><ul><li><em>px</em>: 像素；</li><li><em>em</em>: 字宽，例如 1em 为一个字的宽度，中文文本首行缩进两格通常会设置 <code>indent: 2em</code> 实现；</li><li><em>rem</em>: 相对单位，相对于子元素像素值的倍数</li></ul><h4 id="contents-max-height" tabindex="-1">Contents max height <a class="header-anchor" href="#contents-max-height" aria-label="Permalink to &quot;Contents max height&quot;">​</a></h4><p>Tabs 正文过长时会出现一个滚动条，你可以在这里设置正文的最大长度，默认值为 60vh，代表当长度超过页面高度的 60% 时，高度不再增加，出现滚动条（vh 是 Viewport Height 的缩写）。你也可以使用其他的单位例如像素 px。</p><p>如果你希望全部都显示，不在过长时隐藏，可以将其设置为 <code>none</code></p>',57),d=[n];function r(s,c,b,h,p,u){return a(),e("div",null,d)}const g=t(l,[["render",r]]);export{x as __pageData,g as default};
