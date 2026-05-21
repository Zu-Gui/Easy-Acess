let tamanhoFonte = 16;

/* TOPO */

function aumentarFonte(){
    tamanhoFonte += 1;
    document.body.style.fontSize = tamanhoFonte + 'px';
}

function diminuirFonte(){
    tamanhoFonte -= 1;
    document.body.style.fontSize = tamanhoFonte + 'px';
}

function modoEscuro(){
    document.body.classList.toggle('dark');
}

function notificacao(){
    alert('Leitura TalkBack ativada!');
}

function perfil(){

    alert('Abrindo perfil do usuário...');

    window.location.href = "TelaPerfil.html";
}
function sairConta(){
    alert('Deseja sair?');
    window.location.href = "Index.html";
}
/**/
function adicionarLembrete(){

    document.getElementById("modalLembrete").style.display = "flex";
}

function fecharLembrete(){

    document.getElementById("modalLembrete").style.display = "none";
}

function salvarLembrete(){

    const titulo = document.getElementById("tituloEvento").value;
    const data = document.getElementById("dataEvento").value;
    const hora = document.getElementById("horaEvento").value;

    if(titulo === "" || data === "" || hora === ""){

        alert("Preencha todos os campos!");
        return;
    }

    alert("Lembrete salvo com sucesso!");

    fecharLembrete();
}

/* BUSCA SERVIÇOS */

const buscarServico = document.getElementById("buscar");

if(buscarServico){

    const cards = document.querySelectorAll(".card-servico");

    buscarServico.addEventListener("input", function () {

        const texto = buscarServico.value.toLowerCase();

        cards.forEach(function(card) {

            const titulo = card.textContent.toLowerCase();

            if(titulo.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

/* MODAL AGENDAMENTO */

function abrirModalAgendamento(){
    const modal = document.getElementById("modalAgendamento");

    if(modal){
        modal.style.display = "flex";
    }
}

function fecharModalAgendamento(){
    const modal = document.getElementById("modalAgendamento");

    if(modal){
        modal.style.display = "none";
    }
}

function confirmarAgendamento(){
    alert("Agendamento realizado com sucesso!");
    fecharModalAgendamento();
}

/* GERENCIAMENTO SENHAS */

document.addEventListener("DOMContentLoaded", function(){

    const buscar = document.getElementById("buscar");

    if(buscar){

        buscar.addEventListener("input", function(){

            const texto = buscar.value.toLowerCase();

            const cards = document.querySelectorAll(".card-senha");

            cards.forEach(function(card){

                const conteudo = card.textContent.toLowerCase();

                if(conteudo.includes(texto)){

                    card.style.display = "flex";

                }else{

                    card.style.display = "none";

                }

            });

        });

    }

});

function abrirModal(){

    const modal = document.getElementById("modal");

    if(modal){
        modal.style.display = "flex";
    }
}

function adicionarSenha(){

    const nome = document.getElementById("nomeServico");
    const email = document.getElementById("emailServico");
    const senha = document.getElementById("senhaServico");

    if(!nome || !email || !senha){
        return;
    }

    if(nome.value === "" || email.value === "" || senha.value === ""){
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.querySelector(".lista-senhas");

    if(!lista){
        return;
    }

    const novoCard = document.createElement("div");

    novoCard.classList.add("card-senha");

    novoCard.innerHTML = `
    
<div class="dados-esquerda">

    <div>
        <h3>${nome.value}</h3>
        <p>${email.value}</p>
    </div>

</div>

<div class="senha" data-senha="${senha.value}">
    *****
</div>

<div class="acoes">

    <i class="fa-regular fa-eye" onclick="mostrarSenha(this)"></i>

    <i class="fa-solid fa-pen"></i>

    <i class="fa-regular fa-trash-can" onclick="excluirSenha(this)"></i>

</div>
    
    `;

    lista.appendChild(novoCard);

    document.getElementById("modal").style.display = "none";

    nome.value = "";
    email.value = "";
    senha.value = "";
}

function mostrarSenha(icone){

    const card = icone.parentElement.parentElement;

    const senhaDiv = card.querySelector(".senha");

    const senhaReal = senhaDiv.getAttribute("data-senha");

    if(senhaDiv.textContent.trim() === "*****"){

        senhaDiv.textContent = senhaReal;

        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");

    }else{

        senhaDiv.textContent = "*****";

        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");

    }

}

function excluirSenha(icone){

    const card = icone.parentElement.parentElement;

    card.remove();

}

/* PERFIL */

let editando = false;

function editarPerfil(){

    const campos = [
        document.getElementById('nome'),
        document.getElementById('email'),
        document.getElementById('data'),
        document.getElementById('telefone'),
        document.getElementById('sexo'),
        document.getElementById('cpf')
    ];

    const botao = document.getElementById('btnEditar');

    if(editando == false){

        campos.forEach(function(campo){

            if(campo){
                campo.disabled = false;
            }

        });

        if(botao){
            botao.innerHTML =
            '<i class="fa-solid fa-floppy-disk"></i> SALVAR';
        }

        editando = true;

    }else{

        campos.forEach(function(campo){

            if(campo){
                campo.disabled = true;
            }

        });

        if(botao){
            botao.innerHTML =
            '<i class="fa-solid fa-pen"></i> EDITAR';
        }

        alert('Informações salvas com sucesso!');

        editando = false;
    }
}

/*fim perfil*/

/*tela config*/
let volume = 78;

function aumentarVolume(){

    if(volume < 100){

        volume++;

        document.getElementById("valorVolume").innerText = volume;
    }
}

function diminuirVolume(){

    if(volume > 0){

        volume--;

        document.getElementById("valorVolume").innerText = volume;
    }
}
function toggleFonte(elemento){

    const btnAumentar = document.getElementById("btnAumentar");
    const btnDiminuir = document.getElementById("btnDiminuir");

    if(elemento.checked){

        btnAumentar.style.display = "inline-block";
        btnDiminuir.style.display = "inline-block";

    }else{

        btnAumentar.style.display = "none";
        btnDiminuir.style.display = "none";
    }
}

function toggleContraste(elemento){

    const btnContraste = document.getElementById("btnContraste");

    if(elemento.checked){

        btnContraste.style.display = "inline-block";

    }else{

        btnContraste.style.display = "none";
    }
}

function toggleLeitura(elemento){

    let botaoSom = document.getElementById('btnNotificacao');

    if(elemento.checked){
        botaoSom.style.display = 'flex';
    }

    else{
        botaoSom.style.display = 'none';
    }
}

/* fim telaconfig*/


function abrirPagina(pagina){

    window.location.href = pagina;
}

function abrirPopup(){
    document.getElementById('popupBancos').style.display = 'flex';
}

function fecharPopup(){
    document.getElementById('popupBancos').style.display = 'none';
}

function adicionarBanco(nomeBanco){

    let lista = document.getElementById('listaBancos');

    let logo = '';

    if(nomeBanco == 'Itaú'){
        logo = 'itau.png';
    }

    else if(nomeBanco == 'Bradesco'){
        logo = 'bradesco.png';
    }

    else if(nomeBanco == 'Santander'){
        logo = 'santander.png';
    }

    else if(nomeBanco == 'Banco do Brasil'){
        logo = 'bb.png';
    }

    lista.innerHTML += `

    <div class="card-banco">

        <img src="${logo}" class="logo-banco">

        <div class="info-banco">

            <h3>${nomeBanco}</h3>

            <p>Conta adicionada com sucesso.</p>

            <div class="acoes">

                <button class="btn-acessar">
                    Acessar
                </button>

                <button class="btn-senha">
                    Ver senha
                </button>

            </div>

        </div>

    </div>

    `;

    fecharPopup();
}




/* POPUP AJUDA */

function abrirPopupPergunta(titulo, texto){

    document.getElementById("tituloPopup").innerText = titulo;

    document.getElementById("textoPopup").innerText = texto;

    document.getElementById("popupAjuda").style.display = "flex";
}

function fecharPopupAjuda(){

    document.getElementById("popupAjuda").style.display = "none";
}
function irParaTela() {
    window.location.href = "TelaFuncional.html";
}
function entrar() {
    window.location.href = "TelaFuncional.html";
}