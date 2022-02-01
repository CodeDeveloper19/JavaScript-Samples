function innoc(arr) {

    arr.sort((a,b)=>a-b);

    min_arr = arr.slice(0, (arr.length-1))
    max_arr = arr.slice(1)
    var x = 0
    var y = 0

    for (i=0;i<min_arr.length;i++) {
        x = x + min_arr[i]
    }
    for (i=0;i<max_arr.length;i++) {
        y = y + max_arr[i]
    }

    return [x,y]
}

