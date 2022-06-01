import { setImage } from ".";
import { setFolderName } from ".";
var reader  = new FileReader();

function confirm(){
    var file = document.getElementById('image-input').files[0];
    var fileSize = document.getElementById('image-input').files[0].size;
    // var fileName = document.getElementById('image-input').files[0].fileName;
    // it's onload event and you forgot (parameters)
    reader.onload = function(e)  {
        setImage(file);
        setFolderName(fileSize+"");
     }
     // you have to declare the file loading
     reader.readAsDataURL(file);
}

export default confirm