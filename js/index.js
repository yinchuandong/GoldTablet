/**
 * Created by wjw on 2014/11/22.
 */
(function(){
    var Index = {
        hasBind:0,
        productLen:3,
        incomeTpl:
        [

            '<span class="num1"><%= Item.dayEarnings %>元</span>',
            '<span class="num2"><%= Item.leastCopies %>份</span>',
            '<span class="num3"><%= Item.price %>元/份</span>',

        ].join(""),
        init:function(){
            this.getData();
            this.bindEvent();
        },
        bindEvent:function(){
            if(!Util.hasAttrSupport("placeholder")){
                $("#j-user").val("用户名").click(function(){
                    if($(this).val()=="用户名"){
                        $(this).val("");
                    }
                }).blur(function(){
                    if($(this).val()==""){
                        $(this).val("用户名");
                    }
                });
                $("#j-password").val("密码").click(function(){
                    if($(this).val()=="密码"){
                        $(this).val("");
                    }
                }).blur(function(){
                    if($(this).val()==""){
                        $(this).val("密码");
                    }
                });;
            }
            $("#j-log-btn").click(function(){
                var username = $("#j-user").val();
                var pass = $("#j-password").val();
                if (!(username != "" && pass != "" && username != "用户名" && pass != "密码")) {
                    alert("请填写用户名或密码");
                } else {
                    $.ajax({
                        url: "../js/login.json",
                        data: {
                            username: username,
                            pass: pass
                        },
                        dataType: "json",
                        type: "post",
                        error: function () {
                        },
                        success: function (data) {
                            if (data.loginStatus == 1) {
                                alert("登录成功")
                            }
                        }
                    });
                }
            });
        },

        getData:function(){
            var self = this;
            $.ajax({
                url:"../js/indexdata.json",
                data:{},
                dataType:"json",
                type:"get",
                error:function(){
                    console.log("error");
                },
                success:function(data) {
                    self.renderPage(data);
                }
            });
        },
        renderPage:function(data){
            var self = this;
            var $income = $("#halei .j-income_num");
            $(".j-btcPrice").text(data.BTCprice);
            for(var i =0;i<this.productLen;i++){
                $income.eq(i).append(Util.tmpl(self.incomeTpl,{Item:data.productInfo[i]}));
                var idName ='graph'+parseInt(i+1);
                self.makeTable(data.productInfo[i].coordinate,idName);
            }
        },
        makeTable:function(arr,id){
            var myData = arr;
            var myChart = new JSChart(id, 'line');
            myChart.setDataArray(myData);
            myChart.setTitleFontSize(11);
            myChart.setAxisNameX('天');
            myChart.setAxisNameY('元');
            myChart.setAxisColor('#088ae0');
            myChart.setAxisValuesColor('#088ae0');
            myChart.setAxisPaddingLeft(35);
            myChart.setAxisPaddingRight(10);
            myChart.setAxisPaddingTop(30);
            myChart.setAxisPaddingBottom(35);
            //myChart.setAxisValuesDecimals(1);
            //myChart.setAxisValuesNumberX(22);
            myChart.setShowXValues(false);
            myChart.setGridColor('#088ae0');
            myChart.setLineColor('#088ae0');
            myChart.setLineWidth(2);
            myChart.setFlagColor('#088ae0');
            myChart.setFlagRadius(4);
            for(var i=0;i<arr.length;i++) {
                myChart.setTooltip([arr[i][0], arr[i][1]]);
                myChart.setLabelX([arr[i][0], arr[i][0]]);
            }

            myChart.setSize(294, 170);
            myChart.draw();
        }
    }
    Index.init();
})()