
    let input = '';
    let answer='';
    function addInput(value){
        input+=value;
        document.getElementById('answer').value = input;

    }
    function clearResult(){
        input= '';
        answer='';
        document.getElementById('answer').value='';

    }
    function getResult(){
        answer= eval(input);
        document.getElementById('answer').value=answer;
        input='';

    }
    function calculate(operator){
        input+=operator;
        document.getElementById('answer').value=input;
    }
