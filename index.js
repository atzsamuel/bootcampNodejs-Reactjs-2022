let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);

if(paragraphs.length > 0){
  let paragraph = paragraphs[0];
  paragraph.innerHTML = 'Bienvenidos al bootcamp!';
}
