// pages/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    const { movieid } = options

    wx.showLoading()
    wx.request({
      url: 'https://db.miaov.com/doubanapi/v0/movie/detail/'+ movieid ,
      success: (res)=>{
        wx.hideLoading()
        const movie = res.data.data;
        this.setData({
          movie
        })
      }
    })
  },
 
})