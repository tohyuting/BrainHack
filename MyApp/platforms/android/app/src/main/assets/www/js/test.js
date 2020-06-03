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

window.fn.open.chinese = function() {
  var menu = document.getElementById('chiMenu');
  menu.open();
};

window.fn.load.chinese = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('chiMenu');
  content.load(page)
    .then(menu.close.bind(menu));
};


document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'CovidNews') {
    page.querySelector('#CovidFirst').onclick = function() {
      document.querySelector('#CovidNavigator').pushPage('CovidNews1.html', {data: {title: 'New Cases of Covid-19'}});
    };
    page.querySelector('#CovidSecond').onclick = function() {
      document.querySelector('#CovidNavigator').pushPage('CovidNews2.html', {data: {title: 'Resumption of Construction'}});
    };
    page.querySelector('#CovidThird').onclick = function() {
      document.querySelector('#CovidNavigator').pushPage('CovidNews3.html', {data: {title: 'COVID-19 Laws in Force'}});
    };
    page.querySelector('#CovidFourth').onclick = function() {
      document.querySelector('#CovidNavigator').pushPage('CovidNews4.html', {data: {title: 'Official MOH Twitter'}});
    };
  } else if (page.id === 'CovidNews1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNews2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNews3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNews4') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});


document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'LLLActivities') {
    page.querySelector('#LLLFirst').onclick = function() {
      document.querySelector('#LLLNavigator').pushPage('LLLActivity1.html', {data: {title: 'Using Youtube'}});
    };
    page.querySelector('#LLLSecond').onclick = function() {
      document.querySelector('#LLLNavigator').pushPage('LLLActivity2.html', {data: {title: 'Using Zoom'}});
    };
    page.querySelector('#LLLThird').onclick = function() {
      document.querySelector('#LLLNavigator').pushPage('LLLActivity3.html', {data: {title: 'Other Digital Skills'}});
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
      document.querySelector('#HWNavigator').pushPage('HWActivity3.html', {data: {title: 'More Exercise Video'}});
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
      document.querySelector('#MWNavigator').pushPage('MWActivity3.html', {data: {title: 'Muscle Relaxation'}});
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
      document.querySelector('#LeiNavigator').pushPage('LeiActivity1.html', {data: {title: 'Entertainment'}});
    };
    page.querySelector('#LeiSecond').onclick = function() {
      document.querySelector('#LeiNavigator').pushPage('LeiActivity2.html', {data: {title: 'PA e-courses'}});
    };
    page.querySelector('#LeiThird').onclick = function() {
      document.querySelector('#LeiNavigator').pushPage('LeiActivity3.html', {data: {title: 'Arts'}});
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


document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'home') {
    page.querySelector('#english').onclick = function() {
      document.querySelector('#myNav').pushPage('EnglishLanding.html', {data: {title: 'HPB Healthier Recipes'}});
    };
    page.querySelector('#chinese').onclick = function() {
      document.querySelector('#myNav').pushPage('ChineseLanding.html', {data: {title: 'HPB Healthier Recipes'}});
    };
  } else if (page.id === 'CovidNews') {
    page.querySelector('#CovidFirst').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNews1.html', {data: {title: 'New Cases of Covid-19'}});
    };
    page.querySelector('#CovidSecond').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNews2.html', {data: {title: 'Resumption of Construction'}});
    };
    page.querySelector('#CovidThird').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNews3.html', {data: {title: 'COVID-19 Laws in Force'}});
    };
    page.querySelector('#CovidFourth').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNews4.html', {data: {title: 'Official MOH Twitter'}});
    };
  } else if (page.id === 'CovidNews1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNews2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNews3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNews4') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivities') {
    page.querySelector('#LLLFirst').onclick = function() {
      document.querySelector('#myNav').pushPage('LLLActivity1.html', {data: {title: 'Using Youtube'}});
    };
    page.querySelector('#LLLSecond').onclick = function() {
      document.querySelector('#myNav').pushPage('LLLActivity2.html', {data: {title: 'Using Zoom'}});
    };
    page.querySelector('#LLLThird').onclick = function() {
      document.querySelector('#myNav').pushPage('LLLActivity3.html', {data: {title: 'Other Digital Skills'}});
    };
  } else if (page.id === 'LLLActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'HWActivities') {
    page.querySelector('#HWFirst').onclick = function() {
      document.querySelector('#myNav').pushPage('HWActivity1.html', {data: {title: 'Get Fit With Me'}});
    };
    page.querySelector('#HWSecond').onclick = function() {
      document.querySelector('#myNav').pushPage('HWActivity2.html', {data: {title: 'HPB Workout'}});
    };
    page.querySelector('#HWThird').onclick = function() {
      document.querySelector('#myNav').pushPage('HWActivity3.html', {data: {title: 'More Exercise Video'}});
    };
  } else if (page.id === 'HWActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'HWActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'HWActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivities') {
    page.querySelector('#MWFirst').onclick = function() {
      document.querySelector('#myNav').pushPage('MWActivity1.html', {data: {title: 'Tips for Mental Wellbeing'}});
    };
    page.querySelector('#MWSecond').onclick = function() {
      document.querySelector('#myNav').pushPage('MWActivity2.html', {data: {title: 'Meditation Video'}});
    };
    page.querySelector('#MWThird').onclick = function() {
      document.querySelector('#myNav').pushPage('MWActivity3.html', {data: {title: 'Muscle Relaxation'}});
    };
  } else if (page.id === 'MWActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivities') {
    page.querySelector('#LeiFirst').onclick = function() {
      document.querySelector('#myNav').pushPage('LeiActivity1.html', {data: {title: 'Entertainment'}});
    };
    page.querySelector('#LeiSecond').onclick = function() {
      document.querySelector('#myNav').pushPage('LeiActivity2.html', {data: {title: 'PA e-courses'}});
    };
    page.querySelector('#LeiThird').onclick = function() {
      document.querySelector('#myNav').pushPage('LeiActivity3.html', {data: {title: 'Arts'}});
    };
  } else if (page.id === 'LeiActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivity2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivity3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CookingActivities') {
    page.querySelector('#CookingFirst').onclick = function() {
      document.querySelector('#myNav').pushPage('CookingActivity1.html', {data: {title: 'HPB Healthier Recipes'}});
    };
  } else if (page.id === 'CookingActivity1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
