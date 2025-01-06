window.TrelloPowerUp.initialize({
  // Botão no card
  'card-buttons': function (t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/833/833604.png',
      text: 'Definir Estimativa',
      callback: function (t) {
        return t.popup({
          title: 'Estimativa de Desenvolvimento',
          url: 'popup.html',
          height: 220
        });
      }
    }];
  },

  // Badge que aparece no card
  'card-badges': function (t) {
    return t.get('card', 'shared', 'estimativa')
      .then(function (estimativa) {
        if (estimativa) {
          return [{
            icon: "https://cdn-icons-png.flaticon.com/512/833/833604.png",
            text: estimativa
          }];
        } else {
          return [];
        }
      });
  }
});
