result = document.getElementById('result')
	input = document.getElementById('upload-img')
	img = document.getElementById('show-img')
	download = document.getElementById('download-img')
	_name = document.getElementById('img-name')
	_size = document.getElementById('img-size')
	base64 = document.getElementById('base64')
	input.addEventListener("change", loadImg)

	function loadImg(e) {
		//if(input.files[0]){
		console.log(e)
		_name.innerHTML = '<b>Filename:</b> ' + input.files[0].name
		_size.innerHTML = '<b>Size:</b> ' + (input.files[0].size / 1024).toFixed(1) + 'kb'
		var reader = new FileReader();
		reader.onload = function(e) {
			result.style.display = "block"
			img.src = e.target.result;
			//download.href=img.src
			base64.innerHTML = img.src
		}
		reader.readAsDataURL(this.files[0]);
		//}
	}
	base64.addEventListener("focus", function() {
		base64.select()
	})