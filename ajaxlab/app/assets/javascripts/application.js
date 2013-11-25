// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

jQuery(document).ready(function() {
    $("button#time_button").bind('click', function(e){
        //disable click while we make a post request
        e.preventDefault();
        ajax_calls.update_time();
    })
});


var ajax_calls = {
    update_time : function(){
        $.ajax({
            type: "GET",
            url: "/",
            dataType: "json",
            success: function(e){
                $('div#time').html(e.message)
            },
            error: function(e){
                var msg;
                try{
                    msg=JSON.parse(e.responseText).message
                }catch(ex){
                    msg ="ERROR"
                };
                alert(msg);
            }
        });
    }
};
