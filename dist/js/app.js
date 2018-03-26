'use strict';

window.onload = function () {

  // Pętla wstawiająca nagłowki h2
  var tabH2 = ['Dowiadczenie zawodowe', 'Edukacja', 'Umiejętnosci', 'Formularz kontaktowy', 'Dane osobowe', 'Social media', 'Konto GitHub'];
  var dlTabH2 = tabH2.length;
  for (var i = 0; i < dlTabH2; i++) {
    var placeTabH2 = document.getElementsByTagName('h2')[i];
    placeTabH2.innerHTML = tabH2[i];
  }

  // Wyswietlanie/ukrywanie formularza na stronie

  var btnShow = document.getElementById('show');
  var form = document.getElementById('form');
  form.hidden = true;

  btnShow.addEventListener('click', function () {
    if (form.hidden === true) {
      this.value = 'Ukryj formularz';
      form.hidden = false;
    } else {
      this.value = 'Wyswietl formularz';
      form.hidden = true;
    }
  });

  // Funkcja sprawdzajaca wypelnienie wszystkich pol formularza
  function sprawdzFormularz() {
    var imieINazwisko = document.getElementById('nadawca');
    var imieINazwiskoText = imieINazwisko.value;
    var email = document.getElementById('emailAdress');
    var emailText = email.value;
    var phone = document.getElementById('phoneNumber');
    var phoneText = phone.value;
    var text = document.getElementById('tresc');
    var textText = text.value;
    var wyp1 = document.getElementById('wypelnij1');
    var wyp2 = document.getElementById('wypelnij2');
    var wyp3 = document.getElementById('wypelnij3');

    if (imieINazwiskoText === '') {
      wyp1.innerHTML = 'Proszę, wypełnij to pole.';
    } else {
      if (emailText === '') {
        wyp2.innerHTML = 'Proszę, podaj adres e-mail.';
      } else {
        if (textText === '') {
          wyp3.innerHTML = 'Proszę, wpisz treść wiadomości.';;
        } else {
          var calyForm = '';
          var kom = '';
          var x = [imieINazwiskoText, emailText, phoneText, textText];
          for (var i = 0; i <= 3; i++) {
            var label = document.getElementsByTagName('label')[i];
            var labelT = label.textContent;
            calyForm += labelT + ' ' + x[i] + ' <br/>';
            document.getElementById('f').innerHTML = calyForm;
          }
          kom += 'Formularz został wysłany pomyślnie:';
          document.getElementById('komunikat').innerHTML = kom;
          imieINazwisko.value = '';
          email.value = '';
          phone.value = '';
          text.value = '';
        }
      }
    }
  }

  var btn = document.getElementById('wyslij');

  btn.addEventListener('click', sprawdzFormularz);
};
//# sourceMappingURL=app.js.map