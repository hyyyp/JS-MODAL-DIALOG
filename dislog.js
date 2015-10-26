
/*对话框*/

var zindex = 10000;

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
    var docMouseMoveEvent = document.onmousemove; 
    var docMouseUpEvent = document.onmouseup; 

    //顶部拉伸
    resize_n.mousedown(function(){
      var evt = getEvent(); 
      var resizeY = evt.clientY;
      var mHeight = msgObj.height();
      var mTop = msgObj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp = resizeY - evt.clientY;
        msgObj.height(mHeight + tmp);
        msgObj.css("top",(mTop-tmp)+"px");
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    });
    //底部拉伸
    resize_s.mousedown(function(){
      var evt = getEvent(); 
      var resizeY = evt.clientY;
      var mHeight = msgObj.height();
      //var mTop = msgObj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp = evt.clientY - resizeY;
        msgObj.height(mHeight + tmp);
        //msgObj.css("top",(mTop-tmp)+"px");
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    });
    //右边拉伸
    resize_e.mousedown(function(){
      var evt = getEvent(); 
      var resizeX = evt.clientX;
      var mWidth = msgObj.width();
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp = resizeX - evt.clientX;
        msgObj.width(mWidth - tmp);
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    });
    //左边拉伸
    resize_w.mousedown(function(){
      var evt = getEvent(); 
      var resizeX = evt.clientX;
      var mWidth = msgObj.width();
      var mLeft = msgObj.position().left;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp = resizeX - evt.clientX;
        msgObj.width(mWidth + tmp);
        msgObj.css("left",(mLeft-tmp)+"px");
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    }); 

    //左上角拉伸
    resize_nw.mousedown(function(){
      var evt = getEvent(); 
      var resizeX = evt.clientX;
      var resizeY = evt.clientY;
      var mWidth = msgObj.width();
      var mHeight = msgObj.height();
      var mLeft = msgObj.position().left;
      var mTop = msgObj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp1 = resizeX - evt.clientX;
        var tmp2 = resizeY - evt.clientY;
        msgObj.width(mWidth + tmp1);
        msgObj.height(mHeight + tmp2);
        msgObj.css("left",(mLeft-tmp1)+"px");
        msgObj.css("top",(mTop-tmp2)+"px");
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    }); 
    //右上角拉伸
    resize_ne.mousedown(function(){
      var evt = getEvent(); 
      var resizeX = evt.clientX;
      var resizeY = evt.clientY;
      var mWidth = msgObj.width();
      var mHeight = msgObj.height();
      var mLeft = msgObj.position().left;
      var mTop = msgObj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp1 = resizeX - evt.clientX;
        var tmp2 = resizeY - evt.clientY;
        msgObj.width(mWidth - tmp1);
        msgObj.height(mHeight + tmp2);
        msgObj.css("top",(mTop-tmp2)+"px");
      
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    }); 
    //左下角拉伸
    resize_sw.mousedown(function(){
      var evt = getEvent(); 
      var resizeX = evt.clientX;
      var resizeY = evt.clientY;
      var mWidth = msgObj.width();
      var mHeight = msgObj.height();
      var mLeft = msgObj.position().left;
      var mTop = msgObj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp1 = resizeX - evt.clientX;
        var tmp2 = resizeY - evt.clientY;
        msgObj.width(mWidth + tmp1);
        msgObj.height(mHeight - tmp2);
        msgObj.css("left",(mLeft-tmp1)+"px");
        
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    }); 
    //右下角拉伸
    resize_se.mousedown(function(){
      var evt = getEvent(); 
      var resizeX = evt.clientX;
      var resizeY = evt.clientY;
      var mWidth = msgObj.width();
      var mHeight = msgObj.height();
      var mLeft = msgObj.position().left;
      var mTop = msgObj.position().top;
      document.onmousemove = function() { 
        var evt = getEvent(); 
        var tmp1 = resizeX - evt.clientX;
        var tmp2 = resizeY - evt.clientY;
        msgObj.width(mWidth - tmp1);
        msgObj.height(mHeight - tmp2);;
      };
      document.onmouseup = function () {  
        document.onmousemove = docMouseMoveEvent; 
        document.onmouseup = docMouseUpEvent; 
      };
    }); 



    

    msgObj.mousedown(function(){
      msgObj.css("z-index",zindex++);
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
                if ( x > 0 &&( x + w < $iWidth) && y > 0 && (y + h < $iHeight) ) { 
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



    var msgBox = $('<div class="lt-content">'+msg+'</div>'); 
    msgObj.append(msgBox);
     
    
}  
// 获得事件Event对象，用于兼容IE和FireFox 
function getEvent() { 
    return window.event || arguments.callee.caller.arguments[0]; 
} 