//Start up code
console.log(location.host);
document.getElementById('curlUrl').value = location.host;
let httpArray = [];


//On submit button pressed =======================
document.getElementById('form').addEventListener('submit', function(event) {
  
  event.preventDefault();

  let base64Image = document.getElementById('preview').src;
  if (isValidBase64Gif(base64Image)) {
    document.getElementById('image').src = base64Image;
    getPixelRGBValues(base64Image);
    document.getElementById('image-container').style.display = "block"
  } 
  else {
    let infoDiv = document.getElementById('image-info');
    let imageInfo = '<p><b>WARNING!</b> File does not appear to be a valid GIF image</p>'
    infoDiv.innerHTML = imageInfo;
    infoDiv.style.display = "block"
    document.getElementById('image-container').style.display = "none";
    document.getElementById('JSONled').value = '';
    console.log("The string '" + base64Image + "' is not a valid base64 GIF image.");
  }

});

// Code for copying the generated string to clipboard

copyJSONledbutton.addEventListener('click', async () => {
  JSONled.select();
  try {
    await navigator.clipboard.writeText('test text');
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
});

sendJSONledbutton.addEventListener('click', async () => {
  if (window.location.protocol === "https:") {
    alert('Will only be available when served over http (or WLED is run over https)');
  } else {
    postPixels();
  }
});

async function postPixels() {
  for (let i of httpArray) {
    try {
      console.log(i);
      console.log(i.length);
      const response = await fetch('http://'+document.getElementById('curlUrl').value+'/json/state', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          //'Content-Type': 'text/html; charset=UTF-8'
        },
        body: i
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

let helpCheckbox = document.getElementById("helpCheckbox");
let helpDiv = document.getElementById("help-container");

helpCheckbox.addEventListener("change", function() {
  if (helpCheckbox.checked) {
    helpDiv.style.display = "block";
  } else {
    helpDiv.style.display = "none";
  }
});

//File uploader code
const dropZone = document.getElementById('drop-zone');
const filePicker = document.getElementById('file-picker');
const preview = document.getElementById('preview');

// Listen for dragenter, dragover, and drop events
dropZone.addEventListener('dragenter', dragEnter);
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', dropped);
dropZone.addEventListener('click', zoneClicked);

// Listen for change event on file picker
filePicker.addEventListener('change', filePicked);

// Handle zone click
function zoneClicked(e) {
  e.preventDefault();
  //this.classList.add('drag-over');
  //alert('Hej');
  filePicker.click();
}

// Handle dragenter
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

// Handle dragover
function dragOver(e) {
  e.preventDefault();
}

// Handle drop
function dropped(e) {
  e.preventDefault();
  this.classList.remove('drag-over');

  // Get the dropped file
  const file = e.dataTransfer.files[0];
  updatePreview(file);
}

// Handle file picked
function filePicked(e) {
  // Get the picked file
  const file = e.target.files[0];
  updatePreview(file);
}

// Update the preview image
function updatePreview(file) {
  // Use FileReader to read the file
  const reader = new FileReader();
  reader.onload = function() {
    // Update the preview image
    preview.src = reader.result;
    document.getElementById("submitConvert").style.display = "block";
  };
  reader.readAsDataURL(file);
}

function isValidBase64Gif(string) {
  // Use a regular expression to check that the string is a valid base64 string
  /*
  const base64gifPattern = /^data:image\/gif;base64,([A-Za-z0-9+/:]{4})*([A-Za-z0-9+/:]{3}=|[A-Za-z0-9+/:]{2}==)?$/;
  const base64pngPattern = /^data:image\/png;base64,([A-Za-z0-9+/:]{4})*([A-Za-z0-9+/:]{3}=|[A-Za-z0-9+/:]{2}==)?$/;
  const base64jpgPattern = /^data:image\/jpg;base64,([A-Za-z0-9+/:]{4})*([A-Za-z0-9+/:]{3}=|[A-Za-z0-9+/:]{2}==)?$/;
  const base64webpPattern = /^data:image\/webp;base64,([A-Za-z0-9+/:]{4})*([A-Za-z0-9+/:]{3}=|[A-Za-z0-9+/:]{2}==)?$/;
  */
  //REMOVED, Any image appear to work as long as it can be drawn to the canvas. Leavingg code in for future use, possibly
  if (1==1 || base64gifPattern.test(string) || base64pngPattern.test(string) || base64jpgPattern.test(string) || base64webpPattern.test(string)) {
    return true;
  }
  else {
    //Not OK
    return false;
  }
}

document.getElementById("brightnessNumber").oninput = function() {
  document.getElementById("brightnessValue").textContent = this.value;
}

document.getElementById("colorLimitNumber").oninput = function() {
  document.getElementById("colorLimitValue").textContent = this.value;
}

var formatSelector = document.getElementById("formatSelector");
var hideableRows = document.querySelectorAll(".ha-hide");
for (var i = 0; i < hideableRows.length; i++) {
    hideableRows[i].classList.add("hide");
}
formatSelector.addEventListener("change", function() {
     for (var i = 0; i < hideableRows.length; i++) {
         hideableRows[i].classList.toggle("hide", this.value !== "ha");
     }
 });