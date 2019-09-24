(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    const getTime = function(data, type) {
        if(type ===1) {
            return '2019-06-23'
        } else {
            return '2019年6月23日'
        }
    };

    function aTime(date) {
        return getTime(date, 1)
    }

    function aFun () {
        let dt = new Date();
        console.log(aTime(dt));
    }

    // console.log('jslkadfsd')
    var arr = [1,2,3,4];
    var arr2 = arr.map(item => item +1);
    console.log(arr2);
    console.log(aFun());

}));
