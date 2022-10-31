
//what i learnt--About For LOOP Functonlity
//About innerText,Value
//Most IMportant eval()


let screen=document.getElementById('screen')
let buttons=document.querySelectorAll('button')
let screenValue=''

for (item of buttons){
	item.addEventListener('click',(e)=>{
		let buttonText=e.target.innerText;

		if(buttonText == 'X'){
			buttonText='*';
			screenValue+=buttonText;
			screen.value=screenValue;
		}
		else if(buttonText == 'C'){
			screenValue="";
			screen.value="";
		}
		else if(buttonText == '='){
			screen.value=eval(screenValue);
			screenValue=screen.value;
		}
		else{
			screenValue+=buttonText;
			screen.value=screenValue;
		}
	});
}