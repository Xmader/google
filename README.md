这是一个Google镜像服务程序, 运行在[Node.js](http://nodejs.org/)环境, 使用[Express](http://expressjs.com/)框架.

## 原理 ##
使用[Google Custom Search](https://www.google.com/cse)的API.  
看到[google200](https://github.com/zjuyxy/google200)使用此方法, 借鉴一下.


## 使用方法 ##
1. 首先确保你已经安装了[Node.js](http://nodejs.org/);
2. 解压后, 执行`npm install`安装依赖库;
3. `node app.js`开启服务.

## 局限性 ##
由于API的限制, 搜索结果只可查看最前面的100个.
[Custom Search Element Control API](https://developers.google.com/custom-search/docs/element)中说到`requests up to 10 results per page, for a maximum of 10 pages or 100 results.`
