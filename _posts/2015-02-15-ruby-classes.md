---
layout:     post
title:      "Ruby Classes"
subtitle:   "where objects come from"
date:       2015-2-15
author:     "Erik Stockmeier" 
header-img: "img/tech.jpg"
---
<p>
As an object-oriented language, everything in Ruby is an object. This means that wherever we are in a ruby probram, whatever we are doing, we are manipulating objects in relation to one another: If I create an array to list the parts I still need for my new bike,
</p>
<div class="code">
<pre>
parts_to_buy = ["Fancy wheelset", "Sparkly cranks", "Smooth bottom bracket"]
</pre>
</div>
<p>
parts_to_buy points to an array object that I can work with similar to a real-world list. As I call on individual elements within the array, they, too become objects that I can work with- strings in this case. Within the universe of Ruby I can literally take an element from my parts_to_buy list and cross it off as I install it on my new_bike hash:
</p>
<div class="code">
<pre>
new_bike = {"Frameset" => "Plain frame", "Handlebars" =>
"Impractical moustache", "Brakes" => "Dried-up erasers",
"Wheelset" => nil, "Cranks" => nil,  "Bottom Bracket" => nil}

#Supporting local bike shops...

>>new_bike["Cranks"] = parts_to_buy.delete("Sparkly cranks")

>>new_bike.each {|k,v|puts "#{k}: #{v}"}
frameset: Plain frame
Handlebars: Impractical moustache
Brakes: Dried-up erasers
Wheelset:
Cranks: Sparkly cranks
Bottom Bracket:
</pre>
</div>
<p>
Arrays, Hashes, Strings, Integers, Floats- Ruby's most common objects can model a LOT of real-world objects on their own, but they are best-suited for dealing with lists, numbers and sentences. What if I want to actually RIDE this bicycle? I can do so by creating a new class.
</p>
<p>
Class definitions follow the many of the same intuitive conventions as method definitions. Working inside a class definition, we can specify the way we want objects of this class to behave by defining class-specific methods and variables. I'll define a simple bicycle class here and explain each part below:
</p>
<div class="code">
<pre>
class Bicycle
  attr_accessor :odometer

  def initialize
    @odometer = 0
  end


  def pedal(pumps)
    @odometer += pumps * 5
    puts "*rides #{pumps * 5} meters*"
    puts "Total distance ridden: #{@odometer} meters"
  end
end

>>eriks_bike = Bicycle.new
</pre>
</div>
<p>
The basic mechanics of the Bicycle class are pretty clear here. We have two methods defined to work on Bicycle objects: initialize and pedal. The initialize method of a class runs automatically whenever the Class#new method is called to create a new object of that class (an <em>instance</em>). Within Bicycle#initialize there is only one operation: we set the @odometer <em>instance variable</em> to equal 0.
</p>
<p>
<strong>Instance variables</strong> (preceeded by the @ sign) are variables corresponding to a specific instance of a class. In the Bicycle class, we could define any number of attributes for a specific bicycle (for example, its @wheelset or @color)- for now we are only giving it an @odometer.
</p>
<p>
At the beginning of the class definition we have one more trick: The attr_* method tells the class to expect <strong>AND</strong> create read and/or write methods for one or more instance variables:
</p>
<div class="code">
<pre>
#if I used...

attr_reader :odometer #Creates a reader method called simply
#"odometer" that returns the current value of the instance
#variable @odometer:

>>eriks_bike.odometer


#elsif I used...

attr_writer :odometer #Creates a writer method called simply
#"odometer=" which can reassign the instance variable and be
#used with standard "=" operator syntax for assignment:

>>eriks_bike.odometer = 500   #eriks_bike.odometer=(500) would
#also work, but it is ugly!
</pre>
</div>
<p>
attr_accessor simply combines the reader and writer methods.
</p>
<p>
Finally, it's important to keep in mind that instance variables are attached to a single instance of a class. In the code below, we track mileage on two separate bicycles:
</p>
<div class="code">
<pre>
eriks_bike = Bicycle.new
carries_bike = Bicycle.new

eriks_bike.pedal(5)
puts "Now Erik's bicycle is used."
puts

carries_bike.pedal(6)
puts "Now Carrie's bicycle is used."
puts

eriks_bike.odometer = 0
puts "Now Erik's bicycle is brand new! Its odometer has
#{eriks_bike.odometer} meters!"


=> *rides 25 meters*
Total distance ridden: 25 meters
Now Erik's bicycle is used.

*rides 30 meters*
Total distance ridden: 30 meters
Now Carrie's bicycle is used.

Now Erik's bicycle is brand new! Its odometer has 0 meters!
</pre>
</div>
<p>
In this final example we can see both instance variables at work in their own respective objects as well as my use of attr_accessor's implicit writer method in cracking open and rolling back my odometer.
</p>
<p>
Beyond printing, listing, sorting and calculating, Ruby's class definitions offer us the ability to create unique objects whose functions model the real world.
</p>