function MaxNumCount (arr){

    let highest_number;
    var count = 0;

    highest_number = Math.max(...arr);

   arr.forEach((v) => (v === highest_number && count++)); // This line of code counts the number of times the highest_number appears appears in the array.
   return count;

}


