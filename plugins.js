$(document).ready(function() {
    var drk = $('.prot .log .mode .dark');
        lit = $(".prot .log .mode .light");
        ths  = $('this');
        pro  = $('.prot');
        log  = $('.prot .log');
        loin = $(".prot .log .loin");
        nav  = $('.prot .nav');
        nSvg = $('.prot .nav svg');
        cov  = $('.prot .images .cover');
        covP = $('.prot .images .cover p');
        covH = $('.prot .images .cover h1');
        btCv = $('.prot .images .cover h3');
        seBt = $('.prot .images .cover button');
        svBt = $('.prot .images .cover button svg');
        pmci = $('.prot .prom .cic-4');
        big  = $('.prot .prom .big');
        pmc2 = $('.prot .prom .cic-5');
        bgH3 = $('.prot .prom .big h3');
        bgHr = $('.prot .prom .big hr');
        bgH4 = $('.prot .prom .big h4');
        foer = $(".prot .footer");
        grid = $(".prot .footer .grid");
        ftH2 = $(".prot .footer .grid > div h2");
        ftSv = $(".prot .footer .grid > div .grd svg");
        fotP = $(".prot .footer .grid > div .grd p");
        feet = $(".prot div.fot");
        
        lit.click(function() {
            pro.css({
                background:'#fff',
                color:'#111',
                });
            log.css({
                background:'#f0f0f0'
                });
            loin.css('color', '#000');
            nav.css({
                background:'#A0A0A0'
                });
            nSvg.css({
               fill:'#2e3839'
            });
            cov.css({
                background:'#B5B5B5',
                color:'#000',
                opacity:'.75'
                });
            covH.css({
                color:'#101010',
                opacity:'1'
            });
            covP.css({
                font:'bold',
                opacity:'1',
                color:'#000'
            });
            btCv.css({
                border:'2px solid #000'
            });
            seBt.css({
                color:'#000',
            });
            svBt.css({
                fill:'#000'
            });
            pmci.css({
                background:"#0b9ab2",
                color:'#000'
            });
            big.css({
                border:'2px solid #6ca93f',
                
            });
            pmc2.css({
                background:'#fff',
                'border-bottom':'2px solid #6ca93f'
            });
            bgH3.css({
                color:'#6ca93f'
            });
            bgHr.css({
                border:'0.5px solid #0b9ab2'
            });
            bgH4.css({
               color:'#fff' 
            });
            foer.css({
                background:'#777777'
            });
            grid.css('background', '#777777');
            ftH2.css('color', '#84acb0');
            ftSv.css('color', '#6ca93f');
            fotP.css('color', '#000');
            feet.css({
                background:'#f0f0f0',
                color:'#000'
            });
            $('<style>::-webkit-scrollbar-track {background:#cbcbcb;}</style>').appendTo($('body'));
            $('<style>::-webkit-scrollbar-thumb {background:#6ca93f;}</style>').appendTo($('body'));
            drk.css({
                'box-shadow':'none',
                 background:'#bbb'
            });
            lit.css({
                'box-shadow':'-1px 1px 0 1px #568433 inset',
                 background:'#6ca93f'
            });
        });
        drk.click(function() {
            pro.css({
                background:'#262424',
                color:'#fff',
                });
            log.css({
                background:'#283032',
                color:'#333'
                });
            loin.css('color', '#fff');
            nav.css({
                background:'#2e3839'
                });
            nSvg.css({
               fill:'#898c8c'
            });
            cov.css({
                background:'#3c4647',
                color:'#fff',
                opacity:'.8'
                });
            covH.css({
                color:'#FFF'
            });
            covP.css({
                opacity:'1',
                color:'#FFF'
            });
            btCv.css({
                border:'2px solid #fff'
            });
            seBt.css({
                color:'#fff',
            });
            svBt.css({
                fill:'#fff'
            });
            pmci.css({
                background:"#6ca93f",
                color:'#fff'
            });
            big.css({
                border:'2px solid #0b9ab2',
                
            });
            pmc2.css({
                background:'#242424',
                'border-bottom':'2px solid #0b9ab2'
            });
            bgH3.css({
                color:'#0b9ab2'
            });
            bgHr.css({
                border:'0.5px solid #6ca93f'
            });
            bgH4.css({
               color:'#fff' 
            });
            foer.css({
                background:'#2e3839'
            });
            grid.css('background', '#2e3839');
            ftH2.css('color', '#Fff');
            ftSv.css('color', '#6ca93f');
            fotP.css('color', '#fff');
            feet.css({
                background:'#283032',
                color:'#fff'
            });
            $('<style>::-webkit-scrollbar-track {background:#072429;}</style>').appendTo($('body'));
            $('<style>::-webkit-scrollbar-thump {background:#0b9ab2;}</style>').appendTo($('body'));
            drk.css({
                'box-shadow':'1px 1px 0 1px #568433 inset',
                 background:'#6ca93f'
            });
            lit.css({
                'box-shadow':'none',
                 background:'#bbb'
            });
        });
});