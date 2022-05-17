import "reflect-metadata";
import { Type } from "class-transformer";
import { validateSync, IsString, IsNumber } from "class-validator";

export class Friend {
  @IsString()
  name: string;

  @IsNumber()
  age: 20;
}

export class Post {
  // 非空限制
  // @ArrayNotEmpty()
  // list1: string[];

  // 长度限制
  // @ArrayMaxSize(10)
  // @ArrayMinSize(10)
  // list2: string[];

  // 没办法验证复杂数组元素的类型哦
  @Type(() => Friend)
  list3: Friend[]
}

let post = new Post();
post['list3'] = [
  { name: '111'} as any
]

const res = validateSync(post, {});
console.log(res);