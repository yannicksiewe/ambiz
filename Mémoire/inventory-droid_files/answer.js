function wwAnswer(wwAuthor) {
  var wwComments = document.getElementById('comment');
  return wwComments.value += '@ <strong>' + wwAuthor + '</strong> : ';
  wwComments.focus();
}