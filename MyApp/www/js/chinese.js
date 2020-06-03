document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'CovidNewsChi') {
    page.querySelector('#CovidFirstChi').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNewsChinese1.html', {data: {title: '544 起新病例'}});
    };
    page.querySelector('#CovidSecondChi').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNewsChinese2.html', {data: {title: '世卫专家：无证据显示冠状病毒威力减弱'}});
    };
    page.querySelector('#CovidThirdChi').onclick = function() {
      document.querySelector('#myNav').pushPage('CovidNewsChinese3.html', {data: {title: '早报推特'}});
    };
    page.querySelector('#covidbuttonChi').onclick = function() {
      document.getElementById('COVIDChiAudio').play();
    }
  } else if (page.id === 'CovidNewsChinese1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    page.querySelector('#CovidNewsButtonChinese').onclick = function() {
      document.getElementById("544CasesArticleChinese").play();
    }
  } else if (page.id === 'CovidNewsChinese2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CovidNewsChinese3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivitiesChinese') {
    page.querySelector('#LLLFirstChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('LLLActivity1Chinese.html', {data: {title: '学习如何在YouTube上看视频来放松！'}});
    };
    page.querySelector('#LLLSecondChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('LLLActivity2Chinese.html', {data: {title: '学习Zoom与亲朋好友联系！'}});
    };
  } else if (page.id === 'LLLActivity1Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LLLActivity2Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }  else if (page.id === 'HWActivitiesChinese') {
    page.querySelector('#HWFirstChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('HWActivity1Chinese.html', {data: {title: 'HPB 7种简单的运动'}});
    };
    page.querySelector('#HWSecondChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('HWActivity2Chinese.html', {data: {title: '健康那些事 全民来防疫'}});
    };
  } else if (page.id === 'HWActivity1Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'HWActivity2Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivitiesChinese') {
    page.querySelector('#MWFirstChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('MWActivity1Chinese.html', {data: {title: '压力调节术'}});
    };
    page.querySelector('#MWSecondChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('MWActivity2Chinese.html', {data: {title: '21天瑜伽冥想习练'}});
    };
  } else if (page.id === 'MWActivity1Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'MWActivity2Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivitiesChinese') {
    page.querySelector('#LeiFirstChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('LeiActivity1Chinese.html', {data: {title: '娱乐'}});
    };
    page.querySelector('#LeiSecondChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('LeiActivity2Chinese.html', {data: {title: '培养嗜好'}});
    };
  } else if (page.id === 'LeiActivity1Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'LeiActivity2Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id === 'CookingActivitiesChinese') {
    page.querySelector('#CookingFirstChinese').onclick = function() {
      document.querySelector('#myNav').pushPage('CookingActivity1Chinese.html', {data: {title: 'HPB 健康食谱'}});
    };
  } else if (page.id === 'CookingActivity1Chinese') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  } else if (page.id ==='feedbackChinese') {
    page.querySelector('#submitbuttonchinese').onclick = function() {
      document.querySelector('#myNav').pushPage('ChineseHome.html', {data: {title: 'Chinese Home Page'}});
    };
  }
});

var submit = function() {
  var name = document.getElementById('name').value;
  var feedback = document.getElementById('feedback').value;

  if (name === "" && feedback === "") {
		ons.notification.alert("Please enter your name and feedback.");
		return false;
	} else if (name === "") {
		ons.notification.alert("Please enter your name.");
		return false;
	}
	  else if (feedback === "") {
		ons.notification.alert("Please enter your feedback.");
		return false;
	}  else {
		ons.notification.alert("Thank you for getting in touch with us!");

	}

};

var chinesesubmit = function() {
  var chinesename = document.getElementById('chinesename').value;
  var chinesefeedback = document.getElementById('chinesefeedback').value;

  if (chinesename === "" && chinesefeedback === "") {
		ons.notification.alert("请输入您的姓名和反馈。");
		return false;
	} else if (chinesename === "") {
		ons.notification.alert("请输入您的姓名。");
		return false;
	}
	  else if (chinesefeedback === "") {
		ons.notification.alert("请输入您的反馈。");
		return false;
	}  else {
		ons.notification.alert("感谢您与我们联系！");
	}

};
