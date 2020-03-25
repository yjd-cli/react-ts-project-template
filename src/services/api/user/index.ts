import axios from 'axios';
/**
 * @author：姚嘉东
 * @description：
 * @date：2020/3/19
 */
// 获取用户信息
export const getUserInfo = () => axios.post('/getUserInfo');
