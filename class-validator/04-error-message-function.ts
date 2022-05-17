import { MinLength, MaxLength, ValidationArguments } from 'class-validator';

// ValidationArguments
// value - the value that is being validated
// constraints - array of constraints defined by specific validation type
// targetName - name of the object's class being validated
// object - object that is being validated
// property - name of the object's property being validated

export class Post {
  @MinLength(10, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 1) {
        return 'Too short, minimum length is 1 character';
      } else {
        return 'Too short, minimum length is ' + args.constraints[0] + ' characters';
      }
    },
  })
  title: string;
}