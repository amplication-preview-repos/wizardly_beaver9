/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BadgeUpdateManyWithoutCompletionsInput } from "./BadgeUpdateManyWithoutCompletionsInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";

@InputType()
class CompletionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BadgeUpdateManyWithoutCompletionsInput,
  })
  @ValidateNested()
  @Type(() => BadgeUpdateManyWithoutCompletionsInput)
  @IsOptional()
  @Field(() => BadgeUpdateManyWithoutCompletionsInput, {
    nullable: true,
  })
  badges?: BadgeUpdateManyWithoutCompletionsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completionDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskWhereUniqueInput, {
    nullable: true,
  })
  task?: TaskWhereUniqueInput | null;
}

export { CompletionUpdateInput as CompletionUpdateInput };
