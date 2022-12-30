// now A

for(let i=1; i<=7; i++){
    let bag=""
    for(let j=1; j<=7; j++){
        if(i==1&& j==4){
            bag+="*"
        }
        else if(i==2&& j==2||i==2&& j==6){
            bag+="*"+" "
        }
        else if(i==3 && j==1|| i==3&&j==7){
            bag+="*"+" "
        }else if(i==4){
            bag+="*"+" "
        }
        else if((i==5&&j==1)||(i==5&&j==7)||(i==6&&j==1)||(i==6&&j==7)||(i==7&&j==1)||(i==7&&j==7)){
            bag+="*"+" "
        }
        
        else{
            bag+="  "
        }
    }
    console.log (bag)
}


// Now B


for(let i=1; i<=5; i++){
    let bag =""
    for(let j=1; j<=5; j++){
       if(i==1&&j==5||i==5&&j==5){
        bag+=" "
       }
       
       
        else if( i==1||j==1||i==5||(i==3)||(i==2&&j==5)||(i==4&&j==5)){
            bag+="*"+" "
        }
        

        else{
            bag+="  "
        }
       
    }
    console.log(bag)
}


// now C

for(let i=0;i<6;i++){
    let bag=""
    for(let j=0;j<=7;j++){
        if(i==0&&j==3||i==0&&j==4||i==0&&j==5||i==1&&j==7){
            bag+="*"+" "
        }
        else if(i==1&&j==2||i==2&&j==1||i==3&&j==1){
            bag+="*"+" "
        }
        else if(i==4&&j==2){
            bag+="*"+" "
        }
        else if(i==5&&j==3||i==5&&j==4||i==5&&j==5||i==4&&j==7){
            bag+="*"+" "
        }
        else{
            bag+=" "
        }
}
console.log(bag)
}


// Now D

for(let i=0;i<6;i++){
    let bag=""
    for(let j=0;j<=6;j++){
    if(j==0||i==0&&j==1||i==0&&j==2||i==0&&j==3){
        bag+="*"+" "
    }
    else if(i==5&&j==1||i==5&&j==2||i==5&&j==3){
        bag+="*"+" "
    }
    else if(i==1&&j==6||i==2&&j==6||i==3&&j==6||i==4&&j==6){
        bag+="*"+" "
    }
    else{
        bag+=" "
    }
    }
    console.log(bag)
}

// Now E

for(let i=1;i<6;i++){
    let bag=""
    for(let j=1; j<5;j++){
        if(j==1||i==1||i==5||i==3){
            bag+="*"+" "
        }
     
        else{
            bag+=" "
        }
    }
    console.log(bag)
}

// Now F

for(let i=1;i<6;i++){
    let bag=""
    for(let j=1; j<5;j++){
        if(j==1||i==1||i==3){
            bag+="*"+" "
        }
     
        else{
            bag+=" "
        }
    }
    console.log(bag)
}

// Now G

for(let i=0;i<6;i++){
    let bag=""
    for(let j=0;j<=8;j++){
        if(i==0&&j==3||i==0&&j==4||i==0&&j==5||i==1&&j==7){
            bag+="*"+" "
        }
        else if(i==1&&j==2||i==2&&j==1||i==3&&j==1){
            bag+="*"+" "
        }
        else if(i==4&&j==2){
            bag+="*"+" "
        }
        else if(i==5&&j==3||i==5&&j==4||i==5&&j==5||i==4&&j==7){
            bag+="*"+" "
        }
        else if(i==4&&j==6||i==4&&j==7||i==5&&j==6){
            bag+="*"+" "
        }
        else{
            bag+=" "
        }
}
console.log(bag)
}
















