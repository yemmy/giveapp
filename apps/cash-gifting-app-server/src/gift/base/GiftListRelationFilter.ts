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
import { GiftWhereInput } from "./GiftWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GiftListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GiftWhereInput,
  })
  @ValidateNested()
  @Type(() => GiftWhereInput)
  @IsOptional()
  @Field(() => GiftWhereInput, {
    nullable: true,
  })
  every?: GiftWhereInput;

  @ApiProperty({
    required: false,
    type: () => GiftWhereInput,
  })
  @ValidateNested()
  @Type(() => GiftWhereInput)
  @IsOptional()
  @Field(() => GiftWhereInput, {
    nullable: true,
  })
  some?: GiftWhereInput;

  @ApiProperty({
    required: false,
    type: () => GiftWhereInput,
  })
  @ValidateNested()
  @Type(() => GiftWhereInput)
  @IsOptional()
  @Field(() => GiftWhereInput, {
    nullable: true,
  })
  none?: GiftWhereInput;
}
export { GiftListRelationFilter as GiftListRelationFilter };