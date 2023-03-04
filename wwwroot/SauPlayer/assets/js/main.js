$(function(){

  $('.ui.form').form({
    email: {
      identifier : 'email',
      rules: [
      {
        type   : 'email',
        prompt : 'Lütfen geçerli bir e-mail adresi girin.'
      }
      ]
    },
    password: {
      identifier : 'password',
      rules: [
      {
        type   : 'empty',
        prompt : 'Bir parola belirtin.'
      },
      {
        type   : 'length[6]',
        prompt : 'Parolanız en az 6 karakterden oluşmalıdır.'
      }
      ]
    }
  },{

    inline : true
    
  });


});