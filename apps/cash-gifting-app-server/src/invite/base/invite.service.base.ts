/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Invite as PrismaInvite,
  Event as PrismaEvent,
  User as PrismaUser,
} from "@prisma/client";

export class InviteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.InviteCountArgs, "select">): Promise<number> {
    return this.prisma.invite.count(args);
  }

  async invites<T extends Prisma.InviteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteFindManyArgs>
  ): Promise<PrismaInvite[]> {
    return this.prisma.invite.findMany<Prisma.InviteFindManyArgs>(args);
  }
  async invite<T extends Prisma.InviteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteFindUniqueArgs>
  ): Promise<PrismaInvite | null> {
    return this.prisma.invite.findUnique(args);
  }
  async createInvite<T extends Prisma.InviteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteCreateArgs>
  ): Promise<PrismaInvite> {
    return this.prisma.invite.create<T>(args);
  }
  async updateInvite<T extends Prisma.InviteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteUpdateArgs>
  ): Promise<PrismaInvite> {
    return this.prisma.invite.update<T>(args);
  }
  async deleteInvite<T extends Prisma.InviteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteDeleteArgs>
  ): Promise<PrismaInvite> {
    return this.prisma.invite.delete(args);
  }

  async getEvent(parentId: bigint): Promise<PrismaEvent | null> {
    return this.prisma.invite
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }

  async getUser(parentId: bigint): Promise<PrismaUser | null> {
    return this.prisma.invite
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
