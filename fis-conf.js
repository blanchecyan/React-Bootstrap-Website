// 定义配置
fis.match('**.less', {
	parser: 'less',
	rExt: '.css'
})

fis.match('**.jsx', {
	parser: 'babel',
	rExt: '.js'
})