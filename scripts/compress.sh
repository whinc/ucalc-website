#!/bin/bash

# 获取脚本的完整路径
SCRIPT_PATH="$(realpath "$0")"
ROOT_DIR="$(dirname "$(dirname "$SCRIPT_PATH")")"

# echo "脚本路径: $SCRIPT_PATH"
# echo "根目录: $ROOT_DIR"

# 检查参数数量
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <directory_path>"
  exit 1
fi

# 检查参数是否为目录
if [ ! -d "$1" ]; then
  echo "Error: $1 is not a directory"
  exit 1
fi

# 遍历目录下的所有文件
for file in "$1"/*; do
  # 检查是否为文件
  if [ -f "$file" ]; then
    # 使用cat命令输出文件内容
    # ls "$file"
    # 压缩图片
    node "$ROOT_DIR/scripts/tinypng.mjs" "$file"
  fi
done
