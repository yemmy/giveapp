/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Gift } from "./Gift";
import { GiftCountArgs } from "./GiftCountArgs";
import { GiftFindManyArgs } from "./GiftFindManyArgs";
import { GiftFindUniqueArgs } from "./GiftFindUniqueArgs";
import { CreateGiftArgs } from "./CreateGiftArgs";
import { UpdateGiftArgs } from "./UpdateGiftArgs";
import { DeleteGiftArgs } from "./DeleteGiftArgs";
import { GiftService } from "../gift.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Gift)
export class GiftResolverBase {
  constructor(
    protected readonly service: GiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Gift",
    action: "read",
    possession: "any",
  })
  async _giftsMeta(
    @graphql.Args() args: GiftCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Gift])
  @nestAccessControl.UseRoles({
    resource: "Gift",
    action: "read",
    possession: "any",
  })
  async gifts(@graphql.Args() args: GiftFindManyArgs): Promise<Gift[]> {
    return this.service.gifts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Gift, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Gift",
    action: "read",
    possession: "own",
  })
  async gift(@graphql.Args() args: GiftFindUniqueArgs): Promise<Gift | null> {
    const result = await this.service.gift(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Gift)
  @nestAccessControl.UseRoles({
    resource: "Gift",
    action: "create",
    possession: "any",
  })
  async createGift(@graphql.Args() args: CreateGiftArgs): Promise<Gift> {
    return await this.service.createGift({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Gift)
  @nestAccessControl.UseRoles({
    resource: "Gift",
    action: "update",
    possession: "any",
  })
  async updateGift(@graphql.Args() args: UpdateGiftArgs): Promise<Gift | null> {
    try {
      return await this.service.updateGift({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Gift)
  @nestAccessControl.UseRoles({
    resource: "Gift",
    action: "delete",
    possession: "any",
  })
  async deleteGift(@graphql.Args() args: DeleteGiftArgs): Promise<Gift | null> {
    try {
      return await this.service.deleteGift(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
