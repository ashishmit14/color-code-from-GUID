export function changeColor( code ) {
    var bgColor = "#" + intToRGB( hashCode( code ) );
    document.body.style.backgroundColor = bgColor;
    var textColor = invertColor( bgColor );
    var obj = {
        logoColor: bgColor,
        txtColor: textColor
    }
    return obj;
}

function hashCode( str ) {
    // javascript String#hashCode
    var hash = 0;
    for ( var i = 0; i < str.length; i++ ) {
        hash = str.charCodeAt( i ) + ( ( hash << 5 ) - hash );
    }
    return hash;
}

function intToRGB( i ) {
    var c = ( i & 0x00ffffff ).toString( 16 ).toUpperCase();

    return "00000".substring( 0, 6 - c.length ) + c;
}

function invertColor( hex, bw ) {
    if ( hex.indexOf( "#" ) === 0 ) {
        hex = hex.slice( 1 );
    }
    // convert 3-digit hex to 6-digits.
    if ( hex.length === 3 ) {
        hex = hex[ 0 ] + hex[ 0 ] + hex[ 1 ] + hex[ 1 ] + hex[ 2 ] + hex[ 2 ];
    }
    if ( hex.length !== 6 ) {
        throw new Error( "Invalid HEX color." );
    }
    var r = parseInt( hex.slice( 0, 2 ), 16 ),
        g = parseInt( hex.slice( 2, 4 ), 16 ),
        b = parseInt( hex.slice( 4, 6 ), 16 );
    if ( bw ) {
        // http://stackoverflow.com/a/3943023/112731
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
    // invert color components
    r = ( 255 - r ).toString( 16 );
    g = ( 255 - g ).toString( 16 );
    b = ( 255 - b ).toString( 16 );
    // pad each with zeros and return
    var textColor =
        "#" + padZero( r ) + padZero( g ) + padZero( b );
    return textColor;
}

function padZero( str, len ) {
    len = len || 2;
    var zeros = new Array( len ).join( "0" );
    return ( zeros + str ).slice( -len );
}