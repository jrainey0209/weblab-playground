document.write('<h4>Word Cound Example</hr>');
                
var wordCount = function(text) {
  // \W matches non-word characters, match one or more
  var tokens = text.split(/\W+/);
  // account for empty elements at the start or end of the list
  var count = tokens.length;
  if(tokens[0] === '') {
    count--;
  }
  if(tokens[tokens.length - 1] === '') {
    count--;
  }
  return count;
}