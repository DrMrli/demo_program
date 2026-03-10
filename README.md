# Vite React Project

一个基于 Vite 和 React 的现代化前端项目模板，提供快速的开发体验和优秀的构建性能。

## 项目简介

### 项目背景
本项目旨在为开发者提供一个开箱即用的 React 前端项目模板，整合了现代前端开发的最佳实践和工具链。通过使用 Vite 作为构建工具，项目能够实现极速的开发服务器启动和热模块替换（HMR），大幅提升开发效率。

### 目标用户
- 前端开发者：需要快速搭建 React 应用的开发者
- 学习者：希望学习现代前端开发技术的初学者
- 团队协作：需要统一代码规范和开发流程的开发团队

### 主要价值
- **极速开发体验**：基于 Vite 的构建工具，实现毫秒级的服务器启动和热更新
- **开箱即用**：预配置了 ESLint、Prettier、Husky 等工具，无需繁琐配置
- **代码质量保障**：集成了代码检查和格式化工具，确保代码风格统一
- **环境变量管理**：支持多环境配置，方便开发和生产环境切换
- **现代化技术栈**：采用最新的 React 18 和相关生态技术

## 核心特性

### 1. 极速构建与热更新
- 基于 Vite 5.x 构建工具，实现秒级启动
- 原生 ESM 支持，无需打包即可运行
- 高效的热模块替换（HMR），保持应用状态

### 2. 完善的代码质量工具链
- **ESLint**：集成 React、React Hooks、React Refresh 等插件，提供全面的代码检查
- **Prettier**：自动代码格式化，保持代码风格一致
- **Husky + lint-staged**：Git hooks 自动化，提交前自动检查和格式化代码

### 3. 多环境配置支持
- 支持 `.env.development` 和 `.env.production` 环境变量配置
- 通过 `import.meta.env` 访问环境变量
- 环境变量实时展示，便于调试和验证

### 4. 现代化 React 开发
- React 18.2.0 最新版本
- 支持 React 18 新特性（并发渲染、自动批处理等）
- JSX 语法支持，开发体验流畅

### 5. 开发者友好的工具集
- 清晰的项目结构和文件组织
- 丰富的 npm scripts 命令，简化开发流程
- 详细的错误提示和调试信息

## 快速上手

### 环境要求

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0 或 yarn >= 1.22.0
- **Git**: >= 2.0.0

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd vite-react-project
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或使用 yarn
   yarn install
   ```

3. **配置环境变量**
   
   创建 `.env.development` 文件（开发环境）：
   ```env
   VITE_APP_TITLE=开发环境应用
   VITE_API_URL=http://localhost:3000/api
   ```
   
   创建 `.env.production` 文件（生产环境）：
   ```env
   VITE_APP_TITLE=生产环境应用
   VITE_API_URL=https://api.example.com/api
   ```

### 基本使用命令

#### 开发环境
```bash
npm run dev
```
启动开发服务器，默认运行在 `http://localhost:5173/`

#### 生产构建
```bash
npm run build
```
构建生产版本，输出到 `dist` 目录

#### 预览生产构建
```bash
npm run preview
```
预览生产构建结果，默认运行在 `http://localhost:4173/`

#### 代码检查
```bash
npm run lint
```
运行 ESLint 检查代码

#### 代码修复
```bash
npm run lint:fix
```
自动修复 ESLint 可修复的问题

#### 代码格式化
```bash
npm run format
```
使用 Prettier 格式化代码

### 常见问题解决

#### 1. PowerShell 执行策略错误
**问题**：运行 npm 命令时提示"无法加载文件"
**解决**：
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

#### 2. 端口被占用
**问题**：启动开发服务器时提示端口已被占用
**解决**：
```bash
# 使用其他端口启动
npm run dev -- --port 3000
```

#### 3. 依赖安装失败
**问题**：npm install 时出现网络或权限错误
**解决**：
```bash
# 清除缓存
npm cache clean --force
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com
# 重新安装
npm install
```

#### 4. 环境变量不生效
**问题**：修改环境变量后页面没有更新
**解决**：
- 确保环境变量以 `VITE_` 开头
- 重启开发服务器
- 检查 `.env` 文件是否在项目根目录

## 技术选型

### 前端框架
- **React 18.2.0**
  - **选型理由**：React 是目前最流行的前端框架之一，拥有庞大的生态系统和社区支持。React 18 引入了并发渲染等新特性，性能和开发体验都有显著提升。

### 构建工具
- **Vite 5.0.8**
  - **选型理由**：Vite 利用浏览器原生 ESM 能力，实现了极速的开发服务器启动和热更新。相比传统的 Webpack，Vite 在开发体验上有质的飞跃，同时生产构建性能也相当出色。

### 代码质量工具
- **ESLint 8.55.0**
  - **选型理由**：业界标准的 JavaScript 代码检查工具，可配置性强，插件生态丰富。通过集成 React 相关插件，能够有效发现潜在问题和代码异味。

- **Prettier 3.8.1**
  - **选型理由**：代码格式化工具，与 ESLint 配合使用，确保代码风格统一。Prettier 的"无配置"理念减少了团队协作中的格式争议。

- **Husky 9.1.7 + lint-staged 16.3.3**
  - **选型理由**：Git hooks 自动化工具，在提交代码前自动运行检查和格式化，确保提交的代码符合规范，减少代码审查负担。

### 开发工具
- **@vitejs/plugin-react 4.2.1**
  - **选型理由**：官方 React 插件，提供 JSX 转换、React Fast Refresh 等功能，是 Vite + React 开发的必备插件。

### 类型支持
- **@types/react 18.2.43**
- **@types/react-dom 18.2.17**
  - **选型理由**：TypeScript 类型定义文件，为 React 和 React DOM 提供类型提示，提升开发体验和代码质量。

## 贡献指南

我们欢迎任何形式的贡献，包括但不限于：bug 修复、新功能开发、文档改进、性能优化等。

### 代码规范

#### 命名规范
- **组件**：使用 PascalCase，如 `UserProfile`
- **函数/变量**：使用 camelCase，如 `getUserData`
- **常量**：使用 UPPER_SNAKE_CASE，如 `API_BASE_URL`
- **文件名**：组件使用 PascalCase，其他使用 camelCase

#### 代码风格
- 使用 2 空格缩进
- 使用单引号（`'`）而非双引号（`"`）
- 语句末尾不加分号
- 对象和数组最后保留逗号

#### 注释规范
- 复杂逻辑必须添加注释说明
- 函数必须添加 JSDoc 注释
- TODO 注释格式：`// TODO: [description]`

### 提交流程

1. **Fork 项目**
   - 将项目 Fork 到自己的 GitHub 账户

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **开发与测试**
   - 遵循代码规范进行开发
   - 运行 `npm run lint` 确保代码通过检查
   - 运行 `npm run format` 格式化代码
   - 测试功能是否正常工作

4. **提交代码**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   # 或
   git commit -m "fix: resolve bug description"
   ```

5. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   - 在 GitHub 上创建 Pull Request
   - 填写 PR 模板，说明改动内容
   - 等待代码审查

### PR 要求

#### PR 标题格式
遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：
- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式调整（不影响功能）
- `refactor:` 重构
- `perf:` 性能优化
- `test:` 测试相关
- `chore:` 构建/工具链相关

#### PR 描述模板
```markdown
## 改动说明
简要描述本次改动的内容和目的

## 改动类型
- [ ] 新功能
- [ ] Bug 修复
- [ ] 文档更新
- [ ] 性能优化
- [ ] 其他

## 测试情况
描述测试环境和测试结果

## 相关 Issue
Closes #issue-number

## 截图（如适用）
如果有 UI 改动，请提供截图
```

#### 代码审查要点
- 代码是否符合项目规范
- 是否有足够的测试覆盖
- 文档是否需要更新
- 是否有潜在的性能问题
- 是否有安全风险

## 许可证

本项目采用 MIT 许可证。

## 联系方式

如有问题或建议，欢迎通过以下方式联系：
- 提交 Issue
- 发送邮件至：[your-email@example.com]

---

**注意**：本项目持续维护中，欢迎关注和 Star！