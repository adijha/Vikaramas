/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack=[]
  
  for(let c of s){
  const lastElem=stack[stack.length-1]
      
      const parentheses = c ===')' && lastElem === '('
      const braces = c ==='}' && lastElem === '{'
      const bracket = c ===']' && lastElem === '['
      if(parentheses || braces || bracket) stack.pop()
      else stack.push(c)
  }
  return !stack.length
};