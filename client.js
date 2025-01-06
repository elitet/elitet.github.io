window.TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1782/1782440.png',
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
