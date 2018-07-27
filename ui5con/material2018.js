!function(e){function t(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}({11:function(e,t,a){function o(e){var t=$("#material"),a={},o=$("#navigation"),n=$("#nav-item-template").html();$.each(e,function(e,o){var n='<div id="{{id}}" class="b-track__header b-font size_18 color_white b-ui">{{track}}</div>',s="";switch(e){case"track1":s="ROOM A";break;case"track2":s="ROOM B";break;case"track3":s="ROOM C";break;case"track4":s="ROOM D";break;case"booth1":s="BOOTH 1";break;case"booth2":s="BOOTH 2";break;case"booth3":s="BOOTH 3";break;case"booth4":s="BOOTH 4";break;case"booth5":s="BOOTH 5"}n=n.replace("{{id}}",e).replace("{{track}}",s),t.append(n),a[e]=s;var r=!0;$.each(o,function(e,a){if(a.material&&Object.keys(a.material).length>0){var o=i(a);t.append(o),r=!1}}),r?t.append('<div class="b-track__header b-font color_gray b-ui">no material available for this track yet</div>'):t.append("<br>")}),$.each(a,function(e,t){var a=n.replace("{{hash}}",e).replace("{{title}}",t);o.append(a)})}function i(e){var t=$("#material-item-template").html();t=t.replace("{{trackId}}",e.speaker+"@@||@@"+e.title).replace("{{id}}",e.id).replace("{{title}}",e.title).replace("{{speaker}}",e.speaker).replace("{{type}}",e.type);var a='<a href="{{url}}" target="_blank">{{text}}</a>',o=Object.keys(e.material),i=o.map(function(t,o){return a.replace("{{url}}",e.material[t]).replace("{{text}}",t)}).join("&nbsp;&nbsp;|&nbsp;&nbsp; ");return t=t.replace("{{material}}",i)}var n=a(7),s=a(4);$(document).ready(function(){o(n),o(s)})},4:function(e,t){e.exports={booth1:[{title:"SAPUI5 Flexibility Services - Flexibility is Key",type:"",speaker:"Alexander Rauh, Christian Voshage",startTime:"10:00",endTime:"14:00",duration:240,abstract:"What is SAP’s new extensibility approach all about?\nPartners and customers need to adapt the UIs of SAP apps, for example add, hide or rearrange fields or adding own content.\nSAPUI5 extensibility changes allowing upgrade-safe, modification-free and role-based UI changes with intuitive and easy-to-use tools –for non-developers and developers.\n\nNone-Developers are adapting the apps via the easy-to-use WYSIWYG based runtime environment for all users or for a group of users.\nDevelopers are able to create or extend apps with the same upgrade-safe, modification-free and easy-to-use approach and are also able to enhance the app with advanced adaptations (like own coding).\n\nWhat’s the strategy behind it, what are the benefits and what’s the roadmap?\nWhat is the way of the SAPUI5 flexibility services into the Cloud?\n\nOn this demo-booth you’ll find the answers and you are invited to tell us your own challenges and experiences.\nBased on different formats on this demo-booth like presentations, demos, Q&A and interactive activities we will guide you through the world of SAPUI5 Flexibility Services.\n"},{title:"If Only UI5 Applications Could Talk",type:"",speaker:"Nikolay Kolarov, Elena Makarenko, Oliver Keim, Stefan Schnabel, Gundula Niemann",startTime:"14:00",endTime:"18:00",duration:240,abstract:"Talking about design and User Experience, most of us always imagine screens appealing to the eye. Learn how to enrich your application experience for users who rely only on screen reader software. Stop by the accessibility booth to get an overview of the accessibility features offered by the UI5 framework and get a hands-on experience how to use them in a best way to make the UI accessible. Try out our screen reader challenge or step in to the shoes of visually impaired people by using our simulation glasses to get a real-world experience."}],booth2:[{title:"Suite Controls Developer Clinic",type:"",speaker:"Jan Stacha, Vaclav Vopenka, Ondrej Bohaciak, Vit Hederer, Nikola Kalinova",startTime:"10:00",endTime:"14:00",duration:240,abstract:"Do you utilize controls from sap.suite such as Microcharts, Network Graph, Timeline or Process Flow in your applications? Then stop by our booth and discuss your issues, enhancement requests or new controls ideas with members of the product team. \n\nWe will showcase our long term plans and you will learn what is our portfolio for upcoming release. On top of that you can try out protoypes of new controls currently under development. "},{title:"UI5 Build and Development Tooling",type:"",speaker:"Matthias Oßwald, Merlin Beutlberger",startTime:"14:00",endTime:"16:00",duration:120,abstract:"Meet with UI5 Core Developers and discuss the new Node.js based UI5 Build and Development Tooling."},{title:"SAP Web IDE - Meet The Expert",type:"",speaker:"Amiram Wingarten",startTime:"16:00",endTime:"18:00",duration:120,abstract:"Newbie or seasoned SAPUI5 developer, SAP Web IDE has a lot to offer you. Come to our booth and engage with our expert. We'll focus on high-productivity tools and code quality, but will be happy to discuss any topic that will make your end-to-end development work easier and smoother."}],booth3:[{title:"UI5 Supportability Tools Exposed",type:"",speaker:"Martin Hristov, Adrian Bobev",startTime:"12:00",endTime:"14:00",duration:120,abstract:"Whether you need to debug or troubleshoot running application, or to get support information, get to know better UI5 Support/Troubleshooting tools: \no\ttypical scenarios and positioning of UI5 Inspector, Diagnostic window, Technical Info dialog will be explained\no\thandy tips and tricks will be live demonstrated in live demo sessions\n\nWith the Support Assistant tool, developers and designers can benefit from best advice how to avoid well known common mistakes and get improvement hints on-the-spot in the running application. \no\tIf you want to improve the performance, or check accessibility standard requirements, come and see how Support Rules could provide expert advice \no\tGet excited by the opportunity to create your own Support Rules, as the Support Assistant is open for community contribution  \n"},{title:"UI5 for custom prototypes",type:"",speaker:"Allan Hughes, Niall  McCabe",startTime:"14:00",endTime:"18:00",duration:240,abstract:"View examples of how UI5 was used to create prototypes for customers. We will show you a wide range of applications which highlight the capabilities of bringing the ‘wow’ factor to UI5. Through these examples aim to change some of the perceptions of UI5 and demonstrate how UI5 applications can be used to inspire the customer.\n \nExample cases:\n\nConsumer facing apps: CSS transitions and delightful animations. Extending controls to meet design needs of customer without having to start a control from scratch.\n \nBeautiful charts and dashboards: Creation of UI5 custom controls for use with third party chart libraries e.g. chart.js\n \nFeature rich apps: Showcasing UI5 integration with:\n•\tWebAPIs (e.g. Geolocation), \n•\tCloud Platform and Leonardo technology APIs such as Machine Learning \n•\tWebsockets to enhance real-time app capabilities (using websocket controls)\n•\t3D capabilities through integration with Visual Enterprise (sap.ui.vk).\n"}],booth4:[{title:"Generate full-stack UI5 apps in minutes",type:"",speaker:"Lars Laegner, Artem  Böhme, Mathias Zimmermann",startTime:"10:00",endTime:"14:00",duration:240,abstract:"We will provide a demo slot, generating full-stack UI5 apps from scratch. With our own design programming language \"Storm\" you can define entities, relations, ui's with authorizations, validations, searches, actions, odata and everything else you need for business ui's. We will implement this in minutes and generate on a fingertip projects and sourcecodes e.g. UI5, JavaEE, OData Services on SAP Platforms which are exactly like a experienced developer would implement, no machine-generated generated Sourcecode, it feels like handcrafted. And if you like, we will build the documentation for you as well. You will be amazed by the simplicity of our approach. More than 20 years of SAP and technology experience form the basis of our products and show our high standards of quality, flexibility, creativity and passion"},{title:"OData V4, Branch Coverage & Gesture Control",type:"",speaker:"Thomas Chadzelek, Alexander Mathias Riess",startTime:"14:00",endTime:"16:00",duration:120,abstract:'The UI Services Team is ready to talk about\n- its latest developments for OData V4, incl. support of analytical charts,\n- improvements of code coverage measurements which now include branch coverage.\n- a cool prototype for gesture control of a UI5 app based on Leap Motion.\n\nBranch Coverage:\nOpenUI5 is currently using BLANKET.JS to measure code coverage. Our team has also activated branch coverage measurements for the ternary "condition ? then : else" operator. We have now replaced the original BLANKET.JS code Instrumentation by our own and then extended it to include condition coverage as well, because the shortcut evaluation of && and || operators represents just another kind of branching. Later, we instrumented "if" statements in the same fashion, which is particularly interesting in case of missing "else".\n\n\n'},{title:"Get connected with UI5Lab",type:"",speaker:"Emanuele Ricci, Wouter Lemaire, Michael Graf, Margot Wollny",startTime:"16:00",endTime:"18:00",duration:120,abstract:"UI5Lab is a community driven project to establish a repository for UI5 Custom Control Libraries. It is meant to gather forces throughout the community and enable everyone to use UI5 Custom Controls easily.\nVisit us at the booth and get to know the people behind this community driven project. Play around with the different custom controls already available, learn how easy you can contribute your own controls to the lab, and share your ideas to further boost UI5Lab.",material:{Slides:"https://de.slideshare.net/michadelic/ui5consap-2018-slides-for-booth-get-connected-with-ui5lab",Demo:"https://lemaiwo.github.io/UI5LabDemoApp/webapp/index.html",Github:"https://github.com/lemaiwo/UI5LabDemoApp",Repository:"https://ui5lab.io/",Documentation:"https://ui5lab.io/docs/#/?id=what-is-ui5lab"}}],booth5:[{title:"Coffee Corner Consulting (CCC)",type:"",speaker:"Jan Mummenthaler",startTime:"14:00",endTime:"18:00",duration:240,abstract:"Lots of participants, lots of questions... Let's sit together have a cup of coffee and talk about the real world problems...\nNext to all those specific topics we take care in several presentations and hands-on session a lot of 'undefined' question are left open. We want to address exactly these 'left overs' in a more private atmosphere. Come to the booth, relax, connect to experts around and think evo!"}]}},7:function(e,t){e.exports={track1:[{title:"Welcome & Keynote",type:"",speaker:"Frederic Berg, Stefan Beck, Peter Müßig",startTime:"09:00",endTime:"10:00",duration:60,abstract:"The UI5con@SAP 2018 Keynote\n\nNOTE: the keynote is also broadcast to the canteen (enter, then turn left) because Room A (Audimax) is not big enough to fit all attendees.",material:{Slides:"https://de.slideshare.net/PeterMuessig1/ui5con-2018-keynote",Video:"https://www.youtube.com/watch?v=EIRi5XR6wvE"}},{title:"UI5 Build and Development Tooling",type:"",speaker:"Merlin Beutlberger, Matthias Oßwald",startTime:"10:15",endTime:"11:00",duration:45,abstract:"Are you missing a set of hackable tools for building and developing state of the art UI5 applications?\nDo you want to take part in the future of how UI5 applications are being developed and deployed?\n\nUI5 Core developers Matthias Oßwald and Merlin Beutlberger will show you the capabilities of the new Node.js based UI5 Build and Development Tooling. You will see how they can improve your development workflow and how they can be integrated into other tools. You will learn about the roadmap of this open source project and how you can contribute to shaping its future.",material:{Slides:"https://github.com/RandomByte/talks/blob/master/UI5con_at_SAP_2018/UI5con2018_UI5_Tooling.pdf",Video:"https://www.youtube.com/watch?v=iQ07oe26y_k"}},{title:"UI5 on Http2 - one step ahead",type:"",speaker:"Tobias Sorn",startTime:"11:10",endTime:"11:30",duration:20,abstract:"This session outlines opportunities, pitfalls and best practices. Http2 is the next version of the Http1, but it also offers the capability of sending assets to the client via server push. With this feature the server can be made intelligent by analyzing requests and serving responses ahead of time. In conjunction with UI5 the idle time of the user could be used to preload resources such as views and controllers and reduce the load time once these resources are required.",material:{Slides:"https://www.slideshare.net/TobiasSorn/2018-ui5con-http2-ui5",Github:"https://github.com/tobiasso85/intelligent-h2",Video:"https://www.youtube.com/watch?v=at6wapkDu34"}},{title:"How to improve your UI5 development process",type:"",speaker:"Sebastian Abshoff, Tobias Bettmann, Tristan Storch",startTime:"11:50",endTime:"12:10",duration:20,abstract:"Developing high-quality UI5 applications is challenging. It requires a lot of expertise and experience on the developer and development process level. In this talk, we show how we work with UI5 and share some of the insights we have gained in our projects in the last years. We explain both our methodologies and tools which help us to guarantee a fast and rapid but sustainable application development process and which have proven to be successful to manage time, cost, and quality in an efficient manner. In addition, we would like to name some open points and raise questions we would like to be discussed within the UI5 community and finally be solved in the UI5 framework.",material:{Video:"https://www.youtube.com/watch?v=sliEMBP2WxY"}},{title:"Diving into the sap.rules.ui library",type:"",speaker:"DJ Adams",startTime:"12:20",endTime:"13:05",duration:45,abstract:"The sap.rules.ui library has a number of controls which represent a complex surface of functionality, necessary because the SAP Cloud Platform (SCP) Business Rules service provides a fairly comprehensive mechanism for managing business rules, even for its young age. In this session we examine how everything fits together, to understand how to write UI5 apps that allow end users to maintain rule data directly. No slides, just code and the Chrome Developer Tools.\n",material:{Video:"https://www.youtube.com/watch?v=CTgtS6Cd98Y"}},{title:"News from Control Development",type:"",speaker:"Andreas Kunz, Thomas Gauguin Houghton-Larsen",startTime:"14:00",endTime:"14:45",duration:45,abstract:"Presented as prototype last year, the declarative “XMLComposite” way of developing your own controls just like you normally develop XML Views is now part of UI5.\nOther new features complement it nicely: Aggregation Forwarding and the ManagedObjectModel allow specifying how the API of a composite control should be mapped to its inner controls. And the new event handler parameter syntax for XML Views can also be used in XMLComposites to simplify passing the needed data into those functions.\nThis talk will give you a new perspective on UI5 control development.",material:{Slides:"https://www.slideshare.net/andreaskunz/ui5con-2018-news-from-control-development",Demos:"https://rawgit.com/akudev/UI5con2018-ControlDevNews/master/www/index.html",Github:"https://github.com/akudev/UI5con2018-ControlDevNews",Video:"https://www.youtube.com/watch?v=Z2uXJjjQaf4"}},{title:"UI5 Evolution: The Core Changes",type:"",speaker:"Andreas Ecker",startTime:"15:00",endTime:"15:45",duration:45,abstract:"Join UI5 on its journey to evolve into a state-of-the-art Universal JavaScript Framework. While keeping the enterprise-proven qualities you see how fundamental changes are applied to the Core of and throughout the framework.\n\nFeaturing a layered architecture, asynchronous module definition (AMD), clear dependencies, new module loaders, async variants replacing sync API, and more. Learn how you benefit from the modularization of UI5 and its complementary build and development tooling. \n\nUnderstand the paradigm shift introduced by UI5 Evolution, embrace the new capabilities and leverage them for your current and future projects.\n",material:{Slides:"https://www.slideshare.net/Andreas_Ecker/ui5con-2018-ui5-evolution-the-core-changes-105444585",Video:"https://www.youtube.com/watch?v=G_UYhLBlrIQ"}},{title:"UI5 goes PWA",type:"",speaker:"Helmut Tammen",startTime:"16:05",endTime:"16:50",duration:45,abstract:"In this session I will convert an existing OpenUI5 application which is only running online into a Progressive Web Application you can run offline and add to your homescreen. \nYou can just look how I convert the app step by step and show you some details and pitfalls I fell into or you can follow each step at your own computer. If you want to do it on your own all you need i is a computer with a PWA-enabled browser (Chrome preferred).\nBesides the details on how to convert an OpenUI5 app you get an overview of PWAs and details about manifest, service workers etc. \n\nFind the session documentation here: https://goo.gl/LJ4KVB",material:{Slides:"https://prezi.com/p/xagpdap4xlqb/",Tutorial:"https://goo.gl/LJ4KVB",Video:"https://www.youtube.com/watch?v=Zhn95ttkqm4"}},{title:"A journey with OPA",type:"",speaker:"Arnaud Buchholz",startTime:"17:05",endTime:"17:50",duration:45,abstract:"\"If it's not tested, it doesn't work\".\n\nUI5 includes a testing framework that gives developers the power to assess their code by automating the UI and simulating the back-end. In this presentation, a complete example of test automation will be given, illustrating the best practices when using waitFor, simulating back-end APIs and providing keys to handle complex scenario (such as data generation, error simulation...).\n\nProposed content:\n- OPA tests execution\n  - Asynchronous programming (and the need for waitFor)\n  - Window / iFrame isolation (explain subtle issues with instanceof Array / Date that doesn't work properly)\n- Anatomy of waitFor\n  - filtering options (id, controlType, view...)\n  - matchers\n  - checker\n  - actions\n  - success\n  - autoWait\n- Journeys & Pages\n  - UI abstraction\n  - BDD\n- Mocking Backend\n  - CRUD on entities\n  - Entities storage & generation\n  - Request mocking\n- Our intiatives\n  - Performance monitoring\n  - Extensibility & RTA\n\nExpectations:\n- Good knowledge of JavaScript notions, in particular: setTimeout, RegExp (with capturing groups)\n- Good knowledge of ODATA / metadata definition\n",material:{Slides:"http://arnaudbuchholz.github.io/decks/UI5Con'18%20A%20journey%20with%20OPA.html",Github:"https://github.com/ArnaudBuchholz/training-ui5con18-opa",Video:"https://www.youtube.com/watch?v=HiZq-kuIbt0"}},{title:"The UI5Top5 2018",type:"",speaker:"Twan van den Broek",startTime:"18:00",endTime:"18:20",duration:20,abstract:"Announcement of the community UI5Top5 - the 2018 search for the best UI5 app.",material:{Video:"https://www.youtube.com/watch?v=lbqLKW5g2gM"}}],track2:[{title:"Motion Design in Fiori",type:"",speaker:"Roman Rommel, Sebastian Moreno",startTime:"10:15",endTime:"11:00",duration:45,abstract:"Motion design is a design method that applies to user interface design through use of animation and visual effects. Motion design guides users and provides coherent and a delightful user experience. During this presentation we will provide insights about Motion Design in the Fiori Design Language including topics like Loading Placeholders, Perceived Performance, Device Dependent Animations, Micro interactions and others. \n\nAdditionally, we will talk about technical implementation of animations including the topic performance and how to reach 60 FPS. We will show live demos how animations can be integrated into SAP UI5 applications using transitions and keyframe animations. We will talk about reactive animations using CSS variables and will guide the audience through the new Web Animations API. We would also like to show a sneak peek into the upcoming SAP UI5 Animation Library and how Fiori of the future could look like (possibly a live demo showing a prototype or video in the worst case).",material:{Slides:"https://www.slideshare.net/RomanRommel1/motion-design-in-fiori"}},{title:"UI5 - Best Practices & Tips",type:"",speaker:"Arnd vom Hofe, Ayham Tanbari",startTime:"11:10",endTime:"11:30",duration:20,abstract:'The SAPUI5 framework is constantly evolving – as are coding best practices.\n\nThis session will demonstrate how developers get their Apps ready for today\'s features (such as "Adaptation at Runtime") and future SAPUI5 evolvements by just applying a few small code changes.\n\nUI5 development experts will discuss topics like stable IDs, asynchronous loading, preparing for UI5 Evolution and OPA Tests with karma. They will share helpful tips and tricks for rookies and experienced SAPUI5 App developers alike.\n',material:{Slides:"https://www.slideshare.net/ArndvHofe/ui5con-2018-best-practices-tips",Video:"https://www.youtube.com/watch?v=SKElI_xwqRY"}},{title:"SAP Cloud Platform workflow",type:"",speaker:"Jorg Thuijls",startTime:"11:50",endTime:"12:10",duration:20,abstract:"Mid 2017 SAP announced their workflow alternative in the cloud. It has since grown into a fairly robust solution and it's in active development - every SCP release cycle adds new options. I'd like to present an end to end example I've done for a customer recently who's exploring workflow alternatives. The demo includes the Cockpit scaffolding, the workflow, the inbox and monitoring apps, two custom UI5 applications (and a small oData service). "},{title:"TBaaS - Testing and Building as a Service",type:"",speaker:"Volker Buzek",startTime:"12:20",endTime:"13:05",duration:45,abstract:"Most everybody agrees that tests are a vital part of high quality software development. But even though UI5 has a solid test framework in place, very few times tests are utilized in projects - not the least because an increase in project cost is feared for providing the test target infrastructure (OS-browser-combinations).\nThis presentation will counter that assumption and show how to \n- implement a Continuous Integration platform \n- based on Jenkins, the UI5 node-tools and node in general\n- for executing Unit-, Integration(OPA)- and Visual-Regression(!)-Tests \n- on Windows-, Linux- and macOS-systems\nthat can be re-used in UI5 projects.\n\nIn addition, the presentation will explain how to automate \n- building an iOS app and distributing it via iTunes Connect\n- building an Android app and distributing it\nfrom the same existing UI5 sources that the test infrastructure runs against.\n\nAll of the above is the result of establishing a CI-/CD-Infrastructure at j&s-soft throughout various projects during the last years.",material:{Slides:"https://www.js-soft.com/presentation_ui5con2018",Video:"https://www.youtube.com/watch?v=WymkuhrWPtc"}},{title:"Lego robot, SAP IoT, Web IDE and UI5. The perfect combination",type:"",speaker:"Tim Back",startTime:"14:00",endTime:"14:45",duration:45,abstract:"Learn how to pick up sensor data from a Lego Robot, send it into SAP Cloud Plaform, using SAP's IoT Application Enablement solution to create a model, ingest and store the data according to this model and to build a UI5 based application using Application Enablement's Web IDE temaplate on top of this without having to code. Learn how to adapt the resulting application with a custom built UI5 control that shows sensor data in (near) real time  ",material:{Slides:"https://www.slideshare.net/secret/78FFMWQK4eaj2x",Video:"https://www.youtube.com/watch?v=BFruCIPII3I"}},{title:"Optimizing an SAP Fiori Application Based on a Real World Example",type:"",speaker:"Manuel Blechschmidt",startTime:"15:00",endTime:"15:45",duration:45,abstract:"In this session, different techniques are explored that were applied to optimize an SAP Fiori app. The following topics are covered: measuring the performance of an app, load optimization of the app until it is fully rendered, optimizing OData models, optimizing rendering time of controls, doing things asynchronous, and memory optimization. We start with a very slow app and demonstrate the different techniques and show how much improvement you will obtain.\n\nPresenter:\nManuel Blechschmidt studied at the Hasso-Plattner-Institut and is the CEO of Incentergy GmbH a consulting company focused on SaaS software systems. Currently he works in the agriculture business and helps farmers to do their business. On the weekends he researches for the most innovative technologies and builds prototypes to evaluate them. He puts the prototypes on his github account and produces short videos to show the highlights.",material:{Slides:"https://www.slideshare.net/ManuelB86/optimizing-an-sap-fiori-application-based-on-a-real-world-example"}},{title:"Create your own UI5 Control, wrap it in a library and consume it",type:"",speaker:"Wouter Lemaire, Andreas Kunz",startTime:"16:05",endTime:"16:50",duration:45,abstract:"In this session I will explain how UI5 controls work, why we need to wrap them in a library and finally how to consume a library. For creating the UI5 control, I will use the SAP Web IDE Control Generator and deep dive into the technical details of a UI5 control. After that I'll show how we can add a UI5 control to a library and talk about the why. Last but not least, I show them how they can consume libraries. \n\nFor creating the library, I will use a project template to create a UI5 library in not time. More details on this template can be found here: https://blogs.sap.com/2018/03/08/sap-web-ide-ui5-library-template-for-ui5lab/ \n\nConsume the library details: https://blogs.sap.com/2018/04/06/consume-libraries-from-ui5lab/\n\nPS.: will make a reference to UI5lab and how to contribute and consume to this project",material:{Slides:"https://lemaiwo.github.io/UI5ConPresentation/webapp/#/"}},{title:"Drag and Drop Concept in UI5",type:"",speaker:"Cahit Gürgüc",startTime:"17:05",endTime:"17:50",duration:45,abstract:'One of the most powerful interaction design patterns available to developers in UI5 is "Drag and Drop". Learn how to enable, manage and enjoy with it!',material:{Slides:"https://www.slideshare.net/aborjinik/2018-ui5con-draganddrop-concept"}}],track3:[{title:"Reactive programming in SAPUI5 using Mobx",type:"",speaker:"Thomas Nelissen",startTime:"10:15",endTime:"11:00",duration:45,abstract:'This session is about reactive state management for complex SAPUI5 applications using MobX.\nMobX is a library that makes state management simple and scalable by transparently applying functional reactive programming. Their philosophy is "Anything that can be derived from the application state, should be derived. Automatically.”.\nYou will learn how to create a better separation between the UI and the datamodel and how to write easier code with less bugs in it.\nI will also share a real-world example and our lessons learned of a complex SAPUI5 application where we used Mobx to manage the state.',material:{Slides:"https://www.slideshare.net/ThomasNelissen/ui5con-2018-reactive-programming-in-sapui5-using-mobx-103085183",Demos:"https://github.com/TNFlexso/UI5Con-MobX"}},{title:"Branch Coverage",type:"",speaker:"Thomas Chadzelek",startTime:"11:10",endTime:"11:30",duration:20,abstract:'OpenUI5 is currently using BLANKET.JS to measure code coverage. In the past, our team has also activated branch coverage measurements for the ternary "condition ? then : else" operator. We have recently replaced the original BLANKET.JS code instrumentation by our own and then extended it to include condition coverage as well, because the shortcut evaluation of && and || operators represents just another kind of branching. Later, we instrumented "if" statements in the same fashion, which is particularly interesting in case of missing "else".\n\nThese new possibilities are available as part of OpenUI5 and can be extended to cover more interesting cases. Loop coverage may be such a topic for future developments.',material:{Slides:"https://www.slideshare.net/ThomasChadzelek/branch-coverage-2018-ui5consap"}},{title:"How to go from ABAP to UI5 by Yourself",type:"",speaker:"Douglas Cezar Kuchler",startTime:"11:50",endTime:"12:10",duration:20,abstract:"In this session, I want to share my personal learning journey from an ABAP developer through the path to learning UI5 programming \"by myself\".\n\nI'll talk about my motivation, about the needed growth mindset and which resources I've used (most of them are cheap or free, e.g. OpenSAP and SAP Press books).\n\nFinally, I want to talk why it's important to never stop learning and tell what is the next \"big\" thing that I'm learning now!",material:{Slides:"https://www.slideshare.net/secret/vnUTVqKp9xjkca"}},{title:"UI5 as choice for µ-Services Agent & Communications Desktop ",type:"",speaker:"Paul Roth, Gokula Sundar Ponnusamy",startTime:"12:20",endTime:"13:05",duration:45,abstract:"In this session you will learn about the novel, cloud native SAP UI5 based SAP Customer Engagement Center. We will explain the SAP CP based µ-services + UI5 journey, highlight the decision points, the choices we evaluated and of course provide an overview of a comprehensive Cloud Native SAP UI5 application that you may not have expected from SAP. Features of the Agent Desktop: Omni Channel Engagement Center utilising WebRTC text+ video chat, generic chat bot interfaces, WebSocket and embedded VoIP Communications stack. Additionally we provide insight about the flexible, partly free-style UI framework we built in order to cope with the needs of lightweight and flexible agent / contact center, which are envisioned to support DIGITAL CUSTOMER JOURNEYS. "},{title:"Creating Fiori elements Apps WYSIWYG Style",type:"",speaker:"Christoph Gollmick",startTime:"14:00",endTime:"14:45",duration:45,abstract:"Improve your UI5 app development efficiency with Fiori Elements and a WYSIWYG editor in SAP Web IDE! Fiori Elements development follows a metadata-driven approach creating UIs based on pre-defined templates and controllers. The UI developer does not code the target UX design, but annotates the OData service in the backend with semantic and UI hints. With the addition of visual editing in SAP Web IDE, developers can now focus on building the UI and the right annotations are created automatically. In this presentation you will learn the benefits of Fiori Elements and WYSIWYG editing to speed up UI5 app development."},{title:"High-Productivity SAPUI5 App Development with SAP Web IDE",type:"",speaker:"Amiram Wingarten",startTime:"15:00",endTime:"15:20",duration:20,abstract:"SAP continues to enhance SAP Web IDE’s Fiori support, making it easier and faster to develop engaging and beautiful UI applications. Learn the latest and greatest high-productivity development tools in SAP Web IDE. Get tips to increase your SAPUI5 development efficiency: Integration with Build, Storyboard perspective and the rich Layout Editor for low/no code development, automate UI5 tasks using Grunt, and more!",material:{Slides:"https://www.slideshare.net/AmiramWingarten/2018-ui5con-amiram"}},{title:"A Different Approach to UI Testing",type:"",speaker:"Christian Schuff",startTime:"15:25",endTime:"15:45",duration:20,abstract:"Instead of covering unit and integration testing with QUnit, Sinon and OPA5 once again we will look at a different approach to UI testing. \nWe will explore visual regression testing with BackstopJS and apply it to a SAPUI5 application. Screenshot-based testing of different screen sizes and scenarios will be automated and integrated into a CI pipeline.",material:{Slides:"https://slides.com/christianschuff/a-different-approach-to-ui-testing/#/",Code:"https://github.com/ui5experts/ui-testing"}},{title:"Kill the Tables!",type:"",speaker:"Dietrich Mayer-Ullmann, Elena Makarenko",startTime:"16:05",endTime:"16:50",duration:45,abstract:"Have you ever been looking for a more exciting UI than a table in your app - but ended up with a table after all? Just because it seemed highly functional? We invite you to discover new amazing UI design alternatives to enhance the user experience. Explore new possibilities using the UI5 framework. Get inspired by fresh ideas!\n",material:{Slides:"https://www.slideshare.net/secret/lYGjrUk1PKYqQq"}},{title:"UI5 in Action: the Liquids Warehouse",type:"",speaker:"Sebastian Ried, Nadine Glasstetter",startTime:"17:05",endTime:"17:25",duration:20,abstract:"Living in the Black Forest where homemade liquor is a tradition for generations and thus inventories are accumulating, there was a need to manage the ever-growing stock in my fathers liquids warehouse. Existing SAP warehouse management solutions seemed not only too expensive but also way too extensive for this purpose. Long story short: end of last year we decided to develop our own warehouse management solution using OpenUI5 as frontend and CouchDB as a simple document storage with http interface. We had a successful Go-Live in January 2018. In this session you will get an insight into our liquids warehouse app from a technical but also from a process perspective and learn how old traditions and new technologies work hand in hand.  ",material:{Github:"https://github.com/SebastianRied/glw"}},{title:"Business Card CRM a showcase of modern browser technology",type:"",speaker:"Manuel Blechschmidt",startTime:"17:30",endTime:"17:50",duration:20,abstract:"In this talk I will present BusinessCardCRM an OpenUI5 application that is hosted on Github. The application can be used to make a photo of a business card. The image will be analyzed by the Google Vision API and afterwards the text will be feed into the Google Named Entity Recognition Engine. Based on some look up tables and regular expressions typical attributes like first name, last name, phone number and email address are extracted. The data will be saved in the local storage of the device. If multiple clients like a smartphone and a desktop PC want to share business card data they can join together through a WebRTC session and data can be send through this connection.\n\nThe session will have the style of a code review session that starts with cloneing the project in SAP Web IDE afterwards going through the different steps and have a look how the different parts are engineered.\n\nPresenter:\nManuel Blechschmidt studied at the Hasso-Plattner-Institut and is the CEO of Incentergy GmbH a consulting company focused on SaaS software systems. Currently he works in the agriculture business and helps farmers to do their business. On the weekends he researches for the most innovative technologies and builds prototypes to evaluate them. He puts the prototypes on his github account and produces short videos to show the highlights."}],track4:[{title:"Get started with UI5 custom controls",type:"",speaker:"Emanuele Ricci, Wouter Lemaire",startTime:"10:10",endTime:"11:40",duration:90,abstract:"Have you ever wondered how to create a custom control? \nDo you have in mind the perfect 3rd party JS library to use in your UI5 app? \nWould you like to build and import a UI5 custom library?\n\nGet your hands dirty with NPM, GruntJS, BowerJS, and grunt-openui5.\n\nThis hands-on is the perfect fit for you!\nIn this session, you will learn how to use all these tools to make your own UI5 custom control.",material:{Slides:"https://www.slideshare.net/secret/dAQIdAEsib1buK"}},{title:"Developing an Augmented Reality game in UI5 with ARCore for Web",type:"",speaker:"Christian Grail",startTime:"11:50",endTime:"13:20",duration:90,abstract:"Develop an Augmented Reality game with UI5. The game will take place in a galaxy far, far away. Learn how you can integrate three.js and ARCore for Web into UI5. ",material:{Tutorial:"https://github.com/cgrail/webxr-ui5/blob/master/tutorial.md"}},{title:"UI5 Hacking Lab",type:"",speaker:"Diana Pazheva",startTime:"13:50",endTime:"15:20",duration:90,abstract:"Keen to learn how to boost the security of your UI5 app? Join our hacking lab and try it out.\nYou will be given access to a list of challenges that require you to find a vulnerability within an intentionally unsecured UI5 web app and exploit it. Test your hacking skills as we guide you with hints and examples, so that you can progress with minimal prior security knowledge. The challenges will cover client-side web application security (XSS, clickjacking, etc.) with varying difficulty/expertise level."},{title:"- CANCELLED - Microservices with SAPUI5 - CANCELLED -",type:"",speaker:"Gokul  Ramdass",startTime:"15:25",endTime:"15:45",duration:20,abstract:"CANCELLED!\nNOTE: although still contained in the printed booklet, this session will not be held.\n\n\nNaaS or Notification as a Service is a server side application (SAPUI5 UI Interface) hosted in cloud foundry, which listens to messages pushed from SAP CRM/ ERP, or any other systems exposed via SAP NetWeaver Gateway. NaaS publishes messages to a REST endpoint, to Sockets Listeners, or both. Using Harmony Deal Manager Application (SAPUI5) as an example we show how NaaS overcomes the sometimes restrictive behavior of SAP systems to connect to cloud applications for message POST without compromising the security. Harmony Deal Manager Application listens to NaaS to update the view if the internal state on the server has changed."},{title:"Functional programming for your UI5 apps",type:"",speaker:"DJ Adams",startTime:"15:55",endTime:"17:25",duration:90,abstract:"Functional programming techniques allow you to write solid-state code, more stable and easier to reason about. In this session you'll get the chance to learn what it's like to use functional programming techniques in your code. Rather than look at code on slides, you'll write it yourself, guided by the session lead, to get a feel for the code under your fingertips and how it works. We'll take some standard UI5 demo apps and replace sections by introducing mechanisms such as currying, partial application and point-free coding, with a healthy dose of list-orientation and immutability.\n\nThis is a repeat of the session from 2017.\n",material:{Tutorial:" http://bit.ly/qmacro-ui5con-funcprog"}}]}}});