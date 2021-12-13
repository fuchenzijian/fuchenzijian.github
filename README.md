# fuchenzijian.github

# ------------------------------------

### 接口名:'/user/login',

### 类型:'post',

### 描述:'这个是用来用户登录的接口'

### 入参:

### 				username:用户名

### 				password:用户密码

### 				captcha:验证码



### 出参:

### 				status:0 ||1[Number];   0代表失败,1代表登录成功

### 				msg:''[String]描述状态

### 				data:''[String]如果登录成功的话data中放的是应该token存的值;



# -----------------------------------------------

### 接口名:'/captcha'

### 类型:'get',

### 描述:"这是一个获取验证码的接口"

### 入参：无

#### 出参:返回一个验证码

# ---------------------------------------------------

### 接口名:'/user/register'

### 类型:'post',

### 描述:'这是一个用来注册的接口'

### 入参:

### 		username:[String] 账号 必填

### 		password:[String] 密码  必填

### 		captcha:[String] 验证码   必填

### 		email:[String] 邮箱  必填

### 		sex:[String]  性别  

### 		age:[int] 年龄   必填    10<age<150

### 		phone:[String]非必填  11位正常格式手机号

### 出参:

### 		status:[int]  0||1 要么是0失败要么是1成功

### 		msg:[String] 这个是描述的信息

# -------------------------------------------------------

###  接口名:'/task/list'

###  类型:'post',

## 描述:这个是获取任务列表的接口

### 入参:无

### 出参:

### 	status:[int] 0||1  0失败1成功

### 	msg:''[String] 描述信息

### 	data:[Array] 这个返回的是数据   格式是  application/json

### ---------------------------------------------------------------------------------

### 接口名:'/user/info'

### 类型:'post'

## 描述:这个是用户信息的接口

### 入参:无

### 出参:

## id:[int] 用户的id

## avatorName:[String]用户的名称

## age:[int] 用户的年龄

## avatorImg:[int]用户的头像索引值

## classId:[int] 班级的索引

## description:[String]个性签名

## phone:[string]手机号码

## email:[String]邮箱号  

## loginTime:[] 这个不用管

## createdAt:[时间] 这个是创建时间

## updatedAt:[时间]这个是上次登录的时间

# --------------------------------------------------------

### 接口名:'/lead/task'

### 类型:"post"

### 描述:这个是领取任务的接口

### 入参:

### 		taskId:[int] 任务的id

### 		userId:[int]  用户的id

### 出参:

### 		status:[int] 0 || 1  0失败 1成功

### 		msg:[String] 这个返回的是详情信息

### 		data:[]

# --------------------------------------------------

## 接口名:'/mine/task/list'

## 描述:'这个是传入用户id获取自己的任务'

## 类型:'post';

## 出参:

## 		status:  0 | 1 [int] 这个是状态  0 失败 1 成功

## 		msg:''[String]详细信息描述

## 		data:[array] application/json类型返回的是任务

## 			avatorName:[string] 用户名

## 			email:[string] 邮箱名

## 			taskName:[string]任务名称

## 			taskStatus:[int] 任务状态

## 			score :[int] 评分 1优 2良 3中 4差 

## 			progress:[int] 任务完成度

## 			pid:[int] 当前任务是谁的子任务

## 			taskId:[int] 这个是当前任务的id

## 			updatedAt:[] 这个是任务的更改时间

## --------------------------------------------------------------------------

## 接口名:'/user/task/list';

## 描述:'这个是返回所有用户领取任务的情况';

## 类型:'post',

## 入参:

## 		pageSize:[int]  默认是 10 指要多少条信息

## 		pageNum:[int] 默认是1  指从第几页开始

## 出参:

## 			status: 0 | 1 [int]  0失败  1成功

## 			msg:[string] 这个是信息描述

## 			data:[arr] 这个是传出的数据

## ---------------------------------------------------------------------------------

## 接口名:'/update/user/info';

## 接口描述:'这个是更改个人信息的接口';

## 类型:'post';

## 入参:

## 	  avatorName:[String],   //用户昵称

##       age :[number] , //用户年龄

##       sex:[number] , //用户性别  //1男 0女

##       avatorImg:[number] , //用户头像 

##       classId:[number], //班级的id

##       description:[String],//个性签名 最多150个字符

##       phone:[String]//手机号码   

## 出参:

## 		status:  1||0    0失败  1 成功

## 		msg:[string] 信息描述

## ---------------------------------------------------

## 接口名称:'/task/ranking';

## 接口描述:'这个是排行榜'

## 接口类型:'post'

## 入参:无

## 出参:

## 		status : 0 | 1    0失败   1 成功

## 		msg:[string]  信息描述

## 		data:[arr]数据

## 		avatorName:[string] 用户名

## 			email:[string] 邮箱名

## 			taskName:[string]任务名称

## 			taskStatus:[int] 任务状态

## 			score :[int] 评分 1优 2良 3中 4差 

## 			progress:[int] 任务完成度

## 			pid:[int] 当前任务是谁的子任务

## 			taskId:[int] 这个是当前任务的id

## 			updatedAt:[] 这个是任务的更改时间

## ------------------------------------------------------------

## 接口名:'/log/out';

## 接口类型:'post'

## 接口描述:'这个是退出登录'

## 入参:无

## 出参:

## 		status : 0 | 1    0失败 1 成功

## 		msg:[string] 描述信息

## 		data:[]  不管怎样都是空的

## -----------------------------------------------------------

## 修改密码

## 1.接口名:'/update/user/password'

## 2.类型 ：'POST'

## 3.描述：此接口用来修改密码的 需要在登录状况下修改

## 4.入参:

## //登录后的入参

## {

##     type:[Number]  // 登录后 : 1 

##     password:[string] // 要修改成的密码

## }

## //未登录的入参 

## {

##     version:[Number] // 未登录 : 0

##     username:[String] // 用户账号

##     oldpass:[String] //旧密码

##     password:[String] //新密码

## }

## 出参

## var res = {

## 	status:[Number],     //状态   1：成功    0：失败

##          msg:[ String]       //返回描述信息

##     	data:[]

##     }

## ------------------------------------------------------------

## 接口