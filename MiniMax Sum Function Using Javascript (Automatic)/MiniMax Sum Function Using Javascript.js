function MiniMax_Sum (){
    const numbers_1_to_100 = Array.from(Array(100).keys());
    const five_numbers = [];
    var Max_Sum;
    var Min_Sum;

    for (i=0; i<5; i++) {
        var l = numbers_1_to_100[Math.floor(Math.random()*numbers_1_to_100.length)];
        five_numbers.push(l); 
    }

    /*The numbers are arranged in ascending order*/
    var five_numbers_arranged_ascending = five_numbers.sort((a,b)=>a-b);

    /* This is for the sum of minimum numbers */
    Min_Sum = five_numbers_arranged_ascending[0] + five_numbers_arranged_ascending[1] + five_numbers_arranged_ascending[2] + five_numbers_arranged_ascending[3];


    Max_Sum = five_numbers_arranged_ascending[1] + five_numbers_arranged_ascending[2] + five_numbers_arranged_ascending[3] + five_numbers_arranged_ascending[4];
    
    

    console.log(five_numbers);
    console.log (Min_Sum);
    console.log (Max_Sum);
}