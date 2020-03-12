class Element {
	constructor(Ename,categ,guest,eplink,epdesc,next = null,prev = null){
        this.Ename=Ename;
        this.categ=categ;
        this.guest=guest;
        this.eplink=eplink;
        this.epdesc=epdesc;
		this.next=next;
		this.prev=prev;
	}
}

class Stack {
	constructor(){
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}

	pushToList(Ename,categ,guest,eplink,epdesc){
		var element = new Element(Ename,categ,guest,eplink,epdesc);
		if(this.length==0){
			this.pointer  = this.tail =  this.head  = element;
			
		}else
		{
			this.tail.next = element;
			element.prev = this.tail;
			this.tail=element;
			
		}

		this.length++;
		return element;

	}

	

	next(){
		if(this.pointer && this.pointer.next){
			this.pointer = this.pointer.next;
		}


	}

	previous(){
		if(this.pointer && this.pointer.prev){
			this.pointer = this.pointer.prev;
		}
	}

	dispElement(){
		if(this.pointer){
			return '<center><p class="text-ourpodcasts">' +this.pointer.Ename+ '</p></center><div><center><p style="color: black; margin-top: 80px;" class="epdesc">'
			+this.pointer.epdesc+'<br>'+'Category:'+this.pointer.categ+'<br>'+'Guests:'+this.pointer.guest+'<br></p></center></div><div class="audio-episodes"> <button onclick="Prev()"> <i class="fas fa-chevron-left"></i></button><audio controls src="'+this.pointer.eplink+'"></audio><button onclick="Next()"><i class="fas fa-chevron-right"></i></button></div>';
		} else return "No Data";
	}



}

let stack2 = new Stack();

stack2.pushToList("#1: How I Knew We Were Dangerous ","Business","N/A","https://anchor.fm/s/f39a864/podcast/play/10450176/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-1-18%2F50580627-44100-2-82b77c2715e44.mp3","For today’s episode I sit down with David Griner, creative editor for AdWeek. We talk about VaynerMedia’s Super Bowl commercials and how I knew that we were dangerous. Make sure to hit me up and let me know what you thought!  ");
stack2.pushToList("#2: You Need to Double Down on What You Like","Business","N/A","https://anchor.fm/s/f39a864/podcast/play/10421607/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-1-17%2F50118845-44100-2-3fa2493b437a2.mp3","Today’s episode is from a talk that I had last week with NFL Football legend Terrell Owens.");
stack2.pushToList("#3: How I Deal With Two Things At Once","Business","N/A","https://anchor.fm/s/f39a864/podcast/play/10385544/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-1-14%2F49328758-44100-2-1603b08b7bbe1.mp3","Today’s episode is from Jim Stengel’s The CMO Podcast: Super Bowl Edition that we did live in New York. I talk about brand marketing and some of the strategies behind VaynerMedia’s Super Bowl commercials. Make sure to hit me up and let me know what you thought!");


function empiler(){
	stack2.pushToList(document.getElementById("Ename").value,document.getElementById("categ").value,document.getElementById("guest").value,document.getElementById("eplink").value,document.getElementById("epdesc").value);
	printElement();

}



function Next(){
	stack2.next();
	document.getElementById("result3").innerHTML = stack2.dispElement();
}

function Prev(){
	stack2.previous();
	document.getElementById("result3").innerHTML = stack2.dispElement();

}

function printElement(){
	document.getElementById("result3").innerHTML = stack2.dispElement();
}
