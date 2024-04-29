// Call Polyfill

// Call takes context of the obj and arguments
Fuction.prototype.myCall = function(context={}, ...args){
  // checking if this is a func or not
  if(typeof this!=="function"){
    throw new Error("It is not callable")
  }
  
  context.fn = this

  // take function with this and call it with all the args
  context.fn(...args)
}

// Apply Polyfill
Fuction.prototype.myApply = function(context={}, args=[]){
  // checking if this is a func or not
  if(typeof this!=="function"){
    throw new Error("It is not callable")
  }
  if(!Array.isArray(args)){
    throw new TypeError("CreateListFromArrayLike called non object")
  }
  
  context.fn = this

  // take function with this and call it with all the args
  context.fn(...args)
}

// Bind Polyfill
Fuction.prototype.myBind = function(context={}, ...args){
  // checking if this is a func or not
  if(typeof this!=="function"){
    throw new Error(this + "can not be bound and it is not callable")
  }
  
  context.fn = this
  // returns new function
  return function(...newArgs){
   return context.fn(...args, ...newArgs)
  }
}