<?php
ob_start();
$user = 'b221210015@gmail.com.tr';
$pass='b221210015';

if (isset($_POST['username'])){
    $username=$_POST['username'];
    $password=$_POST['password'];

    if($username==$user && $password==$pass){
      
        $alert="<script>alert('Hoşgeldiniz') ;</script> ";
       
        header("Location:anasayfa.html");
       
        
    }
    else{
       
        header("Location:login.html");
        echo "Hata,kullanıcı emaili yada şifrenizi kontrol ediniz";
    }
}
if (isset($_POST['username'])){
    $username=$_POST['username'];
    $password=$_POST['password'];

    if($password=="")

    echo("Şifre kısmını doldurunuz");
     else{
        header("Location:anasayfa.html");
     }


}

?>
