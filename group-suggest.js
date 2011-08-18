jQuery(document).ready(function(){
var j=jQuery;
j(".suggested-group-item-list span.remove-group-suggestion a").live('click',function(){
//hide the suggestion
var li=j(this).parent().parent().parent();
j(li).remove();
var url = j(this).attr('href');
var nonce=get_var_in_url(url,"_wpnonce");
var suggested_group_id=get_var_in_url(url,"suggest_id");
 j.post(ajaxurl,{
                 action:"group_suggest_remove_suggestion",
                 cookie:encodeURIComponent(document.cookie),
                 'suggestion_id':suggested_group_id,
                 '_wpnonce':nonce
                  },
                function(){
                    //nothing here
                
              });

//let us send a request to the server for hiding this group

return false;
//send request to server for not showing this group again in suggestion
//j.post();
});
/*taken from bp-default/_inc/global.js for ajaxified processing of group join request,sorry it won't work because the way bp handles group request processing*/
/*var jq=jQuery;
jq("ul.suggested-group-item-list div.group-button a").live('click', function() {
    
			
		var gid = jq(this).parent().attr('id');
		gid = gid.split('-');
		gid = gid[1];

		var nonce = jq(this).attr('href');
		nonce = nonce.split('?_wpnonce=');
		nonce = nonce[1].split('&');
		nonce = nonce[0];

		var thelink = jq(this);

		jq.post( ajaxurl, {
			action: 'joinleave_group',
			'cookie': encodeURIComponent(document.cookie),
			'gid': gid,
			'_wpnonce': nonce
		},
		function(response)
		{
			var parentdiv = thelink.parent();

			
				jq(parentdiv).fadeOut(200,
					function() {
						parentdiv.fadeIn(200).html(response);
					}
				);
			
		});
		return false;
	} );*/
//helper
function get_var_in_url(url,name){
    var urla=url.split("?");
    var qvars=urla[1].split("&");//so we hav an arry of name=val,name=val
    for(var i=0;i<qvars.length;i++){
        var qv=qvars[i].split("=");
        if(qv[0]==name)
            return qv[1];
      }
      return '';
}
});
