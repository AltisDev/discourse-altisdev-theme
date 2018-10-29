api.reopenWidget('header-buttons', {
  html(attrs) {
    if (this.currentUser) { return }
    return this.attach('button', { contents: api.h('span.d-button-label', I18n.t('log_in') + " / " + I18n.t('sign_up')),
                                   className: 'btn-primary btn-small login-button',
                                   action: 'showLogin',
                                   icon: 'user' })
  }
})

Discourse._registerPluginCode('0.8.9', function (api) {
  api.decorateWidget('header-icons:before', function (helper) {
      return helper.h('li.dropdown#chat', [helper.h('button.dropdown-toggle#chat-button.icon', {
          'attributes': {
              "type": "button",
              "data-toggle": "dropdown",
              "title": "discord chat"
          } }, helper.h('i.fa.fa-comments-o.chat-button-icon.d-icon')), helper.h('ul.dropdown-menu#chat', [helper.h('li', [helper.h('iframe', {
          "src": 'https://discordapp.com/widget?id=342041941174910986&theme=light', 
          "width": "350",
          "height": "500",
          "allowtransparency": "true",
          "frameborder": "0",
          "id": "chatwidget",
          "name": "chatwidget"
          
      })])])]);
  });
});
