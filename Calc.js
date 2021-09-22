var input=document.getElementById("input");
var res=document.getElementById("result");

function one(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=1;
	}
	else{
		input.innerHTML+=1;
	}
	arith();
	}

function two(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=2;
	}
	else{
		input.innerHTML+=2;
	}
	arith();
	}
function three(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=3;
	}
	else{
		input.innerHTML+=3;
	}
	arith();
	}
function four(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=4;
	}
	else{
		input.innerHTML+=4;
	}
	arith();
	}
function five(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=5;
	}
	else{
		input.innerHTML+=5;
	}
	arith();
	}
function six(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=6;
	}
	else{
		input.innerHTML+=6;
	}
	arith();
	}
function seven(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=7;
	}
	else{
		input.innerHTML+=7;
	}
	arith();
	}
function eight(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=8;
	}
	else{
		input.innerHTML+=8;
	}
	arith();
	}
function nine(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size<=1 && index==0){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+=9;
	}
	else{
		input.innerHTML+=9;
	}
	arith();
	}
function zero(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	var index2=input.innerHTML[size-2];
	if(size==0){
		input.innerHTML+=0;
	}
	else if(size==1 && index==0){
	}
	else if(!check() || index=="%"){
		input.innerHTML+=0;
	}
	else if(index!=0){
		input.innerHTML+=0;
	}
	else if(!check2() || index2=="%"){
	}
	else{
		input.innerHTML+=0;
	}
	arith();
	}
function double_zero(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	var index2=input.innerHTML[size-2];
	if(size==0){
		input.innerHTML+=0;
	}
	else if(size==1 && index==0){
	}
	else if(!check() || index=="%"){
		input.innerHTML+=0;
	}
	else if(index!=0){
		input.innerHTML+=0;
		input.innerHTML+=0;
	}
	else if(!check2() || index2=="%"){
	}
	else{
		input.innerHTML+=0;
		input.innerHTML+=0;	
	}
	arith();
	}
function point(){
	same();
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(size==0 || index=="/" || index=="*" || index=="-" || index=="+" || index=="%"){
		input.innerHTML+="0.";
	}
	else if(size==1 && input.innerHTML[0]=="-"){
		input.innerHTML+="0.";
	}
	else{
		var flag=1;
		for(var i=size-1;i>=0;i--){
			var v=input.innerHTML[i];
			if(v=="."){
				flag=0;
				break;
			}
			if(v=="/" || v=="*" || v=="-" || v=="+" || v=="%")
			{
				break;
			}
		}
		if(flag==1){
			input.innerHTML+=".";
		}
	}
	}	
function add(){
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	var index2=input.innerHTML[size-2];
	if(index=="%"){
		input.innerHTML+="+";
	}
	else if((index2=="/" || index2=="*") && (index=="-")){
		input.innerHTML=input.innerHTML.slice(0,-2);
		input.innerHTML+="+";
	}
	else if((size!=1) && (index=="*" || index=="/" || index=="-") && check2()){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+="+";
	}
	else if(size>0 && check()){
		input.innerHTML+="+";
	}
	}
function subtract(){
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(index=="%"){
		input.innerHTML+="-";
	}
	else if(index=="+"){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+="-";
	}
	else if((index=="*" || index=="/")|| check()){
		input.innerHTML+="-";
	}
	}
function mul(){
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	var index2=input.innerHTML[size-2];
	var index3=input.innerHTML[size-3];
	if(index3=="%"){
		input.innerHTML=input.innerHTML.slice(0,-2);
		input.innerHTML+="*";
	}
	else if((size!=1) && check2() && (index=="+" || index=="-" || index=="/" )){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+="*";
	}
	else if(index=="%"){
		input.innerHTML+="*";
	}
	else if(size>0 && check()){
		input.innerHTML+="*";
	}
	}
function divide(){
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	var index2=input.innerHTML[size-2];
	var index3=input.innerHTML[size-3];
	if((index=="-" && index2=="/")){
		input.innerHTML=input.innerHTML.slice(0,-2);
		input.innerHTML+="/";
	}
	else if(index3=="%"){
		input.innerHTML=input.innerHTML.slice(0,-3);
		input.innerHTML+="/";
	}
	else if(index=="%"){
		input.innerHTML+="/";
	}
	else if((size!=1) && check2() && (index=="*" || index=="+" || index=="-")){
		input.innerHTML=input.innerHTML.slice(0,-1);
		input.innerHTML+="/";
	}
	else if(size>0 && check()){
		input.innerHTML+="/";
	}
	}
function clear_all(){
	input.innerHTML="";
	res.innerHTML="";
	}
function backspace(){
	input.innerHTML=input.innerHTML.slice(0,-1);
	var size=input.innerHTML.length;
	var index=input.innerHTML[size-1];
	if(index!="+" && index!="-" && index!="*" && index!="/"){
		arith();
	}
	else{
		res.innerHTML="";
	}
	}
function equal(){
	var result=res.innerHTML;
	input.innerHTML=result;
	}
function check(){
		var size=input.innerHTML.length;
		var index=input.innerHTML[size-1];
		if(index!="+" && index!="-" && index!="/" && index!="%" && index!="*"){
			return true;
		}
		else{
			return false;
		}
	}
function check2(){
	var size=input.innerHTML.length;
	var index2=input.innerHTML[size-2];
	if(index2!="+" && index2!="-" && index2!="/" && index2!="*"){
			return true;
		}
		else{
			return false;
		}
}
function same(){
	if(input.innerHTML==res.innerHTML){
		input.innerHTML="";
		res.innerHTML="";
	}
}
function arith(){
	var equation=input.innerHTML;
	if(equation[0]=="-"){
		var sub=equation.substring(1,equation.length);
	}
	else{
		sub=equation;
	}
	if((equation.indexOf("/")>0) || (equation.indexOf("+")>0) || 
			(equation.indexOf("*")>0) || (sub.indexOf("-")>0))
	{
		while((equation.indexOf("/")>0) || (equation.indexOf("+")>0) || 
			(equation.indexOf("*")>0) || (equation.indexOf("-")>=0))
		{
			
			while(equation.indexOf("/")>0){
				equation=if_div(equation);
			}
			while(equation.indexOf("*")>0){
				equation=if_mul(equation);
			}

			var size=equation.length;
			var index_zero=equation.indexOf("-");
			var substrr=equation.substring(1,size);
			if((index_zero==0) && (substrr.indexOf("+")<0 && substrr.indexOf("-")<0)){
				break;
			}

			if(equation.indexOf("-")==0){
				while(equation.indexOf("-")==0){
					var size=equation.length;
					var ch=equation.substring(1,size);

					if(ch.indexOf("+")>0 && ch.indexOf("-")!=-1 && 
					ch.indexOf("+")<ch.indexOf("-"))
					{
						equation=if_index_minus_first_plus(equation);
					}
					else if(ch.indexOf("+")>0 && ch.indexOf("-")!=-1 && 
					ch.indexOf("-")<ch.indexOf("+"))
					{
						equation=if_index_minus_first_minus(equation);
					}
					else if(ch.indexOf("+")>0 && ch.indexOf("-")==-1)
					{
						equation=if_index_minus_first_plus(equation);
					}
					else if(ch.indexOf("-")>0 && ch.indexOf("+")==-1)
					{
						equation=if_index_minus_first_minus(equation);
					}
					var size=equation.length;
					var ch=equation.substring(1,size);
					if(ch.indexOf("+")<0 && ch.indexOf("-")<0)
					{
						break;
					}
				}
				
			}
			else if(equation.indexOf("+")<0){
				equation=if_minus(equation);
			}
			else if(equation.indexOf("-")<0){
				equation=if_plus(equation);
			}
			else if(equation.indexOf("+")<equation.indexOf("-")){
				equation=if_plus(equation);
			}
			else{
				equation=if_minus(equation);
			}
		}
		res.innerHTML=equation;
	}
	else{
		res.innerHTML="";
	}
	
}

function if_index_minus_first_plus(equation){
	var size=equation.length;
	var exist=equation.indexOf("+");
	var left,right,next,i,j,plus_calc;
		left=Number(equation.substring(0,exist));
		for(j=exist+1;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="-"){
				break;
			}
			else{
				next=j;
			}
		}
		right=Number(equation.substring(exist+1,j));
		plus_calc=left+right;
		equation=plus_calc+equation.substring(j,size);
		return equation;
}
function if_index_minus_first_minus(equation){
	var size=equation.length;
	var ch=equation.substring(1,size);
	var exist=ch.indexOf("-");
	var left,right,next,i,j,minus_calc;
		left=Number(equation.substring(0,exist+1));
		for(j=exist+2;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="-"){
				break;
			}
			else{
				next=j;
			}
		}
		right=Number(equation.substring(exist+2,j));
		minus_calc=left-right;
		equation=minus_calc+equation.substring(j,size);
		return equation;
}


function if_div(equation){
	var size=equation.length;
	var exist=equation.indexOf("/");
	var left,right,next,i,j,div_calc;
	if(exist>0){
		for(i=exist-1;i>=0;i--){
			var found=equation[i];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=i;
			}
		}
		left=Number(equation.substring(next,exist));
		if(equation[exist+1]=="-")
		{
			for(j=exist+2;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=j;
			}
			}
		right=Number(equation.substring(exist+1,j));
		}
		else
		{
			for(j=exist+1;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=j;
			}
			}
			right=Number(equation.substring(exist+1,j));
		}
		
		div_calc=left/right;
		equation=equation.substring(0,i+1)+div_calc+
						equation.substring(j,size);
		return equation;
	}
	else{
		return equation;
	}
}

function if_mul(equation){
	var size=equation.length;
	var exist=equation.indexOf("*");
	var left,right,next,i,j,mul_calc;

	if(exist>0){
		for(i=exist-1;i>=0;i--){
			var found=equation[i];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=i;
			}
		}
		left=Number(equation.substring(next,exist));
		if(equation[exist+1]=="-")
		{
			for(j=exist+2;j<size;j++){
				var found=equation[j];
				if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=j;
			}
			}
			right=Number(equation.substring(exist+1,j));
		}
		else
		{
			for(j=exist+1;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=j;
			}
			}
			right=Number(equation.substring(exist+1,j));
		}
		
		mul_calc=left*right;
		equation=equation.substring(0,i+1)+mul_calc+
						equation.substring(j,size);
		return equation;
	}
	else{
		return equation;
	}
}
	
function if_plus(equation){
	var size=equation.length;
	var exist=equation.indexOf("+");
	var left,right,next,i,j,plus_calc;
	if(exist>0){
		for(i=exist-1;i>=0;i--){
			var found=equation[i];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=i;
			}
		}
		left=Number(equation.substring(next,exist));
		for(j=exist+1;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=j;
			}
		}
		right=Number(equation.substring(exist+1,j));
		plus_calc=left+right;
		equation=equation.substring(0,i+1)+plus_calc+
						equation.substring(j,size);
		return equation;
	}
	else{
		return equation;
	}
}

function if_minus(equation){
	var size=equation.length;
	var exist=equation.indexOf("-");
	var left,right,next,i,j,minus_calc;
	if(exist>0){
		for(i=exist-1;i>=0;i--){
			var found=equation[i];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=i;
			}
		}
		left=Number(equation.substring(next,exist));
		for(j=exist+1;j<size;j++){
			var found=equation[j];
			if(found=="+" || found=="/" || found=="*" || found=="-"){
				break;
			}
			else{
				next=j;
			}
		}
		right=Number(equation.substring(exist+1,j));
		minus_calc=left-right;
		equation=equation.substring(0,i+1)+minus_calc+
						equation.substring(j,size);
		return equation;
	}
	else{
		return equation;
	}
}

	





