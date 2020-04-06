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

let stack1 = new Stack();

stack1.pushToList("The End, with Andy Frisella - MFCEO318","Business / Self development","N/A","https://chtbl.com/track/24EG4/traffic.libsyn.com/secure/mfceoproject/Ep_1_-_12.4.19_Audio.mp3","And now...the final episode of The MFCEO Project podcast (which, by the way, has language and adult humor that is not suitable for kids. Use your brains. Be a good parent.)");
stack1.pushToList("Foreword to the Final Episode, with Andy Frisella - MFCEO317","Business / Self development","N/A","https://chtbl.com/track/24EG4/traffic.libsyn.com/secure/mfceoproject/12.6.19_Audio.mp3","And now...the final episode of The MFCEO Project podcast (which, by the way, has language and adult humor that is not suitable for kids. Use your brains. Be a good parent.)");
stack1.pushToList("What Does It Really Mean To Be Woke?, with Andy Frisella - MFCEO315","Business / Self development","N/A","https://chtbl.com/track/24EG4/traffic.libsyn.com/secure/mfceoproject/9.24.19_Audio.mp3","And now...the final episode of The MFCEO Project podcast (which, by the way, has language and adult humor that is not suitable for kids. Use your brains. Be a good parent.)");


function empiler(){
	stack1.pushToList(document.getElementById("Ename").value,document.getElementById("categ").value,document.getElementById("guest").value,document.getElementById("eplink").value,document.getElementById("epdesc").value);
	printElement();

}



function Next(){
	stack1.next();
	document.getElementById("result1").innerHTML = stack1.dispElement();
}

function Prev(){
	stack1.previous();
	document.getElementById("result1").innerHTML = stack1.dispElement();

}

function printElement(){
	document.getElementById("result1").innerHTML = stack1.dispElement();
}
