import { Contains, Length, validateSync, IsArray, MaxLength, ArrayNotEmpty, ArrayMaxSize, ArrayMinSize } from "class-validator";

export class Post {
  // 非空限制
  // @ArrayNotEmpty()
  // list1: string[];

  // 长度限制
  // @ArrayMaxSize(10)
  // @ArrayMinSize(10)
  // list2: string[];

  // 没办法验证复杂数组元素的类型哦
  list3: string[]
}

let post = new Post();
post['list3'] = [1 as any]

const res = validateSync(post, {});
console.log(res);