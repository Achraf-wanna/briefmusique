class Element {
	constructor(pname,prname,cat,img,next = null,prev = null){
		this.pname=pname;
        this.prname=prname;
        this.cat=cat;
        this.img=img;
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


	addFirst(pname,prname,cat,img){
		if (this.head==null) {
			this.head=this.tail=this.pointer=new Element(pname,prname,cat,img);
		}
		else {
			let tmp = this.head;
			this.head = new Element(pname,prname,cat,img);
			tmp.prev = this.head;
			this.head.next = tmp;

		}

	}




	dispElement(){
		if(this.head){
			return '<div class="images" > <img src="img/'+this.head.img +'"><h1>'+ this.head.pname + '</h1><h3> by: '+this.head.prname+'</h3><h3>Category : '+this.head.cat+ '</h3></div>';
		} else return "No Data";
	}



}


let stack = new Stack();


// STACK

function empiler(){
	stack.addFirst(document.getElementById("pname").value,document.getElementById("prname").value,document.getElementById("cat").value,document.getElementById("imglink").value);
	printElement();

}



function printElement(){
	document.getElementById("the-3-PODCASTS").innerHTML += stack.dispElement();
}

Splitting({
	target: '.tiler',
	by: 'cells',
	rows: 3,
	columns: 3,
	image: true
  });


