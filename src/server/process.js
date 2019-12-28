// 接口数据清洗
export default {
  getPages: async d => {
    let pagesList = [];
    for (let item of d) {
      let p = await Request("/api/post", { cid: item.cid });
      pagesList.push(p.data);
    }
    return pagesList;
  }
};
