import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string | boolean;
} = {
  navTheme: 'light',
  // colorPrimary: '#20a7c9',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Social Media Insights',
  pwa: true,
  logo: false, // don't show logo
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过 token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F,
  },
};

export default Settings;
