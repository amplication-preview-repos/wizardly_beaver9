/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BadgeWhereInput } from "./BadgeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BadgeOrderByInput } from "./BadgeOrderByInput";

@ArgsType()
class BadgeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BadgeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BadgeWhereInput, { nullable: true })
  @Type(() => BadgeWhereInput)
  where?: BadgeWhereInput;

  @ApiProperty({
    required: false,
    type: [BadgeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BadgeOrderByInput], { nullable: true })
  @Type(() => BadgeOrderByInput)
  orderBy?: Array<BadgeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BadgeFindManyArgs as BadgeFindManyArgs };