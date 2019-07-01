 //专门用来返回页面

// 引入fs
const fs = require('fs')

// 读取前台页面
module.exports.getIndexPage = (req,res)=>{
    res.render('index.ejs')
}
module.exports.getListPage = (req,res)=>{
    res.render('list.ejs')
}
module.exports.getDetailPage = (req,res)=>{
    res.render('detail.ejs')
}

// 读取后台页面 
module.exports.getAdminPage = (req,res)=>{
    res.render('admin/index.ejs')
}





// //引入fs
// const fs =require('fs')
// //读取前台页面
// module.exports.getIndexPage =  (req,res) =>{
//      // D:阿里百秀\\day1\\04-代码\\myalbx\\views\\admin\\index.html
//     // 现在这么做的原因是我们还没有引入模板引擎
//     fs.readFile(__dirname + "/./views/index.html",(err,data)=>{
//         if (err) {
//             console.log(err)
//             res.end('404')
//         }else {
//             res.end(data)
//         }
//     })
// }
// module.exports.getListPage =  (req,res) =>{
//    fs.readFile(__dirname + "/./views/List.html",(err,data)=>{
//        if (err) {
//            console.log(err)
//            res.end('404')
//        }else {
//            res.end(data)
//        }
//    })
// }
// module.exports.getdetailPage =  (req,res) =>{
//    fs.readFile(__dirname + "/./views/detail.html",(err,data)=>{
//        if (err) {
//            console.log(err)
//            res.end('404')
//        }else {
//            res.end(data)
//        }
//    })
// }
// //读取后台页面
// module.exports.getAdiminPage =  (req,res) =>{
//    fs.readFile(__dirname + "/./views/Adimin.html",(err,data)=>{
//        if (err) {
//            console.log(err)
//            res.end('404')
//        }else {
//            res.end(data)
//        }
//    })
// }
