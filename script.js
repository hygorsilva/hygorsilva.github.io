var popup = document.getElementById("popup");
var selectedText = "";

document.addEventListener("mouseup", function(e) {
  selectedText = window.getSelection().toString();

  if (selectedText !== "") {
    popup.style.left = e.pageX + "px";
    popup.style.top = e.pageY + "px";
    popup.classList.add("show");
  } else {
    popup.classList.remove("show");
  }
});
function optionSelected(option) {
  console.log("Opção selecionada: " + option);

  if (option === 1) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode('<div class="container">' + 
                           ' <div class="m-5 row justify-content-center">\n' +
                           '  <div class="m-5 col-sm-12 flex-center text-center">\n' +
                           '   <p>\n' +
                           '        <strong>' + selectedText + '</strong>\n' +
                           '      </p>\n' +
                           '    </div>\n' +
                           '  </div>' +
                           '</div>');

  
   body.appendChild(newNode);
var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);












  }

  popup.classList.remove("show");


    if (option === 111) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode('<div class="container">\n' +
                           '  <div class="row justify-content-center mb-5">\n' +
                           '    <div class="col-md-12">\n' +
                           '      <p class="mb-4">\n' +
                           '           <strong>\n' + selectedText + '</strong>\n' + '<br>\n'+'<br>\n'+'</p>\n'+'</div>\n'+'</div>\n'+'</div>\n' +
                           '      ' + 
                           
                           '');

  
   body.appendChild(newNode);
var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");


if (option === 2) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode('<div class="container">\n' +
                           '  <div class="row justify-content-center mb-5">\n' +
                           '    <div class="col-md-12">\n' +
                           '      <p class="mb-4">\n' +
                           '        ' + selectedText + '<br>\n' +
                           '      <br>' +
                           
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");






  if (option === 3) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '' + selectedText +'<br>'+'<br>'+
                                                   
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");


  if (option === 4) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '' + selectedText + '<br>\n'+'<br>\n'+'</p>\n'+'</div>\n'+'</div>\n'+'</div>\n' + 
                                                   
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");


  if (option === 5) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '' +  '<div class="container">\n'+'<div class="row justify-content-center mb-5">\n'+
                           '<div class="col-md-12 flex-center">\n'+
                           '<div class="col-md-12 flex-center">\n'+
                           '<div class="col-md-12 bloco-tracejado">\n'+
                           '<p>\n' + 
                           '<strong>\n' + selectedText + 
                           '</strong>\n' + 
                           '<br>\n' +
                                                   
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");



    if (option === 6) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '' +  '<strong>'+ selectedText + '</strong>' + '<br>' + '<br>' +
                                                   
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");



    if (option === 7) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '' + selectedText + '</p></div></div></div></div></div>' + 
                                                   
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");


      if (option === 8) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '<!-- Placa azul -->\n' + 
                           '<div class="container">\n'+
                           '<div class="row">\n'+
                           '<div class="col-md-12 d-flex justify-content-center">\n'+
                           '<img class="placas" src="assets/NOME DA IMAGEM.png" alt="\n'+   selectedText + 
                           '" />\n' + 
                           '</div>\n'+ 
                           '</div>\n'+ 
                           '</div>\n'+
                                                   
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");





      if (option === 9) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '<div class="container">\n' + '<div class="row justify-content-center">\n'+'<div class="col-md-12">\n'+'</div>\n'+'</div>\n'+ '</div>\n'+'<div class="container">\n'+'<div class="row justify-content-center mb-4">\n'+'<div class="col-md-12">\n'+ '<div class="flex-center">\n'+ '<div>\n'+ '<p class="mb-4">\n'+   selectedText + '</p>\n'+   
                             '</div>\n'+ '<div class="flex-center col-3 margin-top">\n'+ '<img class="img-dispositivos" src="assets/NOME DA IMAGEM.png" alt="DESCRIÇÃO" />\n' +  '</div>\n'+'</div>\n'+                        
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");


        if (option === 10) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '<div class="container">\n' + '</div>\n'+'<div class="container">\n'+'<div class="row justify-content-center mb-4">\n'+'<div class="col-md-12">\n'+ '<div class="flex-center">\n'+'<div class="col-3 margin-top">\n'+'<img class="img-dispositivos" src="assets/NOME DA IMAGEM.png" alt="Farol de Carro" />\n'+ '</div>\n'+ '<div>\n'+ '<p class="mb-4">\n'+   selectedText + '</p>\n'+   
                             '</div>\n' +  '</div>\n'+'</div>\n'+ '</div>\n'+  '</div>\n'+                         
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");


        if (option === 11) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var selectedText = range.toString();

    navigator.clipboard.writeText(selectedText)



    var body = document.getElementsByTagName("p")[14];
    var newNode = document.createTextNode(
                           '<div class="container">\n' + '<div class="row justify-content-around">\n'+'<div class="col-md-5">\n'+'<p class="mb-4 text-center">\n'+ selectedText + '</p>\n'+ '</div>\n'+  '<div class="hidden dashed-trace col-md-2" style="width: 3px">'+'</div>\n'+'<div class="col-md-5 margin-top">\n'+'<p class="mb-4 text-center">\n'+  selectedText + '</p>\n'+
                             '</div>\n' +  '</div>\n'+'</div>\n'+                      
                           '');
    body.appendChild(newNode);

var lineBreak = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak);

var lineBreak2 = document.createElement("br");
body.insertAdjacentElement("beforeend", lineBreak2);

  }

  popup.classList.remove("show");






}





function copiarTexto() {
  var textoParaCopiar = document.getElementById("textoParaCopiar").innerText;

  navigator.clipboard.writeText(textoParaCopiar)
    .then(function() {
      console.log("Texto copiado para a área de transferência: " + textoParaCopiar);
      alert("Texto copiado para a área de transferência!");
    })
    .catch(function(error) {
      console.error("Erro ao copiar o texto: ", error);
    });
}



function formatarHTML() {
  var textoHTML = document.getElementById("textoParaCopiar").innerHTML;
  var linhas = textoHTML.split("\n");
  var resultado = "";
  var indentacao = 0;

  for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i].trim();

    if (linha.startsWith("</")) {
      indentacao--;
    }

    resultado += "  ".repeat(indentacao) + linha + "\n";

    if (linha.endsWith("/>") || linha.endsWith("</") || linha.endsWith("-->")) {
      continue;
    }

    if (linha.startsWith("<") && !linha.endsWith(">")) {
      indentacao++;
    }
  }

  document.getElementById("textoParaCopiar").innerHTML = "<pre>" + resultado.trim() + "</pre>";
}



  function atualizarPagina() {
    location.reload();
  }




function importarArquivo() {
  var fileInput = document.getElementById("fileInput");

  if (fileInput.files.length > 0) {
    var arquivo = fileInput.files[0];
    var leitor = new FileReader();

    leitor.onload = function (event) {
      var conteudo = event.target.result;
      document.getElementById("conteudoArquivo").textContent = conteudo;
    };

    leitor.readAsText(arquivo);
  }
}


function subirAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup2");
  popup.classList.add("fade-in");
  popup.style.display = "block";
});

function iniciarAula() {
  var inputAula = document.getElementById("inputAula");
  var conteudoAula = document.getElementById("conteudoAula");
  
  conteudoAula.innerHTML = inputAula.value;
  
  fecharPopup();
}

function fecharPopup() {
  var popup = document.getElementById("popup2");
  popup.style.display = "none";
}
