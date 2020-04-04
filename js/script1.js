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


let stack = new Stack();



stack.pushToList("#1: Using Social Media To Build Your Business, What Price To Charge and Time Management","Business / fitness","N/A","https://traffic.libsyn.com/secure/briankeanebusiness/Business_Podcast_1.mp3?dest-id=970568","As today’s the first episode, I’ve jumped around on several different topics.I've talked about how to use social media to build your personal or business brand alongside leveraging it for more leads in a 1:1 or online business.I've also gone into how to price your services so you're priced based on on the value you provide and not on the 'commodity/everybody charges that' idea that a lot of trainers adopt. not priced as a commodity.Finally I've covered the difference between being productive (getting a lot of things done) with being busy (having a lot of things to do). I hope you enjoy it.");
stack.pushToList("#2: How Podcasts Make Money, Instagram or Facebook, Websites and Success Tipping Points","Business / fitness","N/A","https://traffic.libsyn.com/secure/briankeanebusiness/Business_Podcast_2_.mp3?dest-id=970568","I also go into how people buy based off value and not price, my ‘dumb sh*t’ money fund, the desert island question and hitting critical mass on podcasts. Enjoy.Should I use Instagram or Facebook for my business? Do you think a website is necessary nowadays or are click funnels enough? How do free podcasts generate revenue in the initial phase before advertising income? What do you believe was the ultimate tipping point to your success in business?");
stack.pushToList("#3: Some Of The 'Stupid Taxes' I've Paid Over The Years","Business / fitness","N/A","https://traffic.libsyn.com/secure/briankeanebusiness/Business_Podcast_3__1.mp3?dest-id=970568","Generally when I make any costly business mistakes that cost me a lot of money (or time and energy), I label them as 'stupid tax' I've paid.Hopefully after listening to today's episode, you don't make the same mistakes as me.");

function empiler(){
	stack.pushToList(document.getElementById("Ename").value,document.getElementById("categ").value,document.getElementById("guest").value,document.getElementById("eplink").value,document.getElementById("epdesc").value);
	printElement();

}



function Next(){
	stack.next();
	document.getElementById("result").innerHTML = stack.dispElement();
}

function Prev(){
	stack.previous();
	document.getElementById("result").innerHTML = stack.dispElement();

}

function printElement(){
	document.getElementById("result").innerHTML = stack.dispElement();
}







