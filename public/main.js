function init() {
  // select element ID 'upload' at the DOM
  const input = document.getElementById('upload')

  // instantiate the FileReader to read the uploaded file
  const fileRead = new FileReader()

  // Using this to get a string, which is easier to send to the server
  //// input.files[0]  ~> Returns a file object
  //// fileRead.result ~> Returns a string

  // the property onloadend is used only when the file image is completely uploaded
  fileRead.onloadend = () => {
    let base64 = fileRead.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ''
    )
    console.log('raw file: ', input.files[0])
    console.log('base64 file: ', base64)
  }

  input.addEventListener('change', () => {
    fileRead.readAsDataURL(input.files[0])
  })
}

init()
