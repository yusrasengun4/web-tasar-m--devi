function sifreDogrula(){
   var isim=document.getElementsByName("ad")[0];
  var soy=document.getElementsByName("soyad")[0];
  var tar=document.getElementsByName("tarih")[0];
  var tel=document.getElementsByName("telefon")[0];
  var adr=document.getElementsByName("adres")[0];
  var cal=document.getElementsByName("calısma")[0];
var email=document.getElementsByName("email")[0];
var sif=document.getElementsByName("sifre")[0];
var control=document.querySelector('#evet');
var regex=/^[a-zA-Z\s]+$/;
   if(isim.value == ""){
      alert(" Adınızı giriniz");
      return false;
   }
   else if(regex.test(isim.value)== false){
      alert("Adınızda harf karakterler olmalı");
      return false;
   }
   else if(regex.test(soy.value)== false){
      alert("Soyadınızda harf karakterler olmalı");
      return false;
   }
   
  else if(soy.value==""){
      alert("Soyadınızı giriniz");
      return false;
   }
 else if(tar.value==""){
   alert("Doğum tarihinizi giriniz");
   return false;
 }
 else if(tel.value==""){
   alert("Telefon numaranızı giriniz");
   return false;
 }
 else if(tel.value.length<10){
   alert("Telefon numarınızı kontrol ediniz");
   return false;
 }
 else if(tel.value.length>10){
   alert("Telefon numarınızı kontrol ediniz");
   return false;
 }
 else if(adr.value==""){
   alert("Adresinizi giriniz");
   return false;
 }
 else if(cal.value =="Select"){
   alert("Çalışma durumunuzu seçiniz");
   return false;
 }
 
 else if(email.value==""){
   alert("Emailinizi giriniz");
   return false;
 }
 else if(sif.value==""){
   alert("Şifrenizi giriniz");
   return false;
 }
 else if(!(control.checked)){
   alert("Kutucuğu doldurunuz");
   return false;
 }
 
 else{
  alert("Kaydınız tamamlandı");
  return true;

  
}
}
 
 
