jQuery(function($){
    
    var limited = $('nav');
	
	limited.each(function(){
    
            $(this).on('click',function(e){
                
            var t = $(e.target); // find target

            // Hvis target ikke har vores klasse '.go'
            if (t.next('.sub-menu').length && !t.hasClass('go')){

                e.preventDefault(); // Afbryd navigation

                $(this).find('a').removeClass('go'); // fjern '.go' fra tidligere klik

          t.addClass('go'); // tilføj '.go' til target
        }
        }); 
    
    });
});