window.jQuery = function (nodeOrSelector) {   //获取节点或者字符串
    let nodes = {};//声明一个伪数组
    if (typeof nodeOrSelector === 'string') {//若为字符串，放入伪数组中
        let temp = document.querySelectorAll(nodeOrSelector);
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSelector instanceof Node) {//若为节点，放入伪数组中
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }

    nodes.addClass = function (classes) {//获取参数，开始遍历
        classes.forEach((value) => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }
        })
    };
    nodes.text = function (text) {
        if (text === undefined) {  //若文本为空，添加文本
            var texts = [];
            for (let i = 0; i < nodes.length; i++) {
                texts.push(nodes[i].textContent)
            }
            return texts
        } else {    //若文本不为空，输出文本内容
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    };
    return nodes
};

window.$ = jQuery;

var $div = $('div');
//$div.addClass(['orange']);// 可将所有 div 的 class 添加一个 orange
//$div.text('hello');//可将所有 div 的 textContent 变为 hello
