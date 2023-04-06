// ## Array Cardio Day 2
    const people = [
      { name: "Wes", year: 1988 },
      { name: "Kait", year: 1986 },
      { name: "Irv", year: 1970 },
      { name: "Lux", year: 2015 },
    ];

    const comments = [
      { text: "Love this!", id: 523423 },
      { text: "Super good", id: 823423 },
      { text: "You are the best", id: 2039842 },
      { text: "Ramen is my fav food ever", id: 123523 },
      { text: "Nice Nice Nice!", id: 542328 },
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // const isAdult=people.some((person)=>{
    //  const currentYear=(new Date()).getFullYear();
    //  if(currentYear-person.year>=19)
    //  return true
    // })

     const isAdult = people.some(
       (person) => new Date().getFullYear() - person.year >= 19
     );


    // console.log({isAdult});
    // Array.prototype.every() // is everyone 19 or older?
     const allAdult = people.every(
       (person) => new Date().getFullYear() - person.year >= 19
     );
    //  console.log({allAdult});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    // const comment=comments.find(function (comment){
    //  if(comment.id===823423){
    //   return true
    //  }
    // })
    const comment=comments.find(comment=>comment.id===823423)
    // console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    const index = comments.findIndex((comment) => comment.id === 823423);
    // console.log(index);
    comments.splice(index,1)
    // console.table(comments);
    
    const newComments=[
     ...comments.slice(0,index),
     ...comments.slice(index+1)
    ]
    // console.table(newComments);

    // HTML 5 CANVAS

    const canvas=document.querySelector('#draw');
    const ctx=canvas.getContext('2d');
    canvas.width=window.innerWidth;
    canvas.hight=window.innerHeight;
    ctx.strokeStyle='#BADASS';
    ctx.lineJoin='round';
    ctx.lineCap='round';
    ctx.lineWidth=100;

    let isDrawing=false;
    let lastX=0;
    let lastY=0;
    let hue=0;
    let direction=true;

    function draw(e){
      if(!isDrawing) return // stop the fn from running when no moused down
      console.log(e);
      ctx.strokeStyle=`hsl(${hue},100%,50%)`;
      ctx.beginPath();
      // start from
      ctx.moveTo(lastX,lastY);
      // go to
      ctx.lineTo(e.offsetX,e.offsetY);
      ctx.stroke();
      [lastX,lastY] = [e.offsetX,e.offsetY];

      hue++;
      if(hue>360){
        hue=0;
      }
      if(ctx.lineWidth>=100||ctx.lineWidth<=1){
        direction=!direction
      }
      if(direction){
        ctx.lineWidth++;
      }else{
        ctx.lineWidth--
      }
    }

    canvas.addEventListener('mousedown',(e)=>{
      isDrawing=true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener('mouseout',()=>isDrawing=false)

