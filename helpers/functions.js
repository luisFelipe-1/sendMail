const validate = (rules, data) => { 
  let validado = {};
  for (const rule of rules) {
    if (rule in data) {
      validado[rule] = data[rule];
    } else {
      return false;
    }
  }
  return validado;
} 

export {
  validate
}
