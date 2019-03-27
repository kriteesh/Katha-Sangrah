let title = document.getElementsByClassName("title")[0];
title.innerHTML = "सुंदरकांड";

let footer = document.getElementsByClassName("footer")[0];
footer.innerHTML = "जय श्री राम";

let main = document.getElementsByClassName("main")[0];
	
	arr.map((x,i)=>{
		let page = document.createElement('div');
		page.className = "page";
		x.map((y,j)=>{
			let verse = document.createElement('div');
			verse.className="verse";
			if(i==62) page.style.justifyContent="center";
			else page.style.justifyContent="space-between";
			y.map((z,k)=>{
				let bar = document.createElement('div');
				bar.className = "bar";

				if((z.slice(1,3)=="दो")||(z.slice(1,3)=="छं")) verse.classList.add('bordered');
				z=z.replace(/दो0-/g,"").replace(/छं=/g,"");

				if(z.length < 4) bar.classList.add('circle');
				((k%2==0)&&(z.length > 3))? bar.innerHTML = z + "।&nbsp;" : bar.innerHTML = z ;


				
				verse.appendChild(bar);

			});
			page.appendChild(verse);
		})
		main.appendChild(page);
		if(page.childElementCount> 10) page.style.fontSize = "smaller";
        else  page.style.fontSize = "normal";

		});	
