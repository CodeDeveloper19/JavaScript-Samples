function gradingstudents(score){
    
    if (score<40){
        return score;
    } else {

        container = score%5;
        var final_result = score - container;
        var final = final_result + 5; 

        if (container < 3){
            return score
        } else {
            return final;
        }

    }
}

