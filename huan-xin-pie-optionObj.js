


option = {
    // no title
    title: {
        show: false,
    },
    // no legend
    legend: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    color:['red', 'green','yellow','blueviolet'],
    series: [
        {
            name:'访问来源', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
            type:'pie',
            hoverAnimation: false, //关闭hover放大效果
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {//没hover时中心的文字
                    show: true,
                    position: 'center',
                    formatter: '总数\n2543',
                    color: "red",
                    fontSize: 30,
                },
                emphasis: { //hover时中心的文字
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
        }
    ]
};
