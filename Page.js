'use strict';
/**
 * Created by neo on 14/10/2016.
 */

/**
 * 用来注册一个页面
 * @param {Object} options
 * @param {Object} options.data - 页面的初始数据
 * @param {function} [options.onLoad] - 生命周期函数--监听页面加载
 * @param {function} [options.onReady] - 生命周期函数--监听页面初次渲染完成
 * @param {function} [options.onShow] - 生命周期函数--监听页面显示
 * @param {function} [options.onHide] - 生命周期函数--监听页面隐藏
 * @param {function} [options.onUnload] - 生命周期函数--监听页面卸载
 * @param {function} [options.onPullDownRefreash] - 页面相关事件处理函数--监听用户下拉动作
 * @param {function} [options.onReachBottom] - 页面上拉触底事件的处理函数
 */
function Page(options) {};

/**
 * 用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
 * @param {Object} data
 */
Page.prototype.setData = function (data) {};

/**
 * 用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面
 * @return {Array.<Page>}
 */
function getCurrentPages() {}
