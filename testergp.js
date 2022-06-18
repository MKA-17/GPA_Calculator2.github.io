let inp = document.getElementsByClassName("grade");
let cd = document.getElementsByClassName("Credit");
//console.log(cd[0].value);
function calculate() {
    let i = 0;
    sum = 0;
    let gpa = 0;
    let ch = 0;
    for (i = 0; i < inp.length; i++) {
        if(inp[i].value === "WF" || inp[i].value === "None")
        {continue;}
        
        console.log(inp[i].value)
        sum +=( (parseInt(cd[i].value) * (gradepoint(inp[i].value))));
        ch += parseInt(cd[i].value);
        console.log("meow", parseInt(cd[i].value));
        //console.log( gradepoint(inp[i].value));

    }
    gpa = sum / ch;
    console.log(ch);
    console.log(gpa.toFixed(5));
    document.getElementById("result").innerHTML = gpa.toFixed(5);

}
function ADDMORE()
{
    //let tabl = document.getElementsByClassName("tab");
    //let nw = document.createElement;
    document.getElementById("tabl").innerHTML+=
    '<tr>'+
           '<td>'
           +         '<input type="text" class="sub" placeholder="SUBJECT">'
                +'</td>'
                +'<td>'
                  +'  <p><input type="text" class="Credit" placeholder="cd"></p>'

                +'</td>'
                +'<td><select class="grade">'

    +'<option value="None">None</option>'

    +'<option value="A+">A+</option>'
    +'<option value="A">A</option>'
    +'<option value="A-">A-</option>'
    +'<option value="B+">B+</option>'
    +'<option value="B">B</option>'
    +'<option value="B-">B-</option>'
    +'<option value="C+">C+</option>'
    +'<option value="C">C</option>'
    +'<option value="C-">C-</option>'
    +'<option value="D+">D+</option>'
    +'<option value="D">D</option>'
    +'<option value="F">F</option>'
    +'<option value="WF">WF</option>'

+'</select>'
+'</td>'
+'<tr>'+
'<td>'
+         '<input type="text" class="sub" placeholder="SUBJECT">'
     +'</td>'
     +'<td>'
       +'  <p><input type="text" class="Credit" placeholder="cd"></p>'

     +'</td>'
     +'<td><select class="grade">'

+'<option value="None">None</option>'

+'<option value="A+">A+</option>'
+'<option value="A">A</option>'
+'<option value="A-">A-</option>'
+'<option value="B+">B+</option>'
+'<option value="B">B</option>'
+'<option value="B-">B-</option>'
+'<option value="C+">C+</option>'
+'<option value="C">C</option>'
+'<option value="C-">C-</option>'
+'<option value="D+">D+</option>'
+'<option value="D">D</option>'
+'<option value="F">F</option>'
+'<option value="WF">WF</option>'

+'</select>'
+'</td>'
    
    
    
    
    
    
    
    /*"<tr style='padding:10px 20px 10px 20 px;'>"+"<td><input type='text' class='sub' placeholder='SUBJECT'></td>"+"<td><input type='text' class='Credit' placeholder='cd'><td><select class='grade' >"
                    
                    +"<option value='None'>None</option>"
					+"<option value='A+'>A+"
					+"<option value='A'>A"
					+"<option value='A-'>A-"
					+"<option value='B+'>B+"
					+"<option value='B'>B"
					+"<option value='B-'>B-"
					+"<option value='C+'>C+"
					+"<option value='C'>C"
					+"<option value='C-'>C-"
					+"<option value='D+'>D+"
					+"<option value='D'>D"
					+"<option value='F'>F"
                    +"<option value='WF'>WF"
                    
				+"</select></tr>"
                +"<tr>"+"<td><input type='text' class='sub' placeholder='SUBJECT'></td>"+"<td><input type='text' class='Credit' placeholder='cd'><td><select class='grade' >"
                +"<option value='None'>None</option>"
					+"<option value='A+'>A+"
					+"<option value='A'>A"
					+"<option value='A-'>A-"
					+"<option value='B+'>B+"
					+"<option value='B'>B"
					+"<option value='B-'>B-"
					+"<option value='C+'>C+"
					+"<option value='C'>C"
					+"<option value='C-'>C-"
					+"<option value='D+'>D+"
					+"<option value='D'>D"
					+"<option value='F'>F"
                    +"<option value='WF'>WF"
                
            +"</select></tr>";*/
            		

}

function gradepoint(grd)
 {
    if (grd == "A+") {
        return 4;
    }
    else if (grd == "A") {
        return 4;
    }
    else if (grd == "A-") {
        return 3.7;
    }
    else if (grd == "B+") {
        return 3.3;
    }
    else if (grd == "B") {
        return 3;
    }
    else if (grd == "B-") {
        return 2.7;
    }
    else if (grd == "C+") {
        return 2.3;
    }
    else if (grd == "C") {
        return 2;
    }
    else if (grd == "C-") {
        return 1.7;
    }
    else if (grd == "D+") {
        return 1.3;
    }
    else if (grd == "D") {
        return 1;
    }
    else if (grd == "F") {
        return 0;
    }
    else {
        return 0;
    }

}

