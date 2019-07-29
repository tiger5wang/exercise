(function () {
    var position = 'absolute';
    var elements = [];

    function Snake(options) {
        options = options || {};
        // 蛇节的宽度
        this.width = options.width || 20;
        this.height = options.height || 20;
        // 蛇的每一部分
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
        this.direction = options.direction || 'right'
    }

    Snake.prototype.render = function (map) {
        // 渲染之前先删除上一个蛇
        remove();
        for(var i=0;i<this.body.length;i++) {
            var obj = this.body[i];
            var div = document.createElement('div');
            map.appendChild(div);
            div.style.position = position
            div.style.left = obj.x * this.width + 'px';
            div.style.top = obj.y * this.height + 'px';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor = obj.color;
            elements.push(div)
        }
    };
    
    Snake.prototype.move = function (map) {
        // 让蛇身体的每一部分往前移动
        for(var i=this.body.length - 1;i>0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y
        }
        // 根据移动方向，决定蛇头如何处理
        switch(this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        }
    }

    function remove() {
        for(i=elements.length-1;i>=0;i--) {
            // 删除页面渲染的蛇
            elements[i].parentNode.removeChild(elements[i]);
            // 删除elements数组中的原色
            elements.splice(i,1)
        }
    }

    var map = document.getElementById('box')
    var snake = new Snake();
    snake.render(map)
    snake.move(map)
})();