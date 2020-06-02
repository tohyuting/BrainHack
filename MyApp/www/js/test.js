window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#chevronclick').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
    page.querySelector('#chevronclick2').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 3'}});
    };
    page.querySelector('#pushing-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    page.querySelector('#pushing2-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 3'}});
    };
  }
});
