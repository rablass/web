
		var nav4 = window.Event ? true : false; 
		function acceptNum(evt){  
		// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57  
		var key = nav4 ? evt.which : evt.keyCode;  
		return (key <= 13 || (key >= 48 && key <= 57)); 
		}
 		function validarLetras(e) 
  		{
    		tecla = (document.all) ? e.keyCode : e.which;     
    		if (tecla==8) return true;
     		if (tecla==37) return true;   
      		if (tecla==39) return true;   
      		if (tecla==32) return true;       
      		if (e.ctrlKey && tecla==86) { return true;}        
      		if (e.ctrlKey && tecla==67) { return true;}        
      		if (e.ctrlKey && tecla==88) { return true;}       
      		patron = /[a-zA-Z]/;          
      		te = String.fromCharCode(tecla);         
      		return patron.test(te);  
  		} 
