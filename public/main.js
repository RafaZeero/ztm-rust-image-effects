async function init() {
  // import rust before listening to scripts
  let rustApp = null

  try {
    rustApp = await import('../pkg')
  } catch (err) {
    console.error(err)
    return
  }

  // select element ID 'upload' at the DOM
  const input_gray = document.getElementById('upload_gray')
  const input_upsidedown = document.getElementById('upload_upsidedown')
  const input_both = document.getElementById('upload_both')
  // spinner logic
  const spinner = document.getElementById('spinner')

  function addSpinner() {
    spinner.classList.remove('hidden')
  }

  function removeSpinner() {
    spinner.classList.add('hidden')
  }

  // instantiate the FileReader to read the uploaded file
  const fileRead = new FileReader()

  // Using this to get a string, which is easier to send to the server
  //// input.files[0]  ~> Returns a file object
  //// fileRead.result ~> Returns a string

  // the property onloadend is used only when the file image is completely uploaded
  // make file grayscale
  function toGrayscale() {
    fileRead.onloadend = () => {
      let base64 = fileRead.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ''
      )
      let img_data_url = rustApp.grayscale(base64)

      document.getElementById('new-img').setAttribute('src', img_data_url)
      removeSpinner()
    }
  }
  //make file rotate 180
  function rotate180deg() {
    fileRead.onloadend = () => {
      let base64 = fileRead.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ''
      )
      let img_data_url = rustApp.rotate180(base64)
      document.getElementById('new-img').setAttribute('src', img_data_url)
      removeSpinner()
    }
  }
  // make file grayscale AND rotate 180
  function rotate180AndToGrayscale() {
    fileRead.onloadend = () => {
      let base64 = fileRead.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ''
      )
      let img_data_url = rustApp.grayscale(base64)

      let base64_second = img_data_url.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ''
      )
      let img_data_url_second = rustApp.rotate180(base64_second)

      document
        .getElementById('new-img')
        .setAttribute('src', img_data_url_second)
      removeSpinner()
    }
  }

  // logic to send file and start changing its colors
  // to grayscale
  input_gray.addEventListener('change', () => {
    addSpinner()
    setTimeout(() => {
      fileRead.readAsDataURL(input_gray.files[0])
      toGrayscale()
    }, 1000)
  })
  // to invert colors
  input_upsidedown.addEventListener('change', () => {
    addSpinner()
    setTimeout(() => {
      fileRead.readAsDataURL(input_upsidedown.files[0])
      rotate180deg()
    }, 1000)
  })
  // to invert colors AND grayscale
  input_both.addEventListener('change', () => {
    addSpinner()
    setTimeout(() => {
      fileRead.readAsDataURL(input_both.files[0])
      rotate180AndToGrayscale()
    }, 1000)
  })
}

init()
