  var a1 = document.getElementById('arm1');
  var j1 = document.getElementById('joint_01');
  var a2 = document.getElementById('arm2');
  var j2 = document.getElementById('joint_02');
  var b1 = j1.getBBox();
  var b2 = j2.getBBox();
  var j1_cx = b1.x + b1.width / 2;
  var j1_cy = b1.y + b1.height / 2;
  var j2_cx = b2.x + b2.width / 2;
  var j2_cy = b2.y + b2.height / 2;
  var angle_1 = 0;
  var angle_2 = 0;
  var goal = document.getElementById("goal");
  var goal_end = document.getElementById("goal_end");
  var tip = document.getElementById("tip");
  var gt = document.getElementById("goal_text");
  var tt = document.getElementById("tip_text");
  var goal_posx=0,goal_posy=0,tip_posx=0,tip_posy=0;
  function getAbsBox(o) {return o.getBoundingClientRect()};
  function update() {
    a1.setAttribute("transform", `rotate(${angle_1},${j1_cx},${j1_cy})`);
    a2.setAttribute("transform", `rotate(${angle_2},${j2_cx},${j2_cy})`);
    goal_posx = getAbsBox(goal_end).x+getAbsBox(goal_end).width/2 | 0;
    goal_posy = getAbsBox(goal_end).y+getAbsBox(goal_end).height/2 | 0;
    tip_posx = getAbsBox(tip).x+getAbsBox(tip).width/2 | 0;
    tip_posy = getAbsBox(tip).y+getAbsBox(tip).height/2 | 0;
    gt.textContent=`${goal_posx},${goal_posy}`;
    tt.textContent=`${tip_posx},${tip_posy}`;
    
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);

  document.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
      case 'a': angle_1 += 1;  break;
      case 's': angle_1 += -1; break;
      case 'q': angle_2 += 1;  break;
      case 'w': angle_2 += -1; break;
      case 'e': angle_1 += 5; angle_2 += -5;  break;
      case 'r': angle_1 += -5; angle_2 += 5;  break;
    }
  });

  document.addEventListener("mousemove", (event) => {
    const x = event.x;
    const y = event.y;
    goal.setAttribute("transform", `translate(${x}, ${y})`);
  });
