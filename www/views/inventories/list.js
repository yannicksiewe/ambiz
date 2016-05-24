angular.module('AMBIZ')
.controller('ListController',function($scope, $http, $state,$cordovaBarcodeScanner,$ionicPlatform){
  $scope.inventoryItem={};
     $http.get('http://192.168.1.9:8080/adinvtry.server/rest/invinvtrys',{params:{start:-1,max:20}})
  //  $http.get('data/data.json')
         .success(function(data){
            // console.log(data);
           $scope.inventories = data.resultList;
          //  $scope.inventories = data;
             $scope.ID = $state.params.iID;


             $scope.data = {showDelete:false, showReorder:false};

           $scope.onItemDelete = function(item){
           $scope.inventories.splice($scope.inventories.indexOf(item), 1);
           }


           $scope.doRefresh = function(){
             $http.get('http://192.168.1.9:8080/adinvtry.server/rest/invinvtrys',{params:{start:-1,max:20}})
                // $http.get('data/data.json')
               .success(function(data){
                $scope.inventories = data.resultList;
              //   $scope.inventories = data;
           $scope.$broadcast('scroll.refreshComplete');
           });
         }

           $scope.toggleStar = function(item){
           item.star = !item.star;
           }

            $scope.moveItem = function(item, fromIndex, toIndex){
              $scope.inventories.splice(fromIndex, 1);
              $scope.inventories.splice(toIndex, 0, item);
            };


           }).error(function(err){
             console.log(err);
           });








            //$scope.vm = this;
           $scope.scan = function(){
              /*  $ionicPlatform.ready(function() {
                $cordovaBarcodeScanner.scan().then(function(barcodeData) {
                // Success! Barcode data is here
                 vm.scanResults = "We got a barcoden" +
                 "Result: " + barcodeData.text + "n" +
                 "Format: " + barcodeData.format + "n" +
                 "Cancelled: " + barcodeData.cancelled;
                      //code = barcodeData.text;
                       }, function(error) {
                          vm.scanResults = 'Error: ' + error;
                       });
                    });*/



                    // récupération du lotPic du formulaire
                      var searchInput = {
                         entity: {},
                           start: 0,
                             max: 20,
                             fieldNames: [],
                              sortFieldNames: [],
                                className: 'org.adorsys.adstock.rest.StkArticleLotSearchInput'
                                };


                            searchInput.entity.lotPic = $scope.inventoryItem.lotPic ;
                           searchInput.fieldNames.push('lotPic');
                           console.log($scope.lotPic);




                                                               $http.post('http://192.168.1.9:8080/adstock.server/rest/stkarticlelots/findBy',searchInput)
                                                                .success(function(data){
                                                             var response = [];
                                                             response = data.resultList;

                                                                    //    $scope.inventoryItem = {};
                                                                 $scope.inventoryItem.section = response[0].section;
                                                                 $scope.inventoryItem.lotPic = response[0].lotPic;
                                                                 $scope.inventoryItem.artPic = response[0].artPic;
                                                                 $scope.inventoryItem.artName = response[0].artName;

                                                                   $scope.inventoryItem.cntnrIdentif = $state.params.iID;

                                                               console.log($scope.inventoryItem);

                                                               }).error(function(err){
                                                                 console.log(err);
                                                               })

                   }



           $scope.submit = function(){
             console.log($scope.inventoryItem);

             $http.post('http://192.168.1.9:8080/adinvtry.server/rest/inventory/' + $state.params.iID + '/items',$scope.inventoryItem)
              .success(function(data){

               console.log(data);

             }).error(function(err){
               console.log(err);
             })


           }








});
