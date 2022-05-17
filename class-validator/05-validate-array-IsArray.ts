import { Contains, Length, validateSync, IsArray } from "class-validator";

export class Post {
  @IsArray({
    each: true
  })
  list: string[];
}

let post = new Post();

{
  // error
  post.list = [
    "hello World",
    2 as any
  ];
}

{
  // correct
  post.list = [
    [] as any,
    [] as any
  ];
}

const res = validateSync(post, {});
console.log(res);
// [
//   ValidationError {
//     target: Post { list: [Array] },
//     value: [ 'hello World', 2 ],
//     property: 'list',
//     children: [],
//     constraints: { isArray: 'each value in list must be an array' }
//   }
// ]