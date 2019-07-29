(function () {
    var position = 'absolute';
    var elements = [];

    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'green';
    }

    Food.prototype.render = function (map) {
        // 渲染之前需要删除之前的食物
        remove();
        // 食物的随机位置
        this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
        // 动态创建食物对应的div
        var div = document.createElement('div')
        map.appendChild(div);
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        elements.push(div)
    }

    function remove() {
        // 删除食物元素
        // elemens中删除
        for(var i=elements.length - 1; i >= 0; i--) {
            var element = elements[i];
            element.parentNode.removeChild(element)
            elements.splice(i,1)
        }
    }


    var map = document.getElementById('box')
    var food = new Food();
    food.render(map)

})();