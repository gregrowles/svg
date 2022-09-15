// -------------------------------------------
// -- AppUtil Class/Methods

function svgUtil() {}

svgUtil.paddCols = function( splArr )
{
    var ret = [];

    for (var i = 0; i < splArr.length; i++)
    {
        var col = splArr[ i ];

        for (var r = 0; r < ( 6 - ( splArr[ i ] ).toString().length ); r++)
        {
            col += '0';
        }

        ret.push( col );
    }

    return ret;
}

svgUtil.create_circleIconFromAddress = function( w, h, addr, parm )
{
    //var cols = colArr !== undefined ? colArr : [ "#FF0055", "#AA108D", "#5521C6", "#0033FF" ];
    var cols = svgUtil.paddCols( addr.substring(2).match(/.{1,6}/g) );
    var circStroke = parm !== undefined && parm.stroke !== undefined ? parm.stroke : '#fff';
    var circFill = parm !== undefined && parm.fill !== undefined ? parm.fill : '#000'; //'rgba(232,231,232,0.25)';

    createBubble = function( cx, cy, r, parent, seqId )
    {
        var rndId = seqId !== undefined ? seqId : Util.generateRandomNumber( 1 ); //
        var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circ.setAttribute( 'class', 'bubble circ_' + rndId );//
        circ.setAttribute('cx', cx);
        circ.setAttribute('cy', cy);
        circ.setAttribute('r', r);
        parent.appendChild( circ );
    }

    var yRows = 5;
    var s_r = ( w / 2 ) / (yRows + 1.5); // 6.5 // SmallCircle_Radius
    var m_strokeW = s_r / (yRows - 2); // 3 // MainCircle_StrokeWidth
    var circStrokeW = parm !== undefined ? parm.strokeWidth : m_strokeW;

    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svgElement.setAttribute('width', w + 'px');
    svgElement.setAttribute('height', h + 'px');

    if ( parm !== undefined && parm.pulse === true )
    {
        var svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'devs'); //
        var svgStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style'); //
    
        svgElement.appendChild(svgDefs); //
        svgDefs.appendChild(svgStyle); //
    
        svgStyle.innerHTML = Templates.css_svg_pulsingCircles;
    }

    // BOUNDING BG BOX
    var svgGroupBox;
    svgGroupBox = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    svgElement.appendChild(svgGroupBox);

    var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circ.setAttribute('cx', w/2);
    circ.setAttribute('cy', h/2);
    circ.setAttribute('r', (h-(m_strokeW*2))/2);
    circ.setAttribute('stroke', circStroke ); //#E8E7E7 '#FFF'
    circ.setAttribute('stroke-width', circStrokeW);
    circ.setAttribute('fill', circFill); //#F7F6F6
    circ.setAttribute( 'shape-rendering', 'geometricPrecision' );
    svgGroupBox.appendChild( circ );

    // BACKGROUND COLOR BLOCK
    var svgGroup;
    svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    svgGroup.setAttribute('stroke-linecap', 'square');
    svgElement.appendChild(svgGroup);

    var cXpos_middle = h/2;
    var cYpos_start = (m_strokeW * 2) + (s_r/1);
    var counter = 1;

    for (var i = 0; i < yRows; i++)
    {
        //console.log( 'yRows', counter, i, yRows );
        createBubble( cXpos_middle, cYpos_start, s_r, svgGroup, counter );

        if ( i < (yRows-1) )
        {
            createBubble( cXpos_middle - (s_r * 2.1), cYpos_start + (s_r*1.2), s_r, svgGroup, counter );
            createBubble( cXpos_middle + (s_r * 2.1), cYpos_start + (s_r*1.2), s_r, svgGroup, counter );
        }

        if ( i < (yRows-2) )
        {
            createBubble( cXpos_middle - (s_r * 4.2), cYpos_start + (s_r*2.4), s_r, svgGroup, counter );
            createBubble( cXpos_middle + (s_r * 4.2), cYpos_start + (s_r*2.4), s_r, svgGroup, counter );
        }

        // move down
        cYpos_start += ( s_r * 2 ) + s_r/2.3;
        counter ++;
    }

    //return (svgElement.outerHTML);
    var dv = $( '<div style="display:none;position:absolute;width:0;height:0;"></div>' );
    var id = '_dvcirc' + new Date().getTime();

    dv.attr( 'id', id );

    $( 'body' ).append( dv );
    dv.html( svgElement.outerHTML );

    var bubbles = dv.find( '.bubble');
    var iOffset = 0, iCol;

    $.each( bubbles, function( i, circ ){

        if ( ( i - (iOffset * cols.length) ) < cols.length ) 
        {
            // 
        }
        else
        {
            iOffset ++;
        }

        iCol = ( i - (iOffset * cols.length) );

        $( circ ).attr( 'fill', '#' + cols[ iCol ] );

    });

    var ret = dv.html();

    dv.remove();

    return ret;
}

svgUtil.create_glowingCircleIconsFromAddress = function( w, h, addr, parm )
{
    //var cols = colArr !== undefined ? colArr : [ "#FF0055", "#AA108D", "#5521C6", "#0033FF" ];
    var cols = svgUtil.paddCols( addr.substring(2).match(/.{1,6}/g) );
    var circStroke = parm !== undefined && parm.stroke !== undefined ? parm.stroke : '#fff';
    var circFill = parm !== undefined && parm.fill !== undefined ? parm.fill : '#000'; //'rgba(232,231,232,0.25)';

    createBubble = function( cx, cy, r, parent, seqId )
    {
        var rndId = seqId !== undefined ? seqId : Util.generateRandomNumber( 1 ); //
        var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circ.setAttribute( 'class', 'bubble circ_' + rndId );//
        circ.setAttribute('cx', cx);
        circ.setAttribute('cy', cy);
        circ.setAttribute('r', r);
        parent.appendChild( circ );
    }

    createBubbleGlow = function( cx, cy, r, parent, seqId )
    {
        var rndId = seqId !== undefined ? seqId : Util.generateRandomNumber( 1 ); //
        var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circ.setAttribute( 'class', 'glow glow_' + rndId );//
        circ.setAttribute('cx', cx);
        circ.setAttribute('cy', cy);
        circ.setAttribute('r', r);
        parent.appendChild( circ );
    }

    var yRows = 5;

    // larger circles (glow)
    var s_r = ( w / 2 ) / (yRows + 1.5); //play with last value (1.5) to change depth perception
    var m_strokeW = s_r / (yRows - 2);
    var circStrokeW = parm !== undefined ? parm.strokeWidth : m_strokeW;

    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svgElement.setAttribute('width', w + 'px');
    svgElement.setAttribute('height', h + 'px');

    var glowDefs = svgUtil.createGlowDefs( cols );
    var svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs'); //

    svgElement.appendChild(svgDefs); // defs for background glow effect

    if ( parm !== undefined && parm.pulse === true )
    {
        var svgDevs = document.createElementNS('http://www.w3.org/2000/svg', 'devs'); //
        var svgStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style'); //
    
        svgElement.appendChild(svgDevs); //
        svgDevs.appendChild(svgStyle); //
    
        svgStyle.innerHTML = Templates.css_svg_pulsingGlowCircles;
    }

    var keys = Object.keys( glowDefs );
    //console.log( 'glowDefs', glowDefs );

    svgElement.appendChild(svgDefs);

    for (var i = 0; i < keys.length; i++)
    {
        svgDefs.innerHTML += glowDefs[ keys[ i ] ].def; 
    }

    // BOUNDING BG BOX
    var svgGroupBox;
    svgGroupBox = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    svgElement.appendChild(svgGroupBox);

    var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circ.setAttribute('cx', w / 2 );
    circ.setAttribute('cy', h / 2 );
    circ.setAttribute('r', ( h - ( m_strokeW * 2 ) ) / 2 );
    circ.setAttribute('stroke', circStroke ); //#E8E7E7 '#FFF'
    circ.setAttribute('stroke-width', circStrokeW );
    circ.setAttribute('fill', circFill ); //#F7F6F6
    circ.setAttribute( 'shape-rendering', 'geometricPrecision' );
    svgGroupBox.appendChild( circ );

    // BACKGROUND COLOR BLOCK
    var svgGroup;
    svgGroup = document.createElementNS( 'http://www.w3.org/2000/svg', 'g' );
    svgGroup.setAttribute( 'stroke-linecap', 'square' );
    svgElement.appendChild( svgGroup );

    // BACKGROUND GLOW 
    var cXpos_middle = h / 2;
    var cYpos_start = ( m_strokeW * 2) + s_r;
    var counter = 1;

    for (var i = 0; i < yRows; i++)
    {
        createBubbleGlow( cXpos_middle, cYpos_start, s_r, svgGroup, counter );

        if ( i < (yRows-1) )
        {
            createBubbleGlow( cXpos_middle - (s_r * 2), cYpos_start + (s_r * 1.1), s_r, svgGroup, counter );
            createBubbleGlow( cXpos_middle + (s_r * 2), cYpos_start + (s_r * 1.1), s_r, svgGroup, counter );
        }

        if ( i < (yRows-2) )
        {
            createBubbleGlow( cXpos_middle - (s_r * 4), cYpos_start + (s_r * 2.2), s_r, svgGroup, counter );
            createBubbleGlow( cXpos_middle + (s_r * 4), cYpos_start + (s_r * 2.2), s_r, svgGroup, counter );
        }

        // move down
        cYpos_start += ( s_r * 2 ) + s_r / 2.4;
        counter ++;
    }

    // small circles
    var s_r = ( w / 3 ) / (yRows + 2.5); // 6.5 // SmallCircle_Radius
    var m_strokeW = s_r / (yRows - 2.5); // 3 // MainCircle_StrokeWidth

    cXpos_middle = h / 2;
    cYpos_start = (m_strokeW * 4.5) + s_r;
    counter = 1;

    for (var i = 0; i < yRows; i++)
    {
        createBubble( cXpos_middle, cYpos_start, s_r, svgGroup, counter );

        if ( i < (yRows-1) )
        {
            createBubble( cXpos_middle - (s_r * 3.5), cYpos_start + (s_r*2), s_r, svgGroup, counter );
            createBubble( cXpos_middle + (s_r * 3.5), cYpos_start + (s_r*2), s_r, svgGroup, counter );
        }

        if ( i < (yRows-2) )
        {
            createBubble( cXpos_middle - (s_r * 7), cYpos_start + (s_r*4), s_r, svgGroup, counter );
            createBubble( cXpos_middle + (s_r * 7), cYpos_start + (s_r*4), s_r, svgGroup, counter );
        }

        // move down
        cYpos_start += ( s_r * 3.5 ) + (s_r / 1.5 );
        counter ++;
    }

    //return (svgElement.outerHTML);
    var dv = $( '<div style="display:none;position:absolute;width:0;height:0;"></div>' );
    var id = '_dvcirc' + new Date().getTime();

    dv.attr( 'id', id );

    $( 'body' ).append( dv );
    dv.html( svgElement.outerHTML );

    var bubbles = dv.find( '.bubble');
    var iOffset = 0, iCol;

    $.each( bubbles, function( i, circ ){

        if ( ( i - (iOffset * cols.length) ) < cols.length ) 
        {
            // 
        }
        else
        {
            iOffset ++;
        }

        iCol = ( i - (iOffset * cols.length) );

        $( circ ).attr( 'fill', '#' + cols[ iCol ] );

    });

    var bubbles = dv.find( '.glow');
    var iOffset = 0, iCol;

    $.each( bubbles, function( i, circ ){

        if ( ( i - (iOffset * cols.length) ) < cols.length ) 
        {
            // 
        }
        else
        {
            iOffset ++;
        }

        iCol = ( i - (iOffset * cols.length) );

        //fill="url(#g)" filter="url(#sofGlow)"
        $( circ ).attr( 'fill', 'url(#' + glowDefs[ cols[ iCol ] ].radialId + ')' );
        $( circ ).attr( 'filter', 'url(#' + glowDefs[ cols[ iCol ] ].glowId + ')' );

    });

    var ret = dv.html();

    dv.remove();

    return ret;
}

svgUtil.createGlowDefs = function( colors )
{
    var retAll = {};

    $.each( colors, function( i,col ){

        var radId = 'rad'+i;
        var glowId = 'glow'+i;

        var def = `<radialGradient id="` + radId + `">
                        <stop style="stop-color:#909090;stop-opacity:0" />
                        <stop style="stop-color:#` + col + `;stop-opacity:0.5" />
                    </radialGradient>
                    <filter id="` + glowId + `" width="300%" height="300%" x="-50%" y="-50%">
                        <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
                    </filter>`;

        retAll[ col ] = { 'radialId': radId, 'glowId': glowId, 'def': def };

    });

    return retAll;

}
