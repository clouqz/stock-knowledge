# 股票投资知识库

> 基于 Obsidian + Quartz + GitHub Pages 构建的个人股票投资分析知识管理系统

## 架构

```
本地编辑: Obsidian (Markdown + 双链)
    ↓
版本控制: Git
    ↓
构建发布: Quartz (静态网站生成器)
    ↓
托管服务: GitHub Pages
```

## 目录结构

基于 PARA 方法:

- 📥 `inbox/` - 快速捕获
- 📊 `projects/` - 活跃项目
- 🎯 `areas/` - 持续关注领域
- 📚 `resources/` - 参考资料
- 📦 `archive/` - 已完成
- 📋 `templates/` - 笔记模板

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 本地预览
cd quartz
npm run build
npm run preview
```

### 发布更新

```bash
npx quartz sync
```

### 使用 Obsidian 编辑

用 Obsidian 打开 `content/` 目录作为 vault

## 参考

- [Quartz 文档](https://quartz.jzhao.xyz/)
- [Obsidian 官网](https://obsidian.md/)
- [PARA 方法](https://fortelabs.com/blog/para-method/)

## 许可证

MIT