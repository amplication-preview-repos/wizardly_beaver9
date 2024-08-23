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
import { BadgeWhereInput } from "./BadgeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BadgeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BadgeWhereInput,
  })
  @ValidateNested()
  @Type(() => BadgeWhereInput)
  @IsOptional()
  @Field(() => BadgeWhereInput, {
    nullable: true,
  })
  every?: BadgeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BadgeWhereInput,
  })
  @ValidateNested()
  @Type(() => BadgeWhereInput)
  @IsOptional()
  @Field(() => BadgeWhereInput, {
    nullable: true,
  })
  some?: BadgeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BadgeWhereInput,
  })
  @ValidateNested()
  @Type(() => BadgeWhereInput)
  @IsOptional()
  @Field(() => BadgeWhereInput, {
    nullable: true,
  })
  none?: BadgeWhereInput;
}
export { BadgeListRelationFilter as BadgeListRelationFilter };