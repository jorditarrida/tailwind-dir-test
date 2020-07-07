/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  document.querySelector('#dir-switch').addEventListener( 'click', () => {
    document.dir = document.dir === "rtl" ? "ltr" : "rtl";
  } );
} )();
