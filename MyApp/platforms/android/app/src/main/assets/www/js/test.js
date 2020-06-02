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

  if (page.id === 'LLLActivities') {
    page.querySelector('#LLLFirst').onclick = function() {
      document.querySelector('#LLLNavigator').pushPage('LLLActivity1.html', {data: {title: 'First Activity'}});
    };
    page.querySelector('#LLLSecond').onclick = function() {
      document.querySelector('#LLLNavigator').pushPage('LLLActivity2.html', {data: {title: 'Second Activity'}});
    };
    page.querySelector('#LLLThird').onclick = function() {
      document.querySelector('#LLLNavigator').pushPage('LLLActivity3.html', {data: {title: 'Third Activity'}});
    };
  } else if (page.id === 'LLLActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'HWActivities') {
    page.querySelector('#HWFirst').onclick = function() {
      document.querySelector('#HWNavigator').pushPage('HWActivity1.html', {data: {title: 'Get Fit With Me'}});
    };
    page.querySelector('#HWSecond').onclick = function() {
      document.querySelector('#HWNavigator').pushPage('HWActivity2.html', {data: {title: 'HPB Workout'}});
    };
    page.querySelector('#HWThird').onclick = function() {
      document.querySelector('#HWNavigator').pushPage('HWActivity3.html', {data: {title: 'Exercise Video'}});
    };
  } else if (page.id === 'HWActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'HWActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'HWActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'MWActivities') {
    page.querySelector('#MWFirst').onclick = function() {
      document.querySelector('#MWNavigator').pushPage('MWActivity1.html', {data: {title: 'Tips for Mental Wellbeing'}});
    };
    page.querySelector('#MWSecond').onclick = function() {
      document.querySelector('#MWNavigator').pushPage('MWActivity2.html', {data: {title: 'Meditation Video'}});
    };
    page.querySelector('#MWThird').onclick = function() {
      document.querySelector('#MWNavigator').pushPage('MWActivity3.html', {data: {title: 'Progressive Muscle Relaxation'}});
    };
  } else if (page.id === 'MWActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'LeiActivities') {
    page.querySelector('#LeiFirst').onclick = function() {
      document.querySelector('#LeiNavigator').pushPage('LeiActivity1.html', {data: {title: 'Come n’ Live @ Zaobao.sg'}});
    };
    page.querySelector('#LeiSecond').onclick = function() {
      document.querySelector('#LeiNavigator').pushPage('LeiActivity2.html', {data: {title: 'PA e-courses'}});
    };
    page.querySelector('#LeiThird').onclick = function() {
      document.querySelector('#LeiNavigator').pushPage('LeiActivity3.html', {data: {title: 'Another Leisure Video'}});
    };
  } else if (page.id === 'LeiActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'CookingActivities') {
    page.querySelector('#CookingFirst').onclick = function() {
      document.querySelector('#CookNavigator').pushPage('CookingActivity1.html', {data: {title: 'HPB Healthier Recipes'}});
    };
  } else if (page.id === 'CookingActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
