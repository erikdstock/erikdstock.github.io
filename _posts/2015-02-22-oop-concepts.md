---
layout:     post
title:      "Object-Oriented Programming"
subtitle:   " vs Functional Programming"
date:       2015-2-22
author:     "Erik Stockmeier" 
header-img: "img/tech.jpg"
---
<p>
As I'm becoming more comfortable writing code, one of my most initially fascinainating and difficult-to-describe feelings is of power: This morning I finished writing a very simple program that generates and simulates a bingo game. In a little over 5 seconds it can play 1000 bingo cards to completion and give me a breakdown of the number of calls each game took to win. There's a feeling that is hard to put my finger on with that- I wrote a set of rules and instructions for a world that didn't exist and made it exist- the world of a bingo card, but still.
</p>
<p>
As great as it feels, none of this happens without a lot of wailing and gnashing of teeth. Compared to people, computers are terrible at understanding nuance or intimation, so everything has to be explicit. It has to be perfect. That was easy enough when my programs were limited to 10 or 20 lines of mostly <code>puts</code> statements, but in less than a month they have started to balloon. Pretty quickly it has become clear that software developing is about more than writing the rules down and calling it a day.
</p>
<p>
Within the world of computer programmers these questions constitute and entire field of study; on the surface they are questions of strategy and formatting, but at the same time they are questions of how we create worlds, and how we do so through an interface that thinks in ways wholly foreign to us. To use a possibly-insulting or overdramatic analogy to real-world philosophy, it calls to mind metaphysical and ontological questions of how our world will exist.
</p>
<p>
Two such paradigms standing in contrast to one another are those of object oriented versus functional design.
</p>
<p>
Object-oriented design is predominant in languages like Ruby. Object-oriented programming builds its world primarily through interdependednt (hopefully not too much so) objects that represent the things we want to model with our program. An object could be a bingo_board or a business_card; the former might store its numbers as data, the latter contact info. In either case, the <em>object</em> itself it primary, and "good" design will place the object front and center while hiding its interior data when possible. By building using concrete, discrete and specific objects we can ensure longetivity; programs age well because they avoid complex entanglements and allow for easy future upgrades. It is probably no coincidence that this object-oriented programming is incredibly popular for startups and web applications with massive user bases and a need for flexibility toward limitless innovation.
</p>
<p>
Functional programming provides another understanding of what constitutes "good" instructions in creating this world. As its name implies, functional programming first emphasizes a program's functions. As someone much less familiar with this paradigm it is hard to comment- I'm supposed to research and write this post within an hour. Online resources generally emphasize functional programming as more deeply-integrated and opposed to change. Because functions carry much of the data hidden by objects in object-oriented programming, it is much more difficult to craft programs with flexible purposes or to make changes that don't carry wide-ranging implications.
</p>