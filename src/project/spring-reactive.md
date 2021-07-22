---
layout: project.11ty.cjs
title: Project ⌲ Spring Reactive
tags: project
name: Projects
pageTitle: Spring WebFLux Kotlin
lead: Spring Reactive is non-blocking, supports Reactive Streams, and is the reactive alternative to Spring MVC. Spring MVC uses the Servlet Stack. Spring Reactive uses a non-blocking web framework to take advantage of multi-core, next-generation processors to handle massive numbers of concurrent connections.
navigation: Spring Reactive
---

<iff-svg src="/img/reactive.svg"></svg>

<iff-title level="3">Reactive defined</hls-title>
<iff-text>Reactive for Spring WebFlux describes a programming model that is built around reacting to events. These can be I/O events, UI controllers, and others. A Spring Webflux application responds to notifications as operations are complete, or data becomes available. At its core, Spring WebFlux uses Reactor. Reactor provides the API of Mono (0..1) and Flux (0..N) and operators aligned with the Reactive vocabulary. Reactor is a Reactive Streams library, and all the operators support non-blocking backpressure.</iff-text>

<iff-title level="3">Kotlin DSL</hls-title>
<iff-text>Kotlin DSL allows defining endpoints with lambda expressions. The WebFlux router function has a RequestPredicate (who should manage the request) and a HandlerFunction (how should the request be executed). A handler function accepts a ServerRequest and produces a Mono<ServerResponse>. In Kotlin, DSL can do the split of requests and handler function.</iff-text>

<iff-text>First, let's create a handler that accepts a ServerRequest and returns a Mono<ServerResponse>. The Mono inserts the Values "Hello, Spring" and "Goodbye Spring". This is the handler function that is then used in the router. An Annotation with @Component so Spring can pick it up. </iff-text>

```js
@Component
class GreetingHandler {
    fun hello(request: ServerRequest?): Mono<ServerResponse> = ServerResponse.ok().contentType(MediaType.TEXT_PLAIN)
        .body(BodyInserters.fromValue("Hello, Spring!"))
    fun goodBye(request: ServerRequest?): Mono<ServerResponse> = ServerResponse.ok().contentType(MediaType.TEXT_PLAIN)
        .body(BodyInserters.fromValue("Goodbye, Spring!"))
}
```

<iff-text>The router is then included in a @Configuration. The router accepts under "/user" 2 GET requests (/hello, /goodbye) and returns the handler on hello or goodbye.</iff-text>

```js
router {
    (accept(TEXT_HTML) and "/user").nest {
        GET("/hello", handler::hello)
        GET("/goodbye", handler::goodbye)
    }
}
```

<iff-text>Alternatively also the common @RestController and @GetMapping annotations can be used in the common Spring MVC style. In this example the hello method returns a Mono with a UserByProfileId Type. Reactive Spring connects with Databases with the R2DBC driver.</iff-text>

```js
@RestController
class GreetingController(val repository: HealthRecordRepository) {

    @GetMapping("/user/hello")
    fun hello(@PathVariable("profileId") profileId: Long): Mono<UserByProfileId> =
        repository.findByProfileId(profileId)
            .reduce( /* logic to combine*/)
            .map { s ->
                /* Map other properties */
            }

}
```

<iff-text>Kotlin allows for clean separation and seamless integration with Spring reactive. The used example can be found under the following links.</iff-text>
<iff-icon-text icon="end" href="https://www.baeldung.com/kotlin/spring-webflux-kotlin" target="_blank"><iff-text styling="paragraph-bold" slot="text">Baeldung Spring Webflux Kotlin</iff-text></iff-icon-text>
<iff-icon-text icon="end" href="https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html" target="_blank"><iff-text noLineHeight styling="paragraph-bold" slot="text">Spring Webflux</iff-text></iff-icon-text>
<iff-icon-text icon="end" href="https://www.baeldung.com/kotlin/spring-boot-kotlin-reactive-microservice" target="_blank"><iff-text styling="paragraph-bold" slot="text">Spring kotlin reactive</iff-text></iff-icon-text>
