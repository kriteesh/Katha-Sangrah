	let main = document.getElementsByClassName("main")[0];
	    console.log(arr);	
		
		arr.map((x,i)=>{
			let page = document.createElement('div');
			page.className = "page";
			x.map((y,j)=>{
				let verse = document.createElement('div');
				verse.className="verse";
				y.map((z,k)=>{
					let bar = document.createElement('div');
					bar.className = "bar";
					if(z.length < 4) bar.classList.add('circle');
					((k%2==0)&&(z.length > 3))? bar.innerHTML = z + "।" : bar.innerHTML = z ;
					verse.appendChild(bar);

				});
				page.appendChild(verse);
			})
			main.appendChild(page);
			// if(page.childElementCount> 10) page.style.lineHeight = "4vh";
			});