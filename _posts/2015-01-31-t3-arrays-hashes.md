---
layout:     post
title:      "[Arrays] & {Hashes}"
subtitle:   ""
date:       2015-1-31
author:     "Erik Stockmeier"
header-img: "img/tech.jpg"
---
<p>
As a new developer I have a mountain of concepts to learn that are completely novel, even foreign to life outside of computers. There is the vocabulary and the need to remember <em>now</em> that there is a difference now between an <strong>attribute</strong> and a <strong>property.</strong> There is the utterly rigid, at times counterintuitive logic of computers and the rules of syntax to match- hours of work can feel now feel like they've deposited me in the wilderness because of some mistake that boils down to what a human being would write off as semantics.
</p>
<p>
There is no solving more serious problems in programming without a solid foundation in areas like this- these understandings are the building blocks of problem-solving in a computer -and yet some concepts defy analogy. Strings are pretty straightforward (though their "s easy enough to forget). Likewise with integers, floats and methods. But what to make of the array and its weird cousin, the hash?
</p>
<p>
Both the array and the hash are slightly more complex objects- basically containers for a group of <em>other</em> objects. These other objects can even be arrays and hashes themselves:
</p>
<div class="code">
<pre>some_array=["a", 2, "three", 4.0]</pre>
<pre>some_hash={"first letter" => "A", "third number" => 3, "best vehicle" => "bicycle"}</pre>
<pre>meta_array=["ruby", "silver", [7, 8, 9], "dog"]</pre>
</div>
<p>
Both arrays and hashes can be useful when dealing with larger groups of data: Their main difference is in how this data is stored. In an array, single elements are referenced by their <em>index</em>, numbered from 0 (the first element) up. Therefore, the highest index number in an array is always one less than its elements. Individual elements in an array can be called with the method:
</p>
<div class="code" style="overflow:auto">
<div class="f-left"  style="width:50%; float:left">
<pre>some_array[2]</pre>
<pre>=> "three"</pre>
</div>
<div class="f-right" style="border-left:2px solid white">
<pre>meta_array[2]</pre>
<pre>=> [7, 8, 9]</pre>
</div>
</div>
<p>
Hashes, meanwhile, do not index their elements but rather correlate <em>keys</em> with <em>values</em>. In some_hash above, above you can see this syntax illustrated with the => symbol connecting keys on the left with hashes on the right. With a hash, there is <strong>no index</strong>. We can call a value using the same syntax as with hashes, replacing the index with the key:
</p>
<div class="code">
<pre>some_hash["best vehicle"]</pre>
<pre>=> "bicycle"</pre>
</div>
<p>
An array is thus best for keeping an ordered list of information, while a hash is more suited for keeping information correlated qualitatively. Both, presumeably, are excellent tools for a developer juggling large amounts of information. How that all works out, I can't honestly say yet.
</p>