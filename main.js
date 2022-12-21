var a,b,c
			a=parseInt(prompt("count"));
			c=0;
			b=0;
			for(i=0;a!=0;i++){
				b=a%10;
				a=(a-b)/10;
				c=c*10+b;
                console.log(b)
			}
				
                