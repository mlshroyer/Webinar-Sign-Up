$(function() {
	 var std_time = '12:00pm - 1:00pm CT';
	 var w_info = {
     "webinars": [{
         "title": "WebForms Training Overview",
		 
         "description": "In this Webinar, \"WebForms Training Overview\", we will provide you an introduction to the WebForms product, as well as an overview of the SPS Commerce Support Center and Portal Home Page. In this session you\'ll learn all about the basics of order processing through WebForms, in addition to being guided through a variety of helpful training resources.",
		 
		  "w_code" : "wo",
		  
         "dates": [{
			 
			 	"date": "April 1st, 2014"
				
			 },{
				 
				"date": "April 8th, 2014"
				
			 },{
				 
				"date": "April 15th, 2014"
				
			 },{
				 
				"date": "April 22th, 2014"
				
			 }]
     }, {
         "title": "Purchase Order Acknowledgement & Change Overview",
		 
         "description": "In this Webinar, \"Purchase Order Acknowledgement & Change Overview\" we will teach you how to send a Purchase Order Acknowledgement to request a change, and show you how to accept/reject a received Purchase Order Change, both of which are handled easily through WebForms. Please note that not all trading require these document transactions.",
		 
         "w_code" : "poa",
		 
         "dates": [{
			 
			 	"date": "April 3rd, 2014"
				
			 }]
     }, {
		  "title": "WebForms Optimization - Auto Complete & Defaults",
		  
         "description": "In this Webinar, \"WebForms Optimization: Auto-Complete and Defaults\" we will provide you with an overview of the auto-complete and default functions, explaining how these topics will help streamline order processing within WebForms.",
		 
         "w_code" : "wop",
		 
         "dates": [{
			 
			 	"date": "April 10th, 2014"
				
			 }]
	 }, {
		  "title": "Catalog v7 Overview",
		  
         "description": "In this Webinar session, will provide you with an introduction to the Universal Catalog v7 product, as well as an overview of the SPS Commerce Support Center and Portal Home Page. In this session you\’ll learn basic navigation and features of the Universal Catalog v7 product as well as how to upload a spreadsheet of your item data and how to manually add item data.",
		 
         "w_code" : "c7o",
		 
         "dates": [{
			 
			 	"date": "April 15th, 2014"
				
			 },{
				 
			 	"date": "May 21st, 2014"
				
			 },{
				 
			 	"date": "June 18th, 2014"
				
			 }]
	 }, {
		  "title": "Advance Ship Notice & Shipping Label Overview",
		  
         "description": "In this Webinar, \“Advance Ship Notice & Shipping Label Overview\” we will cover how to fill out an Advance Ship Notice, outlining best practices and frequently asked questions. Learn about common pack structures and general guidelies found within the Supply Chain. You\’ll also see how the information entered on your ASN is used to generate Shipping Labels.",
		 
         "w_code" : "asno",
		 
         "dates": [{
			 
			 	"date": "null"
				
			 }]
	 }, {
		  "title": "WebForms Mailbox Organization",
		  
         "description": "In this Webinar, \"WebForms Mailbox Organization\" you\'ll learn how to maintain an organized WebForms account. This session will cover such features as advanced searches, creating dynamic folders, adding document labels, and archiving/unarchiving documents.",
		 
         "w_code" : "wmo",
		 
         "dates": [{
			 
			 	"date": "null"
				
			 }]
	 }, {
		  "title": "Account Administration - Company User Admin & User Security Profile",
		  
         "description": "In this Webinar, \"Account Administration - Company User Admin & User Security Profile\" we will cover how to manage your account options, permissions, and account access.",
		 
         "w_code" : "aa",
		 
         "dates": [{
			 
			 	"date": "null"
				
			 }]
	 }]
 }
 	$(w_info.webinars).each(function (i) {
     	$(".choose_webinar").append($("<option/>", {
         val: this.w_code,
         html: this.title
     	}));
 	});
    $('.choose_webinar').change(function() {
		$("div.alert_val").css("display","none");
       var thisVal = $(this).val();
        if(thisVal=='wo') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[0].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[0].dates).each(function () {
				if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else if (thisVal=='wop') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[2].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[2].dates).each(function () {
     			if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else if (thisVal=='poa') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[1].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[1].dates).each(function () {
     			if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else if (thisVal=='asno') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[4].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[4].dates).each(function () {
     			if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else if (thisVal=='c7o') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[3].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[3].dates).each(function () {
     			if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else if (thisVal=='wmo') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[5].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[5].dates).each(function () {
     			if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else if (thisVal=='aa') {
			$('.webinar_desc').css('display','block');
			$('.webinar_desc').html(w_info.webinars[6].description);
			$('.choose_date option:gt(0)').remove();
 			$(w_info.webinars[6].dates).each(function () {
     			if (this.date != "null") {
					v_date = this.date + ' (' + std_time + ')';
				}
				else {
					v_date = "No Dates Available";
				}
     			$(".choose_date").append($("<option/>", {val: this.w_code, html: v_date}));
			});
		}
		else {
			$('.webinar_desc').css("display","none");
			$('.choose_date option:gt(0)').remove();
		}
    });
	$('.choose_date').change(function() {
		$('input[name=description]').val($(".choose_webinar option:selected").text() + ' ' + $(".choose_date option:selected").text() );
	});
});