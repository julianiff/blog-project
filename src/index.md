---
layout: page.11ty.cjs
title: &lt;iff-*&gt; ⌲ Home
---

<iff-grid-layout layout="1" style="min-height: 60vh">
        <iff-sliding-text></iff-sliding-text>
</iff-grid-layout>
<iff-grid-layout layout="1-1" style="justify-items: center; min-height: 20vh;">
    <iff-background-clip style="--iff-hover__font--color: black;">
    <iff-icon-text icon="end" href="/about"><iff-text slot="text" styling="paragraph-slim">About</iff-text>
    </iff-icon-text>
    </iff-background-clip>
    <iff-background-clip style="--iff-hover__font--color: black;">
    <iff-icon-text icon="end" href="/project"><iff-text slot="text" styling="paragraph-slim">Posts</iff-text></iff-icon-text>
    </iff-background-clip>
</iff-grid-layout>
