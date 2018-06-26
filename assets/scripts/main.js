var newXHR = new XMLHttpRequest();
newXHR.addEventListener( 'load', reqListener );
newXHR.open( 'GET', 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=https%3A%2F%2Fwww.armelpingault.com&key=AIzaSyDZkYecmL2TehrGSVRlhxnSehuSpMoWji8' );
newXHR.send();

function reqListener () {
  var res = JSON.parse(this.response);
  document.getElementById('score').innerHTML = res.ruleGroups.SPEED.score;
  document.getElementById('numberHosts').innerHTML = res.pageStats.numberHosts;
  document.getElementById('numberJsResources').innerHTML = res.pageStats.numberJsResources;
  document.getElementById('numberResources').innerHTML = res.pageStats.numberResources;
  document.getElementById('numberStaticResources').innerHTML = res.pageStats.numberStaticResources;

  var stats = res.pageStats;
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["HTML", "Images", "JS", "Other"],
      datasets: [{
        data: [
          Math.ceil(stats.htmlResponseBytes / 1000),
          Math.ceil(stats.imageResponseBytes / 1000),
          Math.ceil(stats.javascriptResponseBytes / 1000),
          Math.ceil(stats.otherResponseBytes / 1000)
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(54, 205, 132)",
        ]
      }]
    }
  });
}

var myLazyLoad = new LazyLoad();
window.lazyLoadOptions = {
  threshold: 50
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

if (navigator.userAgent.indexOf("Speed Insights") === -1) {
  var body = document.getElementsByTagName('body')[0];
  var script = document.createElement('script');
  var attrAsync = document.createAttribute('async');
  var attrSrc = document.createAttribute('src');
  attrSrc.value = 'https://www.googletagmanager.com/gtag/js?id=UA-1078057-16';
  script.setAttributeNode(attrAsync);
  script.setAttributeNode(attrSrc);
  body.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-1078057-16');
}
