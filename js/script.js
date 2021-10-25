


    var hero1 = document.getElementById("hero1");
    var hero2 = document.getElementById("hero2");
    var hero3 = document.getElementById("hero3");
    var htext = document.getElementById("htext");
    var herostate1 = document.getElementById("1herostate");
    var herostate2 = document.getElementById("2herostate");
    var herostate3 = document.getElementById("3herostate");

    let x = 0;

	htext.classList.add("state0");
function state1()
{
	hero1.classList.add("pos2");
	hero1.classList.remove("pos1");
	hero2.classList.add("pos3");
	hero2.classList.remove("pos2");
	hero3.classList.add("pos1");
	hero3.classList.remove("pos3");	
	switchtext();
	setTimeout(state2, 6000);

	
}
function state2()
{
	hero1.classList.add("pos3");
	hero1.classList.remove("pos2");
	hero2.classList.add("pos1");
	hero2.classList.remove("pos3");
	hero3.classList.add("pos2");
	hero3.classList.remove("pos1");
	switchtext();
	setTimeout(state3, 6000);
	
}
function state3() {
	
	hero1.classList.add("pos1");
	hero1.classList.remove("pos3");
	hero2.classList.add("pos2");
	hero2.classList.remove("pos1");
	hero3.classList.add("pos3");
	hero3.classList.remove("pos2");
	switchtext();
	setTimeout(state1, 6000);
}

function switchtext()
{
	if(x >= 4)
	{
		x = 0;
	}

	switch(x)
	{
		case 0:
			htext.classList.remove("state0");
			htext.classList.add("state1");
			herostate1.classList.remove("herostate-0");
			herostate1.classList.add("herostate-1");
			herostate2.classList.remove("herostate-0");
			herostate2.classList.add("herostate-1");
			herostate3.classList.remove("herostate-0");
			herostate3.classList.add("herostate-1");

			break;
		case 1:
			htext.classList.remove("state1");
			htext.classList.add("state2");
			herostate1.classList.remove("herostate-1");
			herostate1.classList.add("herostate-2");
			herostate2.classList.remove("herostate-1");
			herostate2.classList.add("herostate-2");
			herostate3.classList.remove("herostate-1");
			herostate3.classList.add("herostate-2");
			break;
		case 2:
			htext.classList.remove("state2");
			htext.classList.add("state3");
			herostate1.classList.remove("herostate-2");
			herostate1.classList.add("herostate-3");
			herostate2.classList.remove("herostate-2");
			herostate2.classList.add("herostate-3");
			herostate3.classList.remove("herostate-2");
			herostate3.classList.add("herostate-3");
			break;
		case 3:
			htext.classList.remove("state3");
			htext.classList.add("state0");
			herostate1.classList.remove("herostate-3");
			herostate1.classList.add("herostate-0");
			herostate2.classList.remove("herostate-3");
			herostate2.classList.add("herostate-0");
			herostate3.classList.remove("herostate-3");
			herostate3.classList.add("herostate-0");
			break;
	}
	x++;
}





setTimeout(state1, 5000);