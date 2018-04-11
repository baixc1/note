***逻辑层***
1、注册注册程序 App()
2、注册页面 Page(object)
	参数：data,onLoad页面加载,onShow页面显示,onHide,onUnload,any...
	Page({
	  data: {},
	  onLoad: function(options) {}
	})
	初始化数据-生命周期（onLoad,onShow,onReady,onHide,onUnload)-页面事件处理函数-this.setData({})
	

***视图层***
WXML
1、列表渲染
wx-for'指令',默认index,item