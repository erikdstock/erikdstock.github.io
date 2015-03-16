---
layout:     post
title:      "Using group_by"
subtitle:   "(from Ruby's Enumerable mixin)"
date:       2015-2-07
author:     "Erik Stockmeier"
header-img: "img/tech.jpg"
---
<p>
Arrays and hashes wouldn't be useful as containers for groups of elements if we didn't also have methods that could specifically get inside these containers to work through them. The most straightforward way we can do this is with the method <strong>each</strong>:
</p>
<div class="code">
<pre>#I live in a commune, sort of...
commune_members = ["eden", "charleen", "steff", "klint", "dovis", "eirik", "endrea", "brenda"]
commune_members.each {|name| puts name.capitalize}
=> Eden
=> Charleen
=> Steff
=> Klint
=> Dovis
=> Eirik
=> Endrea
=> Brenda</pre>
</div>
<p>
Of course this is only a theoretical example-communes don't believe in capitalization- however, <strong>each</strong> is one very simple way we can pass a block of code to every element in an array or hash. In fact, Ruby has an entire module for dealing with collections of data like this. The enumerable module provides methods that iterate over a group of elements, apply the same block of code to each piece, and process the result in some specific way. Some of these methods are pretty easy to understand at face value: <strong>delete_if</strong> passes a block of code and deletes those values from the receiving object that return true.
</p>
<p>
A slightly more complicated method is <strong>group_by</strong>. As with other enumerable methods, the same basic priciple of iteration is at play; <strong>group_by</strong> differs from each because it is looking for a block of code that will return something- something probably different and specific. Ruby keeps track of these returns (still inside our hash, array, etc) and passes them back to <strong>group_by</strong> along with our original values, and then returns to us a hash with each unique return a key and each complementary value an array of elements that gave that return:
</p>
<div class="code">
<pre>#Dovis didn't wash the dishes again this week AND blew off house meeting. Now is our chance to find a gentle way of kicking them out...
commune_members.group_by { |name| name.include?("o") }
=> {false=>["eden", "charleen", "steff", "klint", "eirik", "endrea", "brenda"], true=>["dovis"]} </pre>
</div>
<p>
See? It's not you, Dovis. We just don't want any more "o" names in the house. It was a decision made by the community on pricinple and we couldn't have really even known whom it would affect until we called the <strong>group_by</strong> method, which made things pretty easy.
</p>