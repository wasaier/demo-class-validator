import {
  Contains,
  Length,
  validateSync,
} from "class-validator";

export class Post {
  // string 长度校验
  @Length(10, 20)
  title: string;

  // 包含某值
  @Contains("hello")
  text: string;

  @Contains("name")
  name: string;
}

let post = new Post();
post.title = "hello World";
post.text = "hello World";

// 异步 API
const res = validateSync(post, {
  // 是否忽略未配置的属性
  skipMissingProperties: false,

  // 遇到错误时，后面的字段不再校验
  stopAtFirstError: true,

  // 在错误结果中不再返回 target and value
  validationError: {
    target: false,
    value: false
  }
});

console.log(res);
// [
//   ValidationError {
//     target: Post { title: 'hello World', text: 'hello World' },
//     value: undefined,
//     property: 'name',
//     children: [],
//     constraints: { contains: 'name must contain a name string' }
//   }
// ]