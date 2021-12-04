var kbc={
    // 6 questions in total.  worth total= 2Lac

    'question_list':[
        {
            'text': "How can we describe an array in the best possible way?",
            'options': ["The Array shows a hierarchical structure.", "Arrays are immutable", "Container that stores the elements of similar types", "The Array is not a data structure"],
            'correct_answer': "Container that stores the elements of similar types",
            'price_amount': 1000
        },
        {
            'text': "Which of the following is the correct way of declaring an array?",
            'options': ["int javatpoint[10];", "int javatpoint;", "javatpoint{20};", "array javatpoint[10];"],
            'correct_answer': "int javatpoint[10];",
            'price_amount': 2000



        },
        {
            'text': "How can we initialize an array in C language?",
            'options': ["int arr[2]=(10, 20)", "int arr(2)={10, 20}", "int arr[2] = {10, 20}", "int arr(2) = (10, 20)"],
            'correct_answer': "int arr[2] = {10, 20}",
            'price_amount': 4000

        },{
            'text': "Which of the following is the advantage of the array data structure?",
            'options': ["Elements of mixed data types can be stored.", "Easier to access the elements in an array", "Index of the first element starts from 1", "Elements of an array cannot be sorted"],
            'correct_answer': "Easier to access the elements in an array",
            'price_amount': 8000
        },
        ],    
        
        
    'winning_prize': function(question_list,current){
        var price=this.question_list[current].price_amount;
        return price;
    }, //The total amount which the player has won. 

    'current_question_no': function(num){
        return num;
    },
    'print_question': function (question_list,val) {

        console.log(this.question_list[val].text);
        document.write(this.question_list[val].text,"<br>");
        console.log(this.question_list[val].options);
        document.write(this.question_list[val].options,"<br>");

     },

    'select_answer': function(real_ans,answer) {
        if(real_ans==answer){

            console.log("correct answer");
            document.write("correct answer","<br>");
            return true;

        }
        else{
            console.log("Wrong answer");
            document.write("Wrong answer","<br>");
            return false;
        }
        
    }, //This function will check whether the selected answer for the current question is correct or not.
    
    'main_fun':function(){
        var final_price=0;

        for(var i=0;i<kbc.question_list.length;i++){
            var val=kbc.current_question_no(i);
            
            var answer=prompt(kbc.print_question(kbc.question_list,val));
            var bool=kbc.select_answer(kbc.question_list[i].correct_answer,answer);
            if(bool==true){
                final_price+=kbc.winning_prize(kbc.question_list,val);
                console.log('Prize money till now',final_price);
                document.write('Prize money till now',final_price,"<br>");

                if(i==kbc.question_list.length-1){
                    console.log("Congratulations!!! You have won",final_price);
                    document.write("Congratulations!!! You have won",final_price,"<br>");
                }
            }
            else{
                console.log("Better Luck next time ");
                document.write("Better Luck next time ","<br>");
                break;
            }

        }

    }

}
console.log('Welcome to Kaun Banega Crorepati');