import { Contains, Length, validateSync, IsArray, MaxLength } from "class-validator";

export class Post {
  @MaxLength(10, {
    each: true
  })
  list: string[];
}

let post = new Post();
  
// error
post.list = [
  "hello World",
];

// correct
post.list = [
  "hello",
];

const res = validateSync(post, {});
console.log(res);