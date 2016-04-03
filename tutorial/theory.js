

app.controller('theoryCtrl', function ($scope,$state){
    $scope.title = "THEORY";

    $scope.change = function () {
        //    var flag1=0,flag2=0,flag3= 0, invalidString=false;
        //    var checkText = function (string) {
        //        var brackets = "[]{}()";
        //        var i, value;
        //        for (i =0;value = string[i];i++){
        //            switch (value){
        //                case '[':
        //                    flag1++;
        //                    break;
        //                case ']':
        //                    flag1--;
        //                    if(flag1<0){
        //                        invalidString = true;
        //                        return
        //                    }
        //                    break;
        //                case '{':
        //                    flag2++;
        //                    break;
        //                case '}':
        //                    flag2--;
        //                    if(flag2<0){
        //                        invalidString = true
        //                        return
        //                    }
        //                    break;
        //                case '(':
        //                    flag3++;
        //                    break;
        //                case ')':
        //                    flag3--;
        //                    if(flag3<0){
        //                        invalidString = true;
        //                        return
        //                    }
        //                    break;
        //            }
        //        }
        //    }
        //    checkText('{}[(())]}}{{}}}}');
        //    if(flag1==0 && flag2==0 && flag3==0 && !invalidString){
        //        alert('string is valid');
        //    } else {
        //        alert('string is invalid');
        //    }
        //}
        //
        //var secondSolution  = function(string) {
        //    var brackets = ["[",']','{','}','(',')'];
        //    var i, value,arrIndex=[];
        //    for(i=0;value = string[i];i++){
        //        if(brackets.indexOf(value)!==-1 ){
        //                arrIndex.push(value);
        //        }
        //    }
        //    var arr=[];
        //    brackets.forEach(function(val){
        //        arr.push({val:val,count:arrayCount(arrIndex,val)})
        //    });
        //    console.log(arr);
        //    console.log(arr[0].count);
        //    if(arr[0].count==arr[1].count && arr[2].count==arr[3].count && arr[4].count==arr[5].count){
        //        console.log('string is valid')
        //    } else {
        //        console.log('invalid String');
        //    }
        //}
        secondSolution('{}[]()}');
           function arrayCount (array_elements,search) {
               var count = array_elements.reduce(function(n, val) {
                   return  n + (val === search);
               }, 0);
               return count;
        }
       var x = 5,result=1;
        function fact(n) {
            //for (var i=1;i<=x;i++){
            //    result = result *(i);
            //    //result = x;
            //    console.log(result,result);
            //}
            if(n==0){
                return 1;
            } else {
                return n*fact(n-1);
            }



        }
        console.log(fact(5),'fffffff');
        //fact();
    }





});