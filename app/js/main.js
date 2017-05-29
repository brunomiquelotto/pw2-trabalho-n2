$(document).ready(function(){

        //Scroll Suave #Id
        $('a[href*=\\#]').on('click', function(event){     
        	event.preventDefault();
        	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });


        //Verifica Posicao Scroll do Topo da Página
        $(document).scroll(function () { 
        	var posicaoScroll = $(document).scrollTop(); 
        	console.log(posicaoScroll);
        	if (posicaoScroll > 600){
        		$('#upSite').css("display", "block");
        	}else{
        		$('#upSite').css("display", "none");
        	}
        })


        //Sistema de verificação Toggle Serviços Home
        $("#sdesktop").addClass("is-active");
        $("#panel1").addClass('ativaBlocoServico');

        $(".tabs-title a").click(function(){
        	var clicado = $(this).attr('id');  

        	if(clicado) {         
        		$(".tabs-title a").removeClass("ativaBlocoServico");
        		$(".tabs-title a").removeClass("is-active");
        		$(this).addClass("is-active");
        	}
        	switch(clicado) {
        		case 'sdesktop':
        		$("#panel3").removeClass('ativaBlocoServico');
        		$("#panel2").removeClass('ativaBlocoServico');
        		$("#panel1").addClass('ativaBlocoServico');
        		break;
        		case 'sweb':
        		$("#panel3").removeClass('ativaBlocoServico');
        		$("#panel1").removeClass('ativaBlocoServico');
        		$("#panel2").addClass('ativaBlocoServico');
        		break;
        		case 'sapp':
        		$("#panel1").removeClass('ativaBlocoServico');
        		$("#panel2").removeClass('ativaBlocoServico');
        		$("#panel3").addClass('ativaBlocoServico');
        		break;

        		default:
        		$(".tabs-title a").toggle('ativaBlocoServico')
        	}

        });

    });