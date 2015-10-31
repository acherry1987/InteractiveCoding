console.log("remote");

if (!cherry){
  var cherry = {};
}

var cherry = function(obj) {

    // var obj {};

    obj.rand = function(num) {
      return Math.floor(Math.random()*num) + 1;
    }

    return obj;

}(cherry || {}); // if cherry does not exist, it will pass through empty object
