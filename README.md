![Deploy](https://github.com/julianiff/blog-project/workflows/Deploy/badge.svg)

# blog-project

<section style="width: 50%;">

# 1\. The Blog Project

## Idea

The simple idea is to build and to help others to build a Blog with basic functionality. Because this idea is neither new nor especially exciting, the goal is to do it in a fully incremental setting. This project tries to preserve all subsequent iteration artifacts to aid the reader with every subsequent step. The basic project setup contains:

*   A versioning tool: [github](https://github.com/julianiff/blog-project).
*   Pipeline function that build the project on a tag and setups a subdomain with the artifact.
*   A Documentation in the style of Blog articles that act as a [design docs](#designdocs).

To start of this blog series lets dig deeper into design docs. Where are they from, why are they important and how to use them.

## Design Doc

Some time ago i was reading the interesting blog post ["Design Docs at Google"](https://www.industrialempathy.com/posts/design-docs-at-google/) from Malte Ubl. In there the author points out one of the key elements of Googles software engineering culture: to define software design through design docs. These design docs are informal and high level documents that show the strategies and key decisions with and emphasis on trade-offs. Besides a continuos documentation the design doc helps with:

*   Identify design issues while changes are cheap
*   Share designs to get to a conses
*   Were all Cross-Cutting concerns considered
*   Share/Scale knowledge of Engineer
*   Form a culture around design docs
*   Gives the Software Engineer a technical portfolio

## Anatomy of a design Doc:

A design doc should be written in whatever form is best suited for the project. It can consist of the following chapters:

1.  Context and scope: Rough overview, bring the reader up to speed
2.  Goals and Non-goals: List of Goals and Non-Goals (Could be reasonable Goals but aren't)
3.  Actual Design:

*   Take the flexibility in expressing the problem
*   Tell why the suggested solution satisfies the goals.
*   [Context diagram](https://en.wikipedia.org/wiki/System_context_diagram) to show the boundaries between system
*   Sketching the API / Data storage, stay precise not verbose
*   Constrains on the solution, identify trade-offs
*   Alternatives considered: Most important to argue for the chosen solution
*   Cross-cutting concerns: Security, privacy and observability

5.  When to Avoid:

*   A design doc is not an implementation manual, there needs to be space for explanations about trade-offs, alternatives and decision making

</section>

<section style="width: 50%;">

# 2\. Design Doc

## Overview

The Blog Time-X has the Goal to demonstrate how to build a blog from scratch and the user should have the ability to see previous iteration easily. A goal is also to iteratively build the infrastructure and have a high amount of automation to speed up the work. Again this automation should also be covered in the blog. A non-goal to start is to have all the common functionality a WordPress Blog site or Medium Blog site has. The focus at start is only on basic styling, automation and letting the user experience the old iterations.

## Automation

Trying to automate early to decrease the time from last commit to production, to have a lean and fast deployment process.

For the Automation the project uses [Github Actions](https://docs.github.com/en/actions). There exist many different CI/CD tools, for example CircleCI, Gitlab Pipelines, Azure DevOps and many more. Github has the advantage that it resides close to the source code and allows to version the pipeline with the other code.

### Idea

On every push on the Master branch a github Action first builds the project and the deploys the project to the production environment.

### Example

A working example can be found under the github link with the version [v0.0.3](https://github.com/julianiff/blog-project/blob/v0.0.3/.github/workflows/upload.yml).

## Frontend

### Components

The Frontend starts with 2 components:

*   A Navigation to switch between the blog posts.
*   A component where the Text of the Blog post will be. In early iterations images and other additions are a non-goal.

### Styling

The components should be build in a way that they are highly reusable and decoupled. Therefore it is a goal to build components that provide styling interfaces that can be adjusted according to a respective theme.

</section>
