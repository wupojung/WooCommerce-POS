var FormView = require('lib/config/form-view');
var $ = require('jquery');
var Tooltip = require('lib/behaviors/tooltip');

module.exports = FormView.extend({

  tagName: 'table',

  className: 'wc_pos-form-table',

  initialize: function (options) {
    options = options || {};
    this.template = options.tmpl.trim();
    // modal setup
    this.modal = {
      header: {
        title: this.model.get('title')
      },
      footer: {
        buttons: [
          {
            type: 'message'
          },{
            action    : 'save',
            className : 'button-primary',
            icon      : 'prepend'
          }
        ]
      }
    };
  },

  behaviors: {
    Tooltip: {
      behaviorClass: Tooltip
    }
  },

  onRender: function(){
    var self = this;
    this.$('input, select, textarea').each(function(){
      var name = $(this).attr('name');
      if(name){
        self.addBinding(null, '*[name="' + name + '"]', name);
      }
    });

    if(this.model.get('hasIcon')){
      this.$('#icon').closest('tr').show();
    }
  }

});