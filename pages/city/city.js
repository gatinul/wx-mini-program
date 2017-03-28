var app = getApp();

var cityDatas = require('./cityData.js')
Page({
    data:{
        cityInfo:'',
        indicatorDots: true,
        autoplay: true,
        circular:true,
        interval: 5000,
        duration: 1000
        
    },
    onLoad: function(options){
        this.setData({
            cityInfo:options.cityName
        })
        switch(this.data.cityInfo){
            case '沈阳':
            this.setData({
                imgUrls:cityDatas.shenyang.imgUrls
            })
            break;
            case '大连':
            this.setData({
                imgUrls:cityDatas.dalian.imgUrls
            })
            break;
            case '哈尔滨':
            this.setData({
                imgUrls:cityDatas.haerbin.imgUrls
            })
            break;
            case '上海':
            this.setData({
                imgUrls:cityDatas.shanghai.imgUrls
            })
            break;
        }

        // if(this.data.cityInfo == '沈阳'){
        //     //var that = this
        //     this.setData({
        //         imgUrls:cityDatas.shenyang.imgUrls
        //     })
        // }else if(this.data.cityInfo == '大连'){
        //     //var that = this
        //     this.setData({
        //         imgUrls:cityDatas.dalian.imgUrls
        //     })
        // }else if(this.data.cityInfo == '哈尔滨'){
        //     this.setData({
        //         imgUrls:cityDatas.haerbin.imgUrls
        //     })
        // }else{
        //     this.setData({
        //         imgUrls:cityDatas.shanghai.imgUrls
        //     })
        // }
    }
})

