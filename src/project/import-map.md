---
layout: project.11ty.cjs
title: Project ⌲ Import Map
tags: project
name: Projects
pageTitle: Buildless Frontend
lead: What is needed to achieve Frontend bundle/build-less Frontend Deployments, what could be a possible deployment architecture and what are the benefits. This example steps through the possible integration of a Pattern Library into a web project.
navigation: Buildless Frontend
---

<iff-animated-container>
<iff-title level="3">Big picture</iff-title>

<iff-text styling="label">Architecture for Frontend Deployments with importMaps and a CDN</iff-text>
<iff-svg style="padding-top: 24px; padding-bottom: 24px;" src="/img/frontend.svg"></svg>

<iff-title level="3">1: Import Maps</iff-title>
<iff-text>The centerpiece of buildless deployments for frontend apps is the import map. Import maps allow a website to declare their dependencies in the head of the html. Lets imagine an app uses a versioned UI library. When the UI library releases a new version and fixes some bugs the app also needs to rebuild their codebase, bundle all up to then be able to deploy the new change.</iff-text>
<iff-text>With import maps the rebuild step can be made much easier. It would be enough to update the versioning in the head of the html and the new version will be used. Another possibility that allows for buildless updates are external import maps. That means that only the external import map needs to be updated to release a new version of the application. (Because the fetching needs to be done before any module resolution this can create performance bottle necks).</iff-text>
</iff-animated-container>

```js
// Old Version
<script type="importmap">
{
"imports": {
    "/index.js": "https://unpkg.com/iff-design-system@0.2.1/lib/index.js?module"
    }
}
</script>


// New Version
<script type="importmap">
{
"imports": {
    "/index.js": "https://unpkg.com/iff-design-system@1.0.0/lib/index.js?module"
    }
}
</script>

```

<iff-animated-container>
<iff-title level="3">2: Notify</iff-title>
<iff-text>With import maps the management of dependencies slides from the build step to the pipelines. To not needing to update the head of the html by hand a release pipeline can be used to update the import map in the application. Or alternatively use a CDN for a hosted Import map.</iff-text>

<iff-title level="3">3 & 4: Serving</iff-title>
<iff-text>When the html is served the browser reads the import map and requests the packages from a CDN like unpkg.</iff-text>

<iff-text>If a pipeline or external import map is too much effort, or it is wanted to always have the latest version of a certain library, the import map also allows for the latest tag.</iff-text>
</iff-animated-container>

```js
// Always use the latest version of a library
<script type="importmap">
    {
    "imports": {
        "/index.js": "https://unpkg.com/iff-design-system@latest/lib/index.js?module"
        }
    }
</script>
```

<iff-animated-container>
<iff-text>Import Maps hold a lot of potential to simplify release processes, deployments and can also improve the local development experience by speeding up build times. More recent build tools use ES module imports to reduce the build time and are mad fast.</iff-text>

<iff-icon-text icon="end" href="https://github.com/WICG/import-maps" target="_blank"><iff-text styling="paragraph" slot="text">Import maps</iff-text></iff-icon-text>

<iff-icon-text icon="end" href="https://modern-web.dev/guides/" target="_blank"><iff-text noLineHeight styling="paragraph" slot="text">Modern web buildless</iff-text></iff-icon-text>

<iff-icon-text icon="end" href="https://esbuild.github.io/" target="_blank"><iff-text styling="paragraph" slot="text">EsBuild extremely fast bundler</iff-text></iff-icon-text>
</iff-animated-container>
