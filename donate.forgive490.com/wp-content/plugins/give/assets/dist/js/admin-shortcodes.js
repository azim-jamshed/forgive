(()=>{var e,t;jQuery((function(o){var n=o(this);window.render_continue_button_title_field=function(){var e=o(".mce-txt",".mce-give-display-style").text();-1!==o.inArray(e,["- Select -","All Fields"])?o(".mce-give-continue-button-title").closest(".mce-container").hide():o(".mce-give-continue-button-title").closest(".mce-container").show()},window.scForm={open:function(t){var n,i,c,s,r,a=tinymce.get(t);a&&(n={action:"give_shortcode",shortcode:e},o.post(ajaxurl,n,(function(t){if(t.body){if(0===t.body.length)return window.send_to_editor("["+t.shortcode+"]"),void scForm.destroy();o.each(t.body,(function(e,o){"display_style"===o.name&&(t.body[e].onselect=function(){render_continue_button_title_field()})}));var n={title:t.title,body:t.body,classes:"sc-popup",minWidth:320,buttons:[{text:t.ok,classes:"primary sc-primary",onclick:function(){for(var t in r=a.windowManager.getWindows()[0],c=scShortcodes[e],s=!0,c)if(c.hasOwnProperty(t)&&void 0!==(i=r.find("#"+t)[0])&&""===i.state.data.value){s=!1,new Give.modal.GiveErrorAlert({modalContent:{desc:c[t],cancelBtnTitle:Give.fn.getGlobalVar("ok")}}).render();break}s&&r.submit()}},{text:t.close,onclick:"close"}],onsubmit:function(e){var o="";for(var n in e.data)e.data.hasOwnProperty(n)&&""!==e.data[n]&&(o+=" "+n+'="'+e.data[n]+'"');window.send_to_editor("["+t.shortcode+o+"]")},onclose:function(){scForm.destroy()},onopen:function(){var e=o(".mce-sc-popup");e.css({width:e.width(),height:e.height(),overflow:"auto"}),render_continue_button_title_field()}};t.ok.constructor===Array&&(n.buttons[0].text=t.ok[0],n.buttons[0].onclick="close",delete n.buttons[1]),a.windowManager.open(n)}else console.error("Bad AJAX response!")})))},destroy:function(){var e=o("#scTemp");e.length&&(tinymce.get("scTemp").remove(),e.remove())}};var i=function(){void 0!==t&&t.removeClass("active").parent().find(".sc-menu").hide()};n.on("click",(function(e){o(e.target).closest(".sc-wrap").length||i()})),n.on("click",".sc-button",(function(e){e.preventDefault(),(t=o(this)).hasClass("active")?i():t.addClass("active").parent().find(".sc-menu").show()})),n.on("click",".sc-shortcode",(function(t){t.preventDefault(),(e=o(this).attr("data-shortcode"))?(tinymce.get(window.wpActiveEditor)?tinymce.execCommand("Give_Shortcode"):(o("#scTemp").length||(o("body").append('<textarea id="scTemp" style="display: none;" />'),tinymce.init({mode:"exact",elements:"scTemp",plugins:["give_shortcode","wplink"]})),setTimeout((function(){tinymce.execCommand("Give_Shortcode")}),200)),setTimeout((function(){i()}),100)):console.warn("That is not a valid shortcode link.")}))}))})();