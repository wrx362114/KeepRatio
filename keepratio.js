( function ( $ ) {
    // Collection method.
    $.fn.keepratio = function ( config, resize ) {//config中需要最小宽度与高宽比
        config.minheight = config.minwidth * config.aspectratio;

        setInterval( function () {
            if ( window.keepratioResizeState != "ok" ) {
                var height = window.innerHeight;
                var width = window.innerWidth;
                if ( width < config.minwidth || height < config.minheight ) {
                    width = config.minwidth;
                    height = config.minheight;
                }
                else {
                    if ( height / config.aspectratio > width ) {//判断以哪个为基准
                        height = width * config.aspectratio;
                    } else {
                        width = height / config.aspectratio;
                    }
                }
                $( ".body" ).css( "width", width ).css( "height", height ).css( "margin-top", ( window.innerHeight - height ) > 0 ? (( window.innerHeight - height ) / 2) : 0 );
                if ( resize ) {
                    resize();
                }
                window.keepratioResizeState = "ok";
            }
        }, 500 );
        $( window ).resize( function () {
            window.keepratioResizeState = "no";
        } );
    };

}( jQuery ) );