// const myEach= (collection, callback)=>{
//   let newCollection = [...collection];
//   for ( let i = 0; i < newCollection.length; i++)
//   callback({},newCollection[i])
// }
function myEach (collection, callback) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    for (let i = 0; i < currentCollection.length; i++) {
      callback(currentCollection[i])
    }
    return collection
  }