class HashTable {
    constructor(size=53) {
      this.keyMap = new Array(size);
    }
   _hash(key) {
     let total = 0;
     let WIERD_PRIME = 31;
     for (let i = 0; i< Math.min(key.length, 100); i++) {
       let char = key[i];
       let value = char.charCodeAt(0) - 96;
       total = (total * WIERD_PRIME + value) % this.keyMap.length;
     }
     return total;
   }
 
   set(key, value) {
     const hashedKey = this._hash(key);
     if(!this.keyMap[hashedKey]) {
       this.keyMap[hashedKey] = [];
     } 
     if(this.keyMap[hashedKey]) {
       // check for duplicate key and override instead
     }
     this.keyMap[hashedKey].push([key, value]);
     return true;
   }
 
   get(key) {
     const hashedKey = this._hash(key);
     const currentlyAtIndex = this.keyMap[hashedKey];
     if(!currentlyAtIndex) {
       return undefined;
     }
     for(let val of currentlyAtIndex) {
       if(val[0] === key) {
         return val[1]
       }
     }
   }
 
   keys(){
     let result = this.keyMap
     .filter(Boolean)
     .map(val => val.map(v=>v[0]))
     .reduce((acc,val) => [...acc, ...val],[])
     
     return result;
   }
 
   // more verbose example
   values(){
     let values = [];
     for(let i = 0; i<this.keyMap.length; i++){
       if(this.keyMap[i]) {
         for(let j = 0; j<this.keyMap[i].length; j++) {
           values.push(this.keyMap[i][j][1])
         }
       }
     }
     // removing duplicates
     return [...new Set(values)];
   }
 
  }
 
 const test = new HashTable(10);
 test.set('pink', '#f48pink') //same hash 0
 test.set('orange', '#f50orange') //same hash 0 
 test.set('red', '#f52red')
 test.set('dupe', '#f52red')
 console.log(test.get('orange'))
 console.log(test.get('pink'))
 console.log(test.get('red2'))
 console.log(test.get('red'))
 console.log('-=-=-=-=')
 console.log(test.keys())
 console.log(test.values())