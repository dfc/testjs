// <script>
	document.write ("This is a remotely hosted <strong>Cross-Site Scripting</strong> demo hosted on si.vc (A Security Innovation, Inc. domain)<br\>\n<br\>\nLoaded from:<br\>\nHost: " + document.location.host + "<br\>\nURL: " + document.URL + "<br\>\n<br\>\nCookies:<br\>\n<br\>\n" + document.cookie);
	alert ("This is a remotely hosted Cross-Site Scripting demo hosted on si.vc (A Security Innovation, Inc. domain)\n\nLoaded from:\nHost: " + document.location.host + "\nURL: " + document.URL + "\n\nCookies:\n\n" + document.cookie);
// </script>