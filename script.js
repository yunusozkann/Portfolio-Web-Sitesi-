(function() {
  // Menü animasyonu
  const menu = document.querySelector('.nav');
  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  // Başlık rengini değiştirme
  const baslikRenkleri = ['#f00', '#00f', '#0f0'];
  let renkSayaci = 0;

  document.querySelector('#projeler h3.baslik-rengi').addEventListener('click', function() {
    renkSayaci = (renkSayaci + 1) % baslikRenkleri.length;
    this.style.color = baslikRenkleri[renkSayaci];
  });
})();
