console.log("remote");


var cherry = function(obj) {

    // var obj {};

    obj.message = function() {
      console.log ("ooh la la");
    }

    return obj;

}(cherry || {}); // if cherry does not exist, it will pass through empty object
