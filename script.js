
let musicas = [
    {titulo:'Guitar solo', artista:'Ruan Camargo', src:'musicas/We Ride! - Reed Mathis.mp3', img:'imagens/rock.jpg'},
    {titulo:'Samba raiz', artista:'Bossa Nova ', src:'musicas/Ella Vater - The Mini Vandals.mp3', img:'imagens/samba.jpg'},
    {titulo:'Música piano', artista:'John Green', src:'musicas/A Brand New Start - TrackTribe (1).mp3', img:'imagens/piano.jpg'},
    {titulo:'Brasilía Amarela', artista:'Mamonas Assasinas', src:'musicas/Amarela.mp3', img:'imagens/mamonas.jpg'},
    {titulo:'Come As You Are', artista:'Nirvana', src:'musicas/Nirvana - Come As You Are.mp3', img:'imagens/NirvanaCome.jpg'},
    {titulo:'Lithium', artista:'Nirvana', src:'musicas/Nirvana - Lithium.mp3', img:'imagens/NirvanaLithium.jpg'},
    {titulo:'Smells Like Teen Spirit', artista:'Nirvana', src:'musicas/Nirvana - Smells Like Teen Spirit.mp3', img:'imagens/NirvanaSmells.jpg'},
    {titulo:'Something In The Way', artista:'Nirvana', src:'musicas/Nirvana - Something In The Way.mp3', img:'imagens/NirvanaSomething.jpg'}
    
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 8;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 8){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
