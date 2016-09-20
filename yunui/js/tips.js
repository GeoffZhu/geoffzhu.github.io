/**
 * @author geoffZhu
 * @description tips
 * @date 2016年3月18日
 */
$.extend({
    tipsPreTimer: null,
    tips: function(options){

        var Tips = function (options) {
            this.options = $.extend({}, Tips.DEFAULTS, options);
        }

        Tips.DEFAULTS = {
            'type': 0, // 0 失败  1 成功
            'text': '操作失败', // 默认提示文本
            'timer': 4000   // 默认展示时间
        }

        Tips.prototype.init = function () {
            var _this = this;

            _this.destroy(0);

            var elsStr = this.template(_this.options);
            $(elsStr).appendTo('body').show();


            clearTimeout($.tipsPreTimer);
            $.tipsPreTimer = setTimeout(function () {
                _this.destroy();
            }, _this.options.timer);
        }

        Tips.prototype.destroy = function (type) {
            var $tips = $('.scui-tips');

            if (type === 0) { // 0 直接删除 其它渐隐
                $tips.length && $tips.remove();
            } else {
                $tips.length && $tips.fadeOut();
            }
        }

        Tips.prototype.template = function (options){
            if(options.type == 0){
                //error模版
                return '<div class="scui-tips scui-tips-error"><div class="scui-tips-wrap"><span class="scui-tips-text">'+ options.text+'</span></div></div>'
            }else if(options.type == 1){
                //success模版
                return '<div class="scui-tips scui-tips-success"><div class="scui-tips-wrap"><span class="scui-tips-text">'+ options.text+'</span></div></div>'
            }
        }

        //========================
        // 插件入口
        function Plugin(options) {
            new Tips(options).init();
        }    

        Plugin(options);
    }
});

    
