
        //      * * *   * * *       
        //     *      *      *
        //    *               *
        //    *               *
        //     *             *
        //      *          *
        //        *      *
        //          *  *

for(let i=0; i<=9; i++){
    let bag=""
    for(let j=0;j<=16;j++){
        if(i==0&&j==3|| i==0&&j==4||i==0&&j==5){
            bag+="*"+" "
        }
        else if(i==0&&j==8||i==0&&j==9||i==0&&j==10){
            bag+="*"+" "
        }
        else if(i==1&&j==14){
            bag+="*"+" "
        }
        else if(i==1&&j==7){
            bag+=" "+"*"
        }
        else if(i==1&&j==2||i==2&&j==1||i==3&&j==1||i==4&&j==2||i==2&&j==16||i==3&&j==16||i==4&&j==15){
            bag+="*"+" "
        }
        else if(i==5&&j==4||i==5&&j==14){
            bag+="*"+" "
        }
        else if(i==6&&j==6||i==6&&j==12){
            bag+="*"+" "
        }
        else if(i==7&&j==8||i==7&&j==10){
            bag+="*"+" "
        }
       
        else{
            bag+=" "
        }
       
    }
    console.log(bag) 
}



        //      * * *   * * *       
        //     *      *      *
        //    *               *
        //    *               *
        //     *             *
        //      *          *
        //        *      *
        //          *  *



