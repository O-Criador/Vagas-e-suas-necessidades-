// Armazenar dados no localStorage
localStorage.setItem('email', 'exemplo@exemplo.com');
localStorage.setItem('senha', 'minhasenha123');

// Recuperar dados do localStorage
var email = localStorage.getItem('email');
var senha = localStorage.getItem('senha');

// Exemplo de uso dos dados recuperados
console.log('E-mail: ' + email);
console.log('Senha: ' + senha);
// Funções de clique para os botões
document.getElementById('facebook-button').addEventListener('click', function(event) {
    event.preventDefault();
    // Adicione aqui o código para redirecionar para o link do Facebook
  });

  document.getElementById('twitter-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou no botão do Twitter');
    // Adicione aqui o código para redirecionar para o link do Twitter
  });

  document.getElementById('instagram-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou no botão do Instagram');
    // Adicione aqui o código para redirecionar para o link do Instagram
  });

  document.getElementById('linkedin-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou no botão do LinkedIn');
    // Adicione aqui o código para redirecionar para o link do LinkedIn
  });
  function redirecionar() {
    window.location.href = "inicial.html";}