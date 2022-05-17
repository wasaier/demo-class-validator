import {
  validate,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  validateSync,
} from "class-validator";

export class Post {
  // string 长度校验
  @Length(10, 20)
  title: string;

  // 包含某值
  @Contains("hello")
  text: string;

  // 数字校验
  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  // 邮箱类型
  @IsEmail()
  email: string;

  // 域名校验
  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}

let post = new Post();
post.title = "Hello"; // should not pass
post.text = "this is a great post about hell world"; // should not pass
post.rating = 11; // should not pass
post.email = "google.com"; // should not pass
post.site = "googlecom"; // should not pass
post.createDate = new Date()

// 同步 API
validate(post).then((errors) => {
  if (errors.length > 0) {
    console.log("validation failed. errors: ", errors);
  } else {
    console.log("validation succeed");
  }
});

// 异步 API
const res = validateSync(post)
console.log(res)