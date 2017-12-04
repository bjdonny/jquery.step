# jquery.step
jQuery步骤条插件


### 这是一个简易的jquery步骤条插件
![image](https://github.com/weirui88888/jquery.step/blob/master/images/demo.jpg)
 
### 使用方法
第一步:把对应的js和css文件引入项目(注意需要先引入jQuery)
   
第二步:在页面中对应位置插入以下代码
```javascript
   <div class="box clearfix">//这里要给该元素添加class=clearfix,用以清除浮动
                <span class="line"></span>
                <span class="lineGo"></span>
                <!-- 下面这些step就是具体的步骤，需要获取后台真实数据，这里写死是为了方便理解-->
                
                <div class="step">
                        <div class="step-round">
                             1
                        </div>
                        <div class="step-explain">
                            <p>2017-09-20 12:12:12</p>
                            <p>注册成功</p>
                        </div>
                </div>
                <div class="step">
                     <div class="step-round">
                         2
                     </div>
                     <div class="step-explain">
                        <p>2017-09-20 12:34:12</p>
                        <p>正在出库</p>
                    </div>
                 </div>
                 <div class="step">
                         <div class="step-round">
                         3
                         </div>
                         <div class="step-explain">
                                <p>2017-09-20 12:50:12</p>
                                <p>确认收获</p>
                        </div>
                 </div>
                 <div class="step">
                       <div class="step-round">
                       4
                       </div>
                       <div class="step-explain">
                              <p>2017-09-21 12:50:12</p>
                              <p>待评价</p>
                 </div>
             </div>
                     
    </div>
```

第三步:初始化
```javascript
 <!-- 目前只有一个自定义参数，就是文字描述项的水平位置-->
 $(".box").step({
    textAlign:"left",//textAlign为文字描述项的水平位置，可传left,right,center
})

 <!-- 当我们从后台获取真实数据后，可以根据当前步骤执行以下代码-->
 $(".box").toStep(3)
```

### 注释
垂直方向的步骤条也很好写。理解了当前代码，写个垂直也是分分钟的事。


### 交流天地
[简书地址](http://www.jianshu.com/u/21dff31694d1)
[个人博客](https://weirui88888.github.io/)






