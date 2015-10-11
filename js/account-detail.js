/**
 * Created by wangjiewen on 14-11-29.
 */

(function(){
    var accountDetail = {

        baseUrl: "../js/",

        prevPage: 0,
        curPage: 1,
        nextPage: 2,
        totalPage: 23,

        $dataContainer: null,
        $btnPrevPage: null,
        $btnCurPage: null,
        $btnNextPage: null,
        $btnTotalPage: null,

        dataTpl: [
            '<ul>',
            '<li class="date"><%= Item.date %></li>',
            '<li class="operate"><%= Item.operate %></li>',
            '<li class="money"><%= Item.money %></li>',
            '<li class="withdraw"><%= Item.withdraw %></li>',
            '</ul>'
        ].join(""),

        init: function () {
            var self = this;
            //初始化DOM对象
            self.$dataContainer = $('#j-data-container');
            self.$btnPrevPage = $("#j-prev-page");
            self.$btnCurPage = $("#j-cur-page");
            self.$btnNextPage = $("#j-next-page");
            self.$btnTotalPage = $("#j-total-page");

            //初始化数据
            self.getPage();
            self.bindEvent();

            //初始化请求
            var type = $("#content").val();
            var field = {
                type: type,
                page: 1
            };
            var url = self.baseUrl + "account-detail-1.json";
            self.ajaxPage(url, field);
        },

        getPage: function () {
            var self = this;
            self.prevPage = parseInt(self.$btnPrevPage.attr("page"));
            self.curPage = parseInt(self.$btnCurPage.val());
            self.nextPage = parseInt(self.$btnNextPage.attr("page"));
            self.totalPage = parseInt(self.$btnTotalPage.text());
        },

        updatePage: function(){
            var self = this;
            self.$btnPrevPage.attr("page", self.prevPage);
            self.$btnCurPage.val(self.curPage);
            self.$btnNextPage.attr("page", self.nextPage);
            self.$btnTotalPage.text(self.totalPage);
        },

        bindEvent: function () {
            var self = this;
            self.$btnPrevPage.click(function(e){
                self.getPage();
                var type = $("#content").val();
                var field = {
                    type: type,
                    page: self.prevPage
                };
                if(self.prevPage < 1){
                    return false;
                }
                var url = self.baseUrl + "account-detail-" + self.prevPage + ".json";
                self.ajaxPage(url, field);
            });

            self.$btnNextPage.click(function(e){
                self.getPage();
                var type = $("#content").val();
                var field = {
                    type: type,
                    page: self.nextPage
                };

                if(self.nextPage >= self.totalPage){
                    return false;
                }
                var url = self.baseUrl + "account-detail-" + self.nextPage + ".json";
                self.ajaxPage(url, field);
            });
        },
        
        ajaxPage: function (url, field) {
            var self = this;
            $.ajax({
                url: url,
                method: "get",
                dataType: "json",
                data: field,
                success: function(msg){
                    self.curPage = msg.curPage;
                    self.totalPage = msg.totalPage;

                    //examine the nextPage in different case
                    if(self.curPage >= self.totalPage){
                        self.nextPage = self.totalPage;
                        self.$btnNextPage.attr("enable",false);
                    }else{
                        self.nextPage = self.curPage + 1;
                        self.$btnNextPage.attr("enable",true);
                    }

                    //examine the nextPage in different case
                    if(self.curPage <= 1){
                        self.prevPage = 1;
                        self.$btnPrevPage.attr("enable",false);
                    }else{
                        self.prevPage = self.curPage - 1;
                        self.$btnPrevPage.attr("enable",true);
                    }

                    //reset the page of corresponding attributes in DOM
                    self.updatePage();

                    self.renderPage(msg.data);

                }
            });
        },
        
        renderPage: function (data) {
            var self = this;
            self.$dataContainer.empty();
            var len = data.length;
            var html = "";
            for(var i = 0; i < len; i++){
                html += Util.tmpl(self.dataTpl, {Item: data[i]});
            }
            self.$dataContainer.append(html);
        }

    }

    accountDetail.init();
})()