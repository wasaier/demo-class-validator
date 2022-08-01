import { validateSync, IsArray } from "class-validator";

export class Post {
  @IsArray({
    each: true
  })
  list: (string[])[];
}

let post = new Post();

{
  // correct
  post.list = [
    [],
    []
  ];
}

const res = validateSync(post, {});
console.log(res);