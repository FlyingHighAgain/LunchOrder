var app = angular.module('ConfirmOrderApp',[]);
app.controller("ConfirmOrderCtrl", function($scope){

  $scope.items = 
  [
    {code: "0001", name: "日替わり弁当", price:"450", image:"image/日替わり弁当.jpg", description:"いちばん人気です。味も、栄養バランスも、価格も、３拍子そろった自信作！ライス付き"},
    {code: "0002", name: "Aランチ弁当", price:"600", image:"image/Aランチ.gif", description:"ちょっぴり贅沢、ボリュームがうれしい洋風メニューです。"},
    {code: "0003", name: "Bランチ弁当", price:"600", image:"image/Bランチ.gif", description:"ちょっぴり贅沢、ボリュームもアップがうれしい和風メニューです。"},
    {code: "0004", name: "特製幕の内弁当", price:"700", image:"image/特製幕の内.gif", description:"季節の食材を取り入れた、ちょっと贅沢なメニューでお応えします。"}
  ];

  $scope.deliverydates = [
    {name:"10月 7日"},
    {name:"10月 8日"},
    {name:"10月 9日"},
    {name:"10月10日"},
    {name:"10月11日"},
    {name:"10月12日"},
    {name:"10月13日"},
    {name:"10月14日"},
    {name:"10月15日"},
    {name:"10月16日"},
  ];

  $scope.quantities = [
    {name:"1"},
    {name:"2"},
    {name:"3"},
    {name:"4"},
    {name:"5"},
    {name:"6"},
    {name:"7"},
    {name:"8"},
    {name:"9"},
    {name:"10"},
  ];
  
});

