# J. Adam Lovatt

## Summary
Software developer with experience in UI design and project management, proficient with modern web technologies such as React and Kubernetes.

I love logic, puzzles, and visual design, and I'm fascinated by the interplay between them that we find on the modern Web. Having gotten into coding during the early years of JavaScript, the improvements that have been made in recent years seem just short of wizardry. Who doesn't want to be a wizard?

I'm excited to learn anything and everything about this industry - right down to nerdy things like DevOps, typography, or how to make sites load more efficiently - and eager to put my existing skills to use making your app and your codebase stand out.

## Experience

### VizworX Inc.

As both a junior and now senior developer, I've contributed to or led several notable projects for VizworX.

#### Philespace (https://energyphile.philespace.com)

A platform that enables users to create, share, and view collections such as art or museum exhibits.

After a successful launch as a client's personal site, I was brought on to assist in transforming Philespace into a multi-tenant platform.

- Rewrote the app's draggable "gallery" to improve performance, code clarity, and maintainability
- Cleaned up and refactored the app's color styling to allow tenant-specific theming
- Built a screenshotting service to handle tenants' content updates
- Added permissions-based authorization to all GraphQL requests
- Assisted in creating an [open-source GraphQL library](#autocrud) to manage the bulk of our database interactions
- Updated the React codebase from class components and a complex Redux structure to simpler, functional components and more efficient state management using Jotai
- Helped to convert the project into a monorepo with a Kubernetes-based deployment architecture

#### Conditions (https://apps2.cer-rec.gc.ca/conditions/)

A visualization for Canada's Energy Regulator that guides users through the large number of legal conditions attached to pipelines and other energy projects, using a design from the University of Calgary's iLab.

- Implemented an animated tutorial, for which various parts of the visualization needed to hide, fade in, etc.
- Mapped each company's projects into flaglike structures around the company wheel. The flags were constructed dynamically, but had to be as compact as possible without overlapping others.

This project was open-sourced upon completion, and can be found at https://github.com/CER-REC/conditions.

#### Aurora (https://vizworx.com/data-viz/aurora/)

Working for a team from the University of Calgary's Astronomy department, we built a 3D visualization displaying current and historical aurora data around the world.
- Implemented a 3D globe and aurora overlay using Three.js
- Built a custom GraphQL server that could poll and cache our data sources
- Designed a fetching and compression strategy that would allow incoming datasets to be read into the graphics pipeline as quickly as possible, allowing near-realtime "playback" of historical data.

#### TimeworX

After growing beyond what our existing time management software could handle, I led the design and construction of an internal tool that generates timesheets and invoices from employees' [Toggl](https://toggl.com) data.

### Open Source

#### AutoCRUD (https://gitlab.com/vizworx/public/autocrud)

Built to support VizworX's Philespace project as a replacement for [Graphcool](https://www.graph.cool/) prior to its sunset date, AutoCRUD extends a GraphQL schema with Knex-based queries and mutations based on the user's types.

- Implemented a set of lifecycle hooks, allowing the library's users to inject custom logic such as authorization or external side effects
- Added a reporting system to support users' logging/analytics requirements
- Added a thorough test suite, including database mocking utilities, custom Jest matchers allowing assertions on a GraphQL schema, and testing in multiple database clients
- Documented the library's usage, setup, and directives

#### Reaper Scripts

Tools for [Reaper](http://reaper.fm/)'s open-source community, some of which have been used by established music, sound design, and game development studios.

- [Scythe, formerly Lokasenna GUI](https://github.com/jalovatt/scythe) - a full-featured UI toolkit, filling in a large gap in Reaper's basic "draw a line from A to B" graphics API
- [Radial Menu](https://forum.cockos.com/showthread.php?t=186637) - A fast, expandable toolbar replacement offering a large amount of customizability for different workflows
- [Theory Helper](https://forum.cockos.com/showthread.php?t=185358) - A suite of tools that assist users in matching musical notes to a scale, generating chords, and creating harmonies.
- [ReaTeam Scripts](https://github.com/ReaTeam/ReaScripts) - Dozens of smaller scripts and utilities

### Lighthouse Labs Web Development Bootcamp (https://www.lighthouselabs.ca/web-bootcamp)

#### Where on Wikipedia (http://where-on-wikipedia.herokuapp.com/)
For our final project we chose to recreate the Carmen Sandiego games, using Wikipedia's API to generate random content.

#### Haxxy (https://github.com/jalovatt/lighthouse-chatty#haxxy)
A real-time chat app built with React and a Websocket-based Express server.

## Skills

### Developer

Experienced with:
- React
- Node.js
- Docker
- Kubernetes
- Webpack
- SQL
- Lua

Interested in:
- Rust
- Jotai/Recoil
- Snowpack/ESBuild

### Designer
I created [a UI framework](https://github.com/jalovatt/lokasenna_gui) for [Reaper](https://reaper.fm), providing scripters with a large set of UI components, efficient updating and rendering, and easy-to-use event handling.

### Leader
As an electrician, I've effectively headed teams of up to 20 workers in the completion of long-term projects with a minimal amount of outside assistance.

### Mentor
I love teaching others, and have been known to answer simple questions of syntax or usage with short essays covering a variety of use cases, pros, cons, and pitfalls.

### Guitarist,
### Music Lover
I live and breathe music, from classical to jazz to folk to death metal (though I'll happily admit to being stuck in the 1980s)

### Dog Lover
I firmly believe that Boston Terriers are one of mankind's greatest achievements.

### Shameless Geek
Sci-fi? Fantasy? Horror? Spending hours at a time reading about ridiculously obscure topics on Wikipedia? Yes please.

## Personal History
### v3.1 - VizworX Inc. (January 2019-Present)
Software developer, working on custom solutions and data visualizations.

### v3.0 - Lighthouse Labs Web Development Bootcamp (Winter 2018)
Spent ten weeks cramming as much knowledge into my head as possible.

### v2.0 - Electrician (2010-2018)
Commercial and industrial work on a number of projects across western Canada.

### v1.0 - Various retail positions

### v0.1 - 1984

## Contact
- jalovatt@hotmail.com
- 403-852-8780
- [Github](https://github.com/jalovatt)
- [Gitlab](https://gitlab.com/jalovatt)
- [LinkedIn](https://www.linkedin.com/in/adam-lovatt/)
