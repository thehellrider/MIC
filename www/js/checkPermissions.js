    // Call onDeviceReady when Cordova is loaded.
    //
    // At this point, the document has loaded but cordova-2.4.0.js has not.
    // When Cordova is loaded and talking with the native device,
    // it will call the event `deviceready`.
    //
	
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    function onDeviceReady() {		
        var permissions = cordova.plugins.permissions;
		permissions.hasPermission(permissions.CAMERA, function( status ){
		  if ( status.hasPermission ) {
			alert("Apunta con la cámara al marcador cuadrado y verás algo impresionante.");
		  }
		  else {
			alert("Esta app necesita poder acceder a la camara de tu dispoitivo. Revisa los permisos en la configuración.");
			
			permissions.requestPermission(permissions.CAMERA, success, error);
			
		  }
		});
    }
	
	function error() {
	  console.warn('Camera permission is not turned on');
	}
			 
	function success( status ) {
	  if( !status.hasPermission ) error();
	}