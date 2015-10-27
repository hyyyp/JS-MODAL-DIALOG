
/*对话框*/

var zindex = 10000;
var docMouseMoveEvent = document.onmousemove; 
    var docMouseUpEvent = document.onmouseup; 


function resize(obj,jd){
    var evt = getEvent(); 
      var resizeX = evt.clientX;
      var resizeY = evt.clientY;
      var mWidth = obj.width();
      var mHeight = obj.height();
      var mLeft = obj.position().left;
      var mTop = obj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp  = resizeY - evt.clientY;
        var tmp1 = resizeX - evt.clientX;
        var tmp2 = resizeY - evt.clientY;
        if(jd=="n"){
            obj.height(mHeight + tmp);
            obj.css("top",(mTop-tmp)+"px");
        }else if(jd=="s"){
            obj.height(mHeight - tmp);
        }else if(jd=="e"){
            obj.width(mWidth - tmp1);
        }else if(jd=="w"){
            obj.width(mWidth + tmp1);
            obj.css("left",(mLeft-tmp1)+"px");
        }else if(jd=="nw"){
            obj.width(mWidth + tmp1);
            obj.height(mHeight + tmp2);
            obj.css("left",(mLeft-tmp1)+"px");
            obj.css("top",(mTop-tmp2)+"px");
        }else if(jd=="ne"){
            obj.width(mWidth - tmp1);
            obj.height(mHeight + tmp2);
            obj.css("top",(mTop-tmp2)+"px");
        }else if(jd=="sw"){
            obj.width(mWidth + tmp1);
            obj.height(mHeight - tmp2);
            obj.css("left",(mLeft-tmp1)+"px");
        }else if(jd=="se"){
            obj.width(mWidth - tmp1);
            obj.height(mHeight - tmp2);;
        }
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
}

function CreateWindows(title, msg, w, h){  
   
 

    var msgObj=$('<div class="lt-dlg-box" style="z-index:'+(zindex++)+';top:'+($iHeight-h)/2+'px;left:'+($iWidth-w)/2+'px;width:'+w+'px;height:'+h+'px;"></div>');
    $body.append(msgObj);

    var Title = $('<div class="lt-title"></div>');
     
    msgObj.append(Title);


    var resize_n    = $('<div class="resize resize-n" ></div>');
    var resize_e    = $('<div class="resize resize-e" ></div>');
    var resize_s    = $('<div class="resize resize-s" ></div>');
    var resize_w    = $('<div class="resize resize-w" ></div>');
    var resize_se   = $('<div class="resize resize-se" ></div>');
    var resize_sw   = $('<div class="resize resize-sw" ></div>');
    var resize_ne   = $('<div class="resize resize-ne" ></div>');
    var resize_nw   = $('<div class="resize resize-nw" ></div>');

    msgObj.append(resize_n);
    msgObj.append(resize_e);
    msgObj.append(resize_s);
    msgObj.append(resize_w);
    msgObj.append(resize_se);
    msgObj.append(resize_sw);
    msgObj.append(resize_ne);
    msgObj.append(resize_nw);



    var moveX = 0; 
    var moveY = 0; 
    var moveTop = 0; 
    var moveLeft = 0; 
    var moveable = false; 
    

    //顶部拉伸
    resize_n.mousedown(function(){
      resize(msgObj,"n");
    });
    //底部拉伸
    resize_s.mousedown(function(){
      resize(msgObj,"s");
    });
    //右边拉伸
    resize_e.mousedown(function(){
      resize(msgObj,"e");
    });
    //左边拉伸
    resize_w.mousedown(function(){
      resize(msgObj,"w");
    });
    //左上角拉伸
    resize_nw.mousedown(function(){
      resize(msgObj,"nw");
    }); 
    //右上角拉伸
    resize_ne.mousedown(function(){
      resize(msgObj,"ne");
    }); 
    //左下角拉伸
    resize_sw.mousedown(function(){
      resize(msgObj,"sw");
    }); 
    //右下角拉伸
    resize_se.mousedown(function(){
      resize(msgObj,"se");
    }); 

    msgObj.mousedown(function(){
      msgObj.css("z-index",zindex++);
    })
    Title.dblclick(function(){
        if(msgObj.attr("data")=="1"){
            


            msgObj.css("left",msgObj.attr("iLeft"));
            msgObj.css("top",msgObj.attr("iTop"));
            msgObj.width(msgObj.attr("iWidth"));
            msgObj.height(msgObj.attr("iHeight"));
            msgObj.attr("data",0);
        }else{
            msgObj.attr("iLeft",msgObj.css("left"));
            msgObj.attr("iTop",msgObj.css("top"));
            msgObj.attr("iWidth",msgObj.width());
            msgObj.attr("iHeight",msgObj.height());


            msgObj.css("left","10px");
            msgObj.css("top","10px");
            msgObj.width($iWidth-20);
            msgObj.height($iHeight-20);
            msgObj.attr("data",1);
        }
    })
    Title.mousedown(function() { 
        var evt = getEvent(); 
        moveable = true;  
        moveX = evt.clientX; 
        moveY = evt.clientY; 
        moveTop = parseInt(msgObj.position().top); 
        moveLeft = parseInt(msgObj.position().left); 
         
        document.onmousemove = function() { 
            if (moveable) { 
                var evt = getEvent(); 
                var x = moveLeft + evt.clientX - moveX; 
                var y = moveTop + evt.clientY - moveY; 
                if ( x > 0 &&( x + msgObj.width() < $iWidth) && y > 0 && (y + msgObj.height() < $iHeight) ) { 
                    msgObj.css("left",x + "px") ; 
                    msgObj.css("top" ,y + "px");
                } 
            }     
        }; 
        document.onmouseup = function () {  
            if (moveable) {  
                document.onmousemove = docMouseMoveEvent; 
                document.onmouseup = docMouseUpEvent; 
                moveable = false;  
                moveX = 0; 
                moveY = 0; 
                moveTop = 0; 
                moveLeft = 0; 
            }  
        }; 
    } );

  
  var h4 = $('<h4>'+title+'</h4>');


  var closeBtn = $('<span class="r" style="font-size:15pt; color:#000;cursor: pointer;">×</span>')

    Title.append(h4);
    h4.append(closeBtn);
   
    
    closeBtn.click(function(){  
        
        msgObj.remove();
    });



    var msgBox = $('<div class="lt-content"><div class="l"><a href="#"><img class="ty" src="http://www.ddota.com/avatar/045442360e55fed837abb6bfba6d5993-c.jpg"></a></div><div class="lt-div"><div class="r"><span>下午 4:51</span></div><div><strong class="lt-name"><a href="#">Krabs James</a></strong><div>111</div></div></div></div>'); 
    msgObj.append(msgBox);
     
    
}  
// 获得事件Event对象，用于兼容IE和FireFox 
function getEvent() { 
    return window.event || arguments.callee.caller.arguments[0]; 
} 
