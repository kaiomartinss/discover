// Função para alternar o tema
function toggleTheme() {
  document.body.classList.toggle('light');
  
  // Salvar preferência no localStorage
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
}

// Carregar tema salvo ao carregar a página
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
}

// Carregar tema ao iniciar
loadTheme();
