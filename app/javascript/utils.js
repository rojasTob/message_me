const utils = {
  scrollBottom (){
    if($('#messages').length > 0){
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
  }
};

export default utils;