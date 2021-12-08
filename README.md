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

## avator_name:[String]用户的名称

## age:[int] 用户的年龄

## avator_img:[int]用户的头像索引值

## class_id:[int] 班级的索引

## description:[String]个性签名

## phone:[string]手机号码

## email:[String]邮箱号  

## login_time:[] 这个不用管

## created_at:[时间] 这个是创建时间

## updated_at:[时间]这个是上次登录的时间

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

## 			avator_name:[string] 用户名

## 			email:[string] 邮箱名

## 			task_name:[string]任务名称

## 			task_status:[int] 任务状态

## 			score :[int]  1 2 3 4 评分

## 			progress:[int] 任务完成度

## 			pid:[int] 当前任务是谁的子任务

## 			task_id:[int] 这个是当前任务的id

## 			updated_at:[] 这个是任务的更改时间

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

## 		avatorName:[string] 这个是用户的名称

## age:[int]这个是用户的年龄   必须大于10岁小于150岁

## sex:[int]   0 | 1 这个是用户的性别   

## avatorImg:[int] 这个是传图片的索引  

## classId:[int] 这个是班级的索引   可不填

## description:[string] 这个是个性签名

## phone:[string]这个是用户的手机号码

## email:[string]这个是用户的邮箱

## 出参:

## 		status:  1||0    0失败  1 成功

## 		msg:[string] 信息描述

## ---------------------------------------------------





