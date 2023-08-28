const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token",
} as any;

const users = {
  "admin-token": {
    id: "admin",
    role: "admin",
    name: "admin",
    avatar: "https://avatars.githubusercontent.com/u/137391282?v=4",
    description: "拥有系统内所有菜单和路由权限",
  },
  "editor-token": {
    id: "editor",
    role: "editor",
    name: "编辑员",
    avatar: "https://avatars.githubusercontent.com/u/137391282?v=4",
    description: "可以看到除户管理页面之外的所有页面",
  },
  "guest-token": {
    id: "guest",
    role: "guest",
    name: "游客",
    avatar: "https://avatars.githubusercontent.com/u/137391282?v=4",
    description: "仅能看到Dashboard、作者博客、权限测试和关于作者四个页面",
  },
} as any;

export default {
  login: (config: { body: string }) => {
    const { body } = config;
    const { username } = JSON.parse(body);
    const token = tokens[username];
    if (!token) {
      return {
        code: 500,
        message: "用户名或密码错误",
      };
    }
    return {
      code: 200,
      token,
      userInfo: users[token],
    };
  },
};
