<?php
if (isset($_POST['onay']))
if (isset($_POST['adi'], $_POST['soyadi'] )
&& ($_POST['adi']!='yusra@gmail.com')
&& ($_POST['soyadi']!='ask')) {
echo "Kayıt İşleminiz Yapıldı...";
echo "<b>".$_POST['adi'] . ' ' . $_POST['soyadi']."</b>";
}else{
echo"Bilgilerinizi Kontrol Edip Tekrar Giriş Yapın.<br>
Eksik Bilgi Girdiniz...";
}
?>