import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InviteModuleBase } from "./base/invite.module.base";
import { InviteService } from "./invite.service";
import { InviteController } from "./invite.controller";
import { InviteResolver } from "./invite.resolver";

@Module({
  imports: [InviteModuleBase, forwardRef(() => AuthModule)],
  controllers: [InviteController],
  providers: [InviteService, InviteResolver],
  exports: [InviteService],
})
export class InviteModule {}
