$( '.burger, ul li' ).click( function() {
   if ( $( '.navbar' ).is( ':hidden' ) ) {
    $( '.navbar' ).show('slideToggle');
  } else {
    $( '.navbarv' ).hide('slideToggle');
  }
});