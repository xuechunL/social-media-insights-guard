export namespace API {
  /** GET /api/currentUser */
  export type GET_API_CURRENT_USER_QUERY = {
    /** example:  123 */
    token: string;
  };

  export type GET_API_CURRENT_USER_PAYLOAD = Record<string, any>;

  export type GET_API_CURRENT_USER_RES = {
    /** example: {"name": "Serati Ma", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png", "userid": "00000001", "email": "antdesign@alipay.com", "signature": "海纳百川，有容乃大", "title": "交互专家", "group": "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED", "tags": [{"key": "0", "label": "很有想法的"}, {"key": "1", "label": "专注设计"}, {"key": "2", "label": "辣~"}, {"key": "3", "label": "大长腿"}, {"key": "4", "label": "川妹子"}, {"key": "5", "label": "海纳百川"}], "notifyCount": 12, "unreadCount": 11, "country": "China", "geographic": {"province": {"label": "浙江省", "key": "330000"}, "city": {"label": "杭州市", "key": "330100"}}, "address": "西湖区工专路 77 号", "phone": "0752-268888888"} */
    data: {
      name: string;
      avatar: string;
      userid: string;
      email: string;
      signature: string;
      title: string;
      group: string;
      tags: {
        key: string;
        label: string;
      }[];
      notifyCount: number;
      unreadCount: number;
      country: string;
      geographic: {
        province: {
          label: string;
          key: string;
        };
        city: {
          label: string;
          key: string;
        };
      };
      address: string;
      phone: string;
    };
  };

  /** GET /api/rule */
  export type GET_API_RULE_QUERY = {
    /** example:  123 */
    token: string;
    /** example: 1 */
    current: string;
    /** example: 20 */
    pageSize: string;
  };

  export type GET_API_RULE_PAYLOAD = Record<string, any>;

  export type GET_API_RULE_RES = {
    /** example: [{"key": 99, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 99", "owner": "Admin User", "desc": "This is a description...", "callNo": 503, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 81}, {"key": 98, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 98", "owner": "Admin User", "desc": "This is a description...", "callNo": 164, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 12}, {"key": 97, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 97", "owner": "Admin User", "desc": "This is a description...", "callNo": 174, "status": "1", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 81}, {"key": 96, "disabled": true, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 96", "owner": "Admin User", "desc": "This is a description...", "callNo": 914, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 7}, {"key": 95, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 95", "owner": "Admin User", "desc": "This is a description...", "callNo": 698, "status": "2", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 82}, {"key": 94, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 94", "owner": "Admin User", "desc": "This is a description...", "callNo": 488, "status": "1", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 14}, {"key": 93, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 93", "owner": "Admin User", "desc": "This is a description...", "callNo": 580, "status": "2", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 77}, {"key": 92, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 92", "owner": "Admin User", "desc": "This is a description...", "callNo": 244, "status": "3", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 58}, {"key": 91, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 91", "owner": "Admin User", "desc": "This is a description...", "callNo": 959, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 66}, {"key": 90, "disabled": true, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 90", "owner": "Admin User", "desc": "This is a description...", "callNo": 958, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 72}, {"key": 89, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 89", "owner": "Admin User", "desc": "This is a description...", "callNo": 301, "status": "2", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 2}, {"key": 88, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 88", "owner": "Admin User", "desc": "This is a description...", "callNo": 277, "status": "1", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 12}, {"key": 87, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 87", "owner": "Admin User", "desc": "This is a description...", "callNo": 810, "status": "1", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 82}, {"key": 86, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 86", "owner": "Admin User", "desc": "This is a description...", "callNo": 780, "status": "3", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 22}, {"key": 85, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 85", "owner": "Admin User", "desc": "This is a description...", "callNo": 705, "status": "3", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 12}, {"key": 84, "disabled": true, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 84", "owner": "Admin User", "desc": "This is a description...", "callNo": 203, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 79}, {"key": 83, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 83", "owner": "Admin User", "desc": "This is a description...", "callNo": 491, "status": "2", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 59}, {"key": 82, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 82", "owner": "Admin User", "desc": "This is a description...", "callNo": 73, "status": "0", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 100}, {"key": 81, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "Activity 81", "owner": "Admin User", "desc": "This is a description...", "callNo": 406, "status": "3", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 61}, {"key": 80, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "Activity 80", "owner": "Admin User", "desc": "This is a description...", "callNo": 112, "status": "2", "updatedAt": "2022-12-06T05: 00: 57.040Z", "createdAt": "2022-12-06T05: 00: 57.040Z", "progress": 20}] */
    data: {
      key: number;
      disabled: boolean;
      href: string;
      avatar: string;
      name: string;
      owner: string;
      desc: string;
      callNo: number;
      status: string;
      updatedAt: string;
      createdAt: string;
      progress: number;
    }[];
    /** example: 100 */
    total: number;
    /** example: true */
    success: boolean;
    /** example: 20 */
    pageSize: number;
    /** example: 1 */
    current: number;
  };

  /** POST /api/login/outLogin */
  export type POST_API_LOGIN_OUT_LOGIN_QUERY = {
    /** example:  123 */
    token: string;
  };

  export type POST_API_LOGIN_OUT_LOGIN_PAYLOAD = Record<string, any>;

  export type POST_API_LOGIN_OUT_LOGIN_RES = {
    /** example: {} */
    data: Record<string, any>;
    /** example: true */
    success: boolean;
  };

  /** POST /api/login/account */
  export type POST_API_LOGIN_ACCOUNT_QUERY = {
    /** example:  123 */
    token: string;
  };

  export type POST_API_LOGIN_ACCOUNT_PAYLOAD = {
    /** example: admin */
    username: string;
    /** example: ant.design */
    password: string;
    /** example: true */
    autoLogin: boolean;
    /** example: account */
    type: string;
  };

  export type POST_API_LOGIN_ACCOUNT_RES = {
    /** example: ok */
    status: string;
    /** example: account */
    type: string;
    /** example: admin */
    currentAuthority: string;
  };
}
