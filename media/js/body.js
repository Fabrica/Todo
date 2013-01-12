$(function(){

    var standartAjax = {
        url: 'save.php',
        type: 'POST',
        dataType: 'json',
        timeout: 30000
    };
    var intervalOnLine = 10000;

    $('#makeNewInput').focus();

    var $this = $('.container');
    $this
        .on('click', '.js-edit', function() {
            var span = $(this).siblings('label').find('span'),
                w = span.width(),
                text = span.text();
            if(w<100){w=200;}
            span.siblings('input').attr({disabled:'disabled'});
            $(this).parent('.oneDoIt').addClass('editableNow');
            span.html(
                $('<form />').addClass('saveOnBlur').html(
                    $('<div/>').addClass('input-append').html(
                        $('<input />').addClass('saveOnBlurInput').val(text).width(w+100).data({oldText:text})
                    )
                )
            );
            span.find('input').focus();
            return false;
        })
        .on('blur', '.saveOnBlurInput', function() {
            var p = $(this).parents('.oneDoIt'),
                text = $(this).data('oldText');
            p.removeClass('editableNow');
            p.find('label span').text(text);
            return false;
        })
        .on('submit', '.saveOnBlur', function() {
            // TODO: Отправить на сохранение
            var $this = $(this),
                text = $this.find('input').val();
            var p = $this.parents('.oneDoIt').addClass('loading');
            $.ajax($.extend({},standartAjax,{
                data: { id: p.data('taskid'), text: text },
                success: function(data) {
                    if ( typeof(data.success) != 'undefined' && data.success ) {
                        p.removeClass('loading').addClass('success');
                        setTimeout( function() {
                            p.removeClass('success');
                        }, 500);
                        $this.hide();
                        $this.after(text);
                        p.removeClass('editableNow');
                        p.find('input[type="checkbox"]').attr({disabled:false});
                        $this.remove();
                    } else {
                        p.removeClass('loading').addClass('error');
                    }
                },
                error: function() {
                    p.removeClass('loading').addClass('error');
                }
            }));
            return false;
        })
        .on('change', 'input[type="checkbox"]', function(e) {
            var p = $(this).parents('.oneDoIt');
            p.addClass('loading');
            $.ajax($.extend({},standartAjax,{
                data: { id: p.data('taskid'), status: e.target.checked?'ready':'wait' },
                success: function(data) {
                    if ( typeof(data.success) != 'undefined' && data.success ) {
                        if ( e.target.checked ) {
                            p.removeClass('loading').addClass('success').addClass('doing');
                        }
                        else {
                            p.removeClass('loading').addClass('success').removeClass('doing');
                        }
                        setTimeout( function() {
                            p.removeClass('success');
                        }, 500);
                    } else {
                        p.removeClass('loading').addClass('error');
                    }
                },
                error: function() {
                    p.removeClass('loading').addClass('error');
                }
            }));
            return false;
        })
        .on('submit', '.makeNew', function() {
            var $this = $(this),
                text = $this.find('input').val();
            if ( text == '' ) {
                return false;
            }
            var p = $('<p/>').addClass('oneDoIt loading').html( '<label class="checkbox"><input type="checkbox"> <span>'
                +text+'</span></label><a class="js-edit" href="#"><i class="icon-pencil"></i></a><br><i>Добавил '
                +$("#username").val()+' только что</i>' );
            $("#afterThis").after(p);
            $.ajax($.extend({},standartAjax,{
                data: { text: text },
                success: function(data) {
                    if ( typeof(data.success) != 'undefined' && data.success ) {
                        p.removeClass('loading').addClass('success');
                        p.data({taskid:data.id});
                        setTimeout( function() {
                            p.removeClass('success');
                        }, 500);
                        $this.find('input').val('');
                        var d = new Date;
                        lastTimeOnLine = d.getTime();
                    } else {
                        p.removeClass('loading').addClass('error');
                    }
                },
                error: function() {
                    p.removeClass('loading').addClass('error');
                }
            }));
            return false;
        })
        .on('blur', '#username', function() {
            document.cookie="username="+$(this).val()+"; path=/; expires=Mon, 01-Jan-2015 00:00:00 GMT";
        });

    var d = new Date;
    var lastTimeOnLine = d.getTime();

    /*
    var beOnLine = setInterval(function() {
        $.ajax({
            url: 'online.php',
            data: {time: lastTimeOnLine},
            type: 'GET',
            dataType: 'html',
            success: function(data) {
                $("#afterThis").after(data);
            }
        });
        var d = new Date;
        lastTimeOnLine = d.getTime();
    }, intervalOnLine);
*/
});