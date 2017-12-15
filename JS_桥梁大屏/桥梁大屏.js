function cluaDomLeftHeight() {
    var clientHeight = document.body.clientHeight-3*10-6;
    var upH = clientHeight*0.4;
    var midH = 200;
    var downH = clientHeight-upH-midH;
    $("#leftUp").css("height",upH+"px");
    $("#leftMiddle").css("height",midH+"px");
    $("#leftDown").css("height",downH+"px");
}

function cluaDomMidHeight() {
    var clientHeight = document.body.clientHeight-2*10-6;
    var midTop = clientHeight*0.5;
    var midDown = clientHeight-midTop;
    $("#midTop").css("height",midTop+"px");
    $("#mid-top-right").css("height",(midTop)+"px");
    var width = $("#mid-top-right").css("width");
    var barwidth = width.substring(0,width.length-2);
    if (barwidth>midTop){
        var h = Math.sqrt(Math.pow(midTop*0.7,2)/2);
        $("#midTopBar").css({"width":(h)+"px","height":(h)+"px","left":(barwidth/2-h/2+15)+"px","top":(midTop/2-h/2)+"px","z-index":"999"});
    }else {
        var h = Math.sqrt(Math.pow(barwidth*0.7,2)/2);
        $("#midTopBar").css({"width":(h)+"px","height":(h)+"px","left":(barwidth/2-h/2+15)+"px","top":(midTop/2-h/2)+"px","z-index":"999"});
    }
    $("#midDown1").css("height",midDown+"px");
    $("#midDown2").css("height",midDown+"px");
    $("#midDown3").css("height",midDown+"px");
}
function cluaDomRightHeight() {
    var clientHeight = document.body.clientHeight-3*10-6;
    var midTop = clientHeight/3;
    $("#right-top").css("height",midTop+"px");
    $("#right-mid").css("height",midTop+"px");
    $("#right-down").css("height",midTop+"px");
}

function midTopBarHeight() {
    var width = $("#mid-top-right").css("width");
    var height = $("#mid-top-right").css("height");
}

function bigScreenMapleft() {
    var myChart = echarts.init(document.getElementById('mapmain'));
    var placeList = [
        {name: '海门', geoCoord: [121.15, 31.89]},
        {name: '鄂尔多斯', geoCoord: [109.781327, 39.608266]},
        {name: '招远', geoCoord: [120.38, 37.35]},
        {name: '舟山', geoCoord: [122.207216, 29.985295]},
        {name: '齐齐哈尔', geoCoord: [123.97, 47.33]},
        {name: '盐城', geoCoord: [120.13, 33.38]},
        {name: '赤峰', geoCoord: [118.87, 42.28]},
        {name: '青岛', geoCoord: [120.33, 36.07]},
        {name: '乳山', geoCoord: [121.52, 36.89]},
        {name: '金昌', geoCoord: [102.188043, 38.520089]},
        {name: '泉州', geoCoord: [118.58, 24.93]},
        {name: '莱西', geoCoord: [120.53, 36.86]},
        {name: '日照', geoCoord: [119.46, 35.42]},
        {name: '胶南', geoCoord: [119.97, 35.88]},
        {name: '南通', geoCoord: [121.05, 32.08]},
        {name: '拉萨', geoCoord: [91.11, 29.97]},
        {name: '云浮', geoCoord: [112.02, 22.93]},
        {name: '梅州', geoCoord: [116.1, 24.55]},
        {name: '文登', geoCoord: [122.05, 37.2]},
        {name: '上海', geoCoord: [121.48, 31.22]},
        {name: '攀枝花', geoCoord: [101.718637, 26.582347]},
        {name: '威海', geoCoord: [122.1, 37.5]},
        {name: '承德', geoCoord: [117.93, 40.97]},
        {name: '厦门', geoCoord: [118.1, 24.46]},
        {name: '汕尾', geoCoord: [115.375279, 22.786211]},
        {name: '潮州', geoCoord: [116.63, 23.68]},
        {name: '丹东', geoCoord: [124.37, 40.13]},
        {name: '太仓', geoCoord: [121.1, 31.45]},
        {name: '曲靖', geoCoord: [103.79, 25.51]},
        {name: '烟台', geoCoord: [121.39, 37.52]},
        {name: '福州', geoCoord: [119.3, 26.08]},
        {name: '瓦房店', geoCoord: [121.979603, 39.627114]},
        {name: '即墨', geoCoord: [120.45, 36.38]},
        {name: '抚顺', geoCoord: [123.97, 41.97]},
        {name: '玉溪', geoCoord: [102.52, 24.35]},
        {name: '张家口', geoCoord: [114.87, 40.82]},
        {name: '阳泉', geoCoord: [113.57, 37.85]},
        {name: '莱州', geoCoord: [119.942327, 37.177017]},
        {name: '湖州', geoCoord: [120.1, 30.86]},
        {name: '汕头', geoCoord: [116.69, 23.39]},
        {name: '昆山', geoCoord: [120.95, 31.39]},
        {name: '宁波', geoCoord: [121.56, 29.86]},
        {name: '湛江', geoCoord: [110.359377, 21.270708]},
        {name: '揭阳', geoCoord: [116.35, 23.55]},
        {name: '荣成', geoCoord: [122.41, 37.16]},
        {name: '连云港', geoCoord: [119.16, 34.59]},
        {name: '葫芦岛', geoCoord: [120.836932, 40.711052]},
        {name: '常熟', geoCoord: [120.74, 31.64]},
        {name: '东莞', geoCoord: [113.75, 23.04]},
        {name: '河源', geoCoord: [114.68, 23.73]},
        {name: '淮安', geoCoord: [119.15, 33.5]},
        {name: '泰州', geoCoord: [119.9, 32.49]},
        {name: '南宁', geoCoord: [108.33, 22.84]},
        {name: '营口', geoCoord: [122.18, 40.65]},
        {name: '惠州', geoCoord: [114.4, 23.09]},
        {name: '江阴', geoCoord: [120.26, 31.91]},
        {name: '蓬莱', geoCoord: [120.75, 37.8]},
        {name: '韶关', geoCoord: [113.62, 24.84]},
        {name: '嘉峪关', geoCoord: [98.289152, 39.77313]},
        {name: '广州', geoCoord: [113.23, 23.16]},
        {name: '延安', geoCoord: [109.47, 36.6]},
        {name: '太原', geoCoord: [112.53, 37.87]},
        {name: '清远', geoCoord: [113.01, 23.7]},
        {name: '中山', geoCoord: [113.38, 22.52]},
        {name: '昆明', geoCoord: [102.73, 25.04]},
        {name: '寿光', geoCoord: [118.73, 36.86]},
        {name: '盘锦', geoCoord: [122.070714, 41.119997]},
        {name: '长治', geoCoord: [113.08, 36.18]},
        {name: '深圳', geoCoord: [114.07, 22.62]},
        {name: '珠海', geoCoord: [113.52, 22.3]},
        {name: '宿迁', geoCoord: [118.3, 33.96]},
        {name: '咸阳', geoCoord: [108.72, 34.36]},
        {name: '铜川', geoCoord: [109.11, 35.09]},
        {name: '平度', geoCoord: [119.97, 36.77]},
        {name: '佛山', geoCoord: [113.11, 23.05]},
        {name: '海口', geoCoord: [110.35, 20.02]},
        {name: '江门', geoCoord: [113.06, 22.61]},
        {name: '章丘', geoCoord: [117.53, 36.72]},
        {name: '肇庆', geoCoord: [112.44, 23.05]},
        {name: '大连', geoCoord: [121.62, 38.92]},
        {name: '临汾', geoCoord: [111.5, 36.08]},
        {name: '吴江', geoCoord: [120.63, 31.16]},
        {name: '石嘴山', geoCoord: [106.39, 39.04]},
        {name: '沈阳', geoCoord: [123.38, 41.8]},
        {name: '苏州', geoCoord: [120.62, 31.32]},
        {name: '茂名', geoCoord: [110.88, 21.68]},
        {name: '嘉兴', geoCoord: [120.76, 30.77]},
        {name: '长春', geoCoord: [125.35, 43.88]},
        {name: '胶州', geoCoord: [120.03336, 36.264622]},
        {name: '银川', geoCoord: [106.27, 38.47]},
        {name: '张家港', geoCoord: [120.555821, 31.875428]},
        {name: '三门峡', geoCoord: [111.19, 34.76]},
        {name: '锦州', geoCoord: [121.15, 41.13]},
        {name: '南昌', geoCoord: [115.89, 28.68]},
        {name: '柳州', geoCoord: [109.4, 24.33]},
        {name: '三亚', geoCoord: [109.511909, 18.252847]},
        {name: '自贡', geoCoord: [104.778442, 29.33903]},
        {name: '吉林', geoCoord: [126.57, 43.87]},
        {name: '阳江', geoCoord: [111.95, 21.85]},
        {name: '泸州', geoCoord: [105.39, 28.91]},
        {name: '西宁', geoCoord: [101.74, 36.56]},
        {name: '宜宾', geoCoord: [104.56, 29.77]},
        {name: '呼和浩特', geoCoord: [111.65, 40.82]},
        {name: '成都', geoCoord: [104.06, 30.67]},
        {name: '大同', geoCoord: [113.3, 40.12]},
        {name: '镇江', geoCoord: [119.44, 32.2]},
        {name: '桂林', geoCoord: [110.28, 25.29]},
        {name: '张家界', geoCoord: [110.479191, 29.117096]},
        {name: '宜兴', geoCoord: [119.82, 31.36]},
        {name: '北海', geoCoord: [109.12, 21.49]},
        {name: '西安', geoCoord: [108.95, 34.27]},
        {name: '金坛', geoCoord: [119.56, 31.74]},
        {name: '东营', geoCoord: [118.49, 37.46]},
        {name: '牡丹江', geoCoord: [129.58, 44.6]},
        {name: '遵义', geoCoord: [106.9, 27.7]},
        {name: '绍兴', geoCoord: [120.58, 30.01]},
        {name: '扬州', geoCoord: [119.42, 32.39]},
        {name: '常州', geoCoord: [119.95, 31.79]},
        {name: '潍坊', geoCoord: [119.1, 36.62]},
        {name: '重庆', geoCoord: [106.54, 29.59]},
        {name: '台州', geoCoord: [121.420757, 28.656386]},
        {name: '南京', geoCoord: [118.78, 32.04]},
        {name: '滨州', geoCoord: [118.03, 37.36]},
        {name: '贵阳', geoCoord: [106.71, 26.57]},
        {name: '无锡', geoCoord: [120.29, 31.59]},
        {name: '本溪', geoCoord: [123.73, 41.3]},
        {name: '克拉玛依', geoCoord: [84.77, 45.59]},
        {name: '渭南', geoCoord: [109.5, 34.52]},
        {name: '马鞍山', geoCoord: [118.48, 31.56]},
        {name: '宝鸡', geoCoord: [107.15, 34.38]},
        {name: '焦作', geoCoord: [113.21, 35.24]},
        {name: '句容', geoCoord: [119.16, 31.95]},
        {name: '北京', geoCoord: [116.46, 39.92]},
        {name: '徐州', geoCoord: [117.2, 34.26]},
        {name: '衡水', geoCoord: [115.72, 37.72]},
        {name: '包头', geoCoord: [110, 40.58]},
        {name: '绵阳', geoCoord: [104.73, 31.48]},
        {name: '乌鲁木齐', geoCoord: [87.68, 43.77]},
        {name: '枣庄', geoCoord: [117.57, 34.86]},
        {name: '杭州', geoCoord: [120.19, 30.26]},
        {name: '淄博', geoCoord: [118.05, 36.78]},
        {name: '鞍山', geoCoord: [122.85, 41.12]},
        {name: '溧阳', geoCoord: [119.48, 31.43]},
        {name: '库尔勒', geoCoord: [86.06, 41.68]},
        {name: '安阳', geoCoord: [114.35, 36.1]},
        {name: '开封', geoCoord: [114.35, 34.79]},
        {name: '济南', geoCoord: [117, 36.65]},
        {name: '德阳', geoCoord: [104.37, 31.13]},
        {name: '温州', geoCoord: [120.65, 28.01]},
        {name: '九江', geoCoord: [115.97, 29.71]},
        {name: '邯郸', geoCoord: [114.47, 36.6]},
        {name: '临安', geoCoord: [119.72, 30.23]},
        {name: '兰州', geoCoord: [103.73, 36.03]},
        {name: '沧州', geoCoord: [116.83, 38.33]},
        {name: '临沂', geoCoord: [118.35, 35.05]},
        {name: '南充', geoCoord: [106.110698, 30.837793]},
        {name: '天津', geoCoord: [117.2, 39.13]},
        {name: '富阳', geoCoord: [119.95, 30.07]},
        {name: '泰安', geoCoord: [117.13, 36.18]},
        {name: '诸暨', geoCoord: [120.23, 29.71]},
        {name: '郑州', geoCoord: [113.65, 34.76]},
        {name: '哈尔滨', geoCoord: [126.63, 45.75]},
        {name: '聊城', geoCoord: [115.97, 36.45]},
        {name: '芜湖', geoCoord: [118.38, 31.33]},
        {name: '唐山', geoCoord: [118.02, 39.63]},
        {name: '平顶山', geoCoord: [113.29, 33.75]},
        {name: '邢台', geoCoord: [114.48, 37.05]},
        {name: '德州', geoCoord: [116.29, 37.45]},
        {name: '济宁', geoCoord: [116.59, 35.38]},
        {name: '荆州', geoCoord: [112.239741, 30.335165]},
        {name: '宜昌', geoCoord: [111.3, 30.7]},
        {name: '义乌', geoCoord: [120.06, 29.32]},
        {name: '丽水', geoCoord: [119.92, 28.45]},
        {name: '洛阳', geoCoord: [112.44, 34.7]},
        {name: '秦皇岛', geoCoord: [119.57, 39.95]},
        {name: '株洲', geoCoord: [113.16, 27.83]},
        {name: '石家庄', geoCoord: [114.48, 38.03]},
        {name: '莱芜', geoCoord: [117.67, 36.19]},
        {name: '常德', geoCoord: [111.69, 29.05]},
        {name: '保定', geoCoord: [115.48, 38.85]},
        {name: '湘潭', geoCoord: [112.91, 27.87]},
        {name: '金华', geoCoord: [119.64, 29.12]},
        {name: '岳阳', geoCoord: [113.09, 29.37]},
        {name: '长沙', geoCoord: [113, 28.21]},
        {name: '衢州', geoCoord: [118.88, 28.97]},
        {name: '廊坊', geoCoord: [116.7, 39.53]},
        {name: '菏泽', geoCoord: [115.480656, 35.23375]},
        {name: '合肥', geoCoord: [117.27, 31.86]},
        {name: '武汉', geoCoord: [114.31, 30.52]},
        {name: '大庆', geoCoord: [125.03, 46.58]}
    ]
    var option = {
        backgroundColor: 'rgba(0,0,0,0)',
        color: [
            'rgba(255, 255, 255, 0.8)',
            'rgba(14, 241, 242, 0.8)',
            'rgba(37, 140, 249, 0.8)'
        ],
        title: {
            text: '大规模MarkPoint特效',
            subtext: '2000',
            itemGap: 15,
            padding: 15,
            x: 'left',
            textStyle: {
                fontSize: '18',
                color: '#fff'
            },
            subtextStyle: {
                fontSize: 30,
                fontWeight: 'bolder',
                fontFamily: 'Arial, Verdana, sans-serif'
            }
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#fff'
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                name: '弱',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    x: 100
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 1.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                markPoint: {
                    symbolSize: 2,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: (function () {
                        var data = [];
                        var len = 3000;
                        var geoCoord
                        while (len--) {
                            geoCoord = placeList[len % placeList.length].geoCoord;
                            data.push({
                                name: placeList[len % placeList.length].name + len,
                                value: 10,
                                geoCoord: [
                                    geoCoord[0] + Math.random() * 5 - 2.5,
                                    geoCoord[1] + Math.random() * 3 - 1.5
                                ]
                            })
                        }
                        return data;
                    })()
                }
            },
            {
                name: '中',
                type: 'map',
                mapType: 'china',
                data: [],
                markPoint: {
                    symbolSize: 3,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: (function () {
                        var data = [];
                        var len = 1000;
                        var geoCoord
                        while (len--) {
                            geoCoord = placeList[len % placeList.length].geoCoord;
                            data.push({
                                name: placeList[len % placeList.length].name + len,
                                value: 50,
                                geoCoord: [
                                    geoCoord[0] + Math.random() * 5 - 2.5,
                                    geoCoord[1] + Math.random() * 3 - 1.5
                                ]
                            })
                        }
                        return data;
                    })()
                }
            },
            {
                name: '强',
                type: 'map',
                mapType: 'china',
                hoverable: false,
                roam: true,
                data: [],
                markPoint: {
                    symbol: 'diamond',
                    symbolSize: 6,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: (function () {
                        var data = [];
                        var len = placeList.length;
                        while (len--) {
                            data.push({
                                name: placeList[len].name,
                                value: 90,
                                geoCoord: placeList[len].geoCoord
                            })
                        }
                        return data;
                    })()
                }
            }
        ]
    };
    myChart.setOption(option);
}

function bigScreenPieTop() {
    var EcharstTopPie = echarts.init(document.getElementById("midTopPie"));
    var option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:[
            '#3B61B0', '#3988BA', '#4BA1A7', '#2B885F', '#759B4B',
            '#BD9C2C', '#BF6B2E', '#BA3B3F', '#A3E14F', '#9E46A4',
            '#693CA4', '#3E3E8F', '#3C60AF'
        ],
        legend: {
            show:false,
            orient : 'vertical',
            x : 'left',
            textStyle:{
                color:'#ffffff'
            },
            data:['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽',
                '福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南',
                '西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门']
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                center : ['50%', '50%'],
                radius : ['70%', '90%'],
                itemStyle : {
                    normal : {
                        label : {
                            position : 'inner',
                            formatter : function (params) {
                                return params.data.name+'\n'+params.data.value+'('+(params.percent - 0).toFixed(0) + '%)'
                            }
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            formatter : "{b}\n{d}%"
                        }
                    }

                },
                data:[
                    {value:1048, name:'北京'},
                    {value:922, name:'天津'},
                    {value:822, name:'河北'},
                    {value:790, name:'山西'},
                    {value:722, name:'内蒙古'},
                    {value:650, name:'辽宁'},
                    {value:600, name:'吉林'},
                    {value:500, name:'黑龙江'},
                    {value:400, name:'上海'},
                    {value:320, name:'江苏'},
                    {value:300, name:'浙江'},
                    {value:250, name:'安徽'},
                    {value:200, name:'福建'},
                    {value:150, name:'江西'},
                    {value:120, name:'山东'},
                    {value:102, name:'河南'},
                    {value:90, name:'湖北'},
                    {value:50, name:'湖南'},
                    {value:20, name:'广东'},
                    {value:10, name:'广西'},
                    {value:5, name:'海南'},
                    {value:4, name:'重庆'},
                    {value:3, name:'四川'},
                    {value:2, name:'贵州'},
                    {value:1, name:'云南'},
                    {value:0.9, name:'西藏'},
                    {value:0.8, name:'陕西'},
                    {value:0.7, name:'甘肃'},
                    {value:0.6, name:'青海'},
                    {value:0.5, name:'宁夏'},
                    {value:0.40, name:'新疆'},
                    {value:0.3, name:'台湾'},
                    {value:0.2, name:'香港'},
                    {value:0.1, name:'澳门'}
                ]
            }
        ]
    };
    EcharstTopPie.setOption(option);
}

function midTopRightBar() {
    var midTopBar = echarts.init(document.getElementById("midTopBar"));
    var option = {
        backgroundColor: 'rgba(0,0,0,0)',
        title : {
            text: '每日全站PV/UV情况',
            textStyle:{
                fontSize:12,
                color:'#ffffff'
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        grid: {x:25,x2:25,y: 70, y2:30, borderWidth:0},
        xAxis : [
            {
                type : 'category',
                name:'时间',
                splitLine: {show:false},
                data : ['2017-09-10','2017-09-11']
            },
            {
                type : 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data : ['Line','Bar']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:'流量(K)',
                splitLine: {show:false},
                axisLabel:{formatter:'{value} ms'}
            }

        ],
        series : [
            {
                name:'流量',
                type:'bar',
                itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
                data:[40,155]
            },
            {
                name:'流量',
                type:'bar',
                itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
                data:[100,200]
            },
            {
                name:'流量',
                type:'bar',
                itemStyle: {normal: {color:'rgba(252,206,16,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
                data:[906,911]
            },
            {
                name:'流量',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
                data:[96,224]
            },
            {
                name:'流量',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(181,195,52,0.5)', label:{show:true}}},
                data:[491,2035]
            },
            {
                name:'流量',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(252,206,16,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'+'):'';}}}},
                data:[3000,3000]
            }
        ]
    };
    midTopBar.setOption(option);
}
function midDownBarOne() {
    var midDownBar1 = echarts.init(document.getElementById("mid-down1"));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color:'#ffffff'
            },
            data:['总数','病害比例']
        },
        calculable : true,
        grid: {
            x:25,
            x2:25,
            y: 35,
            y2:10,
            borderWidth:0},
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                splitLine: {show:false},
                data : ['','','','','','','']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                },
                splitLine: {show:false},
                show:false
            }
        ],
        series : [
            {
                name:'病害比例',
                type:'line',
                smooth:true,
                itemStyle:{
                    normal:{
                        color:'#749C48',
                        lineStyle:{
                            color:'#749C48'
                        }
                    },
                    emphasis:{
                        color:'#3B61AF',
                        lineStyle:{
                            color:'#3B61AF'
                        }
                    }
                },
                data:[1, 9, 2, 5, 3, 2, 0],
            },
            {
                name:'总数',
                type:'bar',
                itemStyle:{
                    normal:{
                        color:'#3D3F8F'
                    },
                    emphasis:{
                        color:'#3B61AF'
                    }
                },
                data:[11, 11, 15, 13, 12, 13, 10],
                barMaxWidth: 15,
            }

        ]
    };
    midDownBar1.setOption(option);
}
function midDownBarTwo() {
    var midDownBar1 = echarts.init(document.getElementById("mid-down2"));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color:'#ffffff'
            },
            data:['病害数量','病害分量']
        },
        calculable : true,
        grid: {
            x:25,
            x2:25,
            y: 35,
            y2:10,
            borderWidth:0},
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                splitLine: {show:false},
                data : ['','','','','','','']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                },
                splitLine: {show:false},
                show:false
            }
        ],
        series : [
            {
                name:'病害数量',
                type:'bar',
                itemStyle:{
                    normal:{
                        color:'#574887'
                    },
                    emphasis:{
                        color:'#3B61AF'
                    }
                },
                data:[11, 11, 15, 13, 12, 13, 10],
                barMaxWidth: 15,
            },
            {
                name:'病害分量',
                type:'bar',
                itemStyle:{
                    normal:{
                        color:'#A094A7',
                    },
                    emphasis:{
                        color:'#3B61AF',
                    }
                },
                data:[1, 9, 2, 5, 3, 2, 0],
            }
        ]
    };
    midDownBar1.setOption(option);
}

function midMidDownOne() {
    var charts = echarts.init(document.getElementById("mid-mid-down1"));
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#3D3F8E','#749C48'],
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['50%', '90%'],
                itemStyle : {
                    normal : {
                        label : {
                            position : 'inner',
                            formatter : function (params) {
                                return (params.percent - 0).toFixed(0) + '%'
                            }
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : 12,
                                fontWeight : 'bold'
                            },
                            formatter: "{b}\n{c} ({d}%)"
                        }
                    }
                },
                data:[
                    {value:335, name:'完成量'},
                    {value:12, name:'未完成量'}
                ]
            }
        ]
    };
    charts.setOption(option);
}

function midMidDownTwo() {
    var charts = echarts.init(document.getElementById("mid-mid-down2"));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x:35,
            x2:25,
            y: 25,
            y2:35,
            borderWidth:0
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#212334',
                        width:2
                    }
                },
                splitLine:{
                    show:false
                },
                textStyle:{
                  color:'#5D606B'
                },
                data : ['2017-01-12','2017-01-13','2017-01-14','2017-01-15','2017-01-16','2017-01-17']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} M'
                },
                axisLine:{
                    show:false
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#212334'
                    }
                },
                textStyle:{
                    color:'#5D606B'
                },
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                smooth:true,
                itemStyle:{
                    normal:{
                        color:'#772BB7',
                        lineStyle:{
                            color:'#772BB7'
                        }
                    },
                    emphasis:{
                        color:'#3B61AF',
                        lineStyle:{
                            color:'#3B61AF'
                        }
                    }
                },
                data:[120, 132, 101, 134, 90, 230]
            }
        ]
    };
    charts.setOption(option);
}

function midDownRgBar() {
    var midDownBar1 = echarts.init(document.getElementById("mid-rg-down3"));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color:'#ffffff'
            },
            data:['总数','病害比例']
        },
        calculable : true,
        grid: {
            x:25,
            x2:25,
            y: 35,
            y2:10,
            borderWidth:0},
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                splitLine: {show:false},
                data : ['','','','','','','']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                },
                splitLine: {show:false},
                show:false
            }
        ],
        series : [
            {
                name:'病害比例',
                type:'line',
                smooth:true,
                itemStyle:{
                    normal:{
                        color:'#749C48',
                        lineStyle:{
                            color:'#749C48'
                        }
                    },
                    emphasis:{
                        color:'#3B61AF',
                        lineStyle:{
                            color:'#3B61AF'
                        }
                    }
                },
                data:[1, 9, 2, 5, 3, 2, 0],
            },
            {
                name:'总数',
                type:'bar',
                itemStyle:{
                    normal:{
                        color:'#3D3F8F'
                    },
                    emphasis:{
                        color:'#3B61AF'
                    }
                },
                data:[11, 11, 15, 13, 12, 13, 10],
                barMaxWidth: 15,
            }

        ]
    };
    midDownBar1.setOption(option);
}

function rgDown() {
    var charts = echarts.init(document.getElementById("rg-down"));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x:35,
            x2:25,
            y: 25,
            y2:35,
            borderWidth:0
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#212334',
                        width:2
                    }
                },
                splitLine:{
                    show:false
                },
                textStyle:{
                    color:'#5D606B'
                },
                data : ['2017-01-12','2017-01-13','2017-01-14','2017-01-15','2017-01-16','2017-01-17']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} M'
                },
                axisLine:{
                    show:false
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#212334'
                    }
                },
                textStyle:{
                    color:'#5D606B'
                },
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                smooth:true,
                itemStyle:{
                    normal:{
                        color:'#772BB7',
                        lineStyle:{
                            color:'#772BB7'
                        }
                    },
                    emphasis:{
                        color:'#3B61AF',
                        lineStyle:{
                            color:'#3B61AF'
                        }
                    }
                },
                data:[120, 132, 101, 134, 90, 230]
            }
        ]
    };
    charts.setOption(option);
}