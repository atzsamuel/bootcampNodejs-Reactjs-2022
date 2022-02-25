const paragraphs = document.getElementsByTagName('p');
console.log("parrafos en el documento", paragraphs.length);

if(paragraphs.length > 0){
  const paragraph = paragraphs[0];
  paragraph.innerHTML = 'Bienvenidos al bootcamp!';
  console.log(paragraph);
}

if(paragraphs.length >1){
  const paragraph = paragraphs[1];
  const fecha = (new Date()).toLocaleString();
  paragraph.innerHTML = 'parrafos en el documento: '+paragraphs.length + " (" + fecha + ")";
}
