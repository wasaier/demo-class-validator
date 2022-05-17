import "reflect-metadata";
import { Type, plainToClass } from "class-transformer";

export class Album {
  id: number;

  name: string;

  @Type(() => Photo)
  photos: Photo;
}

export class Photo {
  id: number;
  filename: string;
}

const albumJson = {
  id: 1,
  name: "tony",
  photos: [
    {
      id: 1,
      filename: "tom",
    }
  ],
};

let album = plainToClass(Album, albumJson);
console.log(album);
// now album is Album object with Photo objects inside
