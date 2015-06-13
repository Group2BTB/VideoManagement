// function load image from client 
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$("#src").attr("src",e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}
// function check type and size image before upload
function img(){
	if (window.File && window.FileReader && window.FileList && window.Blob)
	{
		var inp = document.getElementById('img');

		var fsize = inp.files[0].size;
		var ftype = inp.files[0].type;
		var fname = inp.files[0].name;
		
		switch(ftype)
		{
			case 'image/png':
			case 'image/gif':
			case 'image/jpeg':
			case 'image/pjpeg':
				if(fsize>(5242880))
				{
					alert("Too big! File upload max : 5MB.");
				}else{									
					readURL(inp);			
				}
				break;
			default:
				alert('Unsupported File!');
		}
	}else{
		alert("Please upgrade your browser, because your current browser lacks some new features we need!");
	}

}