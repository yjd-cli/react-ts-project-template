/**
 * @author：姚嘉东
 * @description：服务器资源路径拼接（因为后端返回的路径不一定是统一的，所以需要在前端做兼容处理）
 * @date：2020/3/19
 */
import urljoin from 'url-join';
import { host } from '@src/services/config';

class ServerResource {
    // 资源路径根路径
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * 获取资源访问路径
     * @param url
     */
    url(url: string): string {
        if (!url) return;
        if (/^((https:|http:)?\/\/)/i.test(url)) {
            return url;
        } else if (/^data:image/.test(url)) {
            return url;
        } else if (url.startsWith(this.baseUrl)) {
            return url;
        } else {
            return urljoin(this.baseUrl, url);
        }
    }
}

const serverResource = new ServerResource(host);

export { serverResource };
