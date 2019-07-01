//引入users表的控制器模块
const pagesController = require('../controllers/pagesController.js')
//封装路由模块
const express = require('express')
//Router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router()

// 当监听到Get方式的/请求的时候，会调用函数进行处理，并且为传递传递两个参数：req,res
// 这两个参数是服务器传递的，不是你一开始就有的

// 前台页面
router.get('/',pagesController.getIndexPage)
      .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage)

//后台管理页面,同意添加admin作为前缀
      .get('/admin',pagesController.getAdminPage)
      .get('/admin/categories',pagesController.getCategoriesPage)
      .get('/admin/comments',pagesController.getCommentsPage)
      .get('/admin/login',pagesController.getLoginPage)
      .get('/admin/nav-menus',pagesController.getNavMenusPage)
      .get('/admin/password-reset',pagesController.getPassWordPage)
      .get('/admin/post-add',pagesController.getPostAddPage)
      .get('/admin/posts',pagesController.getPostsPage)
      .get('/admin/profile',pagesController.getProfilePage)
      .get('/admin/settings',pagesController.getSettingsPage)
      .get('/admin/slides',pagesController.getSlidesPage)
      .get('/admin/users',pagesController.getUsersPage)
//暴露路由
module.exports = router