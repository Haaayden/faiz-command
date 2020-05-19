# Faiz

> 需求背景, 文件及文件夹过多时, 单纯凭借文件名无法确认该文件内容, 使用 faiz ls 显示自定义文件描述及备注

## 使用

1. 安装

```bash
$ npm install -g faiz
```

2. 自定义备注

在父级文件夹下新建 `faizLsIndex.json` 文件

```json
{
  "dir": "父文件夹名",
  "desc": "自定义描述",
  "children": {
    "文件夹1": {
      "fileName": "文件夹1",
      "description": "自定义描述1",
      "remark": "自定义备注1"
    },
    "文件夹2": {
      "fileName": "文件夹2",
      "description": "自定义描述2",
      "remark": "自定义备注2"
    }
  }
}
```

3. 输出

```bash
$ faiz ls
```

![输出](https://pocket.faiz.top/img/20200519102527.png)
