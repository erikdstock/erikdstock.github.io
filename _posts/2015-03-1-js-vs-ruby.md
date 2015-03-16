---
layout:     post
title:      "Javascript vs Ruby:"
subtitle:   "Objects"
date:       2015-3-1
author:     "Erik Stockmeier" 
header-img: "img/tech.jpg"
---
<p>
As "the language of the web," Javascript shares numerous traits with Ruby, currently one of the predominant backend languages of the web. Both are object-oriented: they rely primarily on creating and manipulating objects to get their jobs done. In the case of Javascript there is some subjectivity to this claim but at its core the paradigm makes sense. We use it, after all, to manipulate objects on a web page.
</p>
<p>
But Javascript is not Ruby. Ruby is written with human readability in mind. Unnecessary parentheses can be discarded and bits of "syntactic sugar" are sprinkled throughout the language to make it accessible and understandable to programmers working together. Javascript, on the other hand, offers a world with a different set of rules, norms and expectations. Human readability is less prized and syntax is more rigid. Borders and degrees of separation exist where they don't in Ruby. Instead of plain old "methods" we have "functions," "methods" AND "properties." And to ironically complicate things even further, Javascript has its own tricks to "help" programmers out when it encounters something unexpected: It will convert a string to a number. It won't complain when it receives two arguments and was only expecting one. The rules change just enough to make everything feel strange and unpredictable.
</p>
<p>
Ruby and Javascript both allow us to define a unique, custom object and give it any number of characteristics. In Ruby this is generally done by first defining a class and giving it a template of traits to accompany it. These traits could be specific to an instance or common to the entire class. They can include other types of data as well as methods.
</p>
<div class="code">
<pre>
#Defining a Ruby Sea Creature...
class SeaCreature
  attr_reader :color, :fins, :fave_food

  def initialize(color, num_of_fins, fave_food)
    @color = color
    @fins = num_of_fins
    @fave_food = fave_food
  end

  def swim
    puts "The #{color} sea creature is swimming about, looking for some #{fave_food}!"
  end
end

ariel = SeaCreature.new("red", 1, "kelp")
ariel.swim
=> "The red sea creature is swimming about, looking for some kelp!"
</pre>
</div>
<p>
In the example above, ariel is created as a new SeaCreature object. The <code>ariel</code> object has instance variables defining its specific properties: the instance variables @color, @fins, and @fave_food. The instance variables can be accessed through methods written into the class or using the attr_ read and write capabilities, as in the swim method above.
</p>
<p>
To create a similar object in Javascript, we would also use an "object," but <em>Javascript objects are specific</em> (unlike Ruby's "everything's an object!" mantra) reminiscent of Ruby's Hash objects in appearance.
</p>
<div class="code">
<pre>
#Ariel in Javascript:
var ariel = {
  color: "red",
  fins: 1,
  faveFood: "kelp",

  swim: function() {
    console.log("The " + this.color + " sea creature is swimming about, looking for some " + this.faveFood + "!")
  }
}

ariel.swim();
=> "The red sea creature is swimming about, looking for some kelp!"
</pre>
</div>
<p>
In this case, <code>swim</code> is a <em>property</em> of ariel whose value is a function; similar to a Ruby Hash, calling it returns that function. Other properties are called inside the function (<code>this.color</code>, etc) with a slightly clumsier syntax than Ruby's. In Ruby we call the SeaCreature's <code>color</code> method (defined by attr_reader); in Javascript we call the color property.
</p>
<p>
It's good to know that objects are flexible and willing to accept new properties in Javascript. Unlike in Ruby we won't get an error if we try to access a property that doesn't exist- so <code>ariel.legs</code> will simply return <code>undefined</code>.
</p>