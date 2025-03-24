let score=JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    loses: 0,
    ties: 0
    };
    updatescore();
function playgame(playermove){
    const computermove=pickcomputermove();
    let result='';
    if(playermove==='rock'){
        if(computermove==='scissors'){
            result='You Win';
        }
        else if(computermove==='rock'){
            result='Tie'
        }
        else if(computermove==='paper'){
            result='You Lose'
        }
    }
    else if(playermove==='scissors'){
        if(computermove==='paper'){
            result='You Win';
        }
        else if(computermove==='scissors'){
            result='Tie'
        }
        else if(computermove==='rock'){
            result='You Lose'
        }
    }
    else if(playermove==='paper'){
        if(computermove==='rock'){
            result='You Win';
        }
        else if(computermove==='paper'){
            result='Tie'
        }
        else if(computermove==='scissors'){
            result='You Lose'
        }
    }
    if(result==='You Win'){
        score.wins+=1;
    }
    else if(result==='You Lose'){
        score.loses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    
    updatescore();
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-moves').innerHTML=`you:<img src="images/${playermove}.jpg" class="resize">  computer: <img src="images/${computermove}.jpg" class="resize">`;
}
function updatescore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}&nbsp Losses: ${score.loses} &nbsp Ties: ${score.ties}`;
}
function pickcomputermove(){
    const randomnumber=Math.random();
    let x='';
    if(randomnumber>=0 && randomnumber<1/3){
        x='rock';
    }
    else if(randomnumber>=1/3 && randomnumber<2/3){
        x='scissors';
    }
    else if(randomnumber>=2/3 && randomnumber<1)
    {
        x='paper';
    }
    return x;
}
function resetscore(){
    score={ wins: 0, loses: 0, ties: 0 };
    localStorage.removeItem('score');
    updatescore();
    document.querySelector('.js-result').innerHTML=' ';
    document.querySelector('.js-moves').innerHTML=' ';
}