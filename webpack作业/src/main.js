//入口文件
//引入模块
import { marquee } from './marquee.js'
import tabs from './tabs.js'
// 调用函数
marquee()
tabs()

//引入css和less
import './css/marquee.css'
import './css/tabs.less'
import './assets/fonts/iconfont.css'
import './app.vue'
//引入图片
import gifImg from './assets/1.gif'
const img1=document.createElement('img')
img1.src=gifImg
document.body.appendChild(img1)

import smallImg from './assets/logo_small.png'
const img2=document.createElement('img')
img2.src=smallImg
document.body.appendChild(img2)