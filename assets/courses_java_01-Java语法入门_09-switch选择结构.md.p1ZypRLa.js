import{_ as p}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as e,D as k,o as n,c as d,I as r,w as c,k as t,a as o,R as g,b as A,e as y}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const D="/assets/202010071310906.ws-Z9S6R.png",C="/assets/202010071312989.50VSngVD.png",F="/assets/202010071315171.z0e6P2p8.png",J=JSON.parse('{"title":"switch选择结构","description":"","frontmatter":{"title":"switch选择结构","author":"查尔斯","date":"2020/10/07 15:30","categories":["Java基础快速入门"],"tags":["Java","Java基础"]},"headers":[],"relativePath":"courses/java/01-Java语法入门/09-switch选择结构.md","filePath":"courses/java/01-Java语法入门/09-switch选择结构.md","lastUpdated":1661351641000}'),B={name:"courses/java/01-Java语法入门/09-switch选择结构.md"},u=t("h1",{id:"switch选择结构",tabindex:"-1"},[o("switch选择结构 "),t("a",{class:"header-anchor",href:"#switch选择结构","aria-label":'Permalink to "switch选择结构"'},"​")],-1),m=g('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 上一篇我们介绍了 if 系列的选择结构语法，整体感受应该是简单易懂且易写的。本篇笔者再介绍一种选择结构语法：switch，但此 switch 非彼 switch。</p><p><img src="'+D+`" alt="202010071310906"></p><h2 id="why" tabindex="-1">Why？ <a class="header-anchor" href="#why" aria-label="Permalink to &quot;Why？&quot;">​</a></h2><p>有了 if ，为什么还要学习使用 switch 选择结构呢？一起来看个案例。</p><p><strong>案例需求：小杨参加了创造502节目。</strong></p><ul><li>如果获得第一名，将会担任《诛仙》女主角</li><li>如果获得第二名，将会担任《斗罗大陆》女主角</li><li>如果获得第三名，将会担任《永夜》女主角</li></ul><p>从需求介绍中可知，案例的条件表达式是简单的等值判断，但是条件很多而且彼此都是互斥的，可以采用多重 if 来实现。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 存储名次</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> score</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用多重if</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《诛仙》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《斗罗大陆》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《永夜》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>但相比于范围判断，在等值判断时使用 <code>多重if</code> 有点大材小用，实话就是 if 多了阅读起来真挺费劲的，所以笔者才给大家安利 Java 提供的另一个选择结构语句：<code>switch选择结构</code>。</p><p>我们来看看它的语法：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (表达式) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> 常量1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        语句;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> 常量2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        语句;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // ....</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    default:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        语句;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>再套用它的语法来解决一下刚才的问题，是不是发现清晰多了？</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 存储名次</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> score</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用switch</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (score) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《诛仙》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《斗罗大陆》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《永夜》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="使用注意" tabindex="-1">使用注意 <a class="header-anchor" href="#使用注意" aria-label="Permalink to &quot;使用注意&quot;">​</a></h2><ol><li><p>在满足等值判断的前提下，才可以使用 <code>switch</code> 来进行判断，不可用于范围型判断。</p></li><li><p>如果没有特殊要求，必须给每一个 <code>case</code> 后追加 <code>break</code>。</p><p><code>break</code> 是表示结束某个 <code>case</code>，如果没有 <code>break</code>，会出现 <code>case</code> 的穿透性，即继续往下执行直到遇到下一个 <code>break</code> 结束！</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 存储名次</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> score</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用switch</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(score){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《诛仙》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《斗罗大陆》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;小杨将会担任《永夜》女主角！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>上方的代码，如果 <code>case 1</code> 后缺少一个 <code>break</code>，那么输出结果是将会是。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>小杨将会担任《诛仙》女主角！</span></span>
<span class="line"><span>小杨将会担任《斗罗大陆》女主角！</span></span></code></pre></div></li><li><p>建议加上一个 <code>default</code> 来进行默认处理。</p></li><li><p><code>switch</code> 的表达式支持的类型有：<code>int</code>、( <code>short</code>、 <code>byte</code>、<code>char</code> 可以自动类型转换为 <code>int</code>)，<code>枚举类型(Enum)</code> 、<code>String</code>（自JDK1.7开始，<code>switch</code> 支持了字符串的等值判断，参考<a href="https://docs.oracle.com/javase/7/docs/technotes/guides/language/strings-switch.html" target="_blank" rel="noreferrer">Oracle Java7 RELEASE介绍</a>）。</p><p><img src="`+C+'" alt="202010071312989"></p><p><img src="'+F+'" alt="202010071315171"></p></li></ol><h2 id="switch和if的对比" tabindex="-1">switch和if的对比 <a class="header-anchor" href="#switch和if的对比" aria-label="Permalink to &quot;switch和if的对比&quot;">​</a></h2><p>到此为止，Java 中的选择结构我们就学习完了，别看语法挺多，论派系的话只有两个，一个是 <code>if</code>，一个是<code>switch</code>，而且 <code>switch</code> 和 <code>多重if</code> 也很相像，理解起来也比较容易了。</p><p><strong>相同点：</strong> 都是用来处理多分支条件的结构。</p><p><strong>不同点：</strong> <code>switch</code> 只能处理等值条件判断的情况，<code>多重if</code> 选择结构没有 <code>switch</code> 选择结构的限制，特别适合某个变量处于某个连续区间时的情况（范围型判断）。</p><p><code>switch</code> 从效率方面考虑，是要比 <code>if</code> 选择结构执行快（有兴趣自己百度下执行原理），但是随着硬件的发展，这两者之间的效率差距几乎可以忽略不计。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>其实 Java 近几版本一直在对 <code>switch</code> 进行优化，switch 的使用也更加现代，后面有机会使用其他版本，再给大家开开眼。</p></div><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p>选择结构出现后，我们就可以把现实生活的业务逻辑，在程序中模拟实现了。这些流程控制语句就像汉语拼音和基本汉字一样基础，好好记忆下语法。</p><p>把文章案例实现一下，千万要动手实现！因为理解和熟练掌握是两回事！就好像你在抖音上看了那么多生活上的教程：叠衣服、弹吉他.....，但你从没练过，那永远是学不会的，千万不要眼高手低。</p><div class="info custom-block"><p class="custom-block-title">笔者说</p><p>对于技术的学习，笔者一贯遵循的步骤是：先用最最简单的 demo 让它跑起来，然后学学它的最最常用 API 和 配置让自己能用起来，最后熟练使用的基础上，在空闲时尝试阅读它的源码让自己能够洞彻它的运行机制，部分问题出现的原因，同时借鉴这些技术实现来提升自己的代码高度。</p><p>所以在笔者的文章中，前期基本都是小白文，仅仅穿插很少量的源码研究。当然等小白文更新多了，你们还依然喜欢，后期会不定时专门对部分技术的源码进行解析。</p></div>',26);function E(s,v,b,_,f,w){const h=p,l=k("ClientOnly");return n(),d("div",null,[u,r(l,null,{default:c(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),A(h,{key:0,article:s.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),m])}const P=e(B,[["render",E]]);export{J as __pageData,P as default};
