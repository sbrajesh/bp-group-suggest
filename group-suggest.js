jQuery( document ).ready( function () {
	var jq = jQuery;
	
	jq(document).on( 'click',  ".suggested-group-item-list span.remove-group-suggestion a", function () {
		//hide the suggestion
		var li = jq( this ).parent().parent().parent();
		jq( li ).remove();
		var url = jq( this ).attr( 'href' );
		var nonce = get_var_in_url( url, "_wpnonce" );
		var suggested_group_id = get_var_in_url( url, "suggest_id" );
		
		jq.post( ajaxurl, {
			action: 'group_suggest_remove_suggestion',
			cookie: encodeURIComponent( document.cookie ),
			suggestion_id: suggested_group_id,
			_wpnonce: nonce
		},
			function () {
				//nothing here

		} );

		return false;

	} );
	
	function get_var_in_url( url, name ) {
		var urla = url.split( "?" );
		var qvars = urla[1].split( "&" );//so we hav an arry of name=val,name=val
		for ( var i = 0; i < qvars.length; i++ ) {
			var qv = qvars[i].split( "=" );
			if ( qv[0] == name )
				return qv[1];
		}
		return '';
	}
} );