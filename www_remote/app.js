(function(){
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-2.1.0.js';
  script.addEventListener('load', function(){
      console.log('loaded jquery!');
      $.ajax({
          method: 'get',
          url: 'http://localhost:8000/index.html',
          success: function(data){
            $('#main').html(data);
            $('#dialog-button').bind('click', function() {
                var = log $('#dialog-log');
                log.text('');
                navigator.notification.alert(
                  'You are the winner!',
                  function() {
                    log.text('Dialog Done!');
                  },
                  'Game over!',
                  'Done'
                );
                return false;
            });
          }
      });
  });
  document.body.appendChild(script);
})();
