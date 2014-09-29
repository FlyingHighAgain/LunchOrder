var app = angular.module('OrderApp',[]);
app.controller("OrderCtrl", function($scope){

  $scope.items = 
  [
    {code: "0001", name: "日替わり弁当", price:"450円（税込）", image:"image/日替わり弁当.jpg", description:"いちばん人気です。味も、栄養バランスも、価格も、３拍子そろった自信作！ライス付き"},
    {code: "0002", name: "Aランチ弁当", price:"600円（税込）", image:"image/Aランチ.gif", description:"ちょっぴり贅沢、ボリュームもアップがうれしい洋風メニューです。"},
    {code: "0003", name: "Bランチ弁当", price:"600円（税込）", image:"image/Bランチ.gif", description:"ちょっぴり贅沢、ボリュームもアップがうれしい和風メニューです。"},
    {code: "0004", name: "特製幕の内弁当", price:"700円（税込）", image:"image/特製幕の内.gif", description:"季節の食材を取り入れた、ちょっと贅沢なメニューでお応えします。"}
  ];
		
});

