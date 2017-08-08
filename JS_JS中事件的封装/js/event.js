var eventUtil = {
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent('on'+type,handler,false);
			}else{
				element["on"+type] = handler;
			}
		},
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent('on'+type,handler,false);
			}else{
				element['on'+type] = null;
			}
		},
		getEvent:function(e){
			return e?e:window.event;
		},
		getType:function(e){
			return e.type
		},
		getElemnt:function(e){
			return e.target || e.srcElement;
		},
		preventDefault:function(event){
			if(event.preventDefault){
			  event.preventDefault();
			}else{
			  event.returnValue=false;
			}
		},
		stopPropagation:function(event){
			if(event.stopPropagation){
			 event.stopPropagation();
			}else{
			 event.cancelBubble=true;
			}
		}
}