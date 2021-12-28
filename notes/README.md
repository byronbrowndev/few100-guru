# Various Notes and Stuff

## Flow of the Class

This class has morphed since I created it. In the very beginning we did no Angular, and only a little TypeScript. People were brand new to the whole Angular thing - now we get a lot of people that know _some_ Angular, and are pretty savvy at the web stuff. We also get a decreasing percentage of programmer's that have worked on other platforms that are pretty lost. I'm hoping the other "intro" class will be more for them.

### Situating Angular

Some of the content at the beginning of the class is intended to situate Angular in both the history of web development, and as an _option_ for creating applications that live on the web now. I don't see building apps in a web browser as so much of an evolution, but a sort of mutation. In other words, the classic server-side model of web development - it's original intention - is not only still valid, it is necessary and often the right choice.

HTML5 Apps (the category I put the type of applications we build with Angular into) is more of an offshoot of two things:

- Competition for "Native" applications (iOS, Android).
- The demise of browser plugins (Java Applets, ActiveX Controls, Flash, Silverlight) for building "application like" experiences that run in a web browser.

HTML5 (made a reccomendation (e.g. "standard" in 2012)) was motivated by those two factors. At Progressive, we have such a great example in Flash Quoting. That was the way we gave a better user experience until Flash was no longer an option.

#### Why Not Native?

Native applications (again, iOS, Android), have to be custom built for a specific platform. They also require a lot of "buy in" from the users in that they have to install an application from their respective app store before they can access application functionality. Native applications are a great way to support users that have "bought in" to our platform, and provide a lot of functionality that regular users of an platform regard as helpful. Most insurance customers aren't people that _want_ to interact with their insurance provider regularly. Only when needed - adding a driver, making other changes to their policy, filing a claim, etc.

For "internal" users the benefits of appliction functionality delivered through a web browser is well established. And we certainly cannot expect them to do their work on an iOS or Android device.

A further benefit is that applications delivered via a web browser align well with CI/CD methodologies. The ability to deliver new value to a customer that only requires a browser refresh on their end is still unbeatable.

### What is Angular _FOR_ Anyhow?

HTML5 is about making the browser a suitable platform for application development. Before HTML5, there were huge holes in functionality that developers need in a web browser, and when Flash, etc. were taken away, something needed to be done.

Some of these features include:

- Better networking through the `Fetch` API, and WebSockets. (Also things like WebRTC, etc.)
- Better asynchronous programming models like promises, and now observables.
- Local data storage (before just WebStorage API, now IndexedDB)
- Better control of graphics through SVG, and Canvas.
- Access to operating system APIs through `geolocation`, `getUserMedia()`, etc.
- Multithreading with Service Workers
- Offline applications

Prior to these additions, JavaScript libraries focused on narrowing differences between browsers with varying compliance with standards (jQuery), and enhancing applications delivered from the server side.

AngularJS was an early framework for developers. Frameworks are "bigger" and more opinionated than libraries. They dictate how applications should be built. Angular JS was _pre_ HTML5 and ECMAScript 6, and was rewritten as "Angular" as those technologies stabilized and became prevalent.

The elephant in the room is that we are _still_ writing software on a platform (the web browser) that has _many_ disadvantages in terms of functionality and reliable software deliverability. When deploying software to a web browser, many things have to be considered, including the following:

- Differences in available functionality, memory, and processing power.
- Differences in browser versions and their ability to run modern software.
- Differences in network speeds and reliability.
- Accessibility issues. Accessibility assistive software relies on well-known conventions of the World Wide Web including hyperlinks, forms, etc. and an unmindful Angular application can easily subvert these.

The biggest problem is that the software we deliver to the browser is by definition "user interface", and most developers have a very limited level of experience in building user interface beyond the narrow confines of HTML, forms and hyperlinks. The paradox is if that is all you know, then you might as well use a server side technology and skip the complexity of HTML5 apps and Angular all together. But if you are forced to work in Angular, and you don't understand UI and UX, you can create some really abysmal stuff. This is particularly true if the server side APIs are expecting the client to be basically the same as the old server side applications, providing viewmodels instead of actual data, etc.

> Opinion: Most Angular applictions should embrace the fact that they are browser based and not try to hide that. Use URLs, forms, links, etc. However, the goal is to create a user experience that surpasses that of server-side applications. This means _responsive_ applications that adapt themselves to the screen and device they are accessed on. They should also be _reactive_, immediately providing useful feedback for every user interaction. (note, modal "loading" animations are _not_ useful feedback). In short Angular should be used to enable user experiences that are not possible through server-side web applications.

In our training and our work we need to constantly evaluate the line between "Web Browsing" and "Using an Application". It is far too easy to turn Angular applications into an overly complex, overly expensive, replacement for something that could have been done much more economically as an MVC application, or whatever.

So, summary:

> Angular is a framework for building user interface applications, like word processors, code editors, etc. It is not a tool for creating "web sites". Web sites are awesome. You should build those, too, but use Angular for creating something that you _can't_ with a web site.

Some tips for accomplishing this:

1. Design the user experience _first_, and the supporting APIs second.
   1. Make as much of the application "stand alone" as you can. Do API stuff late in the game.
   2. Redux helps with this. API access is done with "side effects", that are easiest to add later.
2. Mock up interactions. Look at other sites that do it well. Start with an accessible design, and then enhance with JavaScript (example would be drag and drop, etc.)
3. Mockups are _best_ done in HTML and in the browser. It's fine to sketch things out or use other design tools, but the interactions have to come first, and you can't do that in Photoshop.
4. Realize that you are always writing speculative code - we don't usually know what will "work"
   1. Ask yourself "what can I put in front of users _today_ to make sure we are going in the right direction.
   2. Make your applications _observable_ through instrumentation to see if users are "figuring out" or even benefitting from the work you are doing.
   3. Do not get emotionally involved with any design decision. Most will die an early death and be reborn as something simpler, more elegant, and beautiful.
   4. Most importantly - _write your applications_ using techniques that allow the maximum flexibility (loose coupling) so you can constantly evolve what you are doing without breaking things. Redux is one way to enable this, but I fear we are ruining it by over-testing ever everything.
5. Watch actual users use your app. Make them explain what they want to accomplish, then watch how they try to do it. You will be surprised.

### TypeScript Basics

Unfortunately, because of our distribution of labor, most new Angular developers aren't invited to think at that level. They just have to ship code, and usually code someone else "designed" and told them to write. In this class, I do everything I can to get them into thinking the "right way" about writing code in TypeScript. These key things are:

- Immutability - showing them how to do things without variables.
- Functional Style - functional programming is foreign to most programmers coming to Angular. They have experience with imperative and object-oriented languages. When under stress of delivering code, they often fall back to what they know, which can cause huge problems (in terms of performance, and change detection) in Angular applications.
- Using the Type System: Showing, over time, how by declaring data types for structures and functions can help them reason about the code in a better way.

I do _not_ show loops, switch statements, and I avoid `if` statements as much as possible. We define all data structures as interfaces, and only show a tiny bit of classes so they can understand components and services.

### Introduction to Angular

On the final day I give a good overview of Angular. We learn about modules (especially the app module), components, and services. I teach `input`s and `output`s, and the service is used to share cached data in a `BehaviorSubject` because that is, at it's heart, all that the Redux store is.

I go over the Angular CLI, including:

1. Creating a new Angular Application (`ng new`)
2. Generating components (`ng generate component`)
3. Serving the developer build (`ng serve`)
4. Building a production app (`ng build`) and I shows `browserlist` and how to modify it and the impact on the build module sizes.
5. "Just enough" Node and NPM, including installing NPM packages and how versioning works.

The lab is the Tour of Heroes tutorial on the [Angular.io](https://angular.io/tutorial).
