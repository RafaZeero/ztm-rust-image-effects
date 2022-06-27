use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    //convert a string into a javascript value
    // log(&encoded_file.into());
    log(&"Grayscale called.".into());

    // decoding the file from base64 to string
    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"Image decoded.".into());

    // loading an image from the memory
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded.".into());

    // apply grayscale to the image
    img = img.grayscale();
    log(&"Grayscale effect applied.".into());

    // transform image into PNG format
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"New image written.".into());

    // encoding image to url format to send it back to user
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);

    // return the encoded image string
    data_url
}

#[wasm_bindgen]
pub fn rotate180(encoded_file: &str) -> String {
    //convert a string into a javascript value
    // log(&encoded_file.into());
    log(&"Rotate 180º called.".into());

    // decoding the file from base64 to string
    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"Image decoded.".into());

    // loading an image from the memory
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded.".into());

    // apply rotation 180 to the image
    img = img.rotate180();
    log(&"Rotate effect applied.".into());

    // transform image into PNG format
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"New image written.".into());

    // encoding image to url format to send it back to user
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);

    // return the encoded image string
    data_url
}
