***����***
��������
1��wx.request
  wx.request({
	url: '',
	data: {},
	method: '',
	header: '',
	success: function (res) {}
  })

  
  
***ý��***
ͼƬ
1��wx.previewImage Ԥ��ͼƬ
wx.previewImage({
	urls: []
})
2��wx.chooseImage �ӱ���ѡ��ͼƬ������




  
***���ݻ���***
wx.setStorageSync ͬ������



***�豸***
����״̬
1��wx.getNetworkType ��ȡ�������ͣ�2g,3g,4g,wifi,...)




***����***
���õ�����
1��wx.setNavigationBarColor
wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
        duration: 400,
        timingFunc: 'easeIn'
    }
})
2��wx.setNavigationTitle




��������
1��wx.showActionSheet �����˵�
wx.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success: function(res) {
    console.log(res.tapIndex)
  }
})

����
1��wx.navigateTo ������ǰҳ����תҳ��   ����url���ɴ��Σ�
2��wx.redirectTo �رյ�ǰҳ����תҳ��
3��wx.relaunch �ر�����ҳ�棬��תҳ��


***���Žӿ�***
��¼
1��wx.login		��ȡ��ʱ��¼ƾ֤(code)
wx.login({
  success: function(res) {
	if (res.code) {		
	}
  }
});
2��wx.getSetting  	����
wx.getSetting({
  success: (res) => {
    var flag = res.authSetting['scope.userInfo']		�û���Ȩ���
  }
})
3��wx.getUserInfo		�û���Ϣ
wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
  }
})


***ҳ��***
��������
1��wx.showLoading  loadding��
wx.showLoading({
  title: '���ڼ�����...',
  mask: false
})
2��wx.hideLoading
