

$(document).ready(function() {

	$("#right img").hide();
	$("#center a img").hide();
	
	$("#left img").click();
	$("#left img").mouseover(setSelect);	
	
	$("#center img").click(setPic);
	$("#center img").mouseover(setPic);	

});

function setSelect(){
	$("#center a img").hide();
	$("#right img").hide();
	
	if(this.id == "img11"){
			
		$("#center a .one").hide();			
		$("#center a .two").hide();

		$("#center .row1").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"one\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"six\"/></a>"
		);
		$("#center a .one").attr({
			src: "images/galerie17.jpg",
			id: "img17",
			style: "border: thin solid black;"
			});
			
		$("#center .row2").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"three\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"six\"/></a>"
		);
		
		$("#center a .three").attr({
			src: "images/galerie22.jpg",
			id: "img22",
			style: "border: thin solid black;"
			});
			
		$("#center a .four").attr({
			src: "images/gallery/thumb9.jpg",
			id: "img21",
			style: "border: thin solid black;"
			});
			
		$("#center .row3").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"five\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"six\"/></a>"
		);
		
		$("#center a .five").attr({
			src: "images/gallery/thumb10.jpg",
			id: "img7",
			style: "border: thin solid black;"
			});
			
		$("#center a .six").attr({
			src: "images/gallery/thumb11.jpg",
			id: "img9",
			style: "border: thin solid black;"
			});

		$("#center .row4").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"seven\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"eight\"/></a>"
		);
			
		$("#center a .seven").attr({
			src: "images/galerie13.jpg",
			id: "img13",
			style: "border: thin solid black;"
			});
			
		$("#center a .eight").attr({
			src: "images/galerie19.jpg",
			id: "img19",
			style: "border: thin solid black;"
			});

		$("#center a .five").fadeIn();
		$("#center a .six").fadeIn();
		$("#center a .seven").fadeIn();
		$("#center a .eight").fadeIn();
	}

	else if(this.id == "img4"){
		$("#center a .one").hide();			
		$("#center a .two").hide();
		
		$("#center .row2").append(
			"<a class=\"thumbnail\" href=\"#thumb\"> <img class=\"three\"/> </a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"four\"/></a>"
		);
		
		$("#center a .three").attr({
			src: "images/galerie2.jpg",
			id: "img2",
			style: "border: thin solid black;"
		});
		
		$("#center a .four").attr({
			src: "images/gallery/thumb6.jpg",
			id: "img1",
			style: "border: thin solid black;"
			});

		$("#center .row3").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"five\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"six\"/></a>"
		);
		
		$("#center a .five").attr({
			src: "images/galerie3.jpg",
			id: "img3",
			style: "border: thin solid black;"
			});
			
		$("#center a .six").attr({
			src: "images/galerie4.jpg",
			id: "img4",
			style: "border: thin solid black;"
			});

		$("#center .row4").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"seven\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"eight\"/></a>"
		);
		
		$("#center a .seven").attr({
			src: "images/gallery/thumb7.jpg",
			id: "img12",
			style: "border: thin solid black;"
			});
			
		$("#center a .eight").attr({
			src: "images/gallery/thumb8.jpg",
			id: "img16",
			style: "border: thin solid black;"
			});
			
		$("#center a .three").fadeIn();
		$("#center a .four").fadeIn();
		$("#center a .five").fadeIn();
		$("#center a .six").fadeIn();
		$("#center a .seven").fadeIn();
		$("#center a .eight").fadeIn();
	}

	else if(this.id == "img8"){
		$("#center a .one").hide();			
		$("#center a .two").hide();
		$("#center a .three").hide();			
		$("#center a .four").hide();			
		$("#center a .five").hide();	
		
		$("#center .row4").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"seven\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"eight\"/></a>"
		);

		$("#center a .six").attr({
			src: "images/galerie18.jpg",
			id: "img18",
			style: "border: thin solid black;"
			});
			
		$("#center a .seven").attr({
			src: "images/galerie23.jpg",
			id: "img23",
			style: "border: thin solid black;"
			});
			
		$("#center a .eight").attr({
			src: "images/galerie8.jpg",
			id: "img8",
			style: "border: thin solid black;"
		});
		
		$("#center a .eight").fadeIn();
	}

	else if(this.id == "img10"){
		$("#center a .one").hide();			
		$("#center a .two").hide();
		$("#center a .three").hide();			
		$("#center a .four").hide();			
		$("#center a .five").hide();			
		$("#center a .six").hide();
		
		$("#center .row2").append(
			"<a class=\"thumbnail\" href=\"#thumb\"> <img class=\"three\"/> </a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"four\"/></a>"
		);
		
		$("#center a .three").attr({
			src: "images/gallery/thumb1.jpg",
			id: "img24",
			style: "border: thin solid black;"
		});
		
		$("#center a .four").attr({
			src: "images/gallery/thumb2.jpg",
			id: "img25",
			style: "border: thin solid black;"
			});

		$("#center .row3").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"five\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"six\"/></a>"
		);
		
		$("#center a .five").attr({
			src: "images/gallery/thumb3.jpg",
			id: "img26",
			style: "border: thin solid black;"
			});
			
		$("#center a .six").attr({
			src: "images/gallery/thumb4.jpg",
			id: "img27",
			style: "border: thin solid black;"
			});

		$("#center .row4").append(
			"<a class=\"thumbnail\" href=\"#thumb\"><img class=\"seven\"/></a> <a class=\"thumbnail\" href=\"#thumb\"><img class=\"eight\"/></a>"
		);
		
		$("#center a .seven").attr({
			src: "images/galerie14.jpg",
			id: "img14",
			style: "border: thin solid black;"
			});
			
		$("#center a .eight").attr({
			src: "images/galerie15.jpg",
			id: "img15",
			style: "border: thin solid black;"
			});
			
		$("#center a .seven").fadeIn();
		$("#center a .eight").fadeIn();
	}
	
	
}

function setPic(){

	$("#right img").hide();

	if(this.id == "img1"){
		$("#right img").attr({
			src: "images/gallery/blau1.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img2"){
		$("#right img").attr({
			src: "images/2schale.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img3"){
		$("#right img").attr({
			src: "images/3service.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img4"){
		$("#right img").attr({
			src: "images/4tassenteller.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img5"){
		$("#right img").attr({
			src:"images/5auflaufformen.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img6"){
		$("#right img").attr({
			src:"images/6Obstsieb.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img7"){
		$("#right img").attr({
			src: "images/gallery/gruen2.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img8"){
		$("#right img").attr(
			{src:"images/8katze.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img9"){
		$("#right img").attr({
			src:"images/gallery/gruen3.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img10"){
		$("#right img").attr({
			src: "images/10-fisch.JPG",
			id: "breit"
			});
	}
	else if(this.id == "img11"){
		$("#right img").attr({
			src: "images/11-tasse.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img12"){
		$("#right img").attr({
			src:"images/gallery/blau2.jpg",
			id: "breit"
			});
	}
	else if(this.id == "img13"){
		$("#right img").attr({
			src:"images/13-quiche.JPG",
			id: "breit"
			});
	}
	else if(this.id == "img14"){
		$("#right img").attr({
			src: "images/14-krug.JPG",
			id: "hoch"
			});
	}
	else if(this.id == "img15"){
		$("#right img").attr(
			{src:"images/15-becher.JPG",
			id: "breit"
			});
	}
	else if(this.id == "img16"){
		$("#right img").attr({
			src:"images/gallery/blau3.jpg",
			id: "hoch"
			});
	}else if(this.id == "img17"){
		$("#right img").attr({
			src:"images/17_quiche.JPG",
			id: "breit"
			});
	}else if(this.id == "img18"){
		$("#right img").attr({
			src:"images/18_blumentoepfe.jpg",
			id: "breit"
			});
	}else if(this.id == "img19"){
		$("#right img").attr({
			src:"images/19_tassen.JPG",
			id: "hoch"
			});
	}else if(this.id == "img20"){
		$("#right img").attr({
			src:"images/20_geschirr.JPG",
			id: "breit"
			});
	}else if(this.id == "img21"){
		$("#right img").attr({
			src:"images/gallery/gruen1.jpg",
			id: "breit"
			});
	}else if(this.id == "img22"){
		$("#right img").attr({
			src:"images/22_obstsieb.JPG",
			id: "breit"
			});
	}else if(this.id == "img23"){
		$("#right img").attr({
			src:"images/23_vogel.JPG",
			id: "breit"
			});
	}else if(this.id == "img24"){
		$("#right img").attr({
			src:"images/gallery/bedruckt1.jpg",
			id: "breit"
			});
	}else if(this.id == "img25"){
		$("#right img").attr({
			src:"images/gallery/bedruckt2.jpg",
			id: "breit"
			});
	}else if(this.id == "img26"){
		$("#right img").attr({
			src:"images/gallery/bedruckt3.jpg",
			id: "hoch"
			});
	}else if(this.id == "img27"){
		$("#right img").attr({
			src:"images/gallery/bedruckt4.jpg",
			id: "breit"
			});
	}else if(this.id == "img28"){
		$("#right img").attr({
			src:"images/gallery/bedruckt5.jpg",
			id: "breit"
			});
	}
	
	$("#right img").fadeIn();
}