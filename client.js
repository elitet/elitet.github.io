window.TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
      icon: 'https://devmm.com.br/logo.png',
      text: 'Definir Estimativa',
      callback: function (t) {
        return t.popup({
          title: 'Estimativa de Desenvolvimento',
          url: 'popup.html',
          height: 200
        });
      }
    }];
  },

  'card-badges': function (t) {
    return t.get('card', 'shared', 'estimativa')
      .then(function (estimativa) {
        if (estimativa) {
          return [{
            text: `${estimativa} horas`,
            color: 'blue'
          }];
        } else {
          return [];
        }
      });
  }
});
