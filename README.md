jQuery-go
=========

##Description

A quicker way to traverse the DOM without needing to chain multiple methods.

.go ( method )

.go ( method [, iteration ] )

.go ( method [, filter ] )

.go ( method [, method [, method [, ...etc] ] ] ) 

##Documentation

**method**

Type: String

The jQuery traversal method.

**iteration**

Type: Integer

The number of times the previous *method* should run.

**filter**

Type: String - jQuery selector string.

Type: Function - A function to filter the selected elements.

Type: Element - One or more elements to match the set of elements against.

The set of elements will be filtered by the argument. Only certain methods accept certain filters, depending on jQuery.

##Examples

Use the `go` method to chain jQuery traversal methods.
```javascript
$('div').go('next','parent', 'prev');
```

Use a filter or iteration to perform the same method multiple times
```javascript
$('div').go('next', 3);
$('div').go('next', '.foo', '.bar');
```

Chain filters and iterations to create compact readible code
```javascript
$('#foo').go('next', '.bar', 'find', 'ul li ol li', 'has', 'a', 'closest', 'ol', 'filter', myfunc, 'end', 'addBack');
```

The traveral methods also have their own shorthand
```javascript
$('div').next(2, 'li');
```

Create arrays with lists of commands to use within the `go` method to create legible reuseable code.
```javascript
var myTraversal = ['next', 2, 'find', 'li', 'closest', 'ol'];
$('#foo').go(myTraversal);
$('.bar').go(myTraversal);
```




