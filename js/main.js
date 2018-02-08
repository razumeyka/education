$( '.burger' ).click( function() {
   if ( $( '.navbar' ).is( ':hidden' ) ) {
    $( '.navbar' ).show('slideToggle');
    $( ".burger" ).addClass( "active" );
  } else {
    $( '.navbar' ).hide('slideToggle');
    $( ".burger" ).removeClass( "active" );
  }
});