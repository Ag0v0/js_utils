/*
 * @Description: 文件处理
 * @Autor: Ag
 * @Date: 2022-11-18 14:43:32
 * @LastEditors: Ag
 * @LastEditTime: 2022-11-18 15:44:17
 */
import { saveAs } from 'file-saver';
import axios from 'axios';
import { ElMessage, ElLoading } from 'element-plus';

let downloadLoadingInstance;

export function localDownload(path, filename) {
  if (!path) return console.warn('😒 A file path must be passed in 😒')

  downloadLoadingInstance = ElLoading.service({
    text: '正在下载数据，请稍候',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  return axios({
    method: 'GET',
    url: `${path}?t=${(new Date()).getTime()}`,
    responseType: 'blob',
  })
    .then((res) => {
      saveAs(res.data, filename || path.split('/').pop());
    })
    .catch((err) => {
      ElMessage.error('下载失败，请重试');
    }).finally(() => {
      downloadLoadingInstance.close();
    })
}