function getTime(){
    let b=new Date()           
    let hours=Number(b.getHours())
    let mins =Number(b.getMinutes())
    let secs=Number(b.getSeconds())
    
    let am_pm = "am";

    if (hours > 12)
    {
        am_pm = "pm";
        hours = hours - 12;
    } 
    let hour_string="";
    let min_string="";
    let sec_string="";

    if (hours < 10){
        hour_string = "0"+String(hours);
    }else{
        hour_string =String(hours);
    }
    if (mins < 10){
        min_string = "0"+String(mins);
    }else{
        min_string =String(mins);
    }
    if (secs < 10){
        sec_string = "0"+ String(secs);
    }else{
        sec_string = String(secs);
    }

    let time_string=`Time is : ${hour_string}:${min_string}:${sec_string}:${am_pm}`
    return time_string;
}

console.log(getTime());
