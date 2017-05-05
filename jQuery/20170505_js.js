/**
 * Created by Administrator on 2017/5/5 0005.
 */
function Vquery(vArg){

    this.elements = [];  //选择元素的这样一个集合

    //vArg : function
    switch(typeof vArg){
        case 'function':
            //window.onload = vArg;
            bindEvent(window,'load',vArg);
            break;
        case 'string':

            switch( vArg.charAt(0) ){
                case '#':   //id
                    this.elements.push(document.getElementById(vArg.substring(1)));
                    break;
                case '.':   //class
                    this.elements = getByClass(document,vArg.substring(1));
                    break;
                default:  //tag
                    this.elements = toArray(document.getElementsByTagName(vArg));
                    break;
            }

            break;
        case 'object':
            if( vArg.constructor == Array ){
                this.elements = vArg;
            }
            else{
                this.elements.push( vArg );
            }
            break;
    }

}