//custom css overrides
import '../css/custom.scss';

import $ from 'jquery';
import hljs from 'highlight.js';
import Vue from 'vue';
import lozad from 'lozad';
import ClipboardJS from 'clipboard';

var data = {
  activeMenu: ""
};

var app = new Vue({
  el: '.brandSidebar',
  data: data,
  methods: {
    navSwitch: function(navItem) {
      //if active item is the same item collapse everything
      if (navItem == this.activeMenu) {
        this.activeMenu = "";
      } else {
        this.activeMenu = navItem;
      }

    }
  }
})

function anchorCopy() {
  $('[id]').each(function(){
    var id = $(this).attr('id');
    var tagName = $(this).prop("tagName");
    if(tagName == "DIV"){
      $(this).find(":header").eq(0).attr("data-clipboard-text", "https://www2.arccorp.com/styleguide/#" + id);
    }
    else {
      $(this).attr("data-clipboard-text", "https://www2.arccorp.com/styleguide/#" + id);
    }

  });

  new ClipboardJS('[data-clipboard-text]');
}

$(document).ready(function() {
  hljs.initHighlightingOnLoad();
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  anchorCopy()
})
