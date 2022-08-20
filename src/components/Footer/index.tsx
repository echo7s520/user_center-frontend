import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = '叶~出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'navigation',
          title: '导航',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 叶~ GitHub</>,
          href: 'https://github.com/echo7s520',
          blankTarget: true,
        },
        {
          key: 'baidu',
          title: '百度',
          href: 'https://baidu.com',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
