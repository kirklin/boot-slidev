---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
---

<h1 flex="~ col">
<div>Hello</div>
<div flex="~ gap3" items-center>with <span inline-block i-logos-github-icon text-1.2em mb-2/> <b font-bold>boot-slidev</b></div>
</h1>

<div uppercase text-sm tracking-widest>
Kirk Lin
</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Theme</div>
  <div text-sm opacity-50>time</div>
</div>

---
layout: intro
growX: 10
growY: 90
style: 'padding-left: 8rem;'
---

# Kirk Lin

<div class="leading-10 opacity-80">
Hello, I'm Kirk Lin,<br/> a self-taught full-stack web developer and freelance software engineer from China.  <br/>
I am driven by the pursuit of innovation and the desire to bring ideas to life with elegant and functional interfaces. I am always striving to create the best user experience, architecture, and code quality in every project I undertake.
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-github-line op50 ma text-xl/>
  <div><a href="https://github.com/kirklin" target="_blank">kirklin</a></div>
  <div i-ri-twitter-line op50 ma text-xl/>
  <div><a href="https://twitter.com/lkirkun" target="_blank">lkirkun</a></div>
  <div i-ri-zhihu-line op50 ma text-xl/>
  <div><a href="https://www.zhihu.com/people/lkek" target="_blank">KirkLin</a></div>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://kirklin.cn" target="_blank">kirklin.cn</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/17453452?v=4" rounded-full w-40 abs-tr mt-16 mr-12/>

<div flex="~ gap2">

</div>

<!--

-->

---
layout: intro
growX: 10
growY: 90
style: 'padding-left: 8rem;'
---

# Kirk Lin

<div class="leading-10 opacity-80 font-song">
凡夫俗子不知道贤者之名，<br/>岂料我乃一位全栈工程师和自由职业软件工程师，自幼痴迷软件开发，<br/>崇尚创新之思维，尤嗜优美之界面。
每逢我所构建的项目，必然细心呵护用户体验，追求架构之卓越，求取代码之至美。<br/>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-github-line op50 ma text-xl/>
  <div><a href="https://github.com/kirklin" target="_blank">kirklin</a></div>
  <div i-ri-twitter-line op50 ma text-xl/>
  <div><a href="https://twitter.com/lkirkun" target="_blank">lkirkun</a></div>
  <div i-ri-zhihu-line op50 ma text-xl/>
  <div><a href="https://www.zhihu.com/people/lkek" target="_blank">KirkLin</a></div>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://kirklin.cn" target="_blank">kirklin.cn</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/17453452?v=4" rounded-full w-40 abs-tr mt-16 mr-12/>

<div flex="~ gap2">

</div>

<!--

-->

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

# Title1

<!--

-->

---
growX: 50
growY: 0
---

# Title2

<div flex="~" justify-evenly items-center h-90>
<v-clicks>

<div flex="~ col" items-center>
<img w-20 mb6 src="/vite.svg">
<div text-2xl>Vite</div>
<div text-base op50>for client-side HMR</div>
</div>

<div flex="~ col" items-center>
<img w-20 mb6 src="/vite-node.svg">
<div text-2xl>vite-node</div>
<div text-base op50>for server-side HMR</div>
</div>

<div flex="~ col" items-center>
<div text-4.6rem>😈</div>
<div text-2xl>icon</div>
<div text-base op50>text text </div>
</div>

</v-clicks>
</div>

<!--
-->

---

# Title3

<v-clicks>

- item1

- item2
- item3
- item4
- item5
- item6

</v-clicks>

<!--
-->

---
growX: 80
growY: 80
---

# Conventions

<v-clicks>

- item1

- item2
- item3
- item4
- item5
- item6

</v-clicks>

<!--
-->

---
growX: 0
growY: 90
---

# Vite Boot Demo

<iframe v-click src="https://vite-boot.netlify.app/#/home" 
  onload="this.style.visibility = 'visible';" 
  scale-50 origin-top-right absolute right-0 top-0 bottom-0 w="130%" h="200%" 
  style="mix-blend-mode: lighten;filter:contrast(1.15);visibility:hidden;"
/>


<v-clicks>

- Vue

- Vite

</v-clicks>

<!--

-->

---
growX: 0
growY: -30
growFollow: false
---

# vite-plugin-inspect
Inspect your Vite intermediate states

<iframe v-click src="/__inspect/" border-t border-gray:15 scale-75 origin-bottom-left absolute left-0 bottom-0 w="134%" h="102%" style="mix-blend-mode: lighten;filter: contrast(1.15);" />

<!--
To solve the same issue I had in Vite. I made the package called `vite-plugin-inspect`. It provides a UI for you to inspect the intermediated state of each plugin transformation of Vite. This makes the Vite pipeline transparent, and you can see how your code has been transformed step by step. If there is anything goes wrong, you can spot which plugin is causing that. (Demo a bit)

Since `vite-plugin-inspect` is for Vite, it can actually work with any framework or tools built on top of Vite, including Nuxt. However, because Vite is framework agnostic, the inspect feature is relatively low-level. It can be helpful in some cases, but it can also be quite limited.
-->



---
layout: center
class: text-center
growX: 50
growY: 50
growSize: 0.4
---

<h1>Demo time!</h1>

<!--
Let's go demo time!
-->

---
layout: iframe
url: https://vite-boot.netlify.app/#/StoreTest
scale: 0.5
growFollow: false
---



<!--

-->

---
layout: center
class: text-center
growX: 50
growY: 0
---

# One more thing!

---
layout: iframe
url: https://vite-boot.netlify.app/#/home
scale: 0.5
growFollow: false
---



<!--
-->

---
layout: center
class: text-center
growX: 10
growY: 90
---

# Open Sourced

<Repo name="kirklin/boot-slidev"></Repo>

<!--
And so, the slidev of kirklin/boot-slidev is open-sourced, right now! You can give it a star at github.com/kirklin/boot-slidev.
-->


---
layout: center
class: text-center
growX: 50
growY: -20
---

<pre text-3xl flex font-mono class="select-none!">
<span text-gray:50>npx </span>
<span text-green>degit</span>
<span text-gray:50>  </span>
<span text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500>kirklin/boot-slidev</span>
</pre>

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!

Slides on [boot-slidev](https://github.com/kirklin/boot-slidev)

<!--
That's all for my talk. The slides can be found on my website. Thank you!
-->
