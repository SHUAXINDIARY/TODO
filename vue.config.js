module.exports = {
    // 更改打包后 index依赖的资源路径
    publicPath: process.env.NODE_ENV === 'production'
        ? '/TODO/'
        : '/'
}