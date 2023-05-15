<?php
if (isset($_POST['onay']))
if (isset($_POST['email'], $_POST['password'] )
&& ($_POST['email']!='yusra@gmail.com')
&& ($_POST['password']!='akk')) {
echo "Kayıt İşleminiz Yapıldı...";
echo "<b>".$_POST['email'] . ' ' . $_POST['password']."</b>";
}else{
echo"Bilgilerinizi Kontrol Edip Tekrar Giriş Yapın.<br>
Eksik Bilgi Girdiniz...";
}
?>