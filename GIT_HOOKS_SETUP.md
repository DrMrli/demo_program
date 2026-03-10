# Git Hooks 配置指南

本项目使用 Husky 和 lint-staged 来强制执行代码质量标准，确保所有提交的代码都符合项目的编码规范。

## 安装的依赖

- **Husky**: Git hooks 管理工具
- **lint-staged**: 仅对暂存的文件运行代码检查工具

## 配置文件

### 1. Husky 配置

Husky 配置位于 `.husky/pre-commit` 文件中：

```bash
npx lint-staged
```

这个配置确保在每次提交前，lint-staged 会检查所有暂存的文件。

### 2. lint-staged 配置

lint-staged 配置位于 `.lintstagedrc.json` 文件中：

```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{css,scss,less}": [
    "prettier --write"
  ],
  "*.{json,md,html}": [
    "prettier --write"
  ]
}
```

## 工作原理

1. 当你执行 `git commit` 时，Husky 会触发 pre-commit hook
2. pre-commit hook 调用 lint-staged
3. lint-staged 识别所有暂存的文件
4. 根据文件类型，对每个文件运行相应的检查工具：
   - JavaScript/JSX/TypeScript/TSX 文件：运行 ESLint 和 Prettier
   - CSS/SCSS/LESS 文件：运行 Prettier
   - JSON/MD/HTML 文件：运行 Prettier
5. 如果发现任何问题，提交会被阻止，直到问题被修复

## 使用方法

### 正常提交流程

1. 修改代码文件
2. 暂存文件：`git add <files>`
3. 提交代码：`git commit -m "your message"`
4. 如果代码有问题，pre-commit hook 会自动修复可修复的问题
5. 如果存在无法自动修复的问题，提交会被阻止，你需要手动修复后重新提交

### 跳过 Git Hooks（不推荐）

如果确实需要跳过 hooks，可以使用 `--no-verify` 标志：

```bash
git commit --no-verify -m "your message"
```

**注意**：这应该仅在特殊情况下使用，因为它会绕过代码质量检查。

## 代码质量工具

### ESLint

ESLint 用于检查代码质量和潜在问题：

```bash
# 检查所有文件
npm run lint

# 自动修复可修复的问题
npm run lint:fix
```

### Prettier

Prettier 用于格式化代码：

```bash
# 格式化所有文件
npm run format

# 检查格式（不修改文件）
npm run format:check
```

## 常见问题

### 提交被阻止

如果提交被阻止，检查错误信息：

1. **ESLint 错误**：代码质量问题或语法错误
   - 运行 `npm run lint:fix` 自动修复
   - 手动修复无法自动解决的问题

2. **Prettier 错误**：代码格式不符合规范
   - 运行 `npm run format` 自动格式化
   - 或者让 pre-commit hook 自动修复

### Hook 不工作

如果 Git hooks 不工作：

1. 确认 Git 已初始化：`git init`
2. 确认 Husky 已正确安装：检查 `.husky` 目录
3. 确认 pre-commit 文件有执行权限

## 团队协作

### 新成员设置

新团队成员克隆项目后，需要运行：

```bash
# 安装依赖
npm install

# Husky 会自动配置 hooks
```

### 配置更新

如果需要更新 lint-staged 配置：

1. 编辑 `.lintstagedrc.json` 文件
2. 提交更改到仓库
3. 所有团队成员在拉取最新代码后会自动使用新配置

## 最佳实践

1. **提交前检查**：在提交前运行 `npm run lint` 和 `npm run format`
2. **频繁提交**：小而频繁的提交更容易发现和修复问题
3. **不要跳过 hooks**：除非绝对必要，否则不要使用 `--no-verify`
4. **保持配置更新**：定期更新 ESLint 和 Prettier 规则以保持代码质量

## 故障排除

### PowerShell 执行策略错误

如果在 Windows 上遇到执行策略错误：

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### 依赖问题

如果遇到依赖问题：

```bash
# 清理 node_modules
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

## 相关资源

- [Husky 文档](https://typicode.github.io/husky/)
- [lint-staged 文档](https://github.com/okonet/lint-staged)
- [ESLint 文档](https://eslint.org/)
- [Prettier 文档](https://prettier.io/)