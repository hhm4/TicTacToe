<?php 
$con = mysqli_connect("sql1.njit.edu", "tr244", "nJOmVbBg8","tr244"); 
$data = json_decode(file_get_contents("php://input"));
$UserName = mysql_real_escape_string($con, $data->UserName);
$Pword = mysql_real_escape_string($con, $data->Pword);
$query = "INSERT into users (UserName, Password) VALUES ('$UserName','$Pword')";
mysql_query($con, $query);
echo "success";
?>