let string="";
let buttons = document.querySelectorAll('.button');

//calculating pi
function calpi(para1){
    let pii =0;
    let re = new RegExp('π','gi');
    let results = new Array();
    //getting all index
    while (re.exec(para1)){
        results.push(re.lastIndex);
    } 

    let para="";
    let apara = para1.split("");
    if(results.length != 0){
        for(let i=0;i<results.length;i++){

            pii = parseInt(results[i]);
            if(i != results.length-1){
                results[i+1]=parseInt(results[i+1]+16).toString();
            }
            
            let num1a = apara.slice(0,pii-1);
            let num1 = (num1a.join(""));
            let num2a = apara.slice(pii);
            let num2 = (num2a.join(""));

            para=num1+Math.PI+num2;
            apara=para.split("")
        }
    }

    else{
        para = para1;
    }
    return para;
}

//sin
function sin(para1){
    let nums = para1;
    let apara = para1.split("");
    let sini = para1.indexOf('sin');

    while(sini != -1){
        let num1 = apara.slice(0,sini);
        let num1s = num1.join("");
        console.log(num1s);
        let numremain = apara.slice(sini+3);
        let numremains = numremain.join("");
        console.log(numremains);
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        console.log(numclacs);
        let numreqi3 = numremain.slice(numreqi2+1);
        console.log(numreqi3);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((Math.round((Math.sin(parseFloat(eval(numremains))))*100))/100).toString();
        }
        else{
            nums = num1s + ((Math.round((Math.sin(parseFloat(eval(numclacs))))*100))/100).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        sini = para1.indexOf('sin');
    }

    return nums;
}

//cos
function cos(para1){
    let nums = para1;
    let apara = para1.split("");
    let cosi = para1.indexOf('cos');

    while(cosi != -1){
        let num1 = apara.slice(0,cosi);
        let num1s = num1.join("");
        let numremain = apara.slice(cosi+3);
        let numremains = numremain.join("");
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        let numreqi3 = numremain.slice(numreqi2+1);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((Math.round((Math.cos(parseFloat(eval(numremains))))*100))/100).toString();
        }
        else{
            nums = num1s + ((Math.round((Math.cos(parseFloat(eval(numclacs))))*100))/100).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        cosi = para1.indexOf('cos');
    }

    return nums;
}

//tan
function tan(para1){
    let nums = para1;
    let apara = para1.split("");
    let tani = para1.indexOf('tan');

    while(tani != -1){
        let num1 = apara.slice(0,tani);
        let num1s = num1.join("");
        let numremain = apara.slice(tani+3);
        let numremains = numremain.join("");
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        let numreqi3 = numremain.slice(numreqi2+1);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((Math.round((Math.tan(parseFloat(eval(numremains))))*100))/100).toString();
        }
        else{
            nums = num1s + ((Math.round((Math.tan(parseFloat(eval(numclacs))))*100))/100).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        tani = para1.indexOf('tan');
    }

    return nums;
}

//sec
function sec(para1){
    let nums = para1;
    let apara = para1.split("");
    let seci = para1.indexOf('sec');

    while(seci != -1){
        let num1 = apara.slice(0,seci);
        let num1s = num1.join("");
        let numremain = apara.slice(seci+3);
        let numremains = numremain.join("");
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        let numreqi3 = numremain.slice(numreqi2+1);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((Math.round((1/(Math.cos(parseFloat(eval(numremains)))))*100))/100).toString();
        }
        else{
            nums = num1s + ((Math.round(((1/Math.cos(parseFloat(eval(numclacs)))))*100))/100).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        seci = para1.indexOf('sec');
    }

    return nums;
}

//cot
function cot(para1){
    let nums = para1;
    let apara = para1.split("");
    let coti = para1.indexOf('cot');

    while(coti != -1){
        let num1 = apara.slice(0,coti);
        let num1s = num1.join("");
        let numremain = apara.slice(coti+3);
        let numremains = numremain.join("");
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        let numreqi3 = numremain.slice(numreqi2+1);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((Math.round((1/(Math.tan(parseFloat(eval(numremains)))))*100))/100).toString();
        }
        else{
            nums = num1s + ((Math.round(((1/Math.tan(parseFloat(eval(numclacs)))))*100))/100).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        coti = para1.indexOf('cot');
    }

    return nums;
}

//cosec
function cosec(para1){
    let nums = para1;
    let apara = para1.split("");
    let coseci = para1.indexOf('cosec');

    while(coseci != -1){
        let num1 = apara.slice(0,coseci);
        let num1s = num1.join("");
        let numremain = apara.slice(coseci+3);
        let numremains = numremain.join("");
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        let numreqi3 = numremain.slice(numreqi2+1);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((Math.round((1/(Math.sin(parseFloat(eval(numremains)))))*100))/100).toString();
        }
        else{
            nums = num1s + ((Math.round(((1/Math.sin(parseFloat(eval(numclacs)))))*100))/100).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        coseci = para1.indexOf('cosec');
    }

    return nums;
}

//log
function log(para1){
    let nums = para1;
    let apara = para1.split("");
    let logi = para1.indexOf('log');

    while(logi != -1){
        let num1 = apara.slice(0,logi);
        let num1s = num1.join("");
        console.log(nums);
        let numremain = apara.slice(logi+3);
        let numremains = numremain.join("");
        console.log(numremains);
        let numreqi2 = numremain.indexOf(')');
        let numclacs = (numremain.slice(0,numreqi2+1)).join("");
        console.log(numclacs);
        let numreqi3 = numremain.slice(numreqi2+1);
        console.log(numreqi3);
        
        if(numremains.indexOf('(') == 0 && numremains.indexOf(')') == -1){
            numremains = numremains + ')';
            nums = num1s + ((((Math.log(parseFloat(eval(numremains))))))).toString();
        }
        else{
            nums = num1s + ((((Math.log(parseFloat(eval(numclacs))))))).toString() + numreqi3.join("");
        }
        para1 = nums;
        apara = para1.split("");
        logi = para1.indexOf('log');
    }

    return nums;
}

    
//main code 
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try{
                //checking log,pi,%
                let lg = document.querySelector('input').value;
                lg = calpi(lg);
                lg = log(lg);
                lg = sin(lg);
                lg = cos(lg);
                lg = tan(lg);
                lg = cot(lg);
                lg = sec(lg);
                lg = cosec(lg);
        
                let lga = lg.split("");
                let per = lga.indexOf('%');
      

                //calculating percent
                if(per != -1){
                    let num1a = lga.slice(0,per);
                    let num1 = parseFloat(num1a.join(""));
                    let num2a = lga.slice(per+1);
                    let num2 = parseFloat(num2a.join(""));
                    let result = (num1/100)*num2;
                    string=result.toString();
                    document.querySelector('input').value=string;
                }

                //evaluating 
                else{
             
                    string= eval(lg);
                    document.querySelector('input').value=string;
                }
               
            }
            //error
            catch(err){
                alert(" IT'S INVALID INPUT ! ");
                alert("NOTE: IF YOU ARE USING MULTIPLE TRIGNOMETRIC FUNCTION AND LOGARITHMIC FUNCTION AT SAME TIME THEN USE SEQUENCE LOG, SIN,COS,TAN,COT,SEC,COSEC");
            }
        }
        

        //log
        else if(e.target.innerHTML=='log<sub>e</sub>'){
            let bot = 'e'
            string=string+"log(";
            console.log(string);
            document.querySelector('input').value=string;

        }
        
        
        //trignometric functions
        else if(e.target.innerHTML=='sin' || e.target.innerHTML=='cos' || e.target.innerHTML=='tan' || 
                e.target.innerHTML=='sec' || e.target.innerHTML=='cot' || e.target.innerHTML=='cosec'){
            string=string+e.target.innerHTML+'(';
            document.querySelector('input').value=string;

        }
        

        //clear
        else if(e.target.innerHTML== 'C'){
            string="";
            document.querySelector('input').value=string;
        }
        

        //delete
        else if(e.target.innerHTML== '⌫'){
            str=document.querySelector('input').value;
            let st = str.split("");
            st.pop();
            string=st.join("");
            document.querySelector('input').value=string;
        }
        

        //updating string
        else{
            try{
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
                
            }
            catch(err){
                alert(" IT'S INVALID INPUT ! ")
            }
      
         }

})
})

