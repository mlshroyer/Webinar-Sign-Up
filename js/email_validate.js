// Email Validation Functions
function validateEmail()
{
   var emailID = document.email_us.email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       $("div.alert_val").html("Please enter a valid email address!");
	   $('.webinar_desc').css("display","none");
	   $("div.alert_val").css({display:"block", top:"136px"});
       document.email_us.email.focus() ;
       return false;
   }
   else {
		$("div.alert_val").css("display","none");
   }
}
function validate()
{
 
   if( document.email_us.name.value == "" )
   {
       $("div.alert_val").html("Please enter your name!");
	   $('.webinar_desc').css("display","none");
	   $("div.alert_val").css({display:"block", top:"115px"});
     document.email_us.name.focus();
     return false;
   }
      if( document.email_us.email.value == "" )
   {
       $("div.alert_val").html("Please enter your email address!");
	   $('.webinar_desc').css("display","none");
	   $("div.alert_val").css({display:"block", top:"170px"});
     document.email_us.email.focus();
     return false;
   }
      else{
     // Put extra check for data format
     var ret = validateEmail();
     if( ret == false )
     {
          return false;
	 }
   }
   if( document.email_us.company.value == "" )
   {
       $("div.alert_val").html("Please enter your company name!");
	   $('.webinar_desc').css("display","none");
	   $("div.alert_val").css({display:"block", top:"230px"});
     document.email_us.company.focus();
     return false;
   }
   if( document.email_us.subject.value == "" )
   {
       $("div.alert_val").html("Please enter a subject!");
	   $('.webinar_desc').css("display","none");
	   $("div.alert_val").css({display:"block", top:"334px"});
     document.email_us.subject.focus();
     return false;
   }
   if( document.email_us.description.value == "" )
   {
       $("div.alert_val").html("Please enter a description!");
	   $('.webinar_desc').css("display","none");
	   $("div.alert_val").css({display:"block", top:"457px"});
     document.email_us.description.focus();
     return false;
   }
   else {
		$("div.alert_val").css("display","none");
   }
}