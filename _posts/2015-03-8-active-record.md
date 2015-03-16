---
layout:     post
title:      "Active Record:"
subtitle:   "accessing databases through Rails"
date:       2015-3-8
author:     "Erik Stockmeier" 
header-img: "img/tech.jpg"
---
<p>
So this week on top of building on my still very basic Javascript literacy and reviewing some Ruby (which, now that I have <em>anything</em> to compare it to, seems so easy!), I started out on learning some basic SQL. This stuff is not romantic or exciting at all- I knew SQL had something to do with databases from working on a simple MS Access database a few years back but until this week I never really stopped to think about how Excel could possibly be more boring.
</p>
<p>
So it's not as flashy as Ruby, but glamour isn't everything- within an hour of practice I was feeling comfortable enough with my basic SQL to be thinking about how some of these functions would actually be so much easier than other more rote tasks when performed through Excel's GUI. I can appreciate it, and I can appreciate the efficiency of storing lots of data about an object in a table like this- though I can't really speak to that from a computer science perspective yet.
</p>
<p>
So how do we connect data from something like a Ruby object to an SQL table? In my 40 minutes or so of research, Active Record seems to be the system that facilitates that connection. It makes sense, after all, that it would be kind of cumbersome to write a Ruby method to print all of some object type to a table. So Ruby on Rails uses Active Record to do that.
</p>
<p>
Active Record does all this through something called Object Relational Mapping (ORM)- essentially forming a link between class objects and instance variables and a table. It makes accessing tables possible implicitly, reducing the need to write SQL statements similar to the way attr_ readers and writers reduce the need to explicitly define accessor methods.
</p>
<p>
Active Record does this in an intuitive, intelligent way, following naming conventions across both Ruby and SQL. For example:
</p>
<ul style="padding-left:8%; padding-right:8%">
<li>Active Record can create a table for a class and will adapt Ruby naming conventions for classes (CamelCase, singular) to SQL conventions for table names (snake_case, plural). Your <code>TourDate</code> class objects become a table named <code>tour_dates</code>.</li>
<li>When linking tables, Active Record will <em>singularize</em> the table name and add <code>_id</code> to the end. The Join Table linking our TourDate objects with our OpeningAct objects will automatically assume and create <code>tour_date_id</code> and <code>opening_act_id</code> columns.</li>
<li>For legacy datasets or systems that for whatever reason need more specific labels for their data, these options can be overwritten.</li>
</ul>
<p>
Coming out of week 8 and feeling like another language was just thrown at me, this all sounds pretty good to me.
</p>