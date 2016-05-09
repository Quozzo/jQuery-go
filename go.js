(function() {
  
  var m = ["addBack", "children", "closest", "contents", "end", "filter", "find", "first", "has", "is", "last", "next", "nextAll", "nextUntil", "not", "offsetParent", "parent", "parents", "parentsUntil", "prev", "prevAll", "prevUntil"],
    o = m.length,
    olds = {};
    
  while (o--) {
    olds[m[o]] = $.fn[m[o]];
    $.fn[m[o]] = (function(o) {
      return function() {
        var $t = this,
          args = [].splice.call(arguments, 0),
          a = [m[o]].concat(args);
        $t = $t.go(a);
        return $t;
      };
    })(o);
  }   
    
  $.fn.go = function(arg) {
    var a = arg.constructor === Array ? arg : arguments,
      l = a.length,
      $e = this,
      i = 0,
      method,
      t = 0;
      
    while (i < l) {
      if ($e[a[i]]) {
        if($e[a[i+1]]){
          $e = olds[method].call($e);
        }else if(i === a.length-1){
          method = a[i];
          $e = olds[method].call($e);
        }else{
          method = a[i];	
        }
      } else if (a[i].constructor == Number) {
        var t = a[i];
        while (t--) {
          $e = olds[method].call($e);
        }
      } else {
        $e = olds[method].call($e, a[i]);
      }
      i++;
    }
    return $e;
  };

})();
