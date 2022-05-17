import { MinLength, MaxLength, validateSync } from 'class-validator';

// $value - the value that is being validated
// $property - name of the object's property being validated
// $target - name of the object's class being validated
// $constraint1, $constraint2, ... $constraintN - constraints defined by specific validation type

export class Post {
  @MinLength(10, {
    // here, $constraint1 will be replaced with "10", and $value with actual supplied value
    message: 'Title is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(50, {
    // here, $constraint1 will be replaced with "50", and $value with actual supplied value
    message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  title: string;
}

let post = new Post();
post.title = "hello";

// 异步 API
const res = validateSync(post, {});

console.log(res);