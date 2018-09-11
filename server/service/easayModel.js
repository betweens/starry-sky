const { mysql  } = require('../qcloud');
var objectid = require('objectid')

//查询列表页面
const selectEasayLustData = async (params) => {
  try {
    const result = await mysql.select().from('essay').orderBy('createTime', 'desc').limit(10);
    return result;
  } catch (error) {
    throw error;
  }
}

// 插入一条数据
const insertEasayData = async (params) => {
  try {
    const result = await mysql('essay').insert({
      objectId: objectid().toString(), 
      openId: params.openId,
      auther: params.auther,
      title:  params.title,
      content: params.content,
      img_url: params.url
    });
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  selectEasayLustData,
  insertEasayData,
};
