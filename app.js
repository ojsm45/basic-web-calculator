function insert(num){
  document.form.textView.value += num;
};

function equal(){
  var exp = document.form.textView.value;
  if(exp){
    document.form.textView.value = eval(exp);
  }
};

function back(){
  var exp = document.form.textView.value;
  document.form.textView.value = exp.substring(0, exp.length-1);
};

function clean(){
  document.form.textView.value = "";
};