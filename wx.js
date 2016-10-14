'use strict';
/**
 * Created by neo on 14/10/2016.
 */

const wx = {
    /**
     * wx.request发起的是https请求
     * @param {Object} options
     * @param {string} options.url - 开发者服务器接口地址
     * @param {Object|string} [options.data] - 请求的参数
     * @param {Object} [options.header] - 设置请求的 header，header 中不能设置 Referer
     * @param {string} [options.method] - 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     * @param {request~success} [options.success] - 收到开发者服务成功返回的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    request(options) {},
    /**
     * @callback request~success
     * @param {Object} res
     * @param {*} res.data - 开发者服务器返回的内容
     */

    /**
     * 将本地资源上传到开发者服务器
     * @param {Object} options
     * @param {string} options.url - 开发者服务器 url
     * @param {string} options.filePath - 要上传文件资源的路径
     * @param {string} options.name - 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     * @param {Object} [options.header] - HTTP 请求 Header，header 中不能设置 Referer
     * @param {Object} [options.formData] - HTTP 请求中其他额外的 form data
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    uploadFile(options) {},

    /**
     * 下载文件资源到本地
     * @param {Object} options
     * @param {string} options.url - 下载资源的 url
     * @param {string} [options.type] - 下载资源的类型，用于客户端识别处理，有效值：'image', 'audio', 'video'
     * @param {Object} [options.header] - HTTP 请求 Header，header 中不能设置 Referer
     * @param {downloadFile~success} [options.success] - 下载成功后以 tempFilePath 的形式传给页面
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    downloadFile(options) {},
    /**
     * @callback downloadFile~success
     * @param {Object} res
     * @param {string} res.tempFilePath - 文件的临时路径
     */

    /**
     * 创建一个 WebSocket 连接
     * @param {Object} options
     * @param {string} options.url - 开发者服务器接口地址，必须是 WSS 协议，且域名必须是后台配置的合法域名
     * @param {Object} [options.data] - 请求的数据
     * @param {Object} [options.header] - HTTP Header , header 中不能设置 Referer
     * @param {string} [options.method='GET'] - 默认是GET，有效值为：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    connectSocket(options) {},

    /**
     * 监听WebSocket连接打开事件
     * @param {function} callback
     */
    onSocketOpen(callback) {},

    /**
     * 监听WebSocket错误
     * @param {function} callback
     */
    onSocketError(callback) {},

    /**
     * 通过 WebSocket 连接发送数据
     * @param {Object} options
     * @param {string} options.data - 需要发送的内容
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    sendSocketMessage(options) {},

    /**
     * 监听WebSocket接受到服务器的消息事件
     * @param {onSocketMessage~callback} callback
     */
    onSocketMessage(callback) {},
    /**
     * @callback onSocketMessage~callback
     * @param {Object} res
     * @param {string} res.data
     */

    /**
     * 关闭WebSocket连接
     */
    closeSocket() {},

    /**
     * 监听WebSocket关闭
     * @param {function} callback
     */
    onSocketClose(callback) {},

    /**
     * 从本地相册选择图片或使用相机拍照
     * @param {Object} options
     * @param {number} [options.count] - 最多可以选择的图片张数，默认9
     * @param {Array.<string>} [options.sizeType] - original 原图，compressed 压缩图，默认二者都有
     * @param {Array.<string>} [options.sourceType] - album 从相册选图，camera 使用相机，默认二者都有
     * @param {chooseImage~success} [options.success] - 成功则返回图片的本地文件路径列表 tempFilePaths
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    chooseImage(options) {},
    /**
     * @callback chooseImage~success
     * @param {Object} res
     * @param {string} res.tempFilePaths
     */

    /**
     * 预览图片
     * @param {Object} options
     * @param {string} [options.current=options.urls[0]] - 当前显示图片的链接，不填则默认为 urls 的第一张
     * @param {Array.<string>} options.urls - 需要预览的图片链接列表
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    previewImage(options) {},

    /**
     * 开始录音
     * @param {Object} options
     * @param {startRecord~success} options.success - 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
     * @param {function} options.fail - 接口调用失败的回调函数
     * @param {function} options.complete - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    startRecord(options) {},
    /**
     * @callback startRecord~success
     * @param {Object} res
     * @param {string} res.tempFilePaths
     */

    /**
     * 主动调用停止录音
     */
    stopRecord() {},

    /**
     * 开始播放语音，同时只允许一个语音文件正在播放
     * @param {Object} options
     @param {string} options.filePath - 需要播放的语音文件的文件路径
     @param {function} [options.success] - 接口调用成功的回调函数
     @param {function} [options.fail] - 接口调用失败的回调函数
     @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    playVoice(options) {},

    /**
     * 暂停正在播放的语音
     */
    pauseVoice() {},

    /**
     * 结束播放语音
     */
    stopVoice() {},

    /**
     * 获取音乐播放状态
     * @param {Object} options
     * @param {getBackgroundAudioPlayerState~success} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    getBackgroundAudioPlayerState(options) {},
    /**
     * @callback getBackgroundAudioPlayerState~success
     * @param {Object} res
     * @param {number} res.duration - 选定音频的长度（单位：s），只有在当前有音乐播放时返回
     * @param {number} res.currentPosition - 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
     * @param {number} res.status - 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
     * @param {number} res.downloadPercent - 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
     * @param {string} res.dataUrl - 歌曲数据链接，只有在当前有音乐播放时返回
     */

    /**
     * 播放音乐，同时只能有一首音乐正在播放
     * @param {Object} options
     * @param {string} options.dataUrl - 音乐链接
     * @param {string} [options.title] - 音乐标题
     * @param {string} [options.coverImgUrl] - 封面URL
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    playBackgroundAudio(options) {},

    /**
     * 暂停播放音乐
     */
    pauseBackgroundAudio() {},

    /**
     * 控制音乐播放进度
     * @param {Object} options
     * @param {number} options.position - 音乐位置，单位：秒
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    seekBackgroundAudio(options) {},

    /**
     * 监听音乐播放
     * @param {function} callback
     */
    onBackgroundAudioPlay(callback) {},

    /**
     * 监听音乐暂停
     * @param {function} callback
     */
    onBackgroundAudioPause(callback) {},

    /**
     * 监听音乐停止
     * @param {function} callback
     */
    onBackgroundAudioStop(callback) {},

    /**
     * 保存文件到本地
     * @param {Object} options
     * @param {string} options.tempFilePath - 需要保存的文件的临时路径
     * @param {saveFile~success} [options.success] - 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    saveFile(options) {},
    /**
     * @callback saveFile~success
     * @param {Object} res
     * @param {string} res.savedFilePath
     */

    /**
     * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径
     * @param {Object} options
     * @param {Array.<string>} [options.sourceType=['album', 'camera']] - album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
     * @param {number} [options.maxDuration] - 拍摄视频最长拍摄时间，单位秒最长支持60秒
     * @param {Array.<string>} [options.camera=['front', 'back']] - 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
     * @param {chooseVideo~success} [options.success] - 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    chooseVideo(options) {},
    /**
     * @callback chooseVideo~success
     * @param {Object} res
     * @param {string} res.tempFilePath - 选定视频的临时文件路径
     * @param {number} res.duration - 选定视频的时间长度
     * @param {number} res.size - 选定视频的数据量大小
     * @param {number} res.height - 返回选定视频的长
     * @param {number} res.width - 返回选定视频的宽
     */

    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口
     * @param {Object} options
     * @param {string} options.key - 本地缓存中的指定的 key
     * @param {Object|string} options.data - 需要存储的内容
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    setStorage(options) {},

    /**
     * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口
     * @param {string} key - 本地缓存中的指定的 key
     * @param {Object|string} data - 需要存储的内容
     */
    setStorageSync(key, data) {},

    /**
     * 从本地缓存中异步获取指定 key 对应的内容
     * @param {Object} options
     * @param {string} options.key - 本地缓存中的指定的 key
     * @param {getStorage~success} options.success - 接口调用的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    getStorage(options) {},
    /**
     * @callback getStorage~success
     * @param {Object} res
     * @param {string} res.data
     */

    /**
     * 从本地缓存中同步获取指定 key 对应的内容
     * @param {string} key - 本地缓存中的指定的 key
     * @return {string}
     */
    getStorageSync(key) {},

    /**
     * 清理本地数据缓存
     */
    clearStorage() {},

    /**
     * 同步清理本地数据缓存
     */
    clearStorageSync() {},

    /**
     * 获取当前的地理位置、速度
     * @param {Object} options
     * @param {string} [options.type='wgs84'] - 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
     * @param {getLocation~success} options.success - 接口调用成功的回调函数，返回内容详见返回参数说明
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    getLocation(options) {},
    /**
     * @callback getLocation~success
     * @param {Object} res
     * @param {number} res.latitude - 纬度，浮点数，范围为-90~90，负数表示南纬
     * @param {number} res.longitude - 经度，浮点数，范围为-180~180，负数表示西经
     * @param {number} res.speed - 速度，浮点数，单位m/s
     * @param {number} res.accuracy - 位置的精确度
     */

    /**
     * 使用微信内置地图查看位置
     * @param {Object} options
     * @param {number} options.latitude - 纬度，范围为-90~90，负数表示南纬
     * @param {number} options.longitude - 经度，范围为-180~180，负数表示西经
     * @param {number} [options.scale=28] - 缩放比例，范围1~28，默认为28
     * @param {string} [options.name] - 位置名
     * @param {string} [options.address] - 地址的详细说明
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    openLocation(options) {},

    /**
     * 获取网络类型
     * @param {Object} options
     * @param {getNetworkType~success} options.success - 接口调用成功，返回网络类型 networkType
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    getNetworkType(options) {},
    /**
     * @callback getNetworkType~success
     * @param {Object} res
     * @param {string} res.networkType
     */

    /**
     * 获取系统信息
     * @param {Object} options
     * @param {getSystemInfo~success} options.success - 接口调用成功的回调
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    getSystemInfo(options) {},
    /**
     * @callback getSystemInfo~success
     * @param {Object} res
     * @param {string} res.model 手机型号
     * @param {number} res.pixelRatio 设备像素比
     * @param {number} res.windowWidth 窗口宽度
     * @param {number} res.windowHeight 窗口高度
     * @param {string} res.language 微信设置的语言
     * @param {string} res.version 微信版本号
     */

    /**
     * 监听重力感应数据，频率：5次/秒
     * @param {onAccelerometerChange~callback} callback
     */
    onAccelerometerChange(callback) {},
    /**
     * @callback onAccelerometerChange~callback
     * @param {Object} res
     * @param {number} res.x - X 轴
     * @param {number} res.y - Y 轴
     * @param {number} res.z - Z 轴
     */

    /**
     * 监听罗盘数据，频率：5次/秒
     * @param {onCompassChange~callback} callback
     */
    onCompassChange(callback) {},
    /**
     * @callback onCompassChange~callback
     * @param {Object} res
     * @param {number} res.direction - 面对的方向度数
     */

    /**
     * 动态设置当前页面的标题
     * @param {Object} options
     * @param {string} options.title - 页面标题
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    setNavigationBarTitle(options) {},

    /**
     * 在当前页面显示导航条加载动画
     */
    showNavigationBarLoading() {},

    /**
     * 隐藏导航条加载动画
     */
    hideNavigationBarLoading() {},

    /**
     * 保留当前页面，跳转到应用内的某个页面
     * @param {Object} options
     * @param {string} options.url - 需要跳转的应用内页面的路径
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    navigateTo(options) {},

    /**
     * 关闭当前页面，跳转到应用内的某个页面
     * @param {Object} options
     * @param {string} options.url - 需要跳转的应用内页面的路径
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    redirectTo(options) {},

    /**
     * 关闭当前页面，回退前一页面
     */
    navigateBack() {},

    /**
     * @typedef {Object} AnimationOption
     * @property {number} [duration=400] - 动画持续时间，单位ms，默认值 400
     * @property {string} [timingFunction='linear'] - 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
     * @property {number} [delay=0] - 动画延迟时间，单位 ms，默认值 0
     * @property {string} [transformOrigin='50% 50% 0'] - 设置transform-origin，默认为"50% 50% 0"
     */
    /**
     * 创建一个动画实例
     * @param {AnimationOption} options
     * @return {Animation}
     */
    createAnimation(options) {},

    /**
     * 创建并返回绘图上下文 context 对象
     * @return {Context}
     */
    createContext() {},

    /**
     * 绘制 Canvas
     * @param {Object} options
     * @param {string} options.canvasId - 画布标识，传入 <canvas/> 的 cavas-id
     * @param {Array} options.actions - 绘图动作数组
     */
    drawCanvas(options) {},

    /**
     * 收起键盘
     */
    hideKeyboard() {},

    /**
     * 停止当前页面下拉刷新 {@link https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html#页面相关事件处理函数 页面相关事件处理函数}
     */
    stopPullDownRefresh() {},

    /**
     * 登录
     * @param {Object} options
     * @param {login~success} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    login(options) {},
    /**
     * @callback login~success
     * @param {Object} res
     * @param {string} res.errMsg - 调用结果
     * @param {string} res.code - 登录凭证
     */

    /**
     * 获取用户信息
     * @param {Object} options
     * @param {getUserInfo~success} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    getUserInfo(options) {},
    /**
     * @callback getUserInfo~success
     * @param {Object} res
     * @param {Object} res.userInfo - 用户信息对象，不包含 openid 等敏感信息
     * @param {string} res.rawData - 不包括敏感信息的原始数据字符串，用于计算签名
     * @param {string} res.signature - 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息
     * @param {string} res.encryptData - 包括敏感数据在内的完整用户信息的加密数据，详细见{@link https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html#加密数据解密算法 加密数据解密算法}
     */

    /**
     * 发起微信支付
     * @param {Object} options
     * @param {number} options.timeStamp - 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
     * @param {string} options.nonceStr - 随机字符串，长度为32个字符以下
     * @param {string} options.package - 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
     * @param {string} options.signType - 签名算法，暂支持 MD5
     * @param {string} options.paySign - 签名,具体签名方案参见微信公众号支付帮助文档;
     * @param {function} [options.success] - 接口调用成功的回调函数
     * @param {function} [options.fail] - 接口调用失败的回调函数
     * @param {function} [options.complete] - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    requestPayment(options) {}
};

/**
 * @constructor
 */
function Animation() {}

/**
 * @param {number} value - 透明度，参数范围 0~1
 * @return {Animation}
 */
Animation.prototype.opacity = function (value) {};
/**
 * @param {string} color - 颜色值
 * @return {Animation}
 */
Animation.prototype.backgroundColor = function (color) {};
/**
 * @param {number|string} length - 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 * @return {Animation}
 */
Animation.prototype.width = function (length) {};
/**
 * @param {number|string} length - 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 * @return {Animation}
 */
Animation.prototype.height = function (length) {};
/**
 * @param {number|string} length - 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 * @return {Animation}
 */
Animation.prototype.top = function (length) {};
/**
 * @param {number|string} length - 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 * @return {Animation}
 */
Animation.prototype.left = function (length) {};
/**
 * @param {number|string} length - 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 * @return {Animation}
 */
Animation.prototype.bottom = function (length) {};
/**
 * @param {number|string} length - 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 * @return {Animation}
 */
Animation.prototype.right = function (length) {};

/**
 * @param {number} deg - deg的范围-180~180，从原点顺时针旋转一个deg角度
 * @return {Animation}
 */
Animation.prototype.rotate = function (deg) {};
/**
 * @param {number} deg - deg的范围-180~180，在X轴旋转一个deg角度
 * @return {Animation}
 */
Animation.prototype.rotateX = function (deg) {};
/**
 * @param {number} deg - deg的范围-180~180，在Y轴旋转一个deg角度
 * @return {Animation}
 */
Animation.prototype.rotateY = function (deg) {};
/**
 * @param {number} deg - deg的范围-180~180，在Z轴旋转一个deg角度
 * @return {Animation}
 */
Animation.prototype.rotateZ = function (deg) {};
/**
 * @param {number} x - x 轴旋转向量
 * @param {number} y - y 轴旋转向量
 * @param {number} z - z 轴旋转向量
 * @param {number} deg - 旋转一个deg角度
 * @return {Animation}
 */
Animation.prototype.rotate3d = function (x, y, z, deg) {};

/**
 * @param {number} sx - 一个参数时，表示在X轴、Y轴同时缩放sx倍数
 * @param {number} [sy] - 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
 * @return {Animation}
 */
Animation.prototype.scale = function (sx, sy) {};
/**
 * @param {number} sx - 在X轴缩放sx倍数
 * @return {Animation}
 */
Animation.prototype.scaleX = function (sx) {};
/**
 * @param {number} sy - 在Y轴缩放sy倍数
 * @return {Animation}
 */
Animation.prototype.scaleY = function (sy) {};
/**
 * @param {number} sz - 在Z轴缩放sy倍数
 * @return {Animation}
 */
Animation.prototype.scaleZ = function (sz) {};
/**
 * @param {number} sx - 在X轴缩放sx倍数
 * @param {number} sy - 在Y轴缩放sy倍数
 * @param {number} sz - 在Z轴缩放sz倍数
 * @return {Animation}
 */
Animation.prototype.scale3d = function (sx, sy, sz) {};

/**
 * @param {number} tx - 一个参数时，表示在X轴偏移tx，单位px
 * @param {number} [ty] - 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px
 * @return {Animation}
 */
Animation.prototype.translate = function (tx, ty) {};
/**
 * @param {number} tx - 在X轴偏移tx，单位px
 * @return {Animation}
 */
Animation.prototype.translateX = function (tx) {};
/**
 * @param {number} ty - 在Y轴偏移tx，单位px
 * @return {Animation}
 */
Animation.prototype.translateY = function (ty) {};
/**
 * @param {number} tz - 在Z轴偏移tx，单位px
 * @return {Animation}
 */
Animation.prototype.translateZ = function (tz) {};
/**
 * @param {number} tx - 在X轴偏移tx，单位px
 * @param {number} ty - 在Y轴偏移ty，单位px
 * @param {number} tz - 在Z轴偏移tz，单位px
 * @return {Animation}
 */
Animation.prototype.translate3d = function (tx, ty, tz) {};

/**
 * @param {number} ax - 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度
 * @param {number} [ay] - 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
 * @return {Animation}
 */
Animation.prototype.skew = function (ax, ay) {};
/**
 * @param {number} ax - 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
 * @return {Animation}
 */
Animation.prototype.skewX = function (ax) {};
/**
 * @param {number} ay - 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
 * @return {Animation}
 */
Animation.prototype.skewY = function (ay) {};

/**
 * See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix <transform-function> matrix}
 */
Animation.prototype.matrix = function (a, b, c, d, tx, ty) {};
/**
 * See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d <transform-function> matrix3d}
 */
Animation.prototype.matrix3d = function (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {};

/**
 * 调用动画操作方法后要调用来表示一组动画完成
 * @param {AnimationOption} [options]
 */
Animation.prototype.step = function (options) {};

/**
 * 导出动画数据
 * @return {Object}
 */
Animation.prototype.export = function () {};

/**
 * @constructor
 */
function Context() {}

/**
 * 获取当前context上存储的绘图动作
 * @return {Array}
 */
Context.prototype.getActions = function () {};
/**
 * 清空当前的存储绘图动作
 */
Context.prototype.clearActions = function () {};

/**
 * 对横纵坐标进行缩放
 * @param {number} scaleWidth - 依次类推 横坐标缩放的倍数
 * @param {number} scaleHeight - 依次类推 纵坐标轴缩放的倍数
 */
Context.prototype.scale = function (scaleWidth, scaleHeight) {};
/**
 * 对坐标轴进行顺时针旋转
 * @param {number} rotate - 旋转角度，以弧度计
 */
Context.prototype.rotate = function (rotate) {};
/**
 * 对坐标原点进行缩放
 * @param {number} x - 水平坐标平移量
 * @param {number} y - 竖直坐标平移量
 */
Context.prototype.translate = function (x, y) {};
/**
 * 保存当前坐标轴的缩放、旋转、平移信息
 */
Context.prototype.save = function () {};
/**
 * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
 */
Context.prototype.restore = function () {};

/**
 * 在给定的矩形区域内，清除画布上的像素
 * @param {number} x - 矩形区域左上角的x坐标
 * @param {number} y - 矩形区域左上角的y坐标
 * @param {number} width - 矩形区域的宽度
 * @param {number} height - 矩形区域的高度
 */
Context.prototype.clearRect = function (x, y, width, height) {};
/**
 * 在画布上绘制被填充的文本
 * @param {string} text - 在画布上输出的文本
 * @param {number} x - 绘制文本的左上角x坐标位置
 * @param {number} y - 绘制文本的左上角y坐标位置
 */
Context.prototype.fillText = function (text, x, y) {};
/**
 * 在画布上绘制图像
 * @param {string} imageResource - 通过chooseImage得到一个文件路径或者一个项目目录内的图片 所要绘制的图片资源
 * @param {number} x - 图像左上角的x坐标
 * @param {number} y - 图像左上角的y坐标
 * @param {number} width - 图像宽度
 * @param {number} height - 图像高度
 */
Context.prototype.drawImage = function (imageResource, x, y, width, height) {};
/**
 * 对当前路径进行填充
 */
Context.prototype.fill = function () {};
/**
 * 对当前路径进行描边
 */
Context.prototype.stroke = function () {};

/**
 * 开始一个路径
 */
Context.prototype.beginPath = function () {};
/**
 * 关闭一个路径
 */
Context.prototype.closePath = function () {};
/**
 * 把路径移动到画布中的指定点，但不创建线条
 * @param {number} x - 目标位置的x坐标
 * @param {number} y - 目标位置的y坐标
 */
Context.prototype.moveTo = function (x, y) {};
/**
 * 添加一个新点，然后在画布中创建从该点到最后指定点的线条
 * @param {number} x - 目标位置的x坐标
 * @param {number} y - 目标位置的y坐标
 */
Context.prototype.lineTo = function (x, y) {};
/**
 * 添加一个矩形路径到当前路径
 * @param {number} x - 矩形路径左上角的x坐标
 * @param {number} y - 矩形路径左上角的y坐标
 * @param {number} width - 矩形路径的宽度
 * @param {number} height - 矩形路径的高度
 */
Context.prototype.rect = function (x, y, width, height) {};
/**
 * 添加一个弧形路径到当前路径，顺时针绘制
 * @param {number} x - 矩形路径左上角的x坐标
 * @param {number} y - 矩形路径左上角的y坐标
 * @param {number} radius - 矩形路径的宽度
 * @param {number} startAngle - 弧度, 0到2pi 起始弧度
 * @param {number} sweepAngle - 弧度, 0到2pi 从起始弧度开始，扫过的弧度
 */
Context.prototype.arc = function (x, y, radius, startAngle, sweepAngle) {};
/**
 * 创建二次方贝塞尔曲线
 * @param {number} cpx - 贝塞尔控制点的x坐标
 * @param {number} cpy - 贝塞尔控制点的y坐标
 * @param {number} x - 结束点的x坐标
 * @param {number} y - 结束点的y坐标
 */
Context.prototype.quadraticCurveTo = function (cpx, cpy, x, y) {};
/**
 * 创建三次方贝塞尔曲线
 * @param {number} cp1x - 第一个贝塞尔控制点的 x 坐标
 * @param {number} cp1y - 第一个贝塞尔控制点的 y 坐标
 * @param {number} cp2x - 第二个贝塞尔控制点的 x 坐标
 * @param {number} cp2y - 第二个贝塞尔控制点的 y 坐标
 * @param {number} x - 结束点的 x 坐标
 * @param {number} y - 结束点的 y 坐标
 */
Context.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {};

/**
 * 设置填充样式
 * @param {string} color - 设置为填充样式的颜色
 */
Context.prototype.setFillStyle = function (color) {};
/**
 * 设置线条样式
 * @param {string} color - 设置为填充样式的颜色
 */
Context.prototype.setStrokeStyle = function (color) {};
/**
 * 设置阴影
 * @param {number} offsetX - 阴影相对于形状在水平方向的偏移
 * @param {number} offsetY - 阴影相对于形状在竖直方向的偏移
 * @param {number} blur - 阴影的模糊级别，数值越大越模糊
 * @param {color} color - 阴影的颜色
 */
Context.prototype.setShadow = function (offsetX, offsetY, blur, color) {};
/**
 * 设置字体大小
 * @param {number} fontSize - 字体的字号
 */
Context.prototype.setFontSize = function (fontSize) {};
/**
 * 设置线条端点的样式
 * @param {string} lineCap - 线条的结束端点样式，'butt'、'round'、'square'
 */
Context.prototype.setLineCap = function (lineCap) {};
/**
 * 设置两线相交处的样式
 * @param {string} lineJoin - 两条线相交时，所创建的拐角类型，'bevel'、'round'、'miter'
 */
Context.prototype.setLineJoin = function (lineJoin) {};
/**
 * 设置线条宽度
 * @param {number} lineWidth - 线条的宽度
 */
Context.prototype.setLineWidth = function (lineWidth) {};
/**
 * 设置最大倾斜
 * @param {number} miterLimit - 最大斜接长度
 */
Context.prototype.setMiterLimit = function (miterLimit) {};
