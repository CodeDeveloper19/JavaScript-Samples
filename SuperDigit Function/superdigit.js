function superdigit (n, k){

    let temporary_string;
    let temporary_string2;
    let container = [];
    let container2 = [];
    let container3 = [];
    let result = 0;
    let result2 = 0;
    let result3 = 0;
    let final_result;
    let temporary_string3;

    temporary_string = n.toString();

    // Converts the Numbers into an Array
    for (i=0; i<temporary_string.length; i++){
        container.push(temporary_string.charAt(i));
    }

    // Adds the numbers in the array together
    for (i=0; i<container.length; i++){
        result = result + parseInt(container[i]);
    }

    final_result = result * k;

    temporary_string2 = final_result.toString();

    for (i=0; i<temporary_string2.length; i++){
        container2.push(temporary_string2.charAt(i));
    }

    for (i=0; i<container2.length; i++){
        result2 = result2 + parseInt(container2[i]);
    }

    temporary_string3 = result2.toString();

    if (temporary_string3.length >= 2){

        for (i=0; i<temporary_string3.length; i++){
            container3.push(temporary_string3.charAt(i));
        }
    
        for (i=0; i<container3.length; i++){
            result3 = result3 + parseInt(container3[i]);
        }
    
    } else {
        return result2;
    }

    return result3;
}


// function superdd(n, k) {
//     if (n < 10 ) {
//         return n
//     } else {
//         let xs = n.toString()
//         xs = xs.split("")
//         let z =0
//         for (i=0;i<xs.length;i++) {
//             z = z + parseInt(xs[i])
//         }
//         xx = z*k

//         return superdd(xx, 1)
//     }
// }