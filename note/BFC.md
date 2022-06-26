# BFC 全称Block Formatting Context

    块级格式化上下文

# 视觉格式化模型
    Box

# BFC的创建
    
    1. 浮动:float: left | right; 不建议这么做,会使得容器脱离文档流

    2. 定位: position: absolute  |   fixed  ==常用==

    3. 行内块: display: inline-block    ==常用==

    4. 表格单元: display: table-cell...

    5. overflow: auto   |   hidden  |   overlay |   scroll ==常用==

    6. 弹性box (display: flex   |   inline-flex)    ==常用==

# BFC的范围
    BFC是独立的渲染区块
    这个区块包含该box及之下的所有子元素.
    但是,当该box下的某一个子元素也拥有了BFC属性时
    会拥有属于自己的独立渲染区块

# BFC的效果
    让处于其内部的元素与外部元素隔离
    使内部元素与外部元素定位不会互相影响
    (例:清除浮动所带来的影响)
    
# BFC能解决什么问题
    1. 解决外边距重叠问题
    2. 计算高度时会把浮动元素也一并计算(清除浮动)