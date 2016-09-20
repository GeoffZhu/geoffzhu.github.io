/**
 * @author geoff
 * @description Validate
 * @date 2015-12-20 16:32:39
 * 
 * html:
 * 文本类校验
 * <input type="text" data-validate='{"required":true,"label":"姓名","type":"text","reg":"name"}'>
 * 单选校验
 * 在radio父级 <div data-validate='{"required":true,"label":"性别","type":"radio"}'>
 * 组织架构选择
 * <div class="select-person-result js-select-person-result" data-validate='{"required":true,"label":"所属班级","type":"org"}'>
 *
 * 校验正则取自common中regExp-config
 *
 * eg.
 * var result = Scui.validate('#testForm');
 * 
 * return { flag: true}
 * return {flag: false , msg: ...}
 */


$.extend({
    validate: function(formNode,options){
        var Validate = function (formNode,options) {
            this.formNode = formNode;
            this.options = $.extend({}, Validate.DEFAULTS, options);
        }

        Validate.DEFAULTS = {
            'label': '表单信息',    //提示名称
            'reg': 'text',          // 正则类型 text email url phone-number ... 对应common中的regExp
            'required': false,      // 是否为必填
            'type': 'input'         // text radio org(组织架构选择) 
        }

        Validate.prototype.init = function () {
            var _this = this;
            var els = $(_this.formNode).find("[data-validate]");
            
            var result = _this.check(els)

            return result;
            
        }


        Validate.prototype.check = function (els){
            var result;
            //Why用for不用each，each里面，return有坑，无法跳出init方法
            for(var i=0; i<els.length; i++){
                var itemOption = JSON.parse(els.eq(i).attr('data-validate'));
                    itemOption = $.extend({},this.options,itemOption);

                switch(itemOption.type){
                    case "text":
                      result = this.checkTextItem(els.eq(i) , itemOption);
                      break;
                    case "org":
                      result = this.checkOrgItem(els.eq(i) , itemOption);
                      break;
                    case "radio":
                      result = this.checkRadioItem(els.eq(i) , itemOption);
                      break;
                    default:
                        console.error('未定义的校验type');
                }

                if(result.flag == false){
                    return result;
                }
            }

            return {
                flag: true
            }; 
        }
        Validate.prototype.checkTextItem = function(item, itemOption){
            var regExp = this.regExp;
            var value = item.val();

            if(regExp[itemOption.reg] == undefined){
                console.error('请在regExp中添加'+itemOption.label+'的正则规则')
            }

            //必填项校验
            if(itemOption.required){
                if(value == "" || value.length == 0 || value == undefined){
                    return {
                        msg: itemOption.label + "不能为空",
                        flag: false
                    }
                }else if(!regExp[itemOption.reg].test(value)){
                    return {
                        msg: "请输入正确的" + itemOption.label,
                        flag: false
                    }
                }

            //选填项校验
            }else{
                if(value.length != "0" && value != "" && value != undefined){
                    if(!regExp[itemOption.reg].test(value)){
                        return {
                            msg: "请输入正确的" + itemOption.label,
                            flag: false
                        }
                    }
                }
            }

            return {
                flag: true
            }
        }
        Validate.prototype.checkOrgItem = function(item, itemOption){
            //如果org中有内容，就通过
            var value = item.html();

            if(itemOption.required){
                if(value == "" || value.length == 0 || value == undefined){
                    return {
                        msg: itemOption.label + "不能为空",
                        flag: false
                    }
                }
            }

            return {
                flag: true
            }
        }
        Validate.prototype.checkRadioItem = function(item, itemOption){
            //如果org中有内容，就通过
            var radios = item.find('input[type=radio]:checked');

            if(itemOption.required){
                if(radios.length == 0){
                    return {
                        msg: itemOption.label + "不能为空",
                        flag: false
                    }
                }
            }

            return {
                flag: true
            }
        }

        //校验规则
        Validate.prototype.regExp =  {
            text: /([^\s])/,
            name:/([^\s])/,
            number: /^[^\u4e00-\u9fa5]*$/,
            account: /^[^\u4e00-\u9fa5]*$/,
            wechat: /^[^\u4e00-\u9fa5]*$/,
            // wechat: /^[a-zA-Z\d_-]{5,40}$/,
            wxuserid: /^[a-zA-Z\d_]{5,64}$/,
            email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,60}[a-z0-9]+$/,
            phone: /^[-\d_]{5,20}$/,
            domain: /^[0-9a-zA-Z_]{1,30}$/,
            url: /^[A-Za-z0-9-_%#\:&\?\/.=]+$/,
            decimal: /^[0-9]\d*([.][0-9])?$/, // /^[0-9\.]{1,10}$/
            workYear: /^[0-9\.]{1,5}$/,
            certificate: /^([\u4E00-\u9FA5]{1,2}[\-A-Za-z\d]{1,15}|[\-A-Za-z\(\)\d]{1,15})$/,// 除身份证外的 其它类型证件
            floatType: /^[\-0-9\.]{1,9}$/, // 可以为负数
            // passport: /^[a-zA-Z\d_-]{1,18}$/, // 身份证
            passport: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
            dateDay: /\d{4}-\d{2}-\d{2}$/ // 2015-10-12
        };

        //========================
        // 插件入口
        function Plugin(formNode,options) {
            var result = new Validate(formNode,options).init();
            return result;
        }    

        return Plugin(formNode,options);
    }
});
