var Links = {
  SetColor: function (color) {
    var alist = document.querySelectorAll('.gridleft ul li, .gridleft ol li, h1');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  SetColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
//
function 함수버튼2(self) {
  var target = document.querySelector('body');
  if (self.value === 'Night로 전환') {
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'Day로 전환';
    Links.SetColor('powderblue');
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'Night로 전환';
    Links.SetColor('blue');
  }
}
