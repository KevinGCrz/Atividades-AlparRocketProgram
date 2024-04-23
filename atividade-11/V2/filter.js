function filter(array, callback)
{
    const newArray = []

    for(let i = 0; i < array.length; i++)
    {
      if(callback(array[i], i, array))
      {
        newArray[newArray.length] = array[i]
      }
    }

    return newArray;
}

console.log(filter(arr, (item)=>{

    if(item > 5){
        return true
    }
    return false;

}))