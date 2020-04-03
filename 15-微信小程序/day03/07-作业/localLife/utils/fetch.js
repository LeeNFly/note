// export function fetch (options) {
//     if (typeof options === 'string') {
//       const url = options
//       options = {
//         url
//       }
//     }
//     return new Promise(function(resolve, reject) {
//       wx.request({
//         url: `https://locally.uieee.com${options.url}`,
//         data: options.data || {},
//         method: options.method || 'GET',
//         dataType: options.dataType || 'json',
//         success(res) {
//           resolve(res)
//         }
//       })
//     })
// }

function fetch (options) {
  if (typeof options === 'string') {
    const url = options
    options = {
      url
    }
  }
  return new Promise(function(resolve, reject) {
    wx.request({
      url: `https://locally.uieee.com${options.url}`,
      data: options.data || {},
      method: options.method || 'GET',
      dataType: options.dataType || 'json',
      success(res) {
        resolve(res)
      }
    })
  })
}

export default fetch