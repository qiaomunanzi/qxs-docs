import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'All in one',
    items: [
      { text: 'PVE', link: '/all-in-one/PVE/index', activeMatch: '/all-in-one/PVE/' },
      { text: 'iStoreOS', link: '/all-in-one/iStoreOS/index', activeMatch: '/all-in-one/iStoreOS/' },
    ],
    activeMatch: '/all-in-one/'
  },
  {
    text: '我的分类',
    items: [
      { text: 'Bug万象集', link: '/categories/issues/index', activeMatch: '/categories/issues/' },
      { text: '"杂碎"逆袭史', link: '/categories/fragments/index', activeMatch: '/categories/fragments/' },
      { text: '工具四海谈', link: '/categories/tools/index', activeMatch: '/categories/tools/' },
      { text: '方案春秋志', link: '/categories/solutions/index', activeMatch: '/categories/solutions/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的小册',
    items: [
      { text: 'Java基础快速入门', link: '/courses/java/index', activeMatch: '/courses/java/' },
      { text: 'MySQL快速入门', link: '/courses/mysql/index', activeMatch: '/courses/mysql/' },
      { text: 'MyBatis快速入门', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' }
    ],
    activeMatch: '/courses/'
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];