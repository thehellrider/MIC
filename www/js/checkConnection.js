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
        document.addEventListener("offline", onOffline, false);
    }
	
	function checkConnection() {
		
		var networkState = navigator.connection.type;
	
		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';
	
		//alert('Connection type: ' + states[networkState]);
		return states[networkState];		
	}
    // Handle the offline event
    //
    function onOffline() {
		//alert('Necesitas estar conectado a Internet. Verifica tu conexión');
		window.location = "conexion.html";
    }

