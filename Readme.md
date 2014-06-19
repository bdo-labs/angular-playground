
Angular playground
==================

Playing around with architecture and components. Really, just making sure
sh.t scales.


Installation
------------

    $ git clone https://github.com/bdo-labs/agular-playground.git
    $ make -s serve


Background
----------

A decision was made to use Angular on new and upcoming projects at BDO.
Since I am to take ownership of the front-end code, I need to understand
the framework and architecture completely. That way, I can ensure that it
will scale without too much hick-ups on the way. Having worked with
web-sites/app for more than a decade, I've come to find some patterns that
works better than others. The most important lesson I think, has been
breaking things apart into small components. That will be the main goal of
this playground, creating small components that can be used anywhere
throughout the code without being cumbersome.


Resources
---------

  - [Cliff Meyers](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript)
  - [Joel Hooks](http://joelhooks.com/blog/2013/05/22/lessons-learned-kicking-off-an-angularjs-project/)
  - [Jason Dobry](https://coderwall.com/p/y0zkiw)


Thoughts about these resources
------------------------------

Their mostly about organizing code, and the gist of it is that the way the
Angular-team recommends you structure your app, will just get you so far.
Cliff Meyers refers to the structure as the "Sock drawer". The problem is
separation between code and functionality. The solution seems to be to
structure by functionality and keep logically connected parts close. I'll
take this concept quite far by making code require-able as modules through
the use of `commonjs` and concatenate css from within each component at
build. Doing so means we can create entirely separate applications, but use
the same components at will.


License
-------

> The MIT License (MIT)

> Copyright (c) 2014 BDO digital solutions

> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


