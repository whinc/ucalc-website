#!/bin/bash

# 将指定目录下的文件后缀转换成小写
# script <dir>

# 指定目录路径
directory="$1"

# 遍历目录下的所有文件
for file in "$directory"/*; do
  # 获取文件名（不包含路径）
  filename=$(basename "$file")

  # 获取文件的后缀
  extension="${filename##*.}"

  # 将后缀转换为小写
  lowercase_extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

  # 如果后缀已经是小写，直接跳过
  if [ "$extension" = "$lowercase_extension" ]; then
    continue
  fi

  # 构建新的文件名（包含路径）
  new_file="${file%.*}.$lowercase_extension"

  # 重命名文件
  mv "$file" "$new_file"
done
